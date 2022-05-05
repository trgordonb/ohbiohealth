import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import { Section } from '../components/Section'
import ProductGallery from '../components/ProductGallery'
import { VerticalFeatureRow } from '../components/VerticalFeatureRow'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Image from 'next/image'
import CookieConsent from "react-cookie-consent";
import { useTranslation } from 'react-i18next'
import { Faq } from '../components/Faq'

HomePage.getInitialProps = async (ctx) => {
  const mailChimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL
  const options = {headers: new Headers({'Content-Type': 'application/json'})}
  const resEN = await fetch('https://ensemble-tech.xyz/api/documents/?filters[client]=oh', {
    method: 'GET', ...options
  })
  const resZH = await fetch('https://ensemble-tech.xyz/api/documents/?locale=zh-Hant-HK&&filters[client]=oh', {
    method: 'GET', ...options
  })
  const resFAQ = await fetch('https://ensemble-tech.xyz/api/faqs/?filters[client]=oh', {
    method: 'GET', ...options
  })
  const dataEN = await resEN.json()
  const dataZH = await resZH.json()
  const dataFAQ = await resFAQ.json()
  return { 
      data: {
          link: mailChimpUrl,
          about: {
            en: dataEN.data.filter(item=> item.attributes.type==='aboutus')[0].attributes.text,
            zh: dataZH.data.filter(item=> item.attributes.type==='aboutus')[0].attributes.text
          },
          technology: {
            en: dataEN.data.filter(item=> item.attributes.type==='technology')[0].attributes.text,
            zh: dataZH.data.filter(item=> item.attributes.type==='technology')[0].attributes.text
          },
          BM: {
            en: dataEN.data.filter(item=> item.attributes.type==='BMfunctions')[0].attributes.text,
            zh: dataZH.data.filter(item=> item.attributes.type==='BMfunctions')[0].attributes.text
          },
          QM: {
            en: dataEN.data.filter(item=> item.attributes.type==='QMfunctions')[0].attributes.text,
            zh: dataZH.data.filter(item=> item.attributes.type==='QMfunctions')[0].attributes.text
          },
          BES: {
            en: dataEN.data.filter(item=> item.attributes.type==='BESfunctions')[0].attributes.text,
            zh: dataZH.data.filter(item=> item.attributes.type==='BESfunctions')[0].attributes.text
          },
          SEG: {
            en: dataEN.data.filter(item=> item.attributes.type==='SEGfunctions')[0].attributes.text,
            zh: dataZH.data.filter(item=> item.attributes.type==='SEGfunctions')[0].attributes.text
          },
          contact: {
            en: dataEN.data.filter(item=> item.attributes.type==='contact')[0].attributes.text,
            zh: dataZH.data.filter(item=> item.attributes.type==='contact')[0].attributes.text
          },
          faq: dataFAQ.data
      }
  }
}

export default function HomePage({ currentUser, data }) {
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
  },[i18n.language])

  return (
    <div>
      <Hero currentUser={currentUser}/>
      <ToastContainer />
      <CookieConsent
        buttonText={t('ok')}
      >{t('cookie')}
      </CookieConsent>  
      <Section
        id="about"
        title={t('aboutus')}
        description={aboutContent}
        large={true}
      >
        <div id="technology">
          <VerticalFeatureRow
            title={t('qtechnology')}
            isProduct={false}
            description={technologyContent}
            image="/images/feature.svg"
            imageAlt="First feature alt text"
            imageOverride={true}
          />  
        </div> 
        <div className='flex items-center'>
          <h1 className='text-gray-800 text-4xl mx-auto mt-20 font-bold'>{t('products')}</h1>
        </div>
        {/**<div id="productsBM">  
          <VerticalFeatureRow
            title='BM'
            isProduct={true}
            description={BMContent}
            image="/images/BM.png"
            imageAlt="BM alt text"
            reverse={true}
          />   
        </div>
        <div id="productsQM">  
          <VerticalFeatureRow
            title='QM'
            isProduct={true}
            description={QMContent}
            image="/images/QE.png"
            imageAlt="QM alt text"
          />   
        </div>
        <div id="productsBES">  
          <VerticalFeatureRow
            title='BES'
            isProduct={true}
            description={BESContent}
            image="/images/BES.png"
            imageAlt="BES alt text"
            reverse={true}
          />   
        </div>
        <div id="productsSEG">  
          <VerticalFeatureRow
            title='SEG'
            isProduct={true}
            description={SEGContent}
            image="/images/SEG.png"
            imageAlt="SEG alt text"
          />   
        </div>*/}
      </Section>
      <ProductGallery content={{BMContent: BMContent, QMContent: QMContent, BESContent: BESContent, SEGContent: SEGContent}} />
      <div id="services" className='flex flex-wrap'>
        <div className="w-full sm:w-1/2 mt-20 text-center sm:px-6">
            <h3 className="text-3xl text-gray-900 font-semibold">{t('services')}</h3>
            <div className='mt-20 flex flex-wrap'>
              <div className="w-full sm:w-1/2 m-15 mx-auto my-auto">
                <Image className='mx-auto my-auto' src="https://ensemble-cms.s3.amazonaws.com/Onour_0072e04b3b.png?updated_at=2022-04-27T05:27:34.083Z" width={200} height={200}/>
              </div>
              <div className="w-full sm:w-1/2 m-15 mx-auto my-auto">
                <Image className='mx-auto my-auto' src="https://ensemble-cms.s3.amazonaws.com/woopie_905b0cf195.png?updated_at=2022-04-27T05:27:34.462Z" width={200} height={200}/>
              </div>
            </div> 
        </div>
        <div className="w-full sm:w-1/2 mt-20 text-center sm:px-6">
            <h3 className="text-3xl text-gray-900 font-semibold">{t('partners')}</h3>
            <div className='mt-20 flex flex-wrap'>
              <div className="w-full sm:w-1/2 m-15 mx-auto my-auto">
                <Image className='mx-auto my-auto' src="https://ensemble-cms.s3.amazonaws.com/cyberport_145c5db3d0.png?updated_at=2022-04-27T05:27:34.426Z" width={200} height={200}/>
              </div>
              <div className="w-full sm:w-1/2 m-15 mx-auto my-auto">
                <Image className='mx-auto my-auto' src="https://ensemble-cms.s3.amazonaws.com/jade_679f58d26e.png?updated_at=2022-04-27T05:27:34.422Z" width={200} height={200}/>
              </div>
            </div>
        </div>
      </div>
      <Faq data={data.faq}/>
      {/** 
      <div id="faq">
        <Section
          title={t('faq')}
          description={faqContent}
        />
      </div>8/}
      {/**<div id="contact" className='flex flex-wrap'>
        <div className="w-full sm:w-1/2 mt-20 text-center sm:px-6">
          <Section
            title={t('contact')}
            description={contactContent}
          />
        </div>*/
      }
      {/** 
        <div className="w-full sm:w-1/2 mt-20 text-center sm:px-6">
          <Section>
            <NewsletterSubscribe mailChimpUrl={data.link} />
          </Section>
        </div>
      </div>
      */}
      {/** 
        <div id="contact">
        <Section
          title={t('contact')}
          description={contactContent}
        />
        </div>*/
      }
      {
        /**
        <div> 
          <Section>
            <NewsletterSubscribe mailChimpUrl={data.link} />
          </Section>
        </div>
         */
      }
    </div>
  )
}
