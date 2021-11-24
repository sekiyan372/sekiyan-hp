import {
  HTMLAttributes,
  ReactNode, 
  forwardRef,
  ForwardRefRenderFunction
} from "react"
import ClassNames from "classnames"

type Props = {
  id?: string
  children: ReactNode
} & HTMLAttributes<HTMLElement>

const Section: ForwardRefRenderFunction<HTMLElement, Props> = (
  { id, children, className}, ref
) => {
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

export default forwardRef(Section) 
