import type { NextPage } from 'next'
import Image from 'next/image'
import Head from '~/components/Head'
import Oval from '~/components/Button/Oval'

const ICON = require('../../public/my-icon.jpg') 

const Home: NextPage = () => {
  return (
    <>
      <Head />

      <div className="w-full h-screen snap overflow-y-auto scrolling-touch">
        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-jade">
          <h1 className="m-8 text-white">Welcome to</h1>
          <h1 className="m-8 text-white">Sekiyan&#039;s website.</h1>
          <div className="m-5">
            <Oval>Twitter</Oval>
            <Oval>はてなブログ</Oval>
          </div>
          <p className="text-white">Scroll</p>
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-100">
          <h2>Profile</h2>
          <div className="text-center m-10">
            <Image
              src={ICON}
              alt="my icon"
              width={200}
              height={200}
              className="rounded-full"
            />
            <p className="text-3xl">nickname: Sekiyan</p>
            <p className="text-3xl">from: Nagoya Aichi</p>
            <p className="text-3xl">University: Kanazawa Institute of Technology</p>
          </div>
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-800">
          <h2 className="text-white">History</h2>
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-100">
          <h2>Product</h2>
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-800">
          <h2 className="text-white">Hobby</h2>
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-100">
          <h2>Contact</h2>
          <div className="m-10">
            <Oval>Twitter</Oval>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
