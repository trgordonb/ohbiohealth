import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import useRequest from '../../../hooks/use-request'
 
const ActivateUser = () => {
    const router = useRouter()
    const { t } = useTranslation();
    const { hash } = router.query;

    const { doRequest: doActivate, errors } = useRequest({
      url: '/api/users/activate',
      method: 'post',
      body: { hash },
      onSuccess: () => {
        router.push('/account/activated')
      }
    })
   
    useEffect(() => {
      doActivate()
    }, [hash])

    return (
        <div className="bg-inherit h-auto">
            <div className="flex items-center justify-center py-15">
                <div className="bg-white flex items-center justify-center mx-4 md:w-2/3 ">
                    <div className="flex flex-col items-center py-20">
                        <h3 className="px-4 pt-8 pb-4 pb-32 text-center text-3xl font-bold leading-10 text-gray-800">{errors}</h3>
                        <Link href='/'>
                          <button className="mx-4 h-10 w-44 mb-16 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">{t('goback')}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default ActivateUser