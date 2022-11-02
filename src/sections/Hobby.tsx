import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Image from 'next/image'
import { forwardRef } from 'react'
import { Carousel } from 'react-responsive-carousel'

import { DownButton } from '~/components/Button'
import { Section } from '~/components/Layout'
import { Heading, SubHeading } from '~/components/Text'

const favorites = [
  [
    {
      label: 'Instrument',
      content: 'ベース',
    },
    {
      label: 'Band',
      content: 'nano.RIPE',
    },
    {
      label: 'Idol',
      content: '日向坂46',
    },
  ],
  [
    {
      label: 'Baseball Team',
      content: '東北楽天ゴールデンイーグルス',
    },
    {
      label: 'Anime',
      content: '花咲くいろは',
    },
  ],
]

const works = [
  {
    name: 'Fullertone JazzBass',
    src: '/images/fullertone.JPG',
    alt: 'Fullertone JazzBass',
    legend: '愛機のベース（アイコンにしてるやつ）',
  },
  {
    name: 'Stratocaster',
    src: '/images/stratocaster.JPG',
    alt: 'ストラトキャスター',
    legend: '自作のストラトキャスター',
  },
  {
    name: 'Precision Bass',
    src: '/images/bass.JPG',
    alt: 'プレシジョンベース',
    legend: '自作のプレシジョンベース',
  },
  {
    name: 'Les Paol',
    src: '/images/lespaol.JPG',
    alt: 'レスポール',
    legend: '自作のレスポール',
  },
  {
    name: 'Accostic Guitar',
    src: '/images/accostic-guitar.JPG',
    alt: 'アコースティックギター',
    legend: '自作のアコースティックギター',
  },
]

export const Hobby = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section
      ref={ref}
      id="hobby"
      className="flex justify-center items-center flex-col bg-gray-800"
    >
      <Heading className="text-white">Hobby</Heading>
      <div className="md:mx-16 mx-4">
        <div className="text-white">
          <SubHeading className="mb-3 border-b-2">Favorite</SubHeading>
          <div className="flex justify-center flex-wrap">
            {favorites.map((itemLists, index) => (
              <dl className="md:my-6 mb-3 lg:mx-10 mx-3 md:text-lg" key={index}>
                {itemLists.map((favorite) => (
                  <span key={favorite.label}>
                    <dt className="float-left clear-left md:w-32">
                      {favorite.label}
                    </dt>
                    <dd className="float-left ml-5">{favorite.content}</dd>
                  </span>
                ))}
              </dl>
            ))}
          </div>
        </div>

        <div className="text-white">
          <SubHeading className="border-b-2 mb-6">Gallery</SubHeading>
          <Carousel showThumbs={false}>
            {works.map((work) => (
              <div key={work.name}>
                <Image src={work.src} alt={work.alt} width={400} height={225} />
                <p className="legend">{work.legend}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <DownButton href="#contact" className="text-white" />
    </Section>
  )
})
