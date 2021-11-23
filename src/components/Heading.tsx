import { VFC, HTMLAttributes } from 'react'
import ClassNames from 'classnames'

type Props = HTMLAttributes<HTMLHeadingElement>

export const Heading: VFC<Props> = ({children, className}) => {
  return(
    <h2 className={ClassNames(
      "text-center py-10",
      className
    )}>
      {children}
    </h2>
  )
}

export const SubHeading: VFC<Props> = ({children, className}) => {
  return(
    <h3 className={ClassNames(
      "text-center",
      className
    )}>
      {children}
    </h3>
  )
}
