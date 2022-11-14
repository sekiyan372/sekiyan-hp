import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const TechTag: FC<Props> = ({ children }) => {
  return (
    <div className="inline-block rounded m-1 px-2 py-1 bg-jade text-sm text-white max-w-4">
      {children}
    </div>
  )
}
