import '../styles/globals.css'
import buildClient from '../api/build-client'
import App from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { appWithTranslation } from '../utils/i18n'

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
        <Component currentUser={currentUser} {...pageProps} />
      <Footer />
    </div>
  )
}

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);
  }

  return {
    pageProps,
    ...data
  }
}

export default appWithTranslation(AppComponent)
