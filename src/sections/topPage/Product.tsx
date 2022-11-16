import { forwardRef } from 'react'

import { DownButton } from '~/components/Button'
import { ProductCard } from '~/components/Card'
import { Section } from '~/components/Layout'
import { Heading, SubHeading } from '~/components/Text'
import type { Product as ProductType } from '~/types'

const products: ProductType[] = [
  {
    imagePath: '/images/product/sekiyan_hp.webp',
    title: 'ポートフォリオサイト',
    desc: 'このWebサイトです。ポートフォリオとして制作物などを載せる他、趣味の情報もまとめるなど自分が発信した情報をまとめています。',
    url: '',
    github: '',
    techs: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    imagePath: '/images/product/effector_geek.jpg',
    title: 'Effector Geek',
    desc: 'エフェクターの情報を共有できるサービスを開発しました（未完成）。登録しているエフェクターから選択して自分のエフェクターボードを投稿できるほか、登録がないエフェクターは自分で登録することが可能です。エフェクターボードを見るのが元々好きで、手軽に共有できるプラットフォームがあればいいなと思い制作しました。',
    url: 'https://effector-geek.vercel.app/',
    github: 'https://github.com/sekiyan372/effector-geek',
    techs: [
      'TypeScript',
      'React',
      'Redux',
      'Next.js',
      'Firebase',
      'Tailwind CSS',
      'Vercel',
    ],
  },
  {
    imagePath: '/images/product/random_app.jpg',
    title: 'ランダムに何かを決めるサイト',
    desc: '空白区切りで文字を入力し、その中からランダムで1つを選択し表示されるブラウザ上だけで動くアプリケーションです。グループ内で適当に決めたい時など度々あり、自作でツール作るかと思いサクッと作りました。',
    url: 'https://random-app.vercel.app/',
    github: 'https://github.com/sekiyan372/random-app',
    techs: ['TypeScript', 'React', 'Styled Components', 'Vercel'],
  },
  {
    imagePath: '/images/product/calculator.jpg',
    title: 'Calculator',
    desc: '基本的な計算機能を持ったブラウザ上だけで動く単純な電卓です。ボタンの操作だけでなく、キーボード入力でも可能なのがこだわりポイントです。Reactの入門をしたときに勉強用で制作しました。',
    url: 'https://sekiyan372-calculator.netlify.app/',
    github: 'https://github.com/sekiyan372/calculator',
    techs: ['TypeScript', 'React', 'Styled Components', 'Netrify'],
  },
]

const joins = [
  {
    url: 'https://tourism-project.com/',
    title: 'Tourism Projectホームページ',
  },
  {
    url: 'https://totteku.tourism-project.com/',
    title: '撮っテク！',
  },
  {
    url: 'https://www.cirkit.jp/',
    title: 'CirKitコーポレートサイト',
  },
]

export const Product = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section
      ref={ref}
      id="product"
      className="flex justify-center items-center flex-col bg-gray-200"
    >
      <Heading className="text-gray-800 md:p-4">Product</Heading>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <>
            <ProductCard key={product.title} product={product} />
          </>
        ))}
      </div>

      <SubHeading className="text-gray-800 pt-2">Join</SubHeading>
      <div className="flex flex-wrap justify-center">
        {joins.map((join) => (
          <div
            key={join.title}
            className="inline-block border-b border-jade m-2 text-xs text-jade sm:text-base cursor-pointer hover:opacity-60"
          >
            <a href={join.url} target="_blank" rel="noreferrer">
              {join.title}
            </a>
          </div>
        ))}
      </div>
      <DownButton href="#hobby" />
    </Section>
  )
})
