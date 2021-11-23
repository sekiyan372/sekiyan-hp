import type { NextPage } from 'next'
import Footer from '~/components/Footer'
import Head from '~/components/Head'
import Header from '~/components/Header'
import { Heading, SubHeading } from '~/components/Heading'
import { ProductCard, BigProductCard } from '~/components/ProductCard'

const SEKIYAN_HP = require('../../public/image/sekiyan-hp.png')
const EFFECTOR_GEEK = require('../../public/image/effector-geek.png')
const CALCULATOR = require('../../public/image/calculator.png')
const RANDOM_APP = require('../../public/image/random-app.png')
const OLYMPIC_APP = require('../../public/image/olympic-app.png')
const CIRKIT_HP = require('../../public/image/cirkit-hp.png')
const TOTTEKU = require('../../public/image/totteku.png')

const Product: NextPage = () => {
  return(
    <>
      <Head title="Product" />

      <Header />
      <div className="bg-jade text-white">
        <Heading>Product</Heading>
        <div className="p-10">
          <div className="mb-20">
            <SubHeading>Individual</SubHeading>
            <div className="flex flex-wrap justify-center">
              <BigProductCard
                url=""
                imagePath={SEKIYAN_HP}
                alt="Sekiyan's website"
                title="ポートフォリオサイト"
                desc="このサイト"
              />
              <BigProductCard
                url="https://effector-geek.vercel.app/"
                imagePath={EFFECTOR_GEEK}
                alt="Effector Geek"
                title="Effector Geek"
                desc="エフェクター情報共有サイト"
              />
            </div>
            <div className="flex flex-wrap justify-center">
              <ProductCard
                url="https://sekiyan372-calculator.netlify.app/"
                imagePath={CALCULATOR}
                alt="calculator"
                title="calculator"
                desc="単純な電卓"
              />
              <ProductCard
                url="https://random-app.vercel.app/"
                imagePath={RANDOM_APP}
                alt="Random App"
                title="ランダムアプリ"
                desc="ランダムに何かを決めるサイト"
              />
              <ProductCard
                url="https://saikyo-japan.netlify.app/"
                imagePath={OLYMPIC_APP}
                alt="Olympic App"
                title="ぼくのかんがえたさいきょうのさむらいじゃぱん"
                desc="個人の考えた侍ジャパンを作って遊ぶサイト"
              />
            </div>
          </div>

          <div>
            <SubHeading>Join</SubHeading>
            <div className="flex flex-wrap justify-center">
              <ProductCard
                url="https://www.cirkit.jp/"
                imagePath={CIRKIT_HP}
                alt="CirKit HP"
                title="株式会社CirKit"
                desc="学生ベンチャー企業のコーポレートサイト"
                role="企画から制作リーダーまでを担当"
              />
              <ProductCard
                url="https://totteku.netlify.app/"
                imagePath={TOTTEKU}
                alt="TOTTEKU"
                title="撮っテク！"
                desc="湯涌町でのイベントのためのサイト"
                role="運営メンバーとして制作を担当"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product
