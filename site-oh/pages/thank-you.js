import {useState, useEffect, useContext} from "react";
import { useTranslation } from 'react-i18next'
import Router from "next/router";
import Link from 'next/link';
import axios from "axios";
import {CartContext} from '../hooks/use-cart'
import Loading from '../components/icons/Loading'
import ShoppingCart from '../components/icons/ShoppingCart'

const ThankYouContent = () => {
    const { t, i18n } = useTranslation()

    const [cart, setCart] = useContext(CartContext);
    const [isSessionFetching, setSessionFetching] = useState(false);
    const [sessionData, setSessionData] = useState({});
    const session_id = process.browser ? Router.query.session_id : null
    const customer_email = process.browser ? Router.query.email : null
    const order_id = process.browser ? Router.query.order_id : null

    useEffect(() => {
        setSessionFetching(true);
        if (process.browser) {
            localStorage.removeItem('woo-next-cart');
            setCart(null);

            if (session_id) {
                axios.get(`/api/get-stripe-session/?session_id=${session_id}`)
                    .then((response) => {
                        setSessionData(response?.data ?? {});
                        setSessionFetching(false);
                    })
                    .catch((error) => {
                        console.log(error);
                        setSessionFetching(false);
                    });
            } else {
                setSessionData({
                    metadata: {
                        orderId : order_id
                    },
                    customer_email
                })
                setSessionFetching(false);
            }
        }

    }, [session_id]);

    return (
        <div className="w-full md:w-96 md:max-w-full mt-20 mx-auto">
                {isSessionFetching ? <Loading/> : (
                    <>
                        <h2 className="mb-6 text-xl"><ShoppingCart className="inline-block mr-1"/> <span>{t('thank')}</span></h2>
                        <p>{t('paymentsuccess')} </p>
                        <table className="table-auto w-full text-left whitespace-no-wrap mb-8">
                            <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">{t('name')}</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">{t('detail')}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="px-4 py-3">{t('ordernum')}</td>
                                <td className="px-4 py-3">{sessionData?.metadata?.orderId}</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">{t('email')}</td>
                                <td className="px-4 py-3">{sessionData?.customer_email}</td>
                            </tr>
                            </tbody>
                        </table>
                        <Link href="/">
                            <a className="bg-purple-600 text-white px-5 py-3 rounded-sm w-auto">{t('shopmore')}</a>
                        </Link>
                    </>
                )}
        </div>
    )
}

const ThankYouPage = () => {
    return (
        <>
            <ThankYouContent/>
        </>
    )
}

export default ThankYouPage;
