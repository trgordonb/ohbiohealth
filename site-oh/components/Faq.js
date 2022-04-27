import React, { useState } from "react"
import { useTranslation } from 'react-i18next'

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <div id='faq' className="border rounded shadow-sm mb-18">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-gray-600 transition-transform duration-200 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
};
  
export const Faq = (data) => {
    const { t, i18n } = useTranslation()

    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center">
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="max-w-lg mt-16 mx-auto font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                {t('faq')}                  
              </h2>
            </div>
          </div>
          <div className="space-y-4">
              {
                  data.data.map(item => (
                  <>
                    <Item title={item.attributes.question}>
                        {item.attributes.answer}
                    </Item>
                  </>))
              }
          </div>
        </div>
      </div>
    );
};