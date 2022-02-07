import {useState, useContext, useEffect} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import { useTranslation } from 'react-i18next'
import cx from 'classnames'
import { PayPalButton } from "react-paypal-button-v2";

import YourOrder from "./YourOrder";
import PaymentModes from "./PaymentModes";
import {CartContext} from '../../hooks/use-cart';
import validateAndSanitizeCheckoutForm from '../../utils/validator/checkout'
import {getFormattedCart, createCheckoutData,} from '../../utils/cart-functions'
import OrderSuccess from "./OrderSuccess";
import GET_CART from '../../data/graphql/queries/get-cart'
import CHECKOUT_MUTATION from '../../data/graphql/mutations/checkout'
import Address from "./Address";
import {
    handleBillingDifferentThanShipping,
    handleCreateAccount, handleStripeCheckout, handlePaypalCheckout,
    setStatesForCountry
} from '../../utils/shop/checkout'
import CheckboxField from "./form-elements/CheckboxField";
import CLEAR_CART_MUTATION from '../../data/graphql/mutations/clear-cart'
import { useRouter } from 'next/router';

const CheckoutForm = ({countriesData, email}) => {
    const { t, i18n } = useTranslation()
    const router = useRouter()

    const defaultCustomerInfo = {
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        country: '',
        state: '',
        postcode: '',
        email: email ? email : '',
        phone: '',
        company: '',
        errors: null
    }

    const {billingCountries, shippingCountries} = countriesData || {}

    const initialState = {
        billing: {
            ...defaultCustomerInfo,
        },
        shipping: {
            ...defaultCustomerInfo
        },
        createAccount: false,
        orderNotes: '',
        billingDifferentThanShipping: false,
        paymentMethod: 'stripe-mode',
    };

    const [cart, setCart] = useContext(CartContext);
    const [input, setInput] = useState(initialState);
    const [orderData, setOrderData] = useState(null);
    const [requestError, setRequestError] = useState(null);
    const [theShippingStates, setTheShippingStates] = useState([]);
    const [isFetchingShippingStates, setIsFetchingShippingStates] = useState(false);
    const [theBillingStates, setTheBillingStates] = useState([]);
    const [isFetchingBillingStates, setIsFetchingBillingStates] = useState(false);
    const [isStripeOrderProcessing, setIsStripeOrderProcessing] = useState(false);
    const [createdOrderData, setCreatedOrderData] = useState({});
    const [refreshCart, setRefreshCart] = useState(false)
    const [showPaypalBtn, setShowPaypalBtn] = useState(false)

    // Get Cart Data.
    const {data} = useQuery(GET_CART, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {
            // Update cart in the localStorage.
            //const updatedCart = getFormattedCart(data);
            //localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

            // Update cart data in React Context.
            //setCart(updatedCart);
            setRefreshCart(!refreshCart)
        }
    });

    // Create New order: Checkout Mutation.
    const [checkout, {
        data: checkoutResponse,
        loading: checkoutLoading,
    }] = useMutation(CHECKOUT_MUTATION, {
        variables: {
            input: orderData
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    });

    const [ clearCartMutation ] = useMutation( CLEAR_CART_MUTATION );

    /*
     * Handle form submit.
     *
     * @param {Object} event Event Object.
     *
     * @return {void}
     */
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        /**
         * Validate Billing and Shipping Details
         *
         * Note:
         * 1. If billing is different than shipping address, only then validate billing.
         * 2. We are passing theBillingStates?.length and theShippingStates?.length, so that
         * the respective states should only be mandatory, if a country has states.
         */
        const billingValidationResult = input?.billingDifferentThanShipping ? validateAndSanitizeCheckoutForm(input?.billing, theBillingStates?.length, t) : {errors: null, isValid: true};
        const shippingValidationResult = validateAndSanitizeCheckoutForm(input?.shipping, theShippingStates?.length, t);

        if (!shippingValidationResult.isValid || !billingValidationResult.isValid) {
            setInput({
                ...input,
                billing: {...input.billing, errors: billingValidationResult.errors},
                shipping: {...input.shipping, errors: shippingValidationResult.errors}
            });

            return;
        }

        if ( 'stripe-mode' === input.paymentMethod ) {
            console.log('My cart:', cart?.products)
            const createdOrderData = await handleStripeCheckout(input, cart?.products, setRequestError, clearCartMutation, setIsStripeOrderProcessing, setCreatedOrderData);
        	return null;
        }

        const checkOutData = createCheckoutData(input);
        setRequestError(null);
        /**
         *  When order data is set, checkout mutation will automatically be called,
         *  because 'orderData' is added in useEffect as a dependency.
         */
        setOrderData(checkOutData);
    };

    /*
     * Handle onchange input.
     *
     * @param {Object} event Event Object.
     * @param {bool} isShipping If this is false it means it is billing.
     * @param {bool} isBillingOrShipping If this is false means its standard input and not billing or shipping.
     *
     * @return {void}
     */
    const handleOnChange = async (event, isShipping = false, isBillingOrShipping = false) => {

        const {target} = event || {};

        if ('createAccount' === target.name) {
            handleCreateAccount(input, setInput, target)
        } else if ('billingDifferentThanShipping' === target.name) {
            handleBillingDifferentThanShipping(input, setInput, target);
        } else if (isBillingOrShipping) {
            if (isShipping) {
                await handleShippingChange(target)
            } else {
                await handleBillingChange(target)
            }
        } else {
            const newState = {...input, [target.name]: target.value};
            setInput(newState);
        }

        if (  'paymentMethod' === target.name && 'paypal' === target.value ) {
            setShowPaypalBtn(true)
        }
    };

    const handleShippingChange = async (target) => {
        const newState = {...input, shipping: {...input?.shipping, [target.name]: target.value}};
        setInput(newState);
        await setStatesForCountry(target, setTheShippingStates, setIsFetchingShippingStates);
    }

    const handleBillingChange = async (target) => {
        const newState = {...input, billing: {...input?.billing, [target.name]: target.value}};
        setInput(newState);
        await setStatesForCountry(target, setTheBillingStates, setIsFetchingBillingStates);
    }

    const handlePaypalPaymentSuccess = async (orderId, transactionId) => {
        try {
            await fetch( '/api/paypal-completed', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ orderId, transactionId }),
            } );
        } catch ( error ) {
            // @TODO to be handled later.
            console.warn( 'Handle update order payment info', error?.message );
        }
    }

    useEffect(async () => {
        // Update cart in the localStorage.
		const updatedCart = getFormattedCart( data );
		localStorage.setItem( 'woo-next-cart', JSON.stringify( updatedCart ) );
		// Update cart data in React Context.
		setCart( updatedCart );

        if (null !== orderData) {
            // Call the checkout mutation when the value for orderData changes/updates.
            await checkout();
        }

    }, [orderData, refreshCart]);

    // Loading state
    const isOrderProcessing = checkoutLoading || isStripeOrderProcessing;

    return (
        <>
            {cart ? (
                <form onSubmit={handleFormSubmit} className="woo-next-checkout-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div>
                            {/*Shipping Details*/}
                            <div className="billing-details">
                                <h2 className="text-xl font-medium mb-4">{t('shipping')}</h2>
                                <Address
                                    states={theShippingStates}
                                    countries={shippingCountries}
                                    input={input?.shipping}
                                    handleOnChange={(event) => handleOnChange(event, true, true)}
                                    isFetchingStates={isFetchingShippingStates}
                                    isShipping
                                    isBillingOrShipping
                                />
                            </div>
                            <div>
                                <CheckboxField
                                    name="billingDifferentThanShipping"
                                    type="checkbox"
                                    checked={input?.billingDifferentThanShipping}
                                    handleOnChange={handleOnChange}
                                    label={t('billingdiff')}
                                    containerClassNames="mb-4 pt-4"
                                />
                            </div>
                            {/*Billing Details*/}
                            {input?.billingDifferentThanShipping ? (
                                <div className="billing-details">
                                    <h2 className="text-xl font-medium mb-4">{t('billing')}</h2>
                                    <Address
                                        states={theBillingStates}
                                        countries={billingCountries}
                                        input={input?.billing}
                                        handleOnChange={(event) => handleOnChange(event, false, true)}
                                        isFetchingStates={isFetchingBillingStates}
                                        isShipping={false}
                                        isBillingOrShipping
                                    />
                                </div>
                            ) : null}

                        </div>
                        {/* Order & Payments*/}
                        <div className="your-orders">
                            {/*	Order*/}
                            <h2 className="text-xl font-medium mb-4">{t('yourorder')}</h2>
                            <YourOrder cart={cart}/>

                            {/*Payment*/}
                            <PaymentModes input={input} handleOnChange={handleOnChange}/>

                            {
                                showPaypalBtn ?
                                <div className="woo-next-place-order-btn-wrap mt-5">
                                    <PayPalButton 
                                        options={{
                                            clientId:'AUYj6H-64g89ld5AjnP6S98_VQIervIH1HbF0cWKp85IdYAEWVLXZNMpHAlXkQDjVsYDvFNjun28yCJf',
                                            disableFunding:'credit,card',
                                            currency:'HKD'
                                        }}
                                        createOrder={async (data, actions) => {
                                            const createdOrderData = await handlePaypalCheckout(input, cart?.products, setRequestError, clearCartMutation)
                                            setCreatedOrderData(createdOrderData)
                                            return actions.order.create({
                                                purchase_units: [{
                                                    amount: {
                                                        currency_code: "HKD",
                                                        value: cart.totalProductsPrice.replace('$','').replace(',','')
                                                    }
                                                }],
                                            })
                                        }}
                                        onSuccess={async (details, data) => {
                                            if (data.orderID && createdOrderData.orderId) {
                                                await handlePaypalPaymentSuccess(createdOrderData.orderId, data.orderID)
                                            }
                                            router.push({
                                                pathname: '/thank-you',
                                                query: {
                                                    email: input.billing.email,
                                                    order_id: createdOrderData.orderId
                                                }
                                            })
                                        }}                                       
                                    />
                                </div> :
                                <div className="woo-next-place-order-btn-wrap mt-5">
                                    <button
                                        disabled={isOrderProcessing}
                                        className={cx(
                                            'bg-purple-600 text-white px-5 py-3 rounded-sm w-auto xl:w-full',
                                            {'opacity-50': isOrderProcessing}
                                        )}
                                        type="submit"
                                    >
                                        {t('placeorder')}
                                    </button>
                                </div>
                            }
                            

                            {/* Checkout Loading*/}
                            {isOrderProcessing && <p>{t('processorder')}</p>}
                            {requestError && <p>{t('error')} : {requestError} :( {t('tryagain')}</p>}
                        </div>
                    </div>
                </form>
            ) : null}
            {/*	Show message if Order Success*/}
            <OrderSuccess response={checkoutResponse}/>
        </>
    );
};

export default CheckoutForm;
