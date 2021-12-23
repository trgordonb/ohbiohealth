import styles from '@/styles/Layout.module.css'
import { useTranslation } from 'react-i18next'
import { ProductBrowser, BuyNowButton } from '@ecwid/nextjs-ecwid-plugin'


export async function getServerSideProps(ctx) {
    const storeId = process.env.NEXT_ECWID_STOREID
    return { 
        props: {
            data: StoreId 
        }
    }
}


export default function ShopPage({ data }) {
    const { t, i18n } = useTranslation()
    
    return (
        <div className={styles.container}>
            <ProductBrowser
                storeId={data}
            />
        </div>
    )
}

