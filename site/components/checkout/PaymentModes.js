import { useTranslation } from 'react-i18next'
import Error from "./Error";

const PaymentModes = ( { input, handleOnChange } ) => {
	const { t, i18n } = useTranslation()

	const { errors, paymentMethod } = input || {}

	return (
		<div className="mt-3">
			<Error errors={ errors } fieldName={ 'paymentMethod' }/>
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="stripe-mode" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'stripe-mode' === paymentMethod}/>
					<span className="woo-next-payment-content">{t('creditcard')}</span>
				</label>
			</div>
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="paypal" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'paypal' === paymentMethod}/>
					<span className="woo-next-payment-content">Paypal</span>
				</label>
			</div>
		</div>
	);
};

export default PaymentModes;
