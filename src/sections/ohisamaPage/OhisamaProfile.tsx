import dayjs from 'dayjs'
import Image from 'next/image'
import type { FC } from 'react'

import { MoreViewYouTube } from '~/components/Button'
import { SubscribedTalk } from '~/components/Label'
import { YouTubeSideScroll } from '~/components/Scroll'
import { Heading, SubHeading } from '~/components/Text'

const talks: string[] = ['#naotalk', '#hinatalk', '#mikutalk']

type Props = {
  videoIds: string[]
}

export const OhisamaProfile: FC<Props> = ({ videoIds }) => {
  return (
    <section className="text-gray-800">
      <Heading className="text-4xl p-8 md:p-16">おひさまProfile</Heading>
      <div className="flex justify-center items-center flex-col sm:flex-row">
        <Image
          src="/images/ohisama/ohisama.webp"
          alt="オタクをするせきやん"
          width="200"
          height="200"
          objectFit="cover"
          style={{ borderRadius: '50%' }}
        />
        <div className="sm:pl-10">
          <div className="py-4 text-center">
            <div>
              <span className="text-2xl pr-4">おひさま歴</span>
              <span className="text-4xl">
                {dayjs().diff(dayjs('2021-01-01'), 'day')}日
              </span>
            </div>
            <p className="text-xs">※ファンクラブ入会日からカウントしています</p>
          </div>
          <div className="p-2">
            <span>購読中：</span>
            {talks.map((talk) => (
              <SubscribedTalk key={talk}>{talk}</SubscribedTalk>
            ))}
          </div>
          <div className="p-2">プレイ中：ひなこい</div>
        </div>
      </div>

      <table className="text-left sm:text-2xl mx-auto my-4 sm:my-10">
        <tbody>
          <tr className="border-y-2">
            <th className="w-24 sm:w-32 p-2">最推し</th>
            <th className="p-2">小坂 菜緒</th>
          </tr>
          <tr className="border-y-2">
            <th className="w-24 sm:w-32 p-2">推し</th>
            <th className="p-2">河田 陽菜・金村 美玖・森本 茉莉</th>
          </tr>
          <tr className="border-y-2">
            <th className="w-24 sm:w-32 p-2">気になる</th>
            <th className="p-2">岸 帆夏・竹内 希来里・渡辺 莉奈</th>
          </tr>
        </tbody>
      </table>

      {videoIds.length !== 0 && (
        <div className="pt-4 pb-12 text-center">
          <SubHeading className="sm:pt-4 sm:text-2xl">
            日向坂46ベース弾いてみた
          </SubHeading>
          <p className="pb-2">
            日向坂46の曲をベースで弾いてみた動画をYouTubeに公開してるのでぜひご覧ください！
          </p>
          <YouTubeSideScroll videoIds={videoIds} />
          <MoreViewYouTube className="bg-hinata text-white" />
        </div>
      )}
    </section>
  )
}
