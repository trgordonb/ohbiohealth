import { FaRocket } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react'
import styles from '@/styles/AuthForm.module.css'
import useRequest from '../../hooks/use-request'
import { useTranslation } from 'react-i18next'
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'

export default function DeviceRegPage() {
  const [deviceId, setDeviceId] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  const [fileName, setFileName] = useState('-')
  const { t, i18n } = useTranslation()

  const { doRequest, errors } = useRequest({
    url: '/api/devices',
    method: 'put',
    body: {
      deviceId: deviceId,
      purchaseProofUrl: fileUrl
    },
    onSuccess: (data) => {
      if (data && data.id) {
        toast.info('Device sucessfully registered')
      }
      setDeviceId('')
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    doRequest()
  }

  useEffect(() => {
    if (errors) {
      toast.error(errors)
    }
  },[errors])

  return (
    <div>
      <div className={styles.auth}>
        <h1>
          <FaRocket /> {t('regdevice')}
        </h1>
        <ToastContainer />
        <WidgetLoader />
        <Widget
          sources={['local']}
          cloudName={process.env.NEXT_CLOUDINARY_CLOUD}
          uploadPreset={process.env.NEXT_CLOUDINARY_PRESET}
          folder={'ohbiohealth'}
          logging={false}
          onSuccess={(res) => {
            let tmpFileUrl = res.info.url
            if (res.info.format === 'pdf'){
              tmpFileUrl = tmpFileUrl.slice(0, tmpFileUrl.length-3) + 'jpg'
            }
            setFileName(res.info.original_filename)
            setFileUrl(tmpFileUrl)
          }}
          onFailure={(res) => console.log(res)}
        />
        <p>{fileName}</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='deviceId'>{t('deviceid')}</label>
                <input
                    id='deviceId'
                    value={deviceId}
                    type="text"
                    onChange={(e) => setDeviceId(e.target.value)}
                />
            </div>
            
          <input type='submit' value={t('submit')} className='btn' />
        </form>

      </div>
    </div>
  )
}