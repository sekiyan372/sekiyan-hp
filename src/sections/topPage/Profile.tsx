import Image from 'next/image'
import { forwardRef } from 'react'

import { DownButton } from '~/components/Button'
import { Section } from '~/components/Layout'
import { Heading } from '~/components/Text/Heading'

const profiles = [
  {
    label: 'From',
    content: '愛知県名古屋市',
  },
  {
    label: 'University',
    content: '金沢工業大学（23卒）',
  },
]

export const Profile = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section
      ref={ref}
      id="profile"
      className="flex justify-center items-center flex-col bg-gray-200"
    >
      <Heading className="text-gray-800 sm:mb-10">Profile</Heading>
      <div className="flex items-center flex-col sm:flex-row text-center">
        <Image
          src="/images/icon/my_icon.jpg"
          alt="my icon"
          width="160"
          height="160"
          className="rounded-full mx-auto pb-2 w-20 sm:w-40 h-20 sm:h-40"
        />
        <div>
          <p className="text-xl sm:text-3xl">せきやん</p>
          <p className="sm:text-xl">Sekiyan</p>
          <dl className="m-4 sm:text-lg text-sm">
            {profiles.map((profile) => (
              <span key={profile.label}>
                <dt className="float-left clear-left w-24">{profile.label}</dt>
                <dd className="float-left ml-5">{profile.content}</dd>
              </span>
            ))}
          </dl>
        </div>
      </div>
      <div className="px-10 pt-4 text-sm md:text-base sm:w-5/6 md:w-3/4 xl:w-1/2">
        高校からバンドをやっていた影響で卒業後楽器業界の道に進むも、いろいろな厳しさを感じ大学進学へ進学し情報工学を学ぶ。Webのフロントエンドを中心にWeb系の開発が好き。趣味は楽器を弾くことと日向坂46のオタ活をすること。
      </div>
      <DownButton href="#career" className="m-1" />
    </Section>
  )
})
