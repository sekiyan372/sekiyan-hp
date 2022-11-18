import type { FC } from 'react'

import { LiveLogLeft, LiveLogRight } from '~/components/Card'
import { Heading } from '~/components/Text'
import type { Live } from '~/types'

type Props = {
  lives: Live[]
}

export const LiveLog: FC<Props> = ({ lives }) => {
  return (
    <section className="bg-hinata text-white">
      <Heading className="text-4xl pt-8 md:pt-16 pb-8">ライブ参戦履歴</Heading>
      <div className="p-4 sm:p-10">
        {lives.map((live, index) =>
          index % 2 !== 0 ? (
            <LiveLogRight key={index} live={live} />
          ) : (
            <LiveLogLeft key={index} live={live} />
          )
        )}
      </div>
    </section>
  )
}
