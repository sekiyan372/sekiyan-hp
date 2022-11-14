import type { NextPage } from 'next'
import { useInView } from 'react-intersection-observer'

import { Head } from '~/components/Layout'
import { NavLink } from '~/components/Link'
import {
  Career,
  Contact,
  Hobby,
  Product,
  Profile,
  Top,
} from '~/sections/topPage'

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
        <Product ref={productRef} />
        <Hobby ref={hobbyRef} />
        <Contact ref={contactRef} />
      </div>

      <nav
        id="pagination"
        className="fixed top-1/2 md:right-8 right-4 nav-transform"
      >
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
