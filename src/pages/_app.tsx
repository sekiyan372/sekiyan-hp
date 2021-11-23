import { NextPage } from 'next'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '~/globals.css'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return(
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
