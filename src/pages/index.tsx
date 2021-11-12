import type { NextPage } from 'next'
import Head from '~/components/Head'

const Home: NextPage = () => {
  return (
    <div>
      <Head title="トップページ" />

      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>
  )
}

export default Home
