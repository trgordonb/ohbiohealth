import { useTranslation } from 'react-i18next'
import Script from 'next/script'

export default function Hero() {
  const { t } = useTranslation()

  return (
  <>
    <Script src='https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js'/>
    <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            className="block w-full h-96 font-black"
            alt="..."
          />
          <div className="carousel-caption absolute text-center">
            <h5 className="text-3xl">{t('welcome')}</h5>
            <p>{t('energy')}</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            className="block w-full h-96 font-black"
            alt="..."
          />
          <div className="carousel-caption absolute text-center">
            <h5 className="text-3xl">{t('welcome')}</h5>
            <p>{t('energy')}</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            className="block w-full h-96 font-black"
            alt="..."
          />
          <div className="carousel-caption absolute text-center">
            <h5 className="text-3xl">{t('welcome')}</h5>
            <p>{t('energy')}</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </>
  )
}