import dayjs from 'dayjs'
import Image from 'next/image'
import type { FC } from 'react'
import { Fragment } from 'react'

import { MoreViewYouTube } from '~/components/Button'
import { ExternalLink } from '~/components/Link'
import { YouTubeSideScroll } from '~/components/Scroll'
import { SubscribedTalk } from '~/components/Tag'
import { Heading, SubHeading } from '~/components/Text'

const talks: string[] = ['naotalk']

const favorites = [
  {
    label: '最推し',
    members: [{ name: '小坂 菜緒', key: 14 }],
  },
  {
    label: '推し',
    members: [{ name: '金村 美玖', key: 12 }],
  },
  {
    label: '気になる',
    members: [
      { name: '河田 陽菜', key: 13 },
      { name: '上村 ひなの', key: 21 },
      { name: '清水 理央', key: 28 },
    ],
  },
]

type Props = {
  videoIds: string[]
}

export const OhisamaProfile: FC<Props> = ({ videoIds }) => {
  return (
    <section className="text-gray-800">
      <Heading className="text-4xl p-8 md:p-16">おひさまProfile</Heading>
      <div className="flex justify-center items-center flex-col sm:flex-row">
        <Image
          src="/images/me/ohisama.webp"
          alt="オタクをするせきやん"
          width="200"
          height="200"
          priority
          className="rounded-full"
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
              <SubscribedTalk key={talk}>#{talk}</SubscribedTalk>
            ))}
          </div>
          <div className="p-2">プレイ中：ひなこい</div>
        </div>
      </div>

      <table className="text-left sm:text-2xl mx-auto my-4 sm:my-10">
        <tbody>
          {favorites.map((favorite) => (
            <tr key={favorite.label} className="border-y-2">
              <td className="w-24 sm:w-32 p-2">{favorite.label}</td>
              <td className="p-2">
                {favorite.members.map((member, index) => (
                  <Fragment key={member.key}>
                    <ExternalLink
                      href={`https://www.hinatazaka46.com/s/official/artist/${member.key}?ima=0000`}
                    >
                      {member.name}
                    </ExternalLink>
                    {favorite.members.length - 1 > index && '・'}
                  </Fragment>
                ))}
              </td>
            </tr>
          ))}
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
