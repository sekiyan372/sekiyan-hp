import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
import Image from 'next/image'
import type { FC } from 'react'

dayjs.locale(ja)

type Props = {
  imgSrc: string
  name: string
  day: number
  date: string
  venue: string
}

export const LiveLogRight: FC<Props> = ({ imgSrc, name, day, date, venue }) => {
  return (
    <div className="flex items-center sm:justify-end flex-col sm:flex-row">
      <Image
        src={imgSrc}
        alt={name}
        width="160"
        height="160"
        className="rounded-full block sm:hidden"
      />

      <div className="py-4 sm:py-0 sm:pr-10 text-center sm:text-left">
        <p className="text-3xl border-b-2">{name}</p>
        <p>
          <span className="pr-4 text-xl">DAY{day}</span>
          {dayjs(date).format('YYYY/MM/DD (dd)')}
        </p>
        <p className="text-lg">{venue}</p>
      </div>

      <Image
        src={imgSrc}
        alt={name}
        width="160"
        height="160"
        className="rounded-full hidden sm:block"
      />
    </div>
  )
}
