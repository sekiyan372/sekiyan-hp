import { VFC, MouseEvent } from "react"
import ClassNames from "classnames"

type Props = {
  inView: boolean
  href: string
}

const NavLink: VFC<Props> = ({inView, href}) => {
  const smoothScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const eventTarget = event.target as HTMLAnchorElement
    const eventTargetId = eventTarget.hash
    const scrollTarget = document.querySelector(eventTargetId)
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: "smooth" })
    }
  }

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
