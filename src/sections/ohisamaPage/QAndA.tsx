import type { FC } from 'react'

import { SelfQAndA } from '~/components/Card'
import { Heading } from '~/components/Text'

const qAndAList = [
  {
    question: '日向坂46の好きなところは？',
    answer:
      'もちろん全てが好きなのですが、特に言えることは、地道に活動を頑張ってきたからこそ今があり、だからこそファンであるおひさまを何よりも大切にしてくれるところですね。そうであるから、おひさま側もグループ自体を支えようとしている姿を見ると自分がおひさまであることを誇りに思えます。',
  },
  {
    question: 'おひさまになったきっかけは？',
    answer:
      'もともとオードリーが好きで、オードリーの冠番組である【あちこちオードリー】を見ていた時に日向坂46のメンバーが出演した回を見たのがきっかけでした。「なんだこの可愛い子たちは…？」と気になって調べたらオードリーがMCの【日向坂で会いましょう】という番組をやっていると知り見てみたら面白くて、あとはそのまま沼に落ちていきました笑',
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

export const QAndA: FC = () => {
  return (
    <section className="text-gray-800">
      <Heading className="text-4xl pt-8 md:pt-16 pb-8">セルフQ&A</Heading>
      <div className="p-4 sm:p-10">
        {qAndAList.map((qAndA, index) => (
          <SelfQAndA key={index} {...qAndA} />
        ))}
      </div>
    </section>
  )
}
