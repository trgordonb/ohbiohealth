import CheckoutForm from '../components/checkout/CheckoutForm'
import GET_COUNTRIES from '../data/graphql/queries/get-countries'
import client from '../data/client/ApolloClient'

const CheckoutPage = ({data}) => (
    <div className="checkout container mx-auto my-32 px-4 xl:px-0">
        <h1 className="mb-5 text-2xl uppercase">Checkout Page</h1>
        <CheckoutForm countriesData={data?.wooCountries ?? {}}/>
    </div>
);

export default CheckoutPage;

export async function getStaticProps() {
	const { data } = await client.query({
		query: GET_COUNTRIES
	});

	return {
		props: {
			data: data || {}
		},
		revalidate: 1
	};

}
