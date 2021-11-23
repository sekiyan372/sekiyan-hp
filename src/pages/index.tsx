// react/nextの機能
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// Intersection Observer
import { useInView } from 'react-intersection-observer'

//自作コンポーネント
import Down from '~/components/Button/Down'
import Head from '~/components/Head'
import { Heading } from '~/components/Heading'
import NavLink from '~/components/NavLink'

// section
import Top from '~/sections/Top'
import Profile from '~/sections/Profile'
import Career from '~/sections/Career'
import Hobby from '~/sections/Hobby'
import Contact from '~/sections/Contact'

// ページ内画像
const PRODUCT = require('../../public/image/product-page.png')

const Home: NextPage = () => {
  const [topRef, inTopView] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  })

  const [profileRef, inProfileView] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  })

  const [careerRef, inCareerView] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  })

  const [productRef, inProductView] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  })

  const [hobbyRef, inHobbyView] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  })

  const [contactRef, inContactView] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  })

  return (
    <>
      <Head />

      <div className="w-full h-screen snap overflow-y-auto scrolling-touch">
        <Top ref={topRef} />
        <Profile ref={profileRef} />
        <Career ref={careerRef} />

        <section
          ref={productRef}
          id="product"
          className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-200"
        >
          <Heading>Product</Heading>
          <Link href="/product" passHref>
            <div className="relative flex justify-center items-center w-160 h-96 m-8 cursor-pointer">
              <div className="absolute w-160 h-96 my-12 bg-black inline-block">
                <Image
                  src={PRODUCT}
                  alt="product page"
                  width={640}
                  height={384}
                  className="block opacity-40"
                />
              </div>
              <p className="absolute text-3xl text-white">Please click to move the page.</p>
            </div>
          </Link>
          <Down href="#hobby" />
        </section>

        <Hobby ref={hobbyRef} />
        <Contact ref={contactRef} />
      </div>

      <nav id="pagination" className="fixed top-1/2 right-8 nav-transform">
        <NavLink inView={inTopView} href="#top" />
        <NavLink inView={inProfileView} href="#profile" />
        <NavLink inView={inCareerView} href="#career" />
        <NavLink inView={inProductView} href="#product" />
        <NavLink inView={inHobbyView} href="#hobby" />
        <NavLink inView={inContactView} href="#contact" />
      </nav>
    </>
  )
}

export default Home
