import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
import type { NextPage } from 'next'
import Image from 'next/image'

import { LiveLogLeft, LiveLogRight, SelfQAndA } from '~/components/Card'
import { SubscribedTalk } from '~/components/Label'
import { Footer, Head, Header } from '~/components/Layout'
import { Heading } from '~/components/Text'

dayjs.locale(ja)

const talks: string[] = ['#naotalk', '#hinatalk', '#mikutalk']
const liveLog = [
  {
    imgSrc: '/images/ohisama/hinatan3.webp',
    name: '3回目のひな誕祭',
    day: 'day2',
    date: '2022-03-31',
    venue: '東京ドーム',
  },
  {
    imgSrc: '/images/ohisama/w-keyaki2022.webp',
    name: 'W-KEYAKI FES. 2022',
    day: 'day1',
    date: '2022-07-21',
    venue: '富士急ハイランドコニファーフォレスト',
  },
  {
    imgSrc: '/images/ohisama/tour2022_aichi.webp',
    name: 'Happy Smile Tour 2022 愛知公演',
    day: 'day1',
    date: '2022-09-10',
    venue: 'AICHI SKY EXPO',
  },
  {
    imgSrc: '/images/ohisama/tour2022_kanagawa.webp',
    name: 'Happy Smile Tour 2022 神奈川公演',
    day: 'day1',
    date: '2022-10-17',
    venue: 'ぴあアリーナMM',
  },
]
const qAndAList = [
  {
    question: '日向坂46の好きなところは？',
    answer:
      'もちろん全てが好きなのですが、特に言えることは、地道に活動を頑張ってきたからこそ今があり、だからこそファンであるおひさまを何よりも大切にしてくれるところですね。そうであるから、おひさま側もグループ自体を支えようとしている姿を見ると自分がおひさまであることを誇りに思えます。',
  },
  {
    question: 'おひさまになったきっかけは？',
    answer:
      'もともとオードリーが好きで、オードリーの冠番組である【あちこちオードリー】を見ていた時に日向坂46のメンバーが出演した回を見たのがきっかけでした。「なんだこの可愛い子たちは…？」と気になって調べたらオードリーがMCの【ひなたざかで会いましょう】という番組をやっていると知り見てみたら面白くて、あとはそのまま沼に落ちていきました笑',
  },
  {
    question: '小坂菜緒推しになったきっかけは？',
    answer:
      '【ひらがな推し】の【あなたのお悩み解決します!「スナック眞緒」〜クリスマスVer.〜】という回をみたときに、トナカイのツノをつけてツッコミをする小坂菜緒ちゃんが可愛すぎて一撃でやられました。なぜあんなに可愛いのか、人類の神秘ですね。',
  },
  {
    question: '日向坂46のことが気になっているのですが、どうしたらいいですか？',
    answer:
      'まずは【日向坂であいましょう】を見て、メンバーの個性だったりを知って推しを決めるといいのはないでしょうか！あとはそこから推しの気になったコンテンツを見ていけば自然と沼にズブズブ落ちていくと思います。ぜひ僕に声をかけてくれれば、沼に引き摺り込みますよ笑',
  },
]

const OhisamaPage: NextPage = () => {
  return (
    <>
      <Head title="おひさまhistory" />

      <Header />

      <section className="text-gray-800">
        <Heading className="text-4xl">おひさまProfile</Heading>
        <div className="flex justify-center items-center">
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
        <div className="p-10">
          {liveLog.map((live, index) =>
            index % 2 === 0 ? (
              <LiveLogLeft key={index} {...live} />
            ) : (
              <LiveLogRight key={index} {...live} />
            )
          )}
        </div>
      </section>

      <section className="text-gray-800">
        <Heading className="text-4xl">セルフQ&A</Heading>
        <div className="p-10">
          {qAndAList.map((qAndA, index) => (
            <SelfQAndA key={index} {...qAndA} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default OhisamaPage
