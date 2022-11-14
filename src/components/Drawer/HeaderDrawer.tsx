import Image from 'next/image'
import Link from 'next/link'
import { FC, useMemo } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

import { LinkIcon } from '~/components/Button'
import { links } from '~/components/Link'
import { useDisclosure } from '~/hooks/useDisclosure'

export const HeaderDrawer: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const externalLinks = useMemo(() => links('w-6 h-6 text-neutral-600'), [])

  return (
    <>
      <button className="sm:hidden" onClick={onOpen}>
        <GiHamburgerMenu className="w-8 h-8 hover:opacity-50" />
      </button>

      {isOpen && (
        <div>
          <div
            className="fixed z-10 bg-gray-800 top-0 left-0 w-full h-full opacity-50"
            onClick={onClose}
          />

          <div className="fixed z-20 bg-white top-0 right-0 w-9/12 sm:w-1/3 h-screen">
            <div className="flex justify-between p-2">
              <Link href="/" passHref>
                <Image
                  src="/images/icon/sekiyan372.png"
                  alt="トップアイコン"
                  width="150"
                  height="36"
                  className="cursor-pointer"
                />
              </Link>
              <ImCross
                className="w-6 h-6 text-stone-300 cursor-pointer hover:opacity-50"
                onClick={onClose}
              />
            </div>

            <div className="pt-4" onClick={onClose}>
              <Link href="/product" passHref>
                <div className="mx-8 py-2 text-2xl cursor-pointer hover:opacity-50">
                  Product
                </div>
              </Link>
              <Link href="/ohisama" passHref>
                <div className="mx-8 py-2 text-2xl cursor-pointer hover:opacity-50">
                  おひさまhistory
                </div>
              </Link>
              <Link href="/#contact" passHref>
                <div className="mx-8 py-2 text-2xl cursor-pointer hover:opacity-50">
                  Contact
                </div>
              </Link>
            </div>

            <div>
              {externalLinks.map((link) => (
                <LinkIcon key={link.name} url={link.url}>
                  <div className="flex">
                    {link.icon}
                    <p className="text-base pl-2">{link.name}</p>
                  </div>
                </LinkIcon>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}