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
import NewsletterSubscribe from '../components/NewsletterSubscribe'

export async function getServerSideProps(ctx) {
  const mailChimpUrl = NEXT_PUBLIC_MAILCHIMP_URL
  return { 
      props: {
          data: mailChimpUrl 
      }
  }
}

export default function HomePage({ currentUser, data }) {
  //const [showChatBot, setShowChatBot] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    //if (currentUser && !currentUser.hasProvidedInfo) {
      //toast.info('We would like to know more about you. Please chat with our assistant down here.')
      //setShowChatBot(true)
      //if (currentUser.id) {
      //  config = {
      //    ...config,
      //    state : {
      //      ...config.state,
      //      userId: currentUser.id
      //    }
      //  }
      //}  
    //}
    
  },[])

  //const closeChatbot = () => {
  //  setShowChatBot(false)
  //}

 
  return (
    <div>
      <Hero />
      <ToastContainer />
      <CookieConsent
        buttonText={t('ok')}
      >{t('cookie')}
      </CookieConsent>
      <div className={styles.container}> 
        <NewsletterSubscribe mailChimpUrl={data} />
      </div>
      <div className={styles.right}>
        {
          //showChatBot &&
          //<Popup
          //  trigger={open => (
          //    <button className='btn-icon btn-secondary'><SiChatbot />Assistant</button>
          //  )}
          //  position="top right"
          //  closeOnDocumentClick
          //>
          //  <Chatbot
          //    config={config}
          //    messageParser={MessageParser}
          //    actionProvider={ActionProvider}
          //</div>  />
          //</Popup>
        }
      </div>
    </div>
  )
}
