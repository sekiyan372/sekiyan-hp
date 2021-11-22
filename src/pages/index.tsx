// react/nextの機能
import { ChangeEvent, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// カルーセル
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

//自作コンポーネント
import Down from '~/components/Button/Down'
import LinkIcon from '~/components/Button/LinkIcon'
import Submit from '~/components/Button/Submit'
import Head from '~/components/Head'
import Circle from '~/components/Circle'
import VerticalLine from '~/components/VerticalLine'
import Label from '~/components/Label'
import Input from '~/components/Input'
import TextArea from '~/components/Textarea'

// EmailJS
import { send } from 'emailjs-com'
import { emailjsConfig } from '~/utils/Emailjs'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar, faBuilding, faSchool } from '@fortawesome/free-solid-svg-icons'

const ICON = require('../../public/my-icon.jpg') 
const TWITTER_ICON = require('../../public/Twitter-social-icons-circle-blue.svg')
const HATENA_ICON = require('../../public/hatenablog-logo.svg')
const GITHUB_ICON = require('../../public/GitHub-Mark-Light-64px.png')
const PRODUCT = require('../../public/image/product-page.png')

const Home: NextPage = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const disableSend = name === '' || email === '' || message === ''

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
        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-jade">
          <h1 className="m-8 text-white">Welcome to</h1>
          <h1 className="m-8 text-white">Sekiyan&#039;s website.</h1>
          <div className="m-5">
            <LinkIcon
              url="https://twitter.com/sekiyan372"
              src={TWITTER_ICON}
              alt="Twitter Button"
              width={60}
              height={60}
            />
            <LinkIcon
              url="https://sekiyan372.hatenablog.jp/"
              src={HATENA_ICON}
              alt="Hatena Blog Button"
              width={60}
              height={60}
            />
            <LinkIcon
              url="https://github.com/sekiyan372"
              src={GITHUB_ICON}
              alt="Github Button"
              width={60}
              height={60}
            />
          </div>
          <p className="text-2xl text-white">Scroll</p>
          <Down className="text-white"/>
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-200">
          <h2>Profile</h2>
          <div className="m-10">
            <div className="text-center">
              <Image
                src={ICON}
                alt="my icon"
                width={200}
                height={200}
                className="rounded-full"
              />
              <p className="text-3xl">せきやん</p>
              <p className="text-xl">Sekiyan</p>
            </div>
            <dl className="m-8 text-lg">
              <dt className="float-left clear-left w-24">Name</dt>
              <dd className="float-left ml-5">関谷 翠帰（Sekiya Suiki）</dd>
              <dt className="float-left clear-left w-24">From</dt>
              <dd className="float-left ml-5">愛知県名古屋市</dd>
              <dt className="float-left clear-left w-24">University</dt>
              <dd className="float-left ml-5">金沢工業大学 在籍</dd>
            </dl>
          </div>
          <Down/>
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-800">
          <h2 className="text-white">Career</h2>
          <table className="m-10 text-white">
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
          <Down className="text-white"/>
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-200">
          <h2>Product</h2>
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
          <Down/>
        </section>

        <section className="
          w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-800

        ">
          <h2 className="text-white">Hobby</h2>
          <div>
            <div className="text-white">
              <h3 className="border-b-2">Favorite</h3>
              <div className="flex">
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
              <h3 className="border-b-2 mb-6">Gallery</h3>
              <Carousel>
                <div>
                  <Image src={ICON} alt="image1" width={200} height={200} />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <Image src={ICON} alt="image2" width={200} height={200} />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <Image src={ICON} alt="image3" width={200} height={200} />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </div>
          </div>
          <Down className="text-white"/>
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-200">
          <h2>Contact</h2>
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
        </section>
      </div>
    </>
  )
}

export default Home
