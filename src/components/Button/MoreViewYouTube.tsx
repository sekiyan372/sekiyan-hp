import ClassNames from 'classnames'
import type { FC, HTMLAttributes } from 'react'
import { AiOutlineRight } from 'react-icons/ai'

type Props = HTMLAttributes<HTMLDivElement>

export const MoreViewYouTube: FC<Props> = ({ className }) => {
  return (
    <div
      className={ClassNames(
        'w-36 mx-auto my-4 p-2 pb-1 rounded-lg text-lg sm:text-xl text-center cursor-pointer hover:translate-y-1',
        className
      )}
    >
      <a
        href="https://www.youtube.com/channel/UCil3qVY03emphZE4V5UQtXA"
        target="_blank"
        rel="noreferrer"
      >
        <span>もっと見る</span>
        <AiOutlineRight className="inline-block" />
      </a>
    </div>
  )
}
