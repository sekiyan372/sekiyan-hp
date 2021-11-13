import type { NextPage } from 'next'
import Image from 'next/image'
import Head from '~/components/Head'
import Oval from '~/components/Button/Oval'
import Circle from '~/components/Circle'
import VerticalLine from '~/components/VerticalLine'
import Slider from "react-slick"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faGuitar, faBuilding, faSchool } from '@fortawesome/free-solid-svg-icons'

const ICON = require('../../public/my-icon.jpg') 

const Home: NextPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

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
            <Oval>Github</Oval>
          </div>
          <p className="text-2xl text-white">Scroll</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-white w-8"
          />
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
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-800">
          <h2 className="text-white">Career</h2>
          <table className="m-10 text-white">
            <tr>
              <td>2015</td>
              <td className="px-3">
                <Circle>
                  <FontAwesomeIcon
                    icon={faGuitar}
                    className="text-black w-full"
                  />
                </Circle>
              </td>
              <td>中部楽器技術専門学校 弦楽器制作科ギタークラフトコース</td>
            </tr>

            <tr>
              <td></td>
              <td className="text-center"><VerticalLine/></td>
              <td>エレキギター、エレキベース、アコースティックギターなどの制作、リペアなどを学ぶ</td>
            </tr>

            <tr>
              <td>2017</td>
              <td className="px-3">
                <Circle>
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="text-black w-full"
                  />
                </Circle>
              </td>
              <td>楽器卸売会社</td>
            </tr>

            <tr>
              <td></td>
              <td className="text-center"><VerticalLine/></td>
              <td>社内で電話対応、梱包、発送、楽器修理の管理などを担当</td>
            </tr>

            <tr>
              <td>2019</td>
              <td className="px-3">
                <Circle>
                  <FontAwesomeIcon
                    icon={faSchool}
                    className="text-black w-full"
                  />
                </Circle>
              </td>
              <td>金沢工業大学 工学部情報工学科</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>CirKit、Tourismなどのプロジェクト活動に参加し、Web開発を行う</td>
            </tr>
          </table>
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-200">
          <h2>Product</h2>
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-800">
          <h2 className="text-white">Hobby</h2>
          <div className="text-white">
            <h3 className="border-b-2">Favorite</h3>
            <div className="flex">
              <dl className="m-10 text-lg">
                <dt className="float-left clear-left w-20">Instrument</dt>
                <dd className="float-left ml-5">ベース</dd>
                <dt className="float-left clear-left w-20">Band</dt>
                <dd className="float-left ml-5">nano.RIPE</dd>
                <dt className="float-left clear-left w-20">Idol</dt>
                <dd className="float-left ml-5">日向坂46</dd>
              </dl>
              <dl className="m-10 text-lg">
                <dt className="float-left clear-left 28">Baseball Team</dt>
                <dd className="float-left ml-5">東北楽天ゴールデンイーグルス</dd>
                <dt className="float-left clear-left w-28">Anime</dt>
                <dd className="float-left ml-5">花咲くいろは</dd>
                <dt className="float-left clear-left w-28">Movie</dt>
                <dd className="float-left ml-5">MCU（Marvel）</dd>
              </dl>
            </div>
          </div>

          <div className="text-white">
            <h3 className="border-b-2 mb-10">Gallery</h3>
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
        </section>

        <section className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-200">
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
