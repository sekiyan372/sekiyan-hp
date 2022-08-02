import { FC } from "react";
import ClassNames from "classnames";
import { smoothScroll } from "~/utils/Scroll";

type Props = {
  inView: boolean;
  href: string;
};

const NavLink: FC<Props> = ({ inView, href }) => {
  return (
    <a
      className={ClassNames(
        "block md:w-3 w-2 md:h-3 h-2 my-6 rounded-full bg-pagination-white pagination-transition",
        inView ? "pagination-active" : ""
      )}
      href={href}
      onClick={(e) => smoothScroll(e)}
    />
  );
};

export default NavLink;
