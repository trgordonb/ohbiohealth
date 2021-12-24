import styles from '@/styles/Layout.module.css'
import { useTranslation } from 'react-i18next'
import ProductBrowser from '../components/ProductBrowser'

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
                <ProductBrowser
                    storeId={data}
                    currentUser={currentUser}
                /> : 
                <p>{t('pleaselogin')}</p>
            }
            
        </div>
    )
}

