import {useState, useEffect, useContext} from "react";
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Script from 'next/script'
import bodyback from '../public/images/bodyback.jpg'
import bodyfront from '../public/images/bodyfront.jpg'
import bodyLeft from '../public/images/bodyleft.jpg'
import bodyRight from '../public/images/bodyright.jpg'

const SurveyPage = ({ currentUser }) => {
    const { t, i18n } = useTranslation()
    const [page, setPage] = useState(1)
    const [messageHead, setMesaageHead] = useState(t('pain1'))
    const [messageContent, setMessageContent] = useState('')
    const [formResult, setFormResult] = useState({
        q1: 'n',
        q2: 'n',
        q3: 'n',
        q4: 'n',
        painPoints: []
    })

    const handleSubmit = () => {
        console.log(formResult)
        console.log(currentUser)
        if (!currentUser) {
            setMessageContent(t('plslogin'))
            setShowModal(true)
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
                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">{messageHead}</h5>
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
                                    [...Array(14).keys()].map(item => (
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
                                        [...Array(8).keys()].map(item => (
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
                                    [...Array(8).keys()].map(item => (
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
                            page <= 5 &&
                            <button     
                                className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                                    hover:bg-teal-200 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition"
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal"
                                onClick={() => {
                                    if (page < 5) {
                                        setPage(page+1)
                                    } else {
                                        handleSubmit()
                                    }}
                                }
                            >
                                {page < 5 ? t('next'): t('submit')}
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}



export default SurveyPage;
