import { VFC, LegacyRef } from "react"
import Image from 'next/image'
import Down from '~/components/Button/Down'
import { Heading } from '~/components/Heading'
import Section from '~/components/Section'

const ICON = require('../../public/my-icon.jpg')

const profiles = [
  {
    label: "Name",
    content: "関谷 翠帰（Sekiya Suiki）",
  },
  {
    label: "From",
    content: "愛知県名古屋市",
  },
  {
    label: "University",
    content: "金沢工業大学（23卒）",
  },
]

type Props = {
  ref: LegacyRef<HTMLElement>
}

const Profile: VFC<Props> = ({ref}) => {
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
            src={ICON}
            alt="my icon"
            width={200}
            height={200}
            className="rounded-full"
          />
          <p className="text-3xl">せきやん</p>
          <p className="text-xl">Sekiyan</p>
        </div>
        <dl className="m-8 text-lg">
          {profiles.map(profile => (
            <>
              <dt className="float-left clear-left w-24">{profile.label}</dt>
              <dd className="float-left ml-5">{profile.content}</dd>
            </>
          ))}
        </dl>
      </div>
      <Down href="#career" className="m-8" />
    </Section>
  )
}

export default Profile
