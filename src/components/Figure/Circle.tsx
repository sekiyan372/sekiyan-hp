import type { FC, ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export const Circle: FC<Props> = ({ children }) => {
  return (
    <div className="md:w-16 w-12 md:h-16 h-12 rounded-full bg-gray-100 flex justify-center items-center">
      {children}
    </div>
  )
}
