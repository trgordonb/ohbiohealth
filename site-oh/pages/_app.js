import '../styles/globals.css'
import 'react-chatbot-kit/build/main.css'
import '../styles/chatbot.css'
import buildClient from '../api/build-client'
import { AppStateProvider } from '../hooks/use-appstate'
import { CartProvider } from '../hooks/use-cart'
import Header from '@/components/Header'
import NewFooter from '@/components/NewFooter'
import { appWithTranslation } from '../utils/i18n'
import NextNProgress from 'nextjs-progressbar'
import { ApolloProvider } from "@apollo/client"
import client from '../data/client/ApolloClient'

const AppComponent = ({ Component, pageProps, currentUser, contact }) => {
  return (
    <div>
      <AppStateProvider>
        <CartProvider>
          <ApolloProvider client={client}>
            <NextNProgress />
            <Header currentUser={currentUser} />
            <Component currentUser={currentUser} {...pageProps} />
            <NewFooter data={contact} />
          </ApolloProvider>
        </CartProvider>
      </AppStateProvider>
    </div>
  )
}

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');
  const options = {headers: new Headers({'Content-Type': 'application/json'})}
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);
  }
  const resEN = await fetch('http://ensemble-tech.xyz/api/documents/?filters[type]=contact&&filters[client]=oh', {
    method: 'GET', ...options
  })
  const resZH = await fetch('http://ensemble-tech.xyz/api/documents/?locale=zh-Hant-HK&&filters[type]=contact&&filters[client]=oh', {
    method: 'GET', ...options
  })
  const contactEN = await resEN.json()
  const contactZH = await resZH.json()

  return {
    pageProps,
    ...data,
    contact: {
      en: contactEN.data[0].attributes,
      zh: contactZH.data[0].attributes
    }
  }
}

export default appWithTranslation(AppComponent)