import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
import Image from 'next/image'
import type { FC } from 'react'

import type { Live } from '~/types'

dayjs.locale(ja)

type Props = {
  live: Live
}

export const LiveLogRight: FC<Props> = ({ live }) => {
  return (
    <div className="flex items-center sm:justify-end flex-col sm:flex-row">
      <Image
        src={live.image.url}
        alt={live.name}
        width="160"
        height="160"
        className="rounded-full block sm:hidden"
      />

      <div className="py-4 sm:py-0 sm:pr-10 text-center sm:text-left">
        <p className="text-3xl border-b-2">{live.name}</p>
        <p>
          <span className="pr-4 text-xl">DAY{live.day}</span>
          {dayjs(live.dateAt).format('YYYY/MM/DD (dd)')}
        </p>
        <p className="text-lg">{live.venue}</p>
      </div>

      <Image
        src={live.image.url}
        alt={live.name}
        width="160"
        height="160"
        className="rounded-full hidden sm:block"
      />
    </div>
  )
}
