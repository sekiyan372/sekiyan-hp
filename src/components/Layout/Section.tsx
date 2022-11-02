import ClassNames from 'classnames'
import type { HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'

type Props = {
  id?: string
  children: ReactNode
} & HTMLAttributes<HTMLElement>

export const Section = forwardRef<HTMLElement, Props>(
  ({ id, children, className }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={ClassNames('w-full h-screen snap-start', className)}
      >
        {children}
      </section>
    )
  }
)
