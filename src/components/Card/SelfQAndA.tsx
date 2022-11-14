import type { FC } from 'react'

type Props = {
  question: string
  answer: string
}

export const SelfQAndA: FC<Props> = ({ question, answer }) => {
  return (
    <div className="pb-10">
      <div className="flex text-2xl font-semibold border-b-2 border-hinata">
        <p className="pr-2">Q.</p>
        <p>{question}</p>
      </div>
      <div className="flex pt-2">
        <p className="pr-2">A.</p>
        <p>{answer}</p>
      </div>
    </div>
  )
}
