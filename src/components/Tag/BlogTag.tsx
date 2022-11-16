import { FC } from 'react'

type Props = {
  children: React.ReactNode
}

export const BlogTag: FC<Props> = ({ children }) => {
  return (
    <span
      className={`m-1 px-1 py-0.5 rounded text-xs sm:text-base text-white ${categoryToTextColor(
        children
      )}`}
    >
      {children}
    </span>
  )
}

const categoryToTextColor = (category: React.ReactNode): string => {
  switch (category) {
    case 'Hobby':
      return 'bg-hinata'
    case 'Life':
      return 'bg-orange-500'
    case 'Project':
      return 'bg-emerald-500'
    case 'Tech':
      return 'bg-violet-500'
    default:
      return 'bg-stone-500'
  }
}
