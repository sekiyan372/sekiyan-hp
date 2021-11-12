import type { NextPage } from 'next'
import Head from '~/components/Head'

const Home: NextPage = () => {
  return (
    <>
      <Head />

      <div className="w-full h-screen snap overflow-y-auto scrolling-touch">
        <section className="w-full h-screen snap-start">
          <h1>Welcome to Sekiyan&#039;s Site</h1>
        </section>

        <section className="w-full h-screen snap-start">
          <h2>profile</h2>
          <div>
            <p>name: Suiki Sekiya</p>
            <p>from: Nagoya Aichi</p>
          </div>
        </section>

        <section className="w-full h-screen snap-start">
          <h2>history</h2>
        </section>

        <section className="w-full h-screen snap-start">
          <h2>product</h2>
        </section>

        <section className="w-full h-screen snap-start">
          <h2>hobby</h2>
        </section>

        <section className="w-full h-screen snap-start">
          <h2>contact</h2>
        </section>
      </div>
    </>
  )
}

export default Home
