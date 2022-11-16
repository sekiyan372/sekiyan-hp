import Image from 'next/image'
import Link from 'next/link'
import { FC, useCallback, useMemo, useRef } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

import { CloseCross, LinkIcon } from '~/components/Button'
import { externalLinks } from '~/components/Link'
import { useDisclosure } from '~/hooks'

type Props = {
  links: {
    href: string
    title: string
  }[]
}

export const HeaderDrawer: FC<Props> = ({ links }) => {
  const ref = useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const exLinks = useMemo(() => externalLinks('w-6 h-6 text-neutral-600'), [])

  const onCloseWithAnima = useCallback(() => {
    if (ref.current !== null) {
      const element = ref.current as HTMLDivElement
      element.classList.remove('animate-slide-left')
      element.classList.add('animate-slide-right')
    }
    setTimeout(() => onClose(), 500)
  }, [onClose])

  return (
    <>
      <button className="lg:hidden" onClick={onOpen}>
        <GiHamburgerMenu className="w-8 h-8 text-jade hover:opacity-50" />
      </button>

      {isOpen && (
        <>
          <div
            onClick={onCloseWithAnima}
            className="fixed w-full h-screen z-40 bg-gray-800 top-0 left-0 opacity-50"
          />

          <div
            ref={ref}
            className="fixed z-50 bg-white top-0 right-0 w-3/4 sm:w-1/3 h-screen animate-slide-left"
          >
            <div
              onClick={onCloseWithAnima}
              className="flex justify-between p-2"
            >
              <Link href="/#top" passHref>
                <Image
                  src="/images/icon/sekiyan372.png"
                  alt="トップアイコン"
                  width="150"
                  height="36"
                  className="cursor-pointer"
                />
              </Link>
              <CloseCross onClick={onCloseWithAnima} />
            </div>

            <div onClick={onClose} className="pt-4 text-xl text-jade">
              {links.map((link) => (
                <Link key={link.title} href={link.href} passHref>
                  <div className="mx-8 py-2 cursor-pointer hover:opacity-50">
                    {link.title}
                  </div>
                </Link>
              ))}
            </div>

            <div className="px-4">
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
        </>
      )}
    </>
  )
}
