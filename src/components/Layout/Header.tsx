import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { HeaderDrawer } from '~/components/Drawer'

export const Header: FC = () => {
  return (
    <header className="fixed w-full h-12 p-2 md:px-10 flex justify-between flex-wrap bg-white drop-shadow">
      <Link href="/" passHref>
        <Image
          src="/images/icon/sekiyan372.png"
          alt="トップアイコン"
          width="150"
          height="36"
          className="cursor-pointer"
        />
      </Link>

      <div className="hidden sm:flex text-jade">
        <Link href="/product" passHref className="my-auto">
          <div className="mx-8 cursor-pointer hover:opacity-50">プロダクト</div>
        </Link>
        <Link href="/ohisama" passHref className="my-auto">
          <div className="mx-8 cursor-pointer hover:opacity-50">
            おひさまhistory
          </div>
        </Link>
        <Link href="/#contact" passHref className="my-auto">
          <div className="mx-8 cursor-pointer hover:opacity-50">連絡先</div>
        </Link>
      </div>

      <HeaderDrawer />
    </header>
  )
}
