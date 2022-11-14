import type { FC, ReactNode } from 'react'

type Props = {
  disabled: boolean
  confirm: string
  children: ReactNode
}

export const SubmitButton: FC<Props> = ({ disabled, confirm, children }) => {
  return (
    <button
      className="rounded px-4 pt-2 pb-1 bg-green-500 text-white text-xl cursor-pointer hover:opacity-70"
      disabled={disabled}
      onClick={() => window.confirm(confirm)}
    >
      {children}
    </button>
  )
}
