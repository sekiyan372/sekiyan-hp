import { VFC } from 'react'
import Link from 'next/link'

const Header: VFC = () => {
  return(
    <header className="overflow-hidden p-3 flex justify-between">
      <Link href="/" passHref>
        <div className="text-3xl cursor-pointer">Sekiyan372</div>
      </Link>
      <Link href="/product" passHref>
        <div className="text-2xl cursor-pointer">Product</div>
      </Link>
    </header>
  )
}

export default Header
