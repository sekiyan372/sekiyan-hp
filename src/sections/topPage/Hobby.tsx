import Link from 'next/link'
import { forwardRef } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

import { DownButton } from '~/components/Button'
import { Section } from '~/components/Layout'
import { Heading } from '~/components/Text'

export const Hobby = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section
      ref={ref}
      id="hobby"
      className="flex justify-center items-center flex-col bg-hinata text-white"
    >
      <Heading className="py-4">Hobby</Heading>
      <div>
        日向坂46が大好きで、日向坂46のオタ活をするために生きていると言っても過言ではないです。
      </div>
      <div className="text-center py-4">
        <p>
          おひさま（日向坂46のファンの名称）としての経歴はこちらのページから
        </p>
        <AiFillCaretDown className="mx-auto my-2" />
        <p className="text-xl hover:translate-y-1">
          <Link href="/ohisama">おひさまhistory</Link>
        </p>
      </div>

      <DownButton href="#contact" />
    </Section>
  )
})
