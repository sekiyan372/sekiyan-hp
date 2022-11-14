import ClassNames from 'classnames'
import type { FC, HTMLAttributes } from 'react'
import { FaAngleDown } from 'react-icons/fa'

import { smoothScroll } from '~/utils/Scroll'

type Props = {
  href: string
} & HTMLAttributes<HTMLDivElement>

export const DownButton: FC<Props> = ({ href, className }) => {
  return (
    <div className={ClassNames(className)}>
      <a href={href} onClick={(e) => smoothScroll(e)}>
        <FaAngleDown className="w-12 h-12 hover:translate-y-1" />
      </a>
    </div>
  )
}
