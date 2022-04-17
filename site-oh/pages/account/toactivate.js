import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function ToActivatePage() {
  const { t } = useTranslation()

  return (
    <div className="bg-inherit h-auto">
        <div className="flex items-center justify-center py-15">
            <div className="bg-white flex items-center justify-center mx-4 md:w-2/3 ">
                <div className="flex flex-col items-center py-20">
                    <h1 className="px-4 pt-8 pb-4 pb-32 text-center text-3xl font-bold leading-10 text-gray-800">{t('tovalidate')}</h1>
                    <Link href='/'>
                      <button className="mx-4 h-10 w-44 mb-16 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">{t('goback')}</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}