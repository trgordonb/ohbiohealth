import { useTranslation } from 'react-i18next'

const PreOrderButton = (props) => {
    const { t, i18n } = useTranslation()
    const {product} = props;

    const handlePreOrder = () => {
        console.log(product)
    };

    return (
        <div>
            <button
                onClick={handlePreOrder}
                className='px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current hover:bg-purple-600 hover:text-white hover:border-purple-600'    
            >
                {t('preorder')}
            </button>
        </div>
    );
};

export default PreOrderButton;
