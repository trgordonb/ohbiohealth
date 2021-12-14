import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';

const NewsletterSubscribe = () => {

  //const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  const MAILCHIMP_URL = 'https://ensembletechs.us20.list-manage.com/subscribe/post?u=28653a604c74efc74ca707df0&amp;id=043676552b'

  return (
    <MailchimpSubscribe
      url={ MAILCHIMP_URL }
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={ status }
            message={ message }
            onValidated={ formData => subscribe( formData ) }
          />
        );
      } }
    />
  );
};

export default NewsletterSubscribe;