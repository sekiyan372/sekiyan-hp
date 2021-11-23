import { VFC } from 'react'
import Link from 'next/link'

const Header: VFC = () => {
  return(
    <header className="w-full px-10 py-3 flex justify-between bg-white">
      <Link href="/" passHref>
        <div className="text-3xl cursor-pointer">Sekiyan372</div>
      </Link>
      <div className="flex">
        <Link href="/product" passHref>
          <div className="mx-8 text-2xl cursor-pointer">Product</div>
        </Link>
        {/* <Link href="/blog" passHref>
          <div className="mx-8 text-2xl cursor-pointer">Blog</div>
        </Link> */}
        <Link href="/#contact" passHref>
          <div className="mx-8 text-2xl cursor-pointer">Contact</div>
        </Link>
      </div>
    </header>
  )
}

export default Header
