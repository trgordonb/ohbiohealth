import { useTranslation } from 'react-i18next'

const OrderSuccess = ( props ) => {
	const { t, i18n } = useTranslation()

	const { response } = props;

	if ( ! response ) {
		return null;
	}

	const responseData = response.checkout;

	window.location.href = responseData.redirect;

	return (
		<div className="container">
			{ 'success' === responseData.result ? (
				<div>
					<h2>{t('orderno')} { responseData.order.orderNumber } </h2>
					<p>{t('status')} { responseData.order.status }</p>
				</div>
			): ''}
		</div>
	)
};

export default OrderSuccess;
