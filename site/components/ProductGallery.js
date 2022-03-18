import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';


export default function ProductGallery(content) {
  const router = useRouter()

  return (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        <div className="relative mx-auto w-full">
          <a href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
            <div className="shadow p-4 rounded-lg bg-white">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-[500px]">
                <div className="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full bg-gradient-to-r from-indigo-500 to-cyan-500 p-5 overflow-auto">
                  <h2 className="text-3xl text-gray-800 font-semibold px-5">BM</h2>
                    <img className='mx-auto object-center p-4 float-right bg-white ml-10' src={`${router.basePath}/images/BM.png`} alt='BM alt text' width={200} height={200}/>   
                    <ReactMarkdown className="mt-6 text-base text-gray-800 leading-6 whitespace-pre-wrap list-disc px-5">
                      {content.content.BMContent}
                    </ReactMarkdown>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="relative mx-auto w-full">
          <a href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
            <div className="shadow p-4 rounded-lg bg-white">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-[500px]">
                <div className="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full bg-gradient-to-r from-indigo-500 to-cyan-500 p-5 overflow-auto">
                  <h2 className="text-3xl text-gray-800 font-semibold px-5">QM</h2>
                    <img className='mx-auto object-center p-4 float-right bg-white ml-10' src={`${router.basePath}/images/QE.png`} alt='QM alt text' width={200} height={200}/>   
                    <ReactMarkdown className="mt-6 text-base text-gray-800 leading-6 whitespace-pre-wrap list-disc px-5">
                      {content.content.QMContent}
                    </ReactMarkdown>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="relative mx-auto w-full">
          <a href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
            <div className="shadow p-4 rounded-lg bg-white">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-[500px]">
                <div className="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full bg-gradient-to-r from-indigo-500 to-cyan-500 p-5 overflow-auto">
                  <h2 className="text-3xl text-gray-800 font-semibold px-5">BES</h2>
                    <img className='mx-auto object-center p-4 float-right bg-white ml-10' src={`${router.basePath}/images/BES.png`} alt='BES alt text' width={200} height={200}/>   
                    <ReactMarkdown className="mt-6 text-base text-gray-800 leading-6 whitespace-pre-wrap list-disc px-5">
                      {content.content.BESContent}
                    </ReactMarkdown>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="relative mx-auto w-full">
          <a href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
            <div className="shadow p-4 rounded-lg bg-white">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-[500px]">
                <div className="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full bg-gradient-to-r from-indigo-500 to-cyan-500 p-5 overflow-auto">
                  <h2 className="text-3xl text-gray-800 font-semibold px-5">SEG</h2>
                    <img className='mx-auto object-center p-4 float-right bg-white ml-10' src={`${router.basePath}/images/SEG.png`} alt='BM alt text' width={200} height={200}/>   
                    <ReactMarkdown className="mt-6 text-base text-gray-800 leading-6 whitespace-pre-wrap list-disc px-5">
                      {content.content.SEGContent}
                    </ReactMarkdown>
                </div>
              </div>
            </div>
          </a>
        </div>
    </div>
  </>
  )
}