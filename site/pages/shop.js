import { useTranslation } from 'react-i18next'
import client from '../data/client/ApolloClient'
import PRODUCTS_QUERY from '../data/graphql/queries/get-products'
import Product from '../components/Product'
//import ProductBrowser from '../components/ProductBrowser'

//ShopPage.getInitialProps = async (ctx) => {
//    const storeId = process.env.NEXT_PUBLIC_ECWID_STOREID
//    return {
//        data: storeId 
//    }
//}

export default function ShopPage(props) {
    const { t } = useTranslation()
    const { products } = props || {};
    
    return (
            //{
                //<div className='m-auto p-5 max-w-4xl'>

                //<ProductBrowser
                //    storeId={data}
                //    currentUser={currentUser}
                ///>

                //</div>
            //}          
        <div className="products container mx-auto my-32 px-4 xl:px-0">
            <h2 className="products-main-title main-title mb-5 text-xl uppercase"><span className="main-title-inner">Products</span></h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                { products.length ? (
                    products.map( product => <Product key={ product.id } product={ product }/> )
                ) : '' }
            </div>
        </div>
    )
}

export async function getStaticProps () {
	const { data } = await client.query( {
		query: PRODUCTS_QUERY,
	} );

	return {
		props: {
			products: data?.products?.nodes ? data.products.nodes : [],
		},
		revalidate: 1
	}
};
