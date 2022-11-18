import { forwardRef } from 'react'

import { DownButton } from '~/components/Button'
import { WorkCard } from '~/components/Card'
import { Section } from '~/components/Layout'
import { Heading, SubHeading } from '~/components/Text'
import type { Work } from '~/types'

const joins = [
  {
    url: 'https://tourism-project.com/',
    title: 'Tourism Projectホームページ',
  },
  {
    url: 'https://totteku.tourism-project.com/',
    title: '撮っテク！',
  },
  {
    url: 'https://www.cirkit.jp/',
    title: 'CirKitコーポレートサイト',
  },
]

type Props = {
  works: Work[]
}

export const Product = forwardRef<HTMLElement, Props>(({ works }, ref) => {
  return (
    <Section
      ref={ref}
      id="product"
      className="flex justify-center items-center flex-col bg-gray-200"
    >
      <Heading className="text-gray-800 md:p-4">Product</Heading>
      <div className="flex flex-wrap justify-center">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>

      <SubHeading className="text-gray-800 pt-2">Join</SubHeading>
      <div className="flex flex-wrap justify-center">
        {joins.map((join) => (
          <div
            key={join.title}
            className="inline-block border-b border-jade m-2 text-xs text-jade sm:text-base cursor-pointer hover:opacity-60"
          >
            <a href={join.url} target="_blank" rel="noreferrer">
              {join.title}
            </a>
          </div>
        ))}
      </div>
      <DownButton href="#hobby" />
    </Section>
  )
})
