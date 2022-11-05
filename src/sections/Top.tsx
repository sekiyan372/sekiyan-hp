import { forwardRef } from 'react'
import {
  BsFillPenFill,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs'

import { DownButton, LinkIcon } from '~/components/Button'
import { Header, Section } from '~/components/Layout'

const links = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/sekiyan372',
    icon: (
      <BsTwitter className="w-8 md:w-12 h-8 md:h-12 text-neutral-600 cursor-pointer hover:opacity-70" />
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/sekiyan372',
    icon: (
      <BsInstagram className="w-8 md:w-12 h-8 md:h-12 text-neutral-600 cursor-pointer hover:opacity-70" />
    ),
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/channel/UCil3qVY03emphZE4V5UQtXA',
    icon: (
      <BsYoutube className="w-8 md:w-12 h-8 md:h-12 text-neutral-600 cursor-pointer hover:opacity-70" />
    ),
  },
  {
    name: 'Blog',
    url: 'https://sekiyan372.hatenablog.jp',
    icon: (
      <BsFillPenFill className="w-8 md:w-12 h-8 md:h-12 text-neutral-600 cursor-pointer hover:opacity-70" />
    ),
  },
  {
    name: 'Github',
    url: 'https://github.com/sekiyan372',
    icon: (
      <BsGithub className="w-8 md:w-12 h-8 md:h-12 text-neutral-600 cursor-pointer hover:opacity-70" />
    ),
  },
]

export const Top = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section ref={ref} id="top" className="bg-jade">
      <Header />
      <div className="h-full flex justify-center items-center flex-col">
        <h1 className="m-2 sm:m-8 text-white">Welcome to</h1>
        <h1 className="m-2 sm:m-8 text-white">Sekiyan&#039;s website.</h1>

        <div className="m-5 flex flex-wrap justify-center">
          {links.map((link) => (
            <LinkIcon key={link.name} url={link.url}>
              {link.icon}
            </LinkIcon>
          ))}
        </div>

        <p className="text-2xl text-white">Scroll</p>
        <DownButton href="#profile" className="text-white" />
      </div>
    </Section>
  )
})
