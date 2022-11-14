import Image from 'next/image'
import { FC } from 'react'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

import { CloseCross } from '~/components/Button'
import { TechTag } from '~/components/Tag'
import type { Product } from '~/types'

type Props = {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export const ProductModal: FC<Props> = ({ product, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed w-full h-screen z-10 bg-gray-800 top-0 left-0 opacity-20" />

          <div className="fixed z-20 bg-white inset-x-5/6 inset-y-20 w-5/6 h-fit text-center p-2">
            <div className="flex justify-end">
              <CloseCross onClick={onClose} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={product.imagePath}
                alt="product image"
                width="320"
                height="180"
                className="mx-auto my-2 drop-shadow-lg"
              />
              <p className="sm:p-2 text-lg sm:text-2xl">{product.title}</p>
              <p className="text-sm sm:text-base sm:p-2">{product.desc}</p>
              <div className="p-2">
                {product.techs.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
              <div className="p-2">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 text-jade cursor-pointer hover:opacity-60"
                >
                  <AiOutlineLink className="inline-block" />
                  <span>Site Link</span>
                </a>
                <a
                  href={product.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 text-jade cursor-pointer hover:opacity-60"
                >
                  <AiFillGithub className="inline-block" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
