import { VFC, ReactNode } from 'react'

type Props = {
  disabled: boolean
  confirm: string
  children: ReactNode
}

const Submit: VFC<Props> = ({disabled, confirm, children}) => {
  return(
    <button
      className="border-solid border rounded p-2 bg-green-500 text-white text-xl hover:opacity-70"
      disabled={disabled}
      onClick={() => window.confirm(confirm)}
    >
      {children}
    </button>
  )
}

export default Submit
