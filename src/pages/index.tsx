// react/nextの機能
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// Intersection Observer
import { useInView } from 'react-intersection-observer'

//自作コンポーネント
import Down from '~/components/Button/Down'
import Circle from '~/components/Circle'
import Head from '~/components/Head'
import { Heading } from '~/components/Heading'
import NavLink from '~/components/NavLink'
import VerticalLine from '~/components/VerticalLine'

// section
import Top from '~/sections/Top'
import Profile from '~/sections/Profile'
import Hobby from '~/sections/Hobby'
import Contact from '~/sections/Contact'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar, faBuilding, faSchool } from '@fortawesome/free-solid-svg-icons'

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

        <section
          ref={careerRef}
          id="career"
          className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-800"
        >
          <Heading className="text-white">Career</Heading>
          <table className="m-8 text-white">
            <tbody>
              <tr>
                <td className="p-0">2015</td>
                <td className="px-3 py-0">
                  <Circle>
                    <FontAwesomeIcon
                      icon={faGuitar}
                      className="text-black w-3/4"
                    />
                  </Circle>
                </td>
                <td className="p-0">中部楽器技術専門学校 弦楽器制作科ギタークラフトコース</td>
              </tr>
              <tr>
                <td className="p-0"></td>
                <td className="text-center h-24"><VerticalLine/></td>
                <td className="h-24">エレキギター、エレキベース、アコースティックギターなどの制作、リペアなどを学ぶ</td>
              </tr>
              <tr>
                <td className="p-0">2017</td>
                <td className="px-3 py-0">
                  <Circle>
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="text-black w-3/5"
                    />
                  </Circle>
                </td>
                <td className="p-0">楽器卸売会社</td>
              </tr>
              <tr>
                <td className="p-0"></td>
                <td className="text-center h-24"><VerticalLine/></td>
                <td className="h-24">社内で電話対応、梱包、発送、楽器修理の管理などを担当</td>
              </tr>
              <tr>
                <td className="p-0">2019</td>
                <td className="px-3 py-0">
                  <Circle>
                    <FontAwesomeIcon
                      icon={faSchool}
                      className="text-black w-3/4"
                    />
                  </Circle>
                </td>
                <td className="p-0">金沢工業大学 工学部情報工学科</td>
              </tr>
              <tr>
                <td className="p-0"></td>
                <td className="p-0"></td>
                <td className="p-0">CirKit、Tourismなどのプロジェクト活動に参加し、Web開発を行う</td>
              </tr>
            </tbody>
          </table>
          <Down href="#product" className="text-white" />
        </section>

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
