import { FC } from 'react'

import { LiveLogLeft, LiveLogRight } from '~/components/Card'
import { Heading } from '~/components/Text'

const liveLog = [
  {
    imgSrc: '/images/ohisama/hinatan3.webp',
    name: '3回目のひな誕祭',
    day: 2,
    date: '2022-03-31',
    venue: '東京ドーム',
  },
  {
    imgSrc: '/images/ohisama/w-keyaki2022.webp',
    name: 'W-KEYAKI FES. 2022',
    day: 1,
    date: '2022-07-21',
    venue: '富士急ハイランドコニファーフォレスト',
  },
  {
    imgSrc: '/images/ohisama/tour2022_aichi.webp',
    name: 'Happy Smile Tour 2022 愛知公演',
    day: 1,
    date: '2022-09-10',
    venue: 'AICHI SKY EXPO',
  },
  {
    imgSrc: '/images/ohisama/tour2022_kanagawa.webp',
    name: 'Happy Smile Tour 2022 神奈川公演',
    day: 1,
    date: '2022-10-17',
    venue: 'ぴあアリーナMM',
  },
]

export const LiveLog: FC = () => {
  return (
    <section className="bg-hinata text-white">
      <Heading className="text-4xl py-8">ライブ参戦履歴</Heading>
      <div className="p-4 sm:p-10">
        {liveLog.map((live, index) =>
          index % 2 !== 0 ? (
            <LiveLogRight key={index} {...live} />
          ) : (
            <LiveLogLeft key={index} {...live} />
          )
        )}
      </div>
    </section>
  )
}
