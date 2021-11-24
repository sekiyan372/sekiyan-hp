import { VFC } from "react"
import ClassNames from "classnames"
import { smoothScroll } from '~/utils/Scroll'

type Props = {
  inView: boolean
  href: string
}

const NavLink: VFC<Props> = ({inView, href}) => {
  return (
    <a
      className={ClassNames(
        'block w-3 h-3 my-6 rounded-full bg-pagination-white pagination-transition',
        inView ? 'pagination-active' : ''
      )}
      href={href}
      onClick={e => smoothScroll(e)}
    />
  )
}

export default NavLink
