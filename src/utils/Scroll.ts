import { MouseEvent } from "react"

export const smoothScroll = (event: MouseEvent<HTMLElement>) => {
  event.preventDefault()
  const element = event.target as HTMLElement
  const eventTarget =
    element.tagName === 'A' ?
    event.target as HTMLAnchorElement :
    event.currentTarget as HTMLAnchorElement
  const eventTargetId = eventTarget.hash
  const scrollTarget = document.querySelector(eventTargetId)
  if (scrollTarget) {
    scrollTarget.scrollIntoView({ behavior: "smooth" })
  }
}
