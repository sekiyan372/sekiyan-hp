import { VFC, HTMLAttributes } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ClassNames from 'classnames'

type Props = {
  url: string
  src: string
  alt: string
  width: number
  height: number
  className?: string | undefined
}

const LinkIcon: VFC<Props> = ({url, src, alt, width, height, className}) => {
  return(
    <div className={ClassNames('inline-block mx-5', className)}>
      <Link href={url} passHref>
        <a target="_blank">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="cursor-pointer"
          />
        </a>
      </Link>
    </div>
  )
}

export default LinkIcon
