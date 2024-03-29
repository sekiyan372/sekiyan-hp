import ClassNames from 'classnames'
import type { FC } from 'react'

import { smoothScroll } from '~/utils/scroll'

type Props = {
  inView: boolean
  href: string
}

export const NavLink: FC<Props> = ({ inView, href }) => {
  return (
    <a
      className={ClassNames(
        'block md:w-3 w-2 md:h-3 h-2 my-6 rounded-full bg-pagination-white pagination-transition',
        inView ? 'pagination-active' : ''
      )}
      href={href}
      onClick={(e) => smoothScroll(e)}
    />
  )
}
