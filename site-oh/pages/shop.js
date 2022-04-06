import { useTranslation } from 'react-i18next'
import client from '../data/client/ApolloClient'
import PRODUCTS_QUERY from '../data/graphql/queries/get-products'
import Product from '../components/Product'

const ShopPage = ({ products }) => {
    const { t, i18n } = useTranslation()
    return (        
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
			{
				products.length ? (
					products.filter(product => {
							return (product.attributes.nodes[0].options[0] === i18n.language)
						}).map(product => (
							<div key={ product.id } className="relative mx-auto w-full">
								<a href="#" className="relative inline-block w-full">
									<div className="shadow p-4 rounded-lg bg-white">
										<div className="flex justify-center relative rounded-lg overflow-hidden h-[700px]">
											<Product product={ product } isPreOrder={product.attributes.nodes[1].options[0] === 'yes'}/>
										</div>
									</div>
								</a>
							</div>
						))
				): <></>
			}
        </div>
    )
}

ShopPage.getInitialProps = async () => {
    const { data } = await client.query( {
		query: PRODUCTS_QUERY,
	} );

	return {
		products: data?.products?.nodes ? data.products.nodes : [],
	}
}

export default ShopPage;

/**export async function getStaticProps () {
	const { data } = await client.query( {
		query: PRODUCTS_QUERY,
	} );

	return {
		props: {
			products: data?.products?.nodes ? data.products.nodes : [],
		},
		revalidate: 1
	}
};*/
