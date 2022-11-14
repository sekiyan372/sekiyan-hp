import dayjs from 'dayjs'
import type { NextPage } from 'next'
import Image from 'next/image'

import { SubscribedTalk } from '~/components/Label'
import { Footer, Head, Header } from '~/components/Layout'
import { Heading } from '~/components/Text'

const talks: string[] = ['#naotalk', '#hinatalk', '#mikutalk']

const OhisamaPage: NextPage = () => {
  return (
    <>
      <Head title="おひさまhistory" />

      <Header />

      <section className="text-gray-800">
        <Heading className="text-4xl">おひさまProfile</Heading>
        <div className="flex justify-center">
          <Image
            src="/images/ohisama/ohisama.webp"
            alt="オタクをするせきやん"
            width="200"
            height="200"
            objectFit="cover"
            style={{ borderRadius: '50%' }}
          />
          <div className="pl-10">
            <div className="py-4">
              <div>
                <span className="text-2xl pr-4">おひさま歴</span>
                <span className="text-4xl">
                  {dayjs().diff(dayjs('2021-01-01'), 'day')}日
                </span>
              </div>
              <p className="text-xs">
                ※ファンクラブ入会日からカウントしています
              </p>
            </div>
            <div className="py-1">
              <span>購読中：</span>
              {talks.map((talk) => (
                <SubscribedTalk key={talk}>{talk}</SubscribedTalk>
              ))}
            </div>
            <div className="py-1">プレイ中：ひなこい</div>
          </div>
        </div>

        <table className="text-left text-2xl mx-auto my-10">
          <tbody>
            <tr className="border-y-2">
              <th className="w-32 p-2">最推し</th>
              <th className="p-2">小坂 菜緒</th>
            </tr>
            <tr className="border-y-2">
              <th className="w-32 p-2">推し</th>
              <th className="p-2">河田 陽菜・金村 美玖・森本 茉莉</th>
            </tr>
            <tr className="border-y-2">
              <th className="w-32 p-2">気になる</th>
              <th className="p-2">岸 帆夏・竹内 希来里・渡辺 莉奈</th>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="bg-hinata text-white">
        <Heading className="text-4xl">ライブ参戦履歴</Heading>
      </section>

      <section className="text-gray-800">
        <Heading className="text-4xl">セルフQ&A</Heading>
      </section>

      <Footer />
    </>
  )
}

export default OhisamaPage
