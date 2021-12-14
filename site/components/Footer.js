import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export async function getServerSideProps(ctx) {
    const options = {headers: new Headers({'Content-Type': 'application/json'})}
    const resEN = await fetch('https://cms.ohbiohealth.club/documents?type=contact', {
        method: 'GET', ...options
    })
    const resZH = await fetch('https://cms.ohbiohealth.club/documents?_locale=zh-Hant&&type=contact', {
        method: 'GET', ...options
    })
    console.log(resEN)
    console.log(resZH)
    const dataEN = await resEN.json()
    const dataZH = await resZH.json()
    return {
        props: {
            data : {
                en: dataEN[0].text,
                zh: dataZH[0].text
            }
        }
    }
}

export default function Footer({ data }) {
    console.log(data)
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; OH Biohealth 2021</p>
        </footer>
    )
}
