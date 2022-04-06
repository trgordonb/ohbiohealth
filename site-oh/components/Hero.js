import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Script from 'next/script'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import Chatbot from 'react-chatbot-kit'
import config from '../chatbot/config'
import MessageParser from '../chatbot/MessageParser'
import ActionProvider from '../chatbot/ActionProvider'
import { createChatBotMessage } from 'react-chatbot-kit'


export default function Hero({ currentUser }) {
  const { t, i18n } = useTranslation()
  const [chatbotConfig, setChatBotConfig] = useState(config)

  useEffect(() => {
    if (currentUser && currentUser.id) {
      setChatBotConfig({
        ...config,
        state : {
          ...config.state,
          userId: currentUser.id,
          language: i18n.language,
          t: t
        }
      })
    } else {
      setChatBotConfig({
        ...config,
        state: {
          ...config.state,
          language: i18n.language,
          t: t
        }
      })
    }
  },[i18n.language, currentUser])

  return (
  <>
    <Script src='https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js'/>
    <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            className="block w-full h-[600px] font-black"
            alt="..."
          />
          <div className="carousel-caption absolute text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-4xl px-6">
              <span className="block text-gray-200">{t('welcome')}</span>
            </h1>            
            <h3 className='text-2xl mt-20 mb-8 font-bold'>{t('energy')}</h3>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            className="block w-full h-[600px] font-black"
            alt="..."
          />
          <div className="carousel-caption absolute text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-4xl px-6 mb-8">
              <span className="block text-gray-200">{t('pain1')}</span>
            </h1>
            <button>
              <div className="inline-flex rounded-md shadow">
                <div className="inline-flex items-center justify-center mt-10 px-5 py-3 border border-transparent text-base font-bold rounded-md text-white bg-gray-700 hover:bg-indigo-700">
                    <Link href='/survey'>{t('getstart')}</Link>
                </div>
              </div>
            </button>
            {
             /**  <Popup
              position={'bottom center'}
              closeOnDocumentClick
              trigger={open => (
                <button>
                  <div className="inline-flex rounded-md shadow">
                      <a className="inline-flex items-center justify-center mt-10 px-5 py-3 border border-transparent text-base font-bold rounded-md text-white bg-gray-700 hover:bg-indigo-700">
                        {t('getstart')}
                      </a>
                    </div>
                </button>
              )}
            >
              <Chatbot
                config={{
                  ...chatbotConfig, 
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
            </Popup>*/
            }
            
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            className="block w-full h-[600px] font-black"
            alt="..."
          />
            <div className="carousel-caption absolute text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-4xl px-6">
                <span className="block text-gray-200">{t('welcome')}</span>
              </h1>            
              <h3 className='text-2xl mt-20 mb-8 font-bold'>{t('energy')}</h3>
            </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </>
  )
}