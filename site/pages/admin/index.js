import { FaRocket } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import styles from '@/styles/AuthForm.module.css'
import Router from 'next/router'
import useRequest from '../../hooks/use-request'
import { useTranslation } from 'react-i18next'

export default function SigninPage() {
  const [deviceId, setDeviceId] = useState('')
  const [deviceType, setDeviceType] = useState('')
  const { t, i18n } = useTranslation()

  const { doRequest, errors } = useRequest({
    url: '/api/devices',
    method: 'post',
    body: {
      deviceId,
      deviceType
    },
    onSuccess: (data) => {
      if (data && data.id) {
        toast.info('Device record added sucessfully')
      }
      setDeviceId('')
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    doRequest()
  }

  return (
    <div>
      <div className={styles.auth}>
        <h1>
          <FaRocket /> {t('regdevice')}
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>{t('deviceid')}</label>
            <input
              id='deviceId'
              value={deviceId}
              type="text"
              onChange={(e) => setDeviceId(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='devicetype'>{t('devicetype')}</label>
            <select onChange={(e) => setDeviceType(e.target.value)} id="devicetype" name="devicetype">
                <option value="QM">QM</option>
                <option value="BM">BM</option>
                <option value="BES">BES</option>
            </select>
          </div>

          <input type='submit' value={t('submit')} className='btn' />
        </form>

      </div>
    </div>
  )
}