import React from 'react'
import { Provider } from 'react-redux'
import { useStore } from 'src/store/index'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@theme/index'

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)
  
  return (
      <Provider store={store}>
        <ThemeProvider>
          <Head>
            <title>Olimpia Shop</title>
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
  )
}

export default App