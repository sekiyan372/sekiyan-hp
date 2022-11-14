import Link from 'next/link'
import type { FC } from 'react'

import { HeaderDrawer } from '~/components/Drawer'

export const Header: FC = () => {
  return (
    <header className="w-full px-3 md:px-10 py-3 flex justify-between flex-wrap bg-white">
      <Link href="/" passHref>
        <div className="text-3xl cursor-pointer hover:opacity-50">
          Sekiyan372
        </div>
      </Link>

      <div className="hidden sm:flex">
        <Link href="/product" passHref>
          <div className="mx-8 text-2xl cursor-pointer hover:opacity-50">
            Product
          </div>
        </Link>
        <Link href="/ohisama" passHref>
          <div className="mx-8 text-2xl cursor-pointer hover:opacity-50">
            おひさまhistory
          </div>
        </Link>
        <Link href="/#contact" passHref>
          <div className="mx-8 text-2xl cursor-pointer hover:opacity-50">
            Contact
          </div>
        </Link>
      </div>

      <HeaderDrawer />
    </header>
  )
}
