import { forwardRef } from 'react'

import { DownButton } from '~/components/Button'
import { ProductCard } from '~/components/Card'
import { Section } from '~/components/Layout'
import { Heading, SubHeading } from '~/components/Text'

const products = [
  {
    url: '',
    imagePath: '/images/sekiyan-hp.jpg',
    alt: "Sekiyan's website",
    title: 'ポートフォリオサイト',
    desc: '自分のポートフォリオサイト',
    tech: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    url: 'https://effector-geek.vercel.app/',
    imagePath: '/images/effector-geek.jpg',
    alt: 'Effector Geek',
    title: 'Effector Geek',
    desc: 'エフェクター情報共有サイト',
    tech: [
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
    url: 'https://sekiyan372-calculator.netlify.app/',
    imagePath: '/images/calculator.jpg',
    alt: 'calculator',
    title: 'calculator',
    desc: '単純な電卓',
    tech: ['TypeScript', 'React', 'Styled Components', 'Netrify'],
  },
  {
    url: 'https://random-app.vercel.app/',
    imagePath: '/images/random-app.jpg',
    alt: 'Random App',
    title: 'ランダムアプリ',
    desc: 'ランダムに何かを決めるサイト',
    tech: ['TypeScript', 'React', 'Styled Components', 'Vercel'],
  },
]

const joins = [
  {
    url: 'https://tourism-project.com',
    title: 'Tourism Projectホームページ',
  },
  {
    url: 'https://totteku.tourism-project.com',
    title: '撮っテク！',
  },
  {
    url: 'https://www.cirkit.jp',
    title: 'CirKitコーポレートサイト',
  },
  {
    url: 'https://www.cirkit.jp',
    title: '@連絡網',
  },
]

export const Product = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section
      ref={ref}
      id="product"
      className="flex justify-center items-center flex-col bg-gray-200"
    >
      <Heading className="text-gray-800">Product</Heading>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>

      <SubHeading className="text-gray-800 pt-2">Join</SubHeading>
      <div className="flex flex-wrap justify-center">
        {joins.map((join) => (
          <div
            key={join.title}
            className="inline-block border-b border-jade m-2 text-xs text-jade sm:text-base cursor-pointer hover:opacity-60"
          >
            <a href={join.url}>{join.title}</a>
          </div>
        ))}
      </div>
      <DownButton href="#hobby" />
    </Section>
  )
})
