import { VFC, LegacyRef } from "react"
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Down from '~/components/Button/Down'
import { Heading, SubHeading } from '~/components/Heading'
import Section from '~/components/Section'

const STRATOCASTER = require('../../public/image/stratocaster.JPG')
const BASS = require('../../public/image/bass.JPG')
const LESPAOL = require('../../public/image/lespaol.JPG')
const ACCOSTIC = require('../../public/image/accostic.JPG')

const favorites = [
  [
    {
      label: "Instrument",
      content: "ベース",
    },
    {
      label: "Band",
      content: "nano.RIPE",
    },
    {
      label: "Idol",
      content: "日向坂46",
    },
  ],
  [
    {
      label: "Baseball Team",
      content: "東北楽天ゴールデンイーグルス",
    },
    {
      label: "Anime",
      content: "花咲くいろは",
    },
  ],
]

const works = [
  {
    name: "Stratocaster",
    src: STRATOCASTER,
    alt: "ストラトキャスター",
    legend: "自作のストラトキャスター",
  },
  {
    name: "Precision Bass",
    src: BASS,
    alt: "プレシジョンベース",
    legend: "自作のプレシジョンベース",
  },
  {
    name: "Les Paol",
    src: LESPAOL,
    alt: "レスポール",
    legend: "自作のレスポール",
  },
  {
    name: "Accostic Guitar",
    src: ACCOSTIC,
    alt: "アコースティックギター",
    legend: "自作のアコースティックギター",
  },
]

type Props = {
  ref: LegacyRef<HTMLElement>
}

const Hobby: VFC<Props> = ({ref}) => {
  return (
    <Section
      ref={ref}
      id="hobby"
      className="flex justify-center items-center flex-col bg-gray-800"
    >
      <Heading className="text-white">Hobby</Heading>
      <div>
        <div className="text-white">
          <SubHeading className="border-b-2">Favorite</SubHeading>
          <div className="flex justify-center">
            {favorites.map((itemLists, index) => (
              <dl className="my-6 mx-10 text-lg" key={index}>
                {itemLists.map(favorite => (
                  <>
                    <dt className="float-left clear-left w-20">{favorite.label}</dt>
                    <dd className="float-left ml-5">{favorite.content}</dd>
                  </>
                ))}
              </dl>
            ))}
          </div>
        </div>

        <div className="text-white">
          <SubHeading className="border-b-2 mb-6">Gallery</SubHeading>
          <Carousel>
            {works.map(work => (
              <div key={work.name}>
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={300}
                  height={200}
                />
                <p className="legend">{work.legend}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <Down href="#contact" className="text-white"/>
    </Section>
  )
}

export default Hobby
