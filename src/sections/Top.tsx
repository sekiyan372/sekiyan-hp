import { forwardRef, ForwardRefRenderFunction } from "react"
import Down from '~/components/Button/Down'
import LinkIcon from '~/components/Button/LinkIcon'
import Header from '~/components/Header'
import Section from '~/components/Section'

const TWITTER_ICON = require('../../public/Twitter-social-icons-circle-blue.svg')
const HATENA_ICON = require('../../public/hatenablog-logo.svg')
const GITHUB_ICON = require('../../public/GitHub-Mark-Light-64px.png')

const links = [
  {
    name: "Twitter",
    url: "https://twitter.com/sekiyan372",
    src: TWITTER_ICON,
    alt: "Twitter Button",
  },
  {
    name: "Hatena Blog",
    url: "https://sekiyan372.hatenablog.jp/",
    src: HATENA_ICON,
    alt: "Hatena Blog Button",
  },
  {
    name: "Github",
    url: "https://github.com/sekiyan372",
    src: GITHUB_ICON,
    alt: "Github Button",
  }
]

const Top: ForwardRefRenderFunction<HTMLElement> = ({}, ref) => {
  return (
    <Section
      ref={ref}
      id="top"
      className="bg-jade"
    >
      <Header/>
      <div className="h-full flex justify-center items-center flex-col">
        <h1 className="m-8 text-white">Welcome to</h1>
        <h1 className="m-8 text-white">Sekiyan&#039;s website.</h1>
        <div className="m-5">
          {links.map((link) => (
            <LinkIcon
              key={link.name}
              url={link.url}
              src={link.src}
              alt={link.alt}
              width={60}
              height={60}
            />
          ))}
        </div>
        <p className="text-2xl text-white">Scroll</p>
        <Down href="#profile" className="text-white" />
      </div>
    </Section>
  )
}

export default forwardRef(Top)
