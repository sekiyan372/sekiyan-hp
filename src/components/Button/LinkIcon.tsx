import ClassNames from 'classnames'
import type { FC, HTMLAttributes } from 'react'

type Props = {
  url: string
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

export const LinkIcon: FC<Props> = ({ url, children, className }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div
        className={ClassNames(
          'inline-block md:mx-5 m-3 p-3 bg-stone-200 rounded-full cursor-pointer hover:opacity-70',
          className
        )}
      >
        {children}
      </div>
    </a>
  )
}
