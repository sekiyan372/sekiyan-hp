import Image from 'next/image'
import type { FC } from 'react'

import { TechTag } from '~/components/Tag'

type Props = {
  url?: string
  imagePath: string
  alt: string
  title?: string
  organization?: string
  desc: string
  technologies?: string[]
}

export const ProductCard: FC<Props> = ({ url, imagePath, alt, title }) => {
  return (
    <div className="p-1 sm:p-2 text-center text-gray-800 w-36 sm:w-52 hover:opacity-80">
      <a href={url} target="blank">
        <Image
          src={imagePath}
          alt={alt}
          width="240"
          height="135"
          className="mx-auto"
        />
        <div className="text-xs sm:text-base pt-2">{title}</div>
      </a>
    </div>
  )
}

export const BigProductCard: FC<Props> = ({
  url,
  imagePath,
  alt,
  title,
  organization,
  desc,
  technologies,
}) => {
  return (
    <div className="md:w-160 m-3 border-4 rounded-lg p-3 hover:opacity-80 text-center">
      <a href={url} target="blank">
        <Image
          src={imagePath}
          alt={alt}
          width="320"
          height="180"
          className="mx-auto"
        />
        <div className="text-2xl">{title}</div>
        {organization && <div>({organization})</div>}
        <div className="my-3">{desc}</div>
        {technologies &&
          technologies.map((tech) => <TechTag key={tech}>{tech}</TechTag>)}
      </a>
    </div>
  )
}
