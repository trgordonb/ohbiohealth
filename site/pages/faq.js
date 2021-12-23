import styles from '@/styles/Layout.module.css'
import { useTranslation } from 'react-i18next'

export default function FAQPage() {
    const { t, i18n } = useTranslation()
    
    return (
        <div className={styles.container}>
            FAQ
        </div>
    )
}

