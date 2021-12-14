import styles from '@/styles/Layout.module.css'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

AboutPage.getInitialProps = async (ctx) => {
    const options = {headers: new Headers({'Content-Type': 'application/json'})}
    const resEN = await fetch('https://cms.ohbiohealth.club/articles?current=true&&type=aboutus', {
        method: 'GET', ...options
    })
    const resZH = await fetch('https://cms.ohbiohealth.club/articles?_locale=zh-Hant&&current=true&&type=aboutus', {
        method: 'GET', ...options
    })
    
    const dataEN = await resEN.json()
    const dataZH = await resZH.json()
    return {
        data: {
            en: dataEN[0],
            zh: dataZH[0]
        }
    }
}

export default function AboutPage({ data }) {
    const { t, i18n } = useTranslation()
    const [title, setTitle] = useState(data[i18n.language].title)
    const [text, setText] = useState(data[i18n.language].text)

    useEffect(() => {
        setTitle(data[i18n.language].title)
        setText(data[i18n.language].text)
    },[i18n.language])

    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

