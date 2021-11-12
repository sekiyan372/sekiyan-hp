import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import 'tailwindcss/tailwind.css'
import '~/globals.css'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return(
    <>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  )
}

export default App
