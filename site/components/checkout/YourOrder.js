import { Fragment } from 'react';
import { useTranslation } from 'react-i18next'
import CheckoutCartItem from "./CheckoutCartItem";

const YourOrder = ( { cart } ) => {
	const { t, i18n } = useTranslation()

	return (
		<Fragment>
			{ cart ? (
				<Fragment>
					{/*Product Listing*/}
					<table className="checkout-cart table table-hover w-full mb-10">
						<thead>
						<tr className="woo-next-cart-head-container text-left">
							<th className="woo-next-cart-heading-el" scope="col"/>
							<th className="woo-next-cart-heading-el" scope="col">{t('product')}</th>
							<th className="woo-next-cart-heading-el" scope="col">{t('total')}</th>
						</tr>
						</thead>
						<tbody>
						{ cart.products.length && (
							cart.products.map( item => (
								<CheckoutCartItem key={ item.productId } item={ item } />
							) )
						) }
						{/*Total*/}
						<tr className="bg-gray-200">
							<td className=""/>
							<td className="woo-next-checkout-total font-normal text-xl">{t('subtotal')}</td>
							<td className="woo-next-checkout-total font-bold text-xl">{ cart.totalProductsPrice }</td>
						</tr>
						{/* <tr className="">
							<td className=""/>
							<td className="woo-next-checkout-total">Total</td>
							<td className="woo-next-checkout-total">{ cart.totalProductsPrice }</td>
						</tr> */}
						</tbody>
					</table>
				</Fragment>
			) : '' }
		</Fragment>
	)
};

export default YourOrder;
