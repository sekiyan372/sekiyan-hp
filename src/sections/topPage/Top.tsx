import { forwardRef, useMemo } from 'react'

import { DownButton, LinkIcon } from '~/components/Button'
import { Section } from '~/components/Layout'
import { externalLinks } from '~/components/Link'

export const Top = forwardRef<HTMLElement>((_, ref) => {
  const exLinks = useMemo(
    () => externalLinks('w-8 md:w-12 h-8 md:h-12 text-neutral-600'),
    []
  )

  return (
    <Section
      ref={ref}
      id="top"
      className="bg-me bg-cover bg-no-repeat bg-center bg-blend-lighten bg-white/[.2]"
    >
      <div className="h-full flex justify-center items-center flex-col text-gray-200">
        <h1 className="m-2 sm:m-4">Welcome to</h1>
        <h1 className="m-2 sm:m-4">Sekiyan&#039;s website.</h1>
        <div className="m-2 text-center">
          このサイトはせきやん個人のポートフォリオサイトです。
        </div>

        <div className="sm:m-5 flex flex-wrap justify-center">
          {exLinks.map((link) => (
            <LinkIcon key={link.name} url={link.url}>
              {link.icon}
            </LinkIcon>
          ))}
        </div>

        <p className="text-2xl">Scroll</p>
        <DownButton href="#profile" className="text-white" />
      </div>
    </Section>
  )
})
