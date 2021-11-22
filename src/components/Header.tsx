import { VFC } from 'react'
import Link from 'next/link'

const Header: VFC = () => {
  return(
    <header className="overflow-hidden px-10 py-3 flex justify-between">
      <Link href="/" passHref>
        <div className="text-3xl cursor-pointer">Sekiyan372</div>
      </Link>
      <div className="flex">
        <Link href="/product" passHref>
          <div className="mx-5 text-2xl cursor-pointer">Product</div>
        </Link>
        <Link href="/blog" passHref>
          <div className="mx-5 text-2xl cursor-pointer">Blog</div>
        </Link>
        <Link href="/" passHref>
          <div className="mx-5 text-2xl cursor-pointer">Contact</div>
        </Link>
      </div>
    </header>
  )
}

export default Header
