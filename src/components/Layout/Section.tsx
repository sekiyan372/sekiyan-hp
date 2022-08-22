import type {
  HTMLAttributes,
  ReactNode,
  ForwardRefExoticComponent,
} from "react";
import { forwardRef } from "react";
import ClassNames from "classnames";

type Props = {
  id?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const Section: ForwardRefExoticComponent<Props> = forwardRef(
  ({ id, children, className }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={ClassNames("w-full h-screen snap-start", className)}
      >
        {children}
      </section>
    );
  }
);
