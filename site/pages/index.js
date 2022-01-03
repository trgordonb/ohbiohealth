import { SiChatbot } from 'react-icons/si'
import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import styles from '@/styles/Layout.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import Chatbot from 'react-chatbot-kit'
import CookieConsent from "react-cookie-consent";
import { useTranslation } from 'react-i18next'
import Popup from 'reactjs-popup'
import config from '../chatbot/config'
import MessageParser from '../chatbot/MessageParser'
import ActionProvider from '../chatbot/ActionProvider'
import 'react-chatbot-kit/build/main.css'
import { createChatBotMessage } from 'react-chatbot-kit';
import NewsletterSubscribe from '../components/NewsletterSubscribe'
//import { BuyNowButton } from '@ecwid/nextjs-ecwid-plugin'
import BuyNowButton from '../components/BuyNowButton'

HomePage.getInitialProps = async (ctx) => {
  const mailChimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL
  const storeId = process.env.NEXT_PUBLIC_ECWID_STOREID
  const options = {headers: new Headers({'Content-Type': 'application/json'})}
  const aboutresEN = await fetch('https://cms.ohbiohealth.club/documents?type=aboutus', {
      method: 'GET', ...options
  })
  const aboutresZH = await fetch('https://cms.ohbiohealth.club/documents?_locale=zh-Hant&&type=aboutus', {
      method: 'GET', ...options
  })
  const technologyresEN = await fetch('https://cms.ohbiohealth.club/documents?type=technology', {
      method: 'GET', ...options
  })
  const technologyresZH = await fetch('https://cms.ohbiohealth.club/documents?_locale=zh-Hant&&type=technology', {
      method: 'GET', ...options
  })
  const BMresEN = await fetch('https://cms.ohbiohealth.club/documents?type=BMfunctions', {
      method: 'GET', ...options
  })
  const BMresZH = await fetch('https://cms.ohbiohealth.club/documents?_locale=zh-Hant&&type=BMfunctions', {
      method: 'GET', ...options
  })
  const QMresEN = await fetch('https://cms.ohbiohealth.club/documents?type=QMfunctions', {
      method: 'GET', ...options
  })
  const QMresZH = await fetch('https://cms.ohbiohealth.club/documents?_locale=zh-Hant&&type=QMfunctions', {
      method: 'GET', ...options
  })
  const BESresEN = await fetch('https://cms.ohbiohealth.club/documents?type=BESfunctions', {
      method: 'GET', ...options
  })
  const BESresZH = await fetch('https://cms.ohbiohealth.club/documents?_locale=zh-Hant&&type=BESfunctions', {
      method: 'GET', ...options
  })
  const SEGresEN = await fetch('https://cms.ohbiohealth.club/documents?type=SEGfunctions', {
      method: 'GET', ...options
  })
  const SEGresZH = await fetch('https://cms.ohbiohealth.club/documents?_locale=zh-Hant&&type=SEGfunctions', {
      method: 'GET', ...options
  })
  const contactresEN = await fetch('https://cms.ohbiohealth.club/documents?type=contact', {
      method: 'GET', ...options
  })
  const contactresZH = await fetch('https://cms.ohbiohealth.club/documents?_locale=zh-Hant&&type=contact', {
      method: 'GET', ...options
  })
    
  const aboutdataEN = await aboutresEN.json()
  const aboutdataZH = await aboutresZH.json()
  const technologydataEN = await technologyresEN.json()
  const technologydataZH = await technologyresZH.json()
  const BMdataEN = await BMresEN.json()
  const BMdataZH = await BMresZH.json()
  const QMdataEN = await QMresEN.json()
  const QMdataZH = await QMresZH.json()
  const BESdataEN = await BESresEN.json()
  const BESdataZH = await BESresZH.json()
  const SEGdataEN = await SEGresEN.json()
  const SEGdataZH = await SEGresZH.json()
  const contactdataEN = await contactresEN.json()
  const contactdataZH = await contactresZH.json()
  return { 
      data: {
          link: mailChimpUrl,
          storeId: storeId,
          about: {
            en: aboutdataEN[0].text,
            zh: aboutdataZH[0].text
          },
          technology: {
            en: technologydataEN[0].text,
            zh: technologydataZH[0].text
          },
          BM: {
            en: BMdataEN[0].text,
            zh: BMdataZH[0].text
          },
          QM: {
            en: QMdataEN[0].text,
            zh: QMdataZH[0].text
          },
          BES: {
            en: BESdataEN[0].text,
            zh: BESdataZH[0].text
          },
          SEG: {
            en: SEGdataEN[0].text,
            zh: SEGdataZH[0].text
          },
          contact: {
            en: contactdataEN[0].text,
            zh: contactdataZH[0].text
          }
      }
  }
}

