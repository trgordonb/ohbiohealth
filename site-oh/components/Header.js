import { useState, useEffect } from "react"
import Image from 'next/image'
import Link from "next/link"
import DropDown from "./Dropdown"
import DropDownResponsive from "./DropdownResponsive"
import { useTranslation } from 'react-i18next'
import { useAppState } from '../hooks/use-appstate'
import { useRouter } from 'next/router'

export default function Header({ currentUser }) {
  const { t, i18n } = useTranslation()  
  const [isOpen, setIsOpen] = useState(false)
  const [dismissBar, setDismissBar] = useState(false)
  const { hasDismissedNotification, setHasDismissedNotification } = useAppState()
  const router = useRouter()

  useEffect(() => {
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
  },[currentUser])

  return (
    <div>
      { !dismissBar &&
            <div className="mb-0 p-2 text-white bg-gray-800 text-center">
                <p>              
                    <span>
                    {
                        currentUser && !currentUser.hasProvidedInfo && <>{t('basic')}</>
                    }    
                    {
                        currentUser && currentUser.hasBoughtDevice && !currentUser.hasRegDevice && !currentUser.hasFinishedSurvey && <>{t('buydevice')}</>
                    }  
                    {
                        currentUser && currentUser.hasBoughtDevice && currentUser.hasRegDevice && !currentUser.hasFinishedSurvey && <>{t('talkchatbot')}</>
                    }
                        <button 
                            className="ml-10 border-2 border-white p-1" 
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
      <header className="bg-gradient-to-r from-indigo-500 to-cyan-500 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div>
            <button className="" onClick={() => {router.replace('/')}}>
              <Image className="h-8" src="/OHLogo.jpg" alt="hello" width={100} height={40}/>
            </button>
          </div>
          <div className="sm:hidden">
            <button onClick={()=> setIsOpen(!isOpen)} type="button" className="block text-gray-500 hover:text-white hover:outline-none focus:text-white focus:outline-none">
              { isOpen ?
                <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                </svg> :
                <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
              }
            </button>
          </div>
        </div>
        <nav className={`${isOpen ? 'block': 'hidden'} sm:block`}>
          <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
            <Link href='/#about'><a className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">{t('aboutus')}</a></Link>
            <Link href='/#technology'><a className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">{t('technology')}</a></Link>
            <div className="hidden sm:block">
              <DropDown title={t('products')} items={['BM','QM','BES','SEG']} short={false} links={['/#productsBM','/#productsQM','/#productsBES','/#productsSEG']}/>
            </div>
            <DropDownResponsive title={t('products')} items={['BM','QM','BES','SEG']} links={['/#productsBM','/#productsQM','/#productsBES','/#productsSEG']}/>
            <Link href='/#services'><a className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">{t('service')}</a></Link>
            <Link href='/shop'><a className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">{t('shop')}</a></Link>
            <Link href='/#contact'><a className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">{t('contact')}</a></Link>

            {/**<div className="hidden sm:block">
              <DropDown title={t('support')} items={[t('faq'),t('contact')]} short={false} links={['/#faq','/#contact']}/>
            </div>
            <DropDownResponsive title={t('support')} items={[t('faq'),t('contact')]} links={['/#faq','/#contact']}/>*/}
            {
              currentUser && currentUser.usertype === 'admin' && 
              <div className="hidden sm:block">
                <DropDown title={t('admin')} items={[t('adddevice'),t('approve'),t('cert')]} short={false} links={['/admin/devicereg','/admin/approve','/admin/certreg']}/>
              </div>
            }
            {
              currentUser && currentUser.usertype === 'admin' &&
              <DropDownResponsive title={t('admin')} items={[t('adddevice'),t('approve'),t('cert')]} links={['/admin/devicereg','/admin/approve','/admin/certreg']}/>
            }
            <div className="hidden sm:block">
              <DropDown title={`${i18n.language === 'en' ? 'EN': '???'}`} items={['EN','???']} short={true} links={['#','#']} isLanguageMenu={true}/>
            </div>
            <DropDownResponsive title={`${i18n.language === 'en' ? 'EN': '???'}`} items={['EN','???']} links={['#','#']} isLanguageMenu={true}/>
            <div className="hidden sm:block">
              <DropDown 
                title={t('account')}
                items={currentUser? [t('regdevice'), t('order'), t('signout')]: [t('signin'), t('register')]} 
                short={false}
                links={currentUser? ['/account/regdevice','/account/orders','/account/signout']:['/account/signin','/account/signup']}
              />
            </div>
            <DropDownResponsive 
              title={t('account')} 
              items={currentUser? [t('regdevice'), t('order'), t('signout')]:[t('signin'), t('register')]}
              links={currentUser? ['/account/regdevice','/account/orders','/account/signout']:['/account/signin','/account/signup']}
            />
          </div>
        </nav>
      </header>
    </div>
  )
}
