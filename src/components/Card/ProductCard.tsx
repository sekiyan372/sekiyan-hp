import Image from 'next/image'
import type { FC } from 'react'

import { ProductModal } from '~/components/Modal'
import { useDisclosure } from '~/hooks/useDisclosure'
import type { Product } from '~/types'

type Props = {
  product: Product
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div
        className="p-1 sm:p-2 text-center text-gray-800 w-36 md:w-60 xl:w-80 cursor-pointer hover:translate-y-1"
        onClick={onOpen}
      >
        <Image
          src={product.imagePath}
          alt="product image"
          width="240"
          height="135"
          className="mx-auto drop-shadow-lg"
        />
        <div className="text-xs sm:text-base pt-2">{product.title}</div>
      </div>

      <ProductModal product={product} isOpen={isOpen} onClose={onClose} />
    </>
  )
}
