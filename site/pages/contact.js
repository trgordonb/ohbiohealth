import styles from '@/styles/Layout.module.css'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

ContactPage.getInitialProps = async (ctx) => {
    const options = {headers: new Headers({'Content-Type': 'application/json'})}
    const resEN = await fetch('https://cms.ohbiohealth.club/documents?type=contact', {
        method: 'GET', ...options
    })
    const resZH = await fetch('https://cms.ohbiohealth.club/documents?_locale=zh-Hant&&type=contact', {
        method: 'GET', ...options
    })
    
    const dataEN = await resEN.json()
    const dataZH = await resZH.json()
    return {
        data: {
            en: dataEN[0].text,
            zh: dataZH[0].text
        }
    }
}

export default function ContactPage({ data }) {
    const { t, i18n } = useTranslation()
    const [contact, setContact] = useState('')

    useEffect(() => {
        setContact(data[i18n.language])
    },[i18n.language])

    return (
        <div className={styles.container}>
            <h1>{t('contact')}</h1>
            <p>{contact}</p>
        </div>
    )
}

