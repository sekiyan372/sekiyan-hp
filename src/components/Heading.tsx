import { VFC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Heading: VFC<Props> = ({children}) => {
  return(
    <h2 className="text-center py-10">
      {children}
    </h2>
  )
}

export const SubHeading: VFC<Props> = ({children}) => {
  return(
    <h3 className="text-center">
      {children}
    </h3>
  )
}
