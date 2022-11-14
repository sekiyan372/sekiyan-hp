import ClassNames from 'classnames'
import type { FC, HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLHeadingElement>

export const Heading: FC<Props> = ({ children, className }) => {
  return (
    <h2 className={ClassNames('text-center md:py-4 py-2', className)}>
      {children}
    </h2>
  )
}

export const SubHeading: FC<Props> = ({ children, className }) => {
  return <h3 className={ClassNames('text-center', className)}>{children}</h3>
}
