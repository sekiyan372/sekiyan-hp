import { VFC, ReactNode } from 'react'

type Props = {
  children?: ReactNode;
}

const Circle: VFC<Props> = ({children}) => {
  return (
    <div
      className="w-16 h-16 rounded-full bg-gray-100 flex justify-center items-center"
    >
      {children}
    </div>
  )
}

export default Circle
