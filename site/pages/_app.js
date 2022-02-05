import '../styles/globals.css'
import 'react-chatbot-kit/build/main.css'
import '../styles/chatbot.css'
import buildClient from '../api/build-client'
import { AppStateProvider } from '../hooks/use-appstate'
import { CartProvider } from '../hooks/use-cart'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { appWithTranslation } from '../utils/i18n'
import NextNProgress from 'nextjs-progressbar'
import { ApolloProvider } from "@apollo/client"
import client from '../data/client/ApolloClient'

const AppComponent = ({ Component, pageProps, currentUser, footerData }) => {
  return (
    <div>
      <AppStateProvider>
        <CartProvider>
          <ApolloProvider client={client}>
            <NextNProgress />
            <Header currentUser={currentUser} />
            <Component currentUser={currentUser} {...pageProps} />
            <Footer data={footerData} />
          </ApolloProvider>
        </CartProvider>
      </AppStateProvider>
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