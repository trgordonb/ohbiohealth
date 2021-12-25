import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useTranslation } from 'react-i18next'
import { useAppState } from '../hooks/use-appstate'

export default function Header({ currentUser }) {
    const { t, i18n } = useTranslation()  
    const [dismissBar, setDismissBar] = useState(false)
    const [topMessage, setTopMessage] = useState('')
    const { hasDismissedNotification, setHasDismissedNotification } = useAppState()
    
    useEffect(() => {
        if (!i18n.language) {
            i18n.changeLanguage('zh');
        }
        let displayMessage = ''
        if (currentUser && currentUser.usertype === 'client') {
            if (!currentUser.hasProvidedInfo) {
                displayMessage = t('basic')
            } else if (currentUser.hasBoughtDevice && !currentUser.hasRegDevice && !currentUser.hasFinishedSurvey) {
                displayMessage = t('buydevice')
            } else if (currentUser.hasBoughtDevice && currentUser.hasRegDevice && !currentUser.hasFinishedSurvey) {
                displayMessage = t('talkchatbot')
            }
        }
        if (displayMessage === '' || hasDismissedNotification) {
            setDismissBar(true)
        } else {
            setDismissBar(false)
        }
        setTopMessage(displayMessage)
    }, [currentUser]);

    const onChangeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    const zip = rows => rows[0].map((_,c)=>rows.map(row=>row[c]))

    const links = [
        { label: t('aboutus'), href: '/about', sub: false, menuItems: '' },
        { label: t('products'), href: '/products', sub: false, menuItems: '' },
        { label: t('technology'), href: '/technology', sub: false, menuItems: '' },
        { label: t('service'), href: '/service', sub: false, menuItems: '' },
        { label: t('healthtip'), href: '/healthtips', sub: false, menuItems: '' },
        { label: t('video'), href: '/videos', sub: false, menuItems: '' },
        { label: t('contact'), href: '/contact', sub: false, menuItems: '' },
        { label: t('faq'), href: '/faq', sub: false, menuItems: '' },
        currentUser && currentUser.usertype === 'admin' && 
        { label: t('admin'), href: '/admin/devicereg:/admin/approve', sub: true, menuItems: `${t('adddevice')}:${t('approve')}` },
        { label: t('shop'), href: '/shop', sub: false, menuItems: '' },
        !currentUser && { label: t('account'), href: '/account/signin:/account/signup', sub: true, menuItems: `${t('signin')}:${t('register')}`},
        currentUser && 
        { label: t('account'), href: `/account/signout:/account/regdevice:/account/orders`, sub: true, menuItems: `${t('signout')}:${t('regdevice')}:${t('order')}`}
    ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href, sub, menuItems }) => {
        if (sub) {
            const sublinks = href.split(':')
            const submenus = menuItems.split(':')
            const menus = zip([sublinks, submenus])
            return(
                <li key={href} className={styles.dropdown}>
                    <button className={styles.dropbtn}>
                        {label}
                        <i className={styles.fa}></i>
                    </button>
                    <div className={styles.dropdowncontent}>
                    {
                        menus.map(([sublink, submenu]) => {
                            return (
                                <Link key={sublink} href={sublink}>
                                    <a>{submenu}</a>
                                </Link>
                            )
                        })
                    }
                    </div>
                </li>
            )} else {
        return (
          <li key={href}>
            <Link href={href}>
                <a>{label}</a>
            </Link>
          </li>
        )}
    })

    return (
        <header>      
            {   !dismissBar &&
                <div className={styles.alert}>
                    <p>{topMessage}
                        <span>
                            <button 
                                className={styles.closebutton} 
                                onClick={() => {
                                    setHasDismissedNotification(true)
                                    setDismissBar(true)
                                }} 
                                type="button"
                            >{t('dismiss')}
                            </button>
                        </span>
                    </p>
                </div>
            }
            <div className={styles.header}>
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
            </div>
            
        </header>  
    )
}