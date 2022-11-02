import 'tailwindcss/tailwind.css'
import '~/globals.css'

import { NextPage } from 'next'
import { AppProps } from 'next/app'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
