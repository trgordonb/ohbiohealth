import boto3
import pandas as pd
import pyarrow as pa
import pyarrow.parquet as pq
from sqlalchemy.engine import create_engine
import os

def backup_mysql_to_S3(sql_query,engine,file_name):

    iterator = pd.read_sql_query(sql_query,engine,coerce_float=True,chunksize=10000)
    for i,df in enumerate(iterator):
        table = pa.Table.from_pandas(df,preserve_index=False)
        
        # for the first chunk of records
        if i == 0:
            # create a parquet write object giving it an output file
            pqwriter = pq.ParquetWriter(file_name, table.schema, compression='snappy')
            pqwriter.write_table(table)
        # subsequent chunks can be written to the same file
        else:
            pqwriter.write_table(table)

    # close the parquet writer
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
conn_str = 'mysql+pymysql://{user}:{password}@{dbhost}/{dbname}'.format(user=user,password=password,dbhost=dbhost,dbname=dbname)
engine = create_engine(conn_str)
backup_mysql_to_S3('''SELECT * from tbl_entity''', engine, 'entity.parquet')
backup_mysql_to_S3('''SELECT * from tbl_visit''', engine, 'visit.parquet')
backup_mysql_to_S3('''SELECT * from tbl_visit_diag''', engine, 'visit.diag.parquet')
