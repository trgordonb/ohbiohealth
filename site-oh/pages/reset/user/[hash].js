import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import useRequest from '../../../hooks/use-request'
 
const ResetUser = () => {
    const router = useRouter()
    const { t, i18n } = useTranslation();
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const { hash } = router.query;

    const { doRequest, errors } = useRequest({
        url: '/api/users/reset-password',
        method: 'post',
        body: {
            hash,
            password
        },
        onSuccess: () => {
            toast.info(t('resetok'))
            router.push({pathname: '/account/signin'})
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password !== passwordConfirm) {
            toast.error(t('nopwdmatch'))
            return
        }
        
        doRequest()
    }

    useEffect(() => {
        if (errors) {
          toast.error(errors)
        }
    },[errors])

    return (
        <div className="bg-inherit h-auto">
            <div className="flex items-center justify-center py-15">
                <div className="bg-white flex items-center justify-center mx-4 md:w-2/3 ">
                    <div className="flex flex-col items-center py-20">
                        <h1 className="px-4 pt-8 pb-4 pb-10 text-center text-2xl font-bold leading-10 text-gray-800">{t('resetpwd')}</h1>
                        <ToastContainer />
                        <form onSubmit={handleSubmit}>
                            <input
                                type="password"
                                className="form-control block w-full px-3 py-1.5 mt-10 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="password"
                                name="password"
                                placeholder={t('password')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="password"
                                className="form-control block w-full px-3 py-1.5 mt-10 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="confirmpassword"
                                name="confirmpassword"
                                placeholder={t('confirmpwd')}
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            />
                            <input 
                                type='submit' 
                                value={t('submit')} 
                                className="inline-block px-6 py-2.5 text-white mt-10 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-indigo-500 to-cyan-500"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default ResetUser