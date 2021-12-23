import styles from '@/styles/Layout.module.css'
import { useTranslation } from 'react-i18next'
import { ProductBrowser, BuyNowButton } from '@ecwid/nextjs-ecwid-plugin'
import { useState, useEffect } from 'react'

export default function ShopPage() {
    const { t, i18n } = useTranslation()
    
    return (
        <div className={styles.container}>
            <ProductBrowser
                storeId={process.env.NEXT_ECWID_STOREID}
            />
        </div>
    )
}

