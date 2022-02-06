import validator from 'validator';
import isEmpty from './isEmpty';


const validateAndSanitizeCheckoutForm = ( data, hasStates = true, t ) => {

	let errors = {};
	let sanitizedData = {};

	/**
	 * Set the firstName value equal to an empty string if user has not entered the firstName, otherwise the Validator.isEmpty() wont work down below.
	 * Note that the isEmpty() here is our custom function defined in is-empty.js and
	 * Validator.isEmpty() down below comes from validator library.
	 * Similarly we do it for for the rest of the fields
	 */
	data.firstName = ( ! isEmpty( data.firstName ) ) ? data.firstName : '';
	data.lastName = ( ! isEmpty( data.lastName ) ) ? data.lastName : '';
	data.company = ( ! isEmpty( data.company ) ) ? data.company : '';
	data.country = ( ! isEmpty( data.country ) ) ? data.country : '';
	data.address1 = ( ! isEmpty( data.address1 ) ) ? data.address1 : '';
	data.address2 = ( ! isEmpty( data.address2 ) ) ? data.address2 : '';
	data.city = ( ! isEmpty( data.city ) ) ? data.city : '';
	data.state = ( ! isEmpty( data.state ) ) ? data.state : '';
	data.postcode = ( ! isEmpty( data.postcode ) ) ? data.postcode : '';
	data.phone = ( ! isEmpty( data.phone ) ) ? data.phone : '';
	data.email = ( ! isEmpty( data.email ) ) ? data.email : '';
	data.createAccount = ( ! isEmpty( data.createAccount ) ) ? data.createAccount : '';
	data.orderNotes = ( ! isEmpty( data.orderNotes ) ) ? data.orderNotes : '';
	// data.paymentMethod = ( ! isEmpty( data.paymentMethod ) ) ? data.paymentMethod : '';

	/**
	 * Checks for error if required is true
	 * and adds Error and Sanitized data to the errors and sanitizedData object
	 *
	 * @param {String} fieldName Field name e.g. First name, last name
	 * @param {String} errorContent Error Content to be used in showing error e.g. First Name, Last Name
	 * @param {Integer} min Minimum characters required
	 * @param {Integer} max Maximum characters required
	 * @param {String} type Type e.g. email, phone etc.
	 * @param {boolean} required Required if required is passed as false, it will not validate error and just do sanitization.
	 */
	const addErrorAndSanitizedData = ( fieldName, errorContent, min, max, type = '', required ) => {

		/**
		 * Please note that this isEmpty() belongs to validator and not our custom function defined above.
		 *
		 * Check for error and if there is no error then sanitize data.
		 */
		if ( ! validator.isLength( data[ fieldName ], { min, max } ) ){
			errors[ fieldName ] = `${errorContent} ${t('mustbe')} ${min} ${t('to')} ${max} ${t('character')}`;
		}

		if ( 'email' === type && ! validator.isEmail( data[ fieldName ] ) ){
			errors[ fieldName ] = `${errorContent} ${t('notvalid')}`;
		}

		if ( 'phone' === type && ! validator.isMobilePhone( data[ fieldName ] ) ) {
			errors[ fieldName ] = `${errorContent} ${t('notvalid')}`;
		}

		if ( required && validator.isEmpty( data[ fieldName ] ) ) {
			errors[ fieldName ] = `${errorContent} ${t('isrequired')}`;
		}

		// If no errors
		if ( ! errors[ fieldName ] ) {
			sanitizedData[ fieldName ] = validator.trim( data[ fieldName ] );
			sanitizedData[ fieldName ] = ( 'email' === type ) ? validator.normalizeEmail( sanitizedData[ fieldName ] ) : sanitizedData[ fieldName ];
			sanitizedData[ fieldName ] = validator.escape( sanitizedData[ fieldName ] );
		}

	};

	addErrorAndSanitizedData( 'firstName', t('firstname'), 2, 35, 'string', true );
	addErrorAndSanitizedData( 'lastName', t('lastname'), 2, 35, 'string', true );
	addErrorAndSanitizedData( 'company', t('company'), 0, 35, 'string', false );
	addErrorAndSanitizedData( 'country', t('country'), 2, 55, 'string', true );
	addErrorAndSanitizedData( 'address1', t('address1'), 12, 100,'string',true );
	addErrorAndSanitizedData( 'address2', t('address2'), 0, 254, 'string', false );
	addErrorAndSanitizedData( 'city', t('city'), 3, 25, 'string', true );
	addErrorAndSanitizedData( 'state', t('state'), 0, 254, 'string', hasStates );
	addErrorAndSanitizedData( 'postcode', t('postcode'), 2, 10, 'postcode', true );
	addErrorAndSanitizedData( 'phone', t('phone'), 8, 15, 'phone', true );
	addErrorAndSanitizedData( 'email', t('email'), 11, 254, 'email', true );

	// The data.createAccount is a boolean value.
	sanitizedData.createAccount = data.createAccount;
	addErrorAndSanitizedData( 'orderNotes', '', 0, 254, 'string', false );
	// @TODO Payment mode error to be handled later.
	// addErrorAndSanitizedData( 'paymentMethod', 'Payment mode field', 2, 50, 'string', false );

	return {
		sanitizedData,
		errors,
		isValid: isEmpty( errors )
	}
};

export default validateAndSanitizeCheckoutForm;

