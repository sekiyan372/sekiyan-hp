import Image from 'next/image'
import Link from 'next/link'
import { FC, useMemo } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

import { LinkIcon } from '~/components/Button'
import { externalLinks } from '~/components/Link'
import { useDisclosure } from '~/hooks/useDisclosure'

type Props = {
  links: {
    href: string
    title: string
  }[]
}

export const HeaderDrawer: FC<Props> = ({ links }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const exLinks = useMemo(() => externalLinks('w-6 h-6 text-neutral-600'), [])

  return (
    <>
      <button className="md:hidden" onClick={onOpen}>
        <GiHamburgerMenu className="w-8 h-8 text-jade hover:opacity-50" />
      </button>

      {isOpen && (
        <div>
          <div
            className="fixed w-full h-screen z-10 bg-gray-800 top-0 left-0 opacity-50"
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

            <div className="pt-4 text-xl text-jade" onClick={onClose}>
              {links.map((link) => (
                <Link key={link.title} href={link.href} passHref>
                  <div className="mx-8 py-2 cursor-pointer hover:opacity-50">
                    {link.title}
                  </div>
                </Link>
              ))}
            </div>

            <div>
              {exLinks.map((link) => (
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
