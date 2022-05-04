import boto3
import pandas as pd
import pyarrow as pa
import pyarrow.parquet as pq
from sqlalchemy.engine import create_engine
from pymongo import MongoClient
import os

# Generator to iterate MongoDB results in batches
def iterate_by_chunks(cursor, chunksize=10000, start_from=0, query={}):
    """
    Function to iterate MongoDB results in batches
    """
    chunks = range(start_from, cursor.count_documents(query), int(chunksize))
    num_chunks = len(chunks)

    for i in range(1, num_chunks + 1):
        if i < num_chunks:
            yield cursor.find(query)[chunks[i - 1] : chunks[i]]
        else:
            yield cursor.find(query)[chunks[i - 1] : chunks.stop]

def transform_nestedlist(field_name, df):
    result = []
    for x in df[field_name]:
        inner = []
        for y in x:
            inner.append(str(y))
        result.append(inner)
    return result

def backup_mongo_to_S3(collection, file_name, isProfile):
    for i, cursor in enumerate(iterate_by_chunks(collection, query={}, chunksize=10000)):
        raw_data = list(cursor)
        if len(raw_data) == 0:
            if pqwriter:
                pqwriter.close()
            return
        df = pd.DataFrame(raw_data)
        del df['__v']
        
        if isProfile:
            del df['email']
            del df['devices']
            del df['orders']
            del df['certs']
            if 'painconditions' in df.columns:
                df['painconditions']=[str(x) for x in df['painconditions']]
        else:
            df['_id'] = [str(x) for x in df['_id']]
        table = pa.Table.from_pandas(df,preserve_index=False)

        if i == 0:
            pqwriter = pq.ParquetWriter(file_name, table.schema, compression='snappy')
            pqwriter.write_table(table)
        else:
            pqwriter.write_table(table)

    if pqwriter:
        pqwriter.close()
    
    s3_resource= boto3.resource('s3')
    try:
        s3_resource.Bucket('oh-datalake').upload_file(Filename=file_name,Key=file_name)
    except Exception as e:
        print("cannot upload file to s3",e)


def backup_mysql_to_S3(sql_query,engine,file_name):
    iterator = pd.read_sql_query(sql_query,engine,coerce_float=True,chunksize=10000)
    for i,df in enumerate(iterator):
        table = pa.Table.from_pandas(df,preserve_index=False)
        
        if i == 0:
            pqwriter = pq.ParquetWriter(file_name, table.schema, compression='snappy')
            pqwriter.write_table(table)
        else:
            pqwriter.write_table(table)

    if pqwriter:
        pqwriter.close()
    
    s3_resource= boto3.resource('s3')
    
    try:
        s3_resource.Bucket('oh-datalake').upload_file(Filename=file_name,Key=file_name)
    except Exception as e:
        print("cannot upload file to s3",e)

user = os.environ['MYSQL_USER']
password = os.environ['MYSQL_PASSWORD']
dbhost = os.environ['MYSQL_HOST']
dbname = os.environ['MYSQL_DB']
mongohost = os.environ['MONGO_HOST']
mongodbname = os.environ['MONGO_DB']

mysql_conn_str = 'mysql+pymysql://{user}:{password}@{dbhost}/{dbname}'.format(user=user,password=password,dbhost=dbhost,dbname=dbname)
sql_engine = create_engine(mysql_conn_str)

backup_mysql_to_S3('''SELECT * from tbl_entity''', sql_engine, 'entity.parquet')
backup_mysql_to_S3('''SELECT * from tbl_visit''', sql_engine, 'visit.parquet')
backup_mysql_to_S3('''SELECT * from tbl_visit_diag''', sql_engine, 'visit.diag.parquet')

mongo_uri = 'mongodb://{host}:27017'.format(host=mongohost)
mongo_client = MongoClient(mongo_uri)
mongo_db = mongo_client[mongodbname]
profile_collection = mongo_db['profiles']
painconditions_collection = mongo_db['painconditions']

backup_mongo_to_S3(profile_collection, 'clientprofile.parquet', True)
backup_mongo_to_S3(painconditions_collection, 'paincondition.parquet', False)
