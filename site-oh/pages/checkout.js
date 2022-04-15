import CheckoutForm from '../components/checkout/CheckoutForm'
import GET_COUNTRIES from '../data/graphql/queries/get-countries'
import client from '../data/client/ApolloClient'

const CheckoutPage = ({countries, currentUser}) => {
	return (
    <div className="checkout container mx-auto my-32 px-4 xl:px-0">
        <CheckoutForm email={currentUser?.email} countriesData={countries?.wooCountries ?? {}}/>
    </div>)
}

CheckoutPage.getInitialProps = async () => {
	const { data } = await client.query({
		query: GET_COUNTRIES
	});

	return { countries: data || {} }
};


export default CheckoutPage;

