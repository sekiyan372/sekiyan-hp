import { VFC } from 'react'

type Props = {
  children: React.ReactNode;
}

const Oval: VFC<Props> = ({children}) => {
  return (
    <button
      type="button"
      className="m-1 p-2 border rounded-full"
    >
      { children }
    </button>
  )
}

export default Oval
