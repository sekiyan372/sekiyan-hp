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
      <Heading>Profile</Heading>
      <div>
        <div className="text-center">
          <Image
            src="/images/my-icon.jpg"
            alt="my icon"
            width={200}
            height={200}
            className="rounded-full"
          />
          <p className="text-3xl">せきやん</p>
          <p className="text-xl">Sekiyan</p>
        </div>
        <dl className="md:m-8 m-4 md:text-lg text-sm">
          {profiles.map((profile) => (
            <span key={profile.label}>
              <dt className="float-left clear-left w-24">{profile.label}</dt>
              <dd className="float-left ml-5">{profile.content}</dd>
            </span>
          ))}
        </dl>
      </div>
      <DownButton href="#career" className="m-8" />
    </Section>
  )
})