export default function HomePage({ currentUser, data }) {
  const [showChatBot, setShowChatBot] = useState(false)
  const { t, i18n } = useTranslation()
  const [aboutContent, setAboutContent] = useState(data.about[i18n.language])
  const [technologyContent, setTechnologyContent] = useState(data.technology[i18n.language])
  const [BMContent, setBMContent] = useState(data.BM[i18n.language])
  const [QMContent, setQMContent] = useState(data.QM[i18n.language])
  const [BESContent, setBESContent] = useState(data.BES[i18n.language])
  const [SEGContent, setSEGContent] = useState(data.SEG[i18n.language])
  const [contactContent, setContactContent] = useState(data.contact[i18n.language])

  useEffect(() => {
    setAboutContent(data.about[i18n.language])
    setTechnologyContent(data.technology[i18n.language])
    setBMContent(data.BM[i18n.language])
    setQMContent(data.QM[i18n.language])
    setBESContent(data.BES[i18n.language])
    setSEGContent(data.SEG[i18n.language])
    setContactContent(data.contact[i18n.language])
    if (currentUser) {
      setShowChatBot(true)    
      if (currentUser.id) {
        config = {
          ...config,
          state : {
            ...config.state,
            userId: currentUser.id,
            language: i18n.language,
            t: t
          }
        }
      }  
    } 
  },[i18n.language])

  const closeChatbot = () => {
    setShowChatBot(false)
  }

  return (
    <div>
      <Hero />
      <ToastContainer />
      <CookieConsent
        buttonText={t('ok')}
      >{t('cookie')}
      </CookieConsent>  
      <div id="about" className={styles.container}>
          <h1>{t('aboutus')}</h1>
          <p>{aboutContent}</p>
      </div>
      <div id="technology" className={styles.container}>
          <h1>{t('technology')}</h1>
          <p>{technologyContent}</p>
      </div>
      <div id="services" className={styles.container}>
            <h1>{t('services')}</h1>
            <img src="https://cms.ohbiohealth.club/uploads/Onour_224eb9361d.png"/>
            <img src="https://cms.ohbiohealth.club/uploads/woopie_27f9b598d3.png"/>
            <h1>{t('partners')}</h1>
            <img src="https://cms.ohbiohealth.club/uploads/cyberport_d8cac9ac3f.png"/>
            <img src="https://cms.ohbiohealth.club/uploads/jade_16a737d4f2.png"/>
      </div>
      <div id="productsBM" className={styles.container}>
          <h1>BM</h1>
          <p>{BMContent}</p>
              <BuyNowButton 
                  storeId={data.storeId}
                  productId="413756104"
                  currentUser={currentUser}
              />   
      </div>
      <div id="productsQM" className={styles.container}>
          <h1>QM</h1>
          <p>{QMContent}</p>
              <BuyNowButton 
                  storeId={data.storeId}
                  productId="427411508"
                  currentUser={currentUser}
              />        
      </div>
      <div id="productsBES" className={styles.container}>
            <h1>BES</h1>
            <p>{BESContent}</p>
      </div>
      <div id="productsSEG" className={styles.container}>
            <h1>SEG</h1>
            <p>{SEGContent}</p>
      </div>
      <div id="faq" className={styles.container}>
            <h1>FAQ</h1>
      </div>
      <div id="contact" className={styles.container}>
            <h1>{t('contact')}</h1>
            <p>{contactContent}</p>
      </div>
      <div className={styles.container}> 
        <NewsletterSubscribe mailChimpUrl={data.link} />
      </div>
      <div className={styles.right}>
        {
          showChatBot &&
          <Popup
            trigger={open => (
              <button className='btn-icon btn-secondary'><SiChatbot />{t('assistant')}</button>
            )}
            position="top right"
            closeOnDocumentClick
          >
            <Chatbot
              config={{
                ...config, 
                initialMessages: [
                  createChatBotMessage(t('surveyintro')),
                  createChatBotMessage(t('q1'), {
                      withAvatar: false,
                      delay: 500,
                      widget: "yesno"
                  })
                ]
              }}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              placeholderText={t('enterresponse')}
            />
          </Popup>
        }
      </div>
    </div>
  )
}
