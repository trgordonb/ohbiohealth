import styles from '@/styles/Layout.module.css'
import { useTranslation } from 'react-i18next'
import BuyNowButton from '../components/BuyNowButton'

export function getServerSideProps() {
    const storeId = process.env.NEXT_PUBLIC_ECWID_STOREID
    return { 
        props: {
            data: storeId 
        }
    }
}

export default function ShopPage({ data, currentUser }) {
    const { t, i18n } = useTranslation()
    
    return (
        <div className={styles.container}>
            {
                currentUser ?
                <BuyNowButton
                    storeId={data}
                    productId="413756104"
                    currentUser={currentUser}
                /> : 
                <p>{t('pleaselogin')}</p>
            }
            
        </div>
    )
}

