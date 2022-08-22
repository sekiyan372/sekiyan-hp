import type { FC } from "react";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <header className="w-full px-3 md:px-10 py-3 flex justify-between flex-wrap bg-white">
      <Link href="/" passHref>
        <div className="text-3xl cursor-pointer hover:opacity-50">
          Sekiyan372
        </div>
      </Link>
      <div className="flex">
        <Link href="/product" passHref>
          <div className="mx-8 text-2xl cursor-pointer hover:opacity-50">
            Product
          </div>
        </Link>
        {/* <Link href="/blog" passHref>
          <div className="mx-8 text-2xl cursor-pointer">Blog</div>
        </Link> */}
        <Link href="/#contact" passHref>
          <div className="mx-8 text-2xl cursor-pointer hover:opacity-50">
            Contact
          </div>
        </Link>
      </div>
    </header>
  );
};
