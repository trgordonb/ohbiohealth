import className from 'classnames';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

const VerticalFeatureRow = (props) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className={`w-full sm:w-1/2 text-left sm:px-6 py-6 rounded-lg shadow-lg bg-gradient-to-r ${props.reverse? ' from-gray-200 to-gray-200': ' from-gray-200 to-gray-200'}`}>
        <h2 className="text-3xl text-gray-800 font-semibold">{props.title}</h2>
        {
          props.isProduct &&
          <img className='mx-auto object-center p-4 float-right bg-white ml-10' src={`${router.basePath}${props.image}`} alt={props.imageAlt} width={250} height={250}/>
        }
        <ReactMarkdown className="mt-6 text-base text-gray-800 leading-6 whitespace-pre-wrap list-disc">
          {props.description}
        </ReactMarkdown>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        {
          props.imageOverride ?
          <img className='mx-auto object-center p-4' src={`${router.basePath}${props.image}`} alt={props.imageAlt} />:
          <img className='mx-auto object-center p-4' src={`${router.basePath}${props.image}`} alt={props.imageAlt} width={300} height={300}/>
        }
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
