import { VFC, ReactNode } from 'react'

type Props = {
  key: string
  children: ReactNode
}

const TechLavel: VFC<Props> = ({key, children}) => {
  return (
    <div className="inline-block rounded m-1 p-2 bg-white text-jade max-w-4" key={key}>
      {children}
    </div>
  )
}

export default TechLavel
