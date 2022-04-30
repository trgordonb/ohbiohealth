import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react'
import useRequest from '../../hooks/use-request'
import { useTranslation } from 'react-i18next'

export default function CertRegistrationPage() {
  const [walletAddress, setWalletAddress] = useState('')
  const [tokenId, setTokenId] = useState(0)
  const [email, setEmail] = useState('')
  const [txHash, setTxHash] = useState('')
  const [txNetwork, setTxNetwork] = useState('')
  const [docIPFSUri, setDocIPFSUri] = useState('')
  const [metaDataIPFSUri, setMetaDataIPFSUri] = useState('')
  const { t } = useTranslation()

  const { doRequest, errors } = useRequest({
    url: '/api/profiles/certs',
    method: 'post',
    body: {
      email,
      walletAddress,
      tokenId,
      txNetwork,
      txHash,
      docIPFSUri,
      metaDataIPFSUri
    },
    onSuccess: (data) => {
      if (data && data.id) {
        toast.info('Cert record added sucessfully')
      }
      setEmail('')
      setWalletAddress('')
      setTokenId(0)
      setTxHash('')
      setTxNetwork('')
      setDocIPFSUri('')
      setMetaDataIPFSUri('')
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
      <div className='w-full md:w-96 md:max-w-full mx-auto'>
        <h1 className='mt-10 mb-10 font-bold text-xl'>{t('regcert')}</h1>
      </div>
      <ToastContainer />
      <div className="w-full md:w-96 md:max-w-full mx-auto">
        <div className="p-6 border border-gray-300 sm:rounded-md">
          <form onSubmit={handleSubmit}>
            <div>
                <label className='block mb-6'>
                    <span className='text-gray-700'>User email</span>
                    <input
                        id='email'
                        name='email'
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={email}
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>    
                <label className='block mb-6'>
                    <span className='text-gray-700'>User crypto wallet address</span>
                    <input
                        id='walletAddress'
                        name='walletAddress'
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={walletAddress}
                        type="text"
                        onChange={(e) => setWalletAddress(e.target.value)}
                    />
                </label>    
                <label className="block mb-6">
                    <span className="text-gray-700">NFT token ID</span>
                    <input
                        name="tokenId"
                        id="tokenId"
                        value={tokenId}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        onChange={(e) => setTokenId(e.target.value)}
                    />    
                </label>
                <label className='block mb-6'>
                    <span className='text-gray-700'>Crypto transaction network</span>
                    <input
                        id='txNetWork'
                        name='txNetWork'
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={txNetwork}
                        type="text"
                        onChange={(e) => setTxNetwork(e.target.value)}
                    />
                </label>
                <label className='block mb-6'>
                    <span className='text-gray-700'>NFT minting transaction hash</span>
                    <input
                        id='txHash'
                        name='txHash'
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={txHash}
                        type="text"
                        onChange={(e) => setTxHash(e.target.value)}
                    />
                </label>
                <label className='block mb-6'>
                    <span className='text-gray-700'>Cert document URL</span>
                    <input
                        id='docIPFSUri'
                        name='docIPFSUri'
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={docIPFSUri}
                        type="text"
                        onChange={(e) => setDocIPFSUri(e.target.value)}
                    />
                </label>
                <label className='block mb-6'>
                    <span className='text-gray-700'>Cert meta data URL</span>
                    <input
                        id='metaDataIPFSUri'
                        name='metaDataIPFSUri'
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={metaDataIPFSUri}
                        type="text"
                        onChange={(e) => setMetaDataIPFSUri(e.target.value)}
                    />
                </label>
            </div>
            <input 
                type='submit' 
                value={t('submit')}
                className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800" 
            />
          </form>
        </div>
      </div>
    </div>
  )
}