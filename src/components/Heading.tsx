import { FC, HTMLAttributes } from "react";
import ClassNames from "classnames";

type Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading: FC<Props> = ({ children, className }) => {
  return (
    <h2 className={ClassNames("text-center md:py-8 py-4", className)}>
      {children}
    </h2>
  );
};

export const SubHeading: FC<Props> = ({ children, className }) => {
  return <h3 className={ClassNames("text-center", className)}>{children}</h3>;
};
