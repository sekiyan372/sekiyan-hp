import { VFC, ReactNode } from 'react'

type Props = {
  htmlFor: string
  children: ReactNode
}

const Label: VFC<Props> = ({htmlFor, children}) => {
  return(
    <label htmlFor={htmlFor} className="block">
      {children}
    </label>
  )
}

export default Label
