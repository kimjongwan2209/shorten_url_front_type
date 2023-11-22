import React from "react"
import { AppProps } from 'next/app';
import '../styles/fontStyle.css'
import '../styles/globals.css'
import UrlProvider from '../components/Provider'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <UrlProvider>
      <Component {...pageProps} />
    </UrlProvider>
  )
}

export default App;
