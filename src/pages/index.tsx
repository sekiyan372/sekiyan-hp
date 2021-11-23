// react/nextの機能
import { useState, ChangeEvent } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// Intersection Observer
import { useInView } from 'react-intersection-observer'

// カルーセル
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

// EmailJS
import { send } from 'emailjs-com'
import { emailjsConfig } from '~/utils/Emailjs'

//自作コンポーネント
import Down from '~/components/Button/Down'
import Submit from '~/components/Button/Submit'
import Circle from '~/components/Circle'
import Footer from '~/components/Footer'
import Head from '~/components/Head'
import { Heading, SubHeading } from '~/components/Heading'
import Input from '~/components/Input'
import Label from '~/components/Label'
import NavLink from '~/components/NavLink'
import TextArea from '~/components/Textarea'
import VerticalLine from '~/components/VerticalLine'

// section
import Top from '~/sections/Top'
import Profile from '~/sections/Profile'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar, faBuilding, faSchool } from '@fortawesome/free-solid-svg-icons'

// ページ内画像
const PRODUCT = require('../../public/image/product-page.png')

// ギャラリー画像
const STRATOCASTER = require('../../public/image/stratocaster.JPG')
const BASS = require('../../public/image/bass.JPG')
const LESPAOL = require('../../public/image/lespaol.JPG')
const ACCOSTIC = require('../../public/image/accostic.JPG')

const Home: NextPage = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const disableSend = name === '' || email === '' || message === ''

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

  const sendMail = () => {
    if (
      emailjsConfig.serviceId !== undefined &&
      emailjsConfig.templateId !== undefined
    ) {
      const template_param = {
        to_name: name,
        from_email: email,
        message: message,
      }

      send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        template_param
      ).then(() => {
        window.alert('お問い合わせを送信致しました。')
        setName('')
        setEmail('')
        setMessage('')
      })
    }
  }

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    sendMail()
  }

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

        <section
          ref={hobbyRef}
          id="hobby"
          className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-800"
        >
          <Heading className="text-white">Hobby</Heading>
          <div>
            <div className="text-white">
              <SubHeading className="border-b-2">Favorite</SubHeading>
              <div className="flex justify-center">
                <dl className="my-6 mx-10 text-lg">
                  <dt className="float-left clear-left w-20">Instrument</dt>
                  <dd className="float-left ml-5">ベース</dd>
                  <dt className="float-left clear-left w-20">Band</dt>
                  <dd className="float-left ml-5">nano.RIPE</dd>
                  <dt className="float-left clear-left w-20">Idol</dt>
                  <dd className="float-left ml-5">日向坂46</dd>
                </dl>
                <dl className="my-6 mx-10 text-lg">
                  <dt className="float-left clear-left w-32">Baseball Team</dt>
                  <dd className="float-left ml-5">東北楽天ゴールデンイーグルス</dd>
                  <dt className="float-left clear-left w-32">Anime</dt>
                  <dd className="float-left ml-5">花咲くいろは</dd>
                </dl>
              </div>
            </div>

            <div className="text-white">
              <SubHeading className="border-b-2 mb-6">Gallery</SubHeading>
              <Carousel>
                <div>
                  <Image src={STRATOCASTER} alt="image1" width={300} height={200} />
                  <p className="legend">自作のストラトキャスター</p>
                </div>
                <div>
                  <Image src={BASS} alt="image2" width={300} height={200} />
                  <p className="legend">自作のプレシジョンベース</p>
                </div>
                <div>
                  <Image src={LESPAOL} alt="image3" width={300} height={200} />
                  <p className="legend">自作のレスポール</p>
                </div>
                <div>
                  <Image src={ACCOSTIC} alt="image3" width={300} height={200} />
                  <p className="legend">自作のアコースティックギター</p>
                </div>
              </Carousel>
            </div>
          </div>
          <Down href="#contact" className="text-white"/>
        </section>

        <section
          ref={contactRef}
          id="contact"
          className="flex flex-col justify-between w-full h-screen snap-start bg-gray-200"
        >
          <div className="h-full flex justify-center items-center flex-col">
            <Heading>Contact</Heading>
            <p className="mt-5">
              お問い合わせは以下のフォームまたはSNSのダイレクトメッセージから受け付けております。
            </p>
            <div className="m-10 w-3/4">
              <form onSubmit={onSubmit}>
                <div className="m-5">
                  <Label htmlFor="name">name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="m-5">
                  <Label htmlFor="email">email</Label>
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="m-5">
                  <Label htmlFor="message">message</Label>
                  <TextArea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <Submit
                    disabled={disableSend}
                    confirm='お問い合わせを送信してもよろしいですか？'
                  >
                    送信
                  </Submit>
                </div>
              </form>
            </div>
          </div>
          <Footer/>
        </section>
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
