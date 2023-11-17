import '../styles/fontStyle.css'
import '../styles/globals.css'
import UrlProvider from '../components/Provider'

export default function App({ Component, pageProps }) {
  return (
    <UrlProvider>
      <Component {...pageProps} />
    </UrlProvider>
  )
}
