import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useTranslation } from 'react-i18next'

export default function Header({ currentUser }) {
    const { t, i18n } = useTranslation()
    
    useEffect(() => {
        i18n.changeLanguage('en');
    }, []);

    const onChangeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    const links = [
        { label: t('aboutus'), href: '/about' },
        { label: t('products'), href: '/products' },
        { label: t('technology'), href: '/technology' },
        { label: t('service'), href: '/service' },
        { label: t('healthtip'), href: '/healthtips' },
        { label: t('video'), href: '/videos'},
        { label: t('contact'), href: '/contact' },
        { label: t('faq'), href: '/faq' },
        currentUser && currentUser.usertype === 'admin' && { label: t('admin'), href: '/admin' },
        !currentUser && { label: t('signin'), href: '/account/signin' },
        currentUser && { label: t('signout'), href: '/account/signout' }
    ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
        return (
          <li key={href}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        )
    })

    return (
        <header className={styles.header}>      
            <div className={styles.logo}>
                <Link href='/'>
                    <a>
                        <Image src='/OHLogo.jpg' width={100} height={40}/>   
                    </a>
                </Link>
            </div>

            <nav>
                <ul>
                    {links}                 
                    <li key={'english'}>
                        <button className='btn-lang1' onClick={()=> onChangeLanguage('en')}>EN</button>
                    </li>    
                    <li key={'zh'}>
                        <button className='btn-lang2' onClick={()=> onChangeLanguage('zh')}>繁</button>
                    </li>
                    
                </ul>
            </nav>
        </header>  
    )
}
