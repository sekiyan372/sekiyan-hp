import { VFC } from 'react'
import Image from 'next/image'

type Props = {
  url: string
  imagePath: string
  alt: string
  title: string
  desc: string
  role?: string
}

export const ProductCard: VFC<Props> = ({
  url,
  imagePath,
  alt,
  title,
  desc,
  role,
}) => {
  return(
    <div className="w-104 m-3 border-4 rounded-lg p-3 hover:opacity-80">
      <a href={url} target="blank">
        <Image src={imagePath} alt={alt} />
        <div className="text-center text-2xl">{title}</div>
        <div className="text-center mt-3">{desc}</div>
        {role && (
          <div className="text-center">({role})</div>
        )}
      </a>
    </div>
  )
}

export const BigProductCard: VFC<Props> = ({
  url,
  imagePath,
  alt,
  title,
  desc,
  role,
}) => {
  return(
    <div className="w-160 m-3 border-4 rounded-lg p-3 hover:opacity-80">
      <a href={url} target="blank">
        <Image src={imagePath} alt={alt} />
        <div className="text-center text-2xl">{title}</div>
        <div className="text-center mt-3">{desc}</div>
        {role && (
          <div className="text-center">({role})</div>
        )}
      </a>
    </div>
  )
}
