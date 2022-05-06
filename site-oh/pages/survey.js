import { useState } from "react";
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Script from 'next/script'
//import bodyback from '/images/bodyback.jpg'
//import bodyfront from '/images/bodyfront.jpg'
//import bodyLeft from '/images/bodyleft.jpg'
//import bodyRight from '/images/bodyright.jpg'
import axios from 'axios'

const bodyback = 'https://ensemble-cms.s3.amazonaws.com/bodyback_53bf1d3b44.jpg?updated_at=2022-05-06T01:59:57.846Z'
const bodyfront = 'https://ensemble-cms.s3.amazonaws.com/bodyfront_f087c52bb1.jpg?updated_at=2022-05-06T01:59:57.958Z'
const bodyLeft = 'https://ensemble-cms.s3.amazonaws.com/bodyleft_ec1e30dc20.jpg?updated_at=2022-05-06T01:59:57.980Z'
const bodyRight = 'https://ensemble-cms.s3.amazonaws.com/bodyright_edf6ad9653.jpg?updated_at=2022-05-06T01:59:58.056Z'


const SurveyPage = ({ currentUser }) => {
    const { t } = useTranslation()
    const [page, setPage] = useState(1)
    const [messageContent, setMessageContent] = useState('')
    const [formResult, setFormResult] = useState({
        q1: 'n',
        q2: 'n',
        q3: 'n',
        q4: 'n',
        painPoints: []
    })

    const handleSubmit = () => {
        if (!currentUser) {
            setMessageContent(t('plslogin'))
        } else {
            let arr1 = []
            let arr2 = []
            let arr3 = []
            let arr4 = []
            formResult.painPoints.forEach(point => {
                let items = point.split('.')
                if (items[0] === '2') {
                    arr1.push(parseInt(items[1]))
                } else
                if (items[0] === '3') {
                    arr2.push(parseInt(items[1]))
                } else
                if (items[0] === '4') {
                    arr3.push(parseInt(items[1]))
                } else
                if (items[0] === '5') {
                    arr4.push(parseInt(items[1]))
                }
            })
            let payload = {
                muscleache: formResult.q1 === 'y',
                needlesensation: formResult.q2 === 'y',
                burningsensation: formResult.q3 === 'y',
                numbsensation: formResult.q4 === 'y',
                painpositions: [arr1, arr2, arr3, arr4]
            }
            axios['post']('/api/engine/painanalysis', payload)
            .then(response => {
                if (response.statusText === 'OK') {
                    let resultstr = response.data.map(result => t(result)).join(',')
                    const message = `${t('possible')}${resultstr}`
                    setMessageContent(message)
                } else {
                    setMessageContent(t('noresult'))
                }
            })
        }
    }

    const handleCheckBoxResult = (evt) => {
        if (evt.target.checked) {
            formResult.painPoints.push(evt.target.id.substring(3))
        } else {
            let index = formResult.painPoints.indexOf(evt.target.id.substring(3))
            if (index >= 0) {
                formResult.painPoints.splice(index, 1)
            }
        }
    }


    return (
        <>
            <Script src='https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js'/>
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">{t('pain1')}</h5>
                            <button 
                                type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body relative p-4">{messageContent}</div>
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button 
                                type="button" 
                                className="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg
                                        focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg
                                        transition duration-150 ease-in-out" 
                                data-bs-dismiss="modal"
                            >{t('close')}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className="mx-4 p-4">
                    <div className="text-teal-600 text-2xl mt-10 mb-10">{t('pain2')}</div>
                    <div className="flex items-center">
                        <div className="flex items-center text-teal-600 relative">
                            <div className={`rounded-full text-bold text-3xl h-16 w-16 px-5 py-2 border-2 ${page===1 ? 'border-teal-600 text-teal-600': 'border-gray-300 text-gray-300'}`}>
                                1
                            </div>
                        </div>
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${page===1 ? 'border-teal-600': 'border-gray-300'}`}></div>
                        <div className="flex items-center text-white relative">
                            <div className={`rounded-full text-bold text-3xl h-16 w-16 px-5 py-2 border-2 ${page===2 ? 'border-teal-600 text-teal-600': 'border-gray-300 text-gray-300'}`}>
                                2
                            </div>
                        </div>
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${page===2 ? 'border-teal-600': 'border-gray-300'}`}></div>
                        <div className="flex items-center text-gray-500 relative">
                            <div className={`rounded-full text-bold text-3xl h-16 w-16 px-5 py-2 border-2 ${page===3 ? 'border-teal-600 text-teal-600': 'border-gray-300 text-gray-300'}`}>
                                3
                            </div>
                        </div>
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${page===3 ? 'border-teal-600': 'border-gray-300'}`}></div>
                        <div className="flex items-center text-gray-500 relative">
                            <div className={`rounded-full text-bold text-3xl h-16 w-16 px-5 py-2 border-2 ${page===4 ? 'border-teal-600 text-teal-600': 'border-gray-300 text-gray-300'}`}>
                                4
                            </div>
                        </div>
                        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${page===4 ? 'border-teal-600': 'border-gray-300'}`}></div>
                        <div className="flex items-center text-gray-500 relative">
                            <div className={`rounded-full text-bold text-3xl h-16 w-16 px-5 py-2 border-2 ${page===5 ? 'border-teal-600 text-teal-600': 'border-gray-300 text-gray-300'}`}>
                                5
                            </div>
                        </div>
                    </div>
                </div>
                {
                    page === 1 &&
                    <div className="mt-8 p-4">
                        <div className="mx-2 mt-5 text-gray-800 font-bold">{t('surveyintro')}</div>
                        <div className="flex flex-wrap mt-5">
                            <div className="mx-2 text-gray-800 w-full sm:w-1/2">{t('q1')}</div>
                            <div>
                                <select value={formResult.q1} onChange={(evt) => setFormResult({...formResult, q1: evt.target.value})} className="text-gray-600 mx-2 mt-5">
                                    <option value='y'>{t('y')}</option>
                                    <option value='n'>{t('n')}</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-5">
                            <div className="mx-2 text-gray-800 w-full sm:w-1/2">{t('q2')}</div>
                            <div>
                                <select value={formResult.q2} onChange={(evt) => setFormResult({...formResult, q2: evt.target.value})} className="text-gray-600 mx-2 mt-5">
                                    <option value='y'>{t('y')}</option>
                                    <option value='n'>{t('n')}</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-5">
                            <div className="mx-2 text-gray-800 w-full sm:w-1/2">{t('q3')}</div>
                            <div>
                                <select value={formResult.q3} onChange={(evt) => setFormResult({...formResult, q3: evt.target.value})} className="text-gray-600 mx-2 mt-5">
                                    <option value='y'>{t('y')}</option>
                                    <option value='n'>{t('n')}</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-5">
                            <div className="mx-2 text-gray-800 w-full sm:w-1/2">{t('q4')}</div>
                            <div>
                                <select value={formResult.q4} onChange={(evt) => setFormResult({...formResult, q4: evt.target.value})} className="text-gray-600 mx-2 mt-5">
                                    <option value='y'>{t('y')}</option>
                                    <option value='n'>{t('n')}</option>
                                </select>
                            </div>
                        </div> 
                    </div>
                }
                {
                    page === 2 &&
                    <div className="mt-8 p-4 flex flex-wrap">
                        <div className="mx-2 mt-10 text-gray-800 font-bold w-full sm:w-1/2">
                            {t('p1')}
                            <div className="flex flex-wrap mx-auto mt-10">
                                {
                                    [...Array(16).keys()].map((item,idx) => (
                                        <div key={`P2.${idx}`} className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input appearance-none h-4 w-4 border mt-2 mx-2 
                                                border-gray-600 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 
                                                focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center 
                                                bg-contain float-left mr-2 cursor-pointer" 
                                                type="checkbox" 
                                                id={`cb_${page}.${item+1}`} 
                                                onChange={(evt) => {handleCheckBoxResult(evt)}}
                                            />
                                            <label className="form-check-label inline-block text-xl mx-2 mt-2 text-gray-800" htmlFor={`cb_${page}.${item+1}`}>{item+1}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="mx-auto">
                            <Image src={bodyfront} alt="Body Front" width={200} height={600} />
                        </div>
                    </div>
                }
                {
                    page === 3 &&
                    <div className="mt-8 p-4 flex flex-wrap">
                        <div className="mx-2 mt-10 text-gray-800 font-bold w-full sm:w-1/2">
                            {t('p1')}
                            <div className="flex flex-wrap mx-auto mt-10">
                                {
                                    [...Array(14).keys()].map((item,idx) => (
                                        <div key={`P3.${idx}`} className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input appearance-none h-4 w-4 border mt-2 mx-2 border-gray-600 
                                                           rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none 
                                                           transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain 
                                                           float-left mr-2 cursor-pointer" 
                                                type="checkbox" 
                                                id={`cb_${page}.${item+1}`}
                                                onChange={(evt) => {handleCheckBoxResult(evt)}}
                                                value={`${page}.${item+1}`}
                                            />
                                            <label className="form-check-label inline-block text-xl mx-2 mt-2 text-gray-800" htmlFor={`cb_${page}.${item+1}`}>{item+1}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="mx-auto">
                            <Image src={bodyback} alt="Body Back" width={200} height={600} />
                        </div>
                    </div>
                }
                {
                    page === 4 &&
                    <div className="mt-8 p-4 flex flex-wrap">
                        <div className="mx-2 mt-10 text-gray-800 font-bold w-full sm:w-1/2">
                            {t('p1')}
                            <div className="flex flex-wrap mx-auto mt-10">
                                    {
                                        [...Array(8).keys()].map((item, idx) => (
                                            <div key={`P4.${idx}`} className="form-check form-check-inline">
                                                <input 
                                                    className="form-check-input appearance-none h-4 w-4 border mt-2 mx-2 border-gray-600 
                                                               rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none 
                                                               transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain 
                                                               float-left mr-2 cursor-pointer" 
                                                    type="checkbox" 
                                                    id={`cb_${page}.${item+1}`} 
                                                    onChange={(evt) => {handleCheckBoxResult(evt)}}
                                                    value={`${page}.${item+1}`}
                                                />
                                                <label className="form-check-label inline-block text-xl mx-2 mt-2 text-gray-800" htmlFor={`cb_${page}.${item+1}`}>{item+1}</label>
                                            </div>
                                        ))
                                    }
                            </div>
                        </div>
                        <div className="mx-auto">
                            <Image src={bodyLeft} alt="Body Left" width={200} height={600} />
                        </div>
                    </div>
                }
                {
                    page === 5 &&
                    <div className="mt-8 p-4 flex flex-wrap">
                        <div className="mx-2 mt-10 text-gray-800 font-bold w-full sm:w-1/2">
                            {t('p1')}
                            <div className="flex flex-wrap mx-auto mt-10">
                                {
                                    [...Array(8).keys()].map((item, idx) => (
                                        <div key={`P2.${idx}`} className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input appearance-none h-4 w-4 border mt-2 mx-2 border-gray-600 
                                                           rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 
                                                           focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat 
                                                           bg-center bg-contain float-left mr-2 cursor-pointer" 
                                                type="checkbox" 
                                                id={`cb_${page}.${item+1}`} 
                                                onChange={(evt) => {handleCheckBoxResult(evt)}}
                                                value={`${page}.${item+1}`}
                                                />
                                            <label className="form-check-label inline-block text-xl mx-2 mt-2 text-gray-800" htmlFor={`cb_${page}.${item+1}`}>{item+1}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="mx-auto">
                            <Image src={bodyRight} alt="Body Right" width={200} height={600} />
                        </div>
                    </div>
                }

                <div className="flex p-2 mt-4">
                    <div className="flex-auto flex flex-row-reverse">
                        {
                            page < 5 &&
                            <button     
                                className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                                    hover:bg-teal-200 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition"
                                onClick={() => {setPage(page+1)}}
                            >
                                {t('next')}
                            </button>
                        }
                        {
                            page === 5 &&
                            <button     
                                className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                                    hover:bg-teal-200 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition"
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal"
                                onClick={() => {handleSubmit()}}
                            >
                                {t('submit')}
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}



export default SurveyPage;
