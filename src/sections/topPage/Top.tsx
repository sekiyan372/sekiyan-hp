import { forwardRef, useMemo } from 'react'

import { DownButton, LinkIcon } from '~/components/Button'
import { Header, Section } from '~/components/Layout'
import { links } from '~/components/Link'

export const Top = forwardRef<HTMLElement>((_, ref) => {
  const externalLinks = useMemo(
    () => links('w-8 md:w-12 h-8 md:h-12 text-neutral-600'),
    []
  )

  return (
    <Section ref={ref} id="top" className="bg-jade">
      <Header />
      <div className="h-full flex justify-center items-center flex-col">
        <h1 className="m-2 sm:m-8 text-white">Welcome to</h1>
        <h1 className="m-2 sm:m-8 text-white">Sekiyan&#039;s website.</h1>

        <div className="m-5 flex flex-wrap justify-center">
          {externalLinks.map((link) => (
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
