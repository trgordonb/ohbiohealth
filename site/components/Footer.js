import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    const { t, i18n } = useTranslation()
    return (   
        <footer className={styles.footer}>
            <div>
                <p>
                    <Link href="https://www.youtube.com/channel/UCXjd7VSLVHL3R3GUZ_LqtQw"><FaYoutube size={25} className={styles.icon}/></Link>
                    <Link href="https://www.instagram.com/ohbiohealth"><FaInstagram size={25} className={styles.icon}/></Link>
                    <Link href="https://www.facebook.com/OnourHolistic"><FaFacebook size={25} className={styles.icon}/></Link>
                </p>
                <p>Copyright &copy; OH Biohealth 2021</p>
            </div>
        </footer>
    )
}