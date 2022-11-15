import Link from 'next/link'
import { forwardRef } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

import { DownButton, MoreViewYouTube } from '~/components/Button'
import { Section } from '~/components/Layout'
import { YouTubeSideScroll } from '~/components/Scroll'
import { Heading, SubHeading } from '~/components/Text'

type Props = {
  videoIds: string[]
}

export const Hobby = forwardRef<HTMLElement, Props>(({ videoIds }, ref) => {
  return (
    <Section
      ref={ref}
      id="hobby"
      className="flex flex-col justify-center bg-hinata text-white"
    >
      <Heading className="py-4">Hobby</Heading>
      <div className="px-2 text-sm sm:text-base text-center">
        日向坂46が大好きで、日向坂46のオタ活をするために生きていると言っても過言ではないです。
      </div>
      <div className="px-2 py-2 sm:py-4 text-center">
        <p className="text-sm sm:text-base">
          おひさまとしての経歴はこちらのページから
        </p>
        <AiFillCaretDown className="mx-auto sm:my-2" />
        <p className="text-lg sm:text-xl hover:translate-y-1">
          <Link href="/ohisama">
            <span className="border-b">おひさまhistory</span>
          </Link>
        </p>
      </div>

      {videoIds.length !== 0 && (
        <>
          <SubHeading className="sm:pt-4 sm:text-2xl">
            日向坂46ベース弾いてみた
          </SubHeading>
          <YouTubeSideScroll videoIds={videoIds} />
          <MoreViewYouTube className="bg-white text-hinata" />
        </>
      )}

      <div className="text-center">
        <DownButton href="#contact" className="inline-block" />
      </div>
    </Section>
  )
})
