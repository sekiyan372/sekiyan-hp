import type { FC } from 'react'

type Props = {
  children: React.ReactNode
}

export const SubscribedTalk: FC<Props> = ({ children }) => {
  return (
    <span className="bg-hinata text-white mx-1 p-1 rounded-md">{children}</span>
  )
}
