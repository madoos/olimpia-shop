import { Provider } from 'react-redux'
import { useStore } from '@store/index'
import { AppProps } from 'next/app'

function App ({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App