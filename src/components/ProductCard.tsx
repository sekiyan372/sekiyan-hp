import { VFC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  url: string
  imagePath: string
  alt: string
  title: string
  desc: string
}

const ProductCard: VFC<Props> = ({
  url,
  imagePath,
  alt,
  title,
  desc
}) => {
  return(
    <div className="w-1/3 m-5 border p-5">
      <a href={url} target="blank">
        <Image src={imagePath} alt={alt} />
        <div>{title}</div>
        <div>{desc}</div>
      </a>
    </div>
  )
}

export default ProductCard