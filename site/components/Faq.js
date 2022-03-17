import { useTranslation } from 'react-i18next'

const FAQ = (props) => {
    const { t, i18n } = useTranslation()

    return (
  /**<div
    classNameName={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div classNameName="mb-12 text-center">
        {props.title && (
          <h2 classNameName="text-4xl text-gray-900 font-bold">{props.title}</h2>
        )}
        {props.description && props.large && (
          <ReactMarkdown classNameName="mt-6 text-xl leading-9 whitespace-pre-wrap">
            {props.description}
          </ReactMarkdown>
        )}
        {props.description && !props.large && (
          <ReactMarkdown classNameName="mt-6 text-base leading-6 whitespace-pre-wrap">
            {props.description}
          </ReactMarkdown>
        )}
      </div>
    )}

    {props.children}
  </div>*/

      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <h2 className="text-3xl font-bold mb-6 pl-6">{t('faq')}</h2>
        {

        }
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="flush-headingOne">
                <button
                  className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                  aria-controls="flush-collapseOne">
                  Anim pariatur cliche reprehenderit?
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show"
                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body py-4 px-5 text-gray-500">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            
          </div>
        </section>        
      </div>
)}

export { FAQ }
