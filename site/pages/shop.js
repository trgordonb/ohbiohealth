import styles from '@/styles/Layout.module.css'
import { useTranslation } from 'react-i18next'
import { ProductBrowser, BuyNowButton } from '@ecwid/nextjs-ecwid-plugin'


ShopPage.getInitialProps = () => {
    const storeId = process.env.NEXT_PUBLIC_ECWID_STOREID
    console.log('Server value:', storeId)
    return { 
        props: {
            data: storeId 
        }
    }
}


export default function ShopPage({ data }) {
    console.log('Client value:', data)
    const { t, i18n } = useTranslation()
    
    return (
        <div className={styles.container}>
            <ProductBrowser
                storeId={data}
            />
        </div>
    )
}

