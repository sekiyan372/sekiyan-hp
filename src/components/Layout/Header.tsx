import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { HeaderDrawer } from '~/components/Drawer'

const links = [
  {
    href: '/#profile',
    title: 'プロフィール',
  },
  {
    href: '/#career',
    title: '経歴',
  },
  {
    href: '/#product',
    title: '制作物',
  },
  {
    href: '/ohisama',
    title: 'おひさまhistory',
  },
  {
    href: '/#contact',
    title: '連絡先',
  },
  {
    href: '/blog',
    title: 'ブログ記事一覧',
  },
]

export const Header: FC = () => {
  return (
    <header className="fixed w-full z-30 h-12 top-0 p-2 md:px-10 flex justify-between flex-wrap bg-white drop-shadow bg-white/[.7]">
      <Link href="/#top" passHref>
        <Image
          src="/images/icon/sekiyan372.webp"
          alt="トップアイコン"
          width="150"
          height="36"
          className="cursor-pointer"
        />
      </Link>

      <div className="hidden lg:flex text-jade">
        {links.map((link) => (
          <Link key={link.title} href={link.href} passHref className="my-auto">
            <div className="mx-6 cursor-pointer hover:opacity-50">
              {link.title}
            </div>
          </Link>
        ))}
      </div>

      <HeaderDrawer links={links} />
    </header>
  )
}
