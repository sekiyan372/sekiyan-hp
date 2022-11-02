import type { FC, ReactNode } from 'react'

type Props = {
  htmlFor: string
  children: ReactNode
}

export const Label: FC<Props> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block">
      {children}
    </label>
  )
}
