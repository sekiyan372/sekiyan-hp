import Image from 'next/image'
import type { FC } from 'react'

import { ProductModal } from '~/components/Modal'
import { useDisclosure } from '~/hooks'
import type { Work } from '~/types'

type Props = {
  work: Work
}

export const WorkCard: FC<Props> = ({ work }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div
        className="p-1 sm:p-2 text-center text-gray-800 w-36 md:w-60 xl:w-80 cursor-pointer hover:translate-y-1"
        onClick={onOpen}
      >
        <Image
          src={work.image.url}
          alt="product image"
          width="240"
          height="135"
          className="mx-auto drop-shadow-lg"
        />
        <div className="text-xs sm:text-base pt-2">{work.title}</div>
      </div>

      <ProductModal work={work} isOpen={isOpen} onClose={onClose} />
    </>
  )
}
