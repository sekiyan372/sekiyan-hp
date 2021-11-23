import { VFC, HTMLAttributes, ReactNode, LegacyRef } from "react"
import ClassNames from "classnames"

type Props = {
  ref?: LegacyRef<HTMLElement>
  id?: string
  children: ReactNode
} & HTMLAttributes<HTMLElement>

const Section: VFC<Props> = ({ref, id, children, className}) => {
  return(
    <section
      ref={ref}
      id={id}
      className={ClassNames(
        "w-full h-screen snap-start",
        className
      )}
    >
      {children}
    </section>
  )
}

export default Section
