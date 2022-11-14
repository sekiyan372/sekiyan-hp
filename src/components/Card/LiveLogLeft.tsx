import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
import Image from 'next/image'
import type { FC } from 'react'

dayjs.locale(ja)

type Props = {
  imgSrc: string
  name: string
  day: string
  date: string
  venue: string
}

export const LiveLogLeft: FC<Props> = ({ imgSrc, name, day, date, venue }) => {
  return (
    <div className="flex items-center">
      <Image
        src={imgSrc}
        alt={name}
        width="160"
        height="160"
        objectFit="cover"
        style={{ borderRadius: '50%' }}
      />
      <div className="pl-10">
        <p className="text-3xl border-b-2">{name}</p>
        <p>
          <span className="pr-4 text-xl">{day}</span>
          {dayjs(date).format('YYYY/MM/DD (dd)')}
        </p>
        <p className="text-lg">{venue}</p>
      </div>
    </div>
  )
}
