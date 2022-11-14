import { FC } from 'react'
import { ImCross } from 'react-icons/im'

type Props = {
  onClick: () => void
}

export const CloseCross: FC<Props> = ({ onClick }) => {
  return (
    <ImCross
      className="w-6 h-6 text-stone-300 cursor-pointer hover:opacity-50"
      onClick={onClick}
    />
  )
}
