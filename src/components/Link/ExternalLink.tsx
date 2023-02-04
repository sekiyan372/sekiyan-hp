import ClassNames from 'classnames'
import type { AnchorHTMLAttributes, FC, ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const ExternalLink: FC<Props> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={ClassNames(className, 'hover:opacity-50')}
    >
      {children}
    </a>
  )
}
