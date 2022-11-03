import ClassNames from 'classnames'
import Link from 'next/link'
import type { FC, HTMLAttributes } from 'react'

type Props = {
  url: string
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

export const LinkIcon: FC<Props> = ({ url, children, className }) => {
  return (
    <Link href={url} passHref>
      <a target="_blank">
        <div
          className={ClassNames(
            'inline-block md:mx-5 mx-3 p-3 bg-stone-200 rounded-full',
            className
          )}
        >
          {children}
        </div>
      </a>
    </Link>
  )
}
