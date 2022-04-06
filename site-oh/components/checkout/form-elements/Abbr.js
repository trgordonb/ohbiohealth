import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'

const Abbr = ({required}) => {
    const { t, i18n } = useTranslation()

    if ( !required ) {
    	return null;
    }

    return <abbr className="text-red-500" style={{textDecoration: 'none'}} title={t('required')}>*</abbr>
}

Abbr.propTypes = {
    required: PropTypes.bool
}

Abbr.defaultProps = {
    required: false
}

export default Abbr
