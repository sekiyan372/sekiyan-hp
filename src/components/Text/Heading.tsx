import ClassNames from 'classnames'
import type { FC, HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLHeadingElement>

export const Heading: FC<Props> = ({ children, className }) => {
  return <h2 className={ClassNames('text-center', className)}>{children}</h2>
}

export const SubHeading: FC<Props> = ({ children, className }) => {
  return <h3 className={ClassNames('text-center', className)}>{children}</h3>
}
