import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ClassNames from 'classnames'
import type { FC, HTMLAttributes } from 'react'

import { smoothScroll } from '~/utils/Scroll'

type Props = {
  href: string
} & HTMLAttributes<HTMLDivElement>

export const DownButton: FC<Props> = ({ href, className }) => {
  return (
    <div className={ClassNames(className)}>
      <a href={href} onClick={(e) => smoothScroll(e)}>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="w-8 hover:opacity-50"
        />
      </a>
    </div>
  )
}
