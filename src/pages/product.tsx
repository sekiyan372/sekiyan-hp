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
const MAIL = require('../../public/image/mail.jpeg')
const TOTTEKU = require('../../public/image/totteku.png')

const individualProducts = [
  [
    {
      url: '',
      imagePath: SEKIYAN_HP,
      alt: "Sekiyan's website",
      title: 'ポートフォリオサイト',
      desc: "自分のポートフォリオサイト",
    },
    {
      url: 'https://effector-geek.vercel.app/',
      imagePath: EFFECTOR_GEEK,
      alt: "Effector Geek",
      title: 'Effector Geek',
      desc: "エフェクター情報共有サイト",
    },
  ],
  [
    {
      url: 'https://sekiyan372-calculator.netlify.app/',
      imagePath: CALCULATOR,
      alt: "calculator",
      title: 'calculator',
      desc: "単純な電卓",
    },
    {
      url: "https://random-app.vercel.app/",
      imagePath: RANDOM_APP,
      alt: "Random App",
      title: "ランダムアプリ",
      desc: "ランダムに何かを決めるサイト",
    },
    {
      url: "https://saikyo-japan.netlify.app/",
      imagePath: OLYMPIC_APP,
      alt: "Olympic App",
      title: "ぼくのかんがえたさいきょうのさむらいじゃぱん",
      desc: "個人の考えた侍ジャパンを作って遊ぶサイト",
    },
  ],
]

const joinProduct = [
  {
    url: "https://www.cirkit.jp/",
    imagePath: CIRKIT_HP,
    alt: "CirKit HP",
    title: "CirKitホームページ",
    organization: "株式会社CirKit",
    desc: "学生ベンチャー企業のコーポレートサイト",
  },
  {
    imagePath: MAIL,
    alt: "atren",
    title: "@連絡網",
    organization: "株式会社CirKit",
    desc: "受託開発のメーリングサービス",
  },
  {
    url: "https://totteku.netlify.app/",
    imagePath: TOTTEKU,
    alt: "TOTTEKU",
    title: "撮っテク！",
    organization: "Tourism プロジェクト",
    desc: "湯涌町でのイベントのためのサイト",
  },
]

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
            {individualProducts.map((productList, index) => (
              <div className="flex flex-wrap justify-center" key={index}>
                {productList.map((product, subIndex) => (
                  <span key={subIndex}>
                    {index === 0 && (
                      <BigProductCard
                        url={product.url}
                        imagePath={product.imagePath}
                        alt={product.alt}
                        title={product.title}
                        desc={product.desc}
                      />
                    )}
                    {index === 1 && (
                      <ProductCard
                      url={product.url}
                      imagePath={product.imagePath}
                      alt={product.alt}
                      title={product.title}
                      desc={product.desc}
                    />
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <div>
            <SubHeading>Join</SubHeading>
            <div className="flex flex-wrap justify-center">
              {joinProduct.map((product, index) => (
                <span key={index}>
                  <ProductCard
                    url={product.url}
                    imagePath={product.imagePath}
                    alt={product.alt}
                    title={product.title}
                    organization={product.organization}
                    desc={product.desc}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product
