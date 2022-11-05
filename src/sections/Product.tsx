import Image from 'next/image'
import Link from 'next/link'
import { forwardRef } from 'react'

import { DownButton } from '~/components/Button'
import { Section } from '~/components/Layout'
import { Heading } from '~/components/Text'

export const Product = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section
      ref={ref}
      id="product"
      className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-200"
    >
      <Heading>Product</Heading>
      <Link href="/product" passHref>
        <div className="relative flex justify-center items-center md:w-160 w-72 h-96 m-8 cursor-pointer hover:opacity-80">
          <div className="absolute md:w-160 w-72 md:h-90 h-42 md:my-12 my-6 bg-black inline-block">
            <Image
              src="/images/product-page.jpg"
              alt="product page"
              width={640}
              height={360}
              className="block opacity-40"
            />
          </div>
          <p className="absolute md:text-3xl text-xl text-white">
            Please click to move the page.
          </p>
        </div>
      </Link>
      <DownButton href="#hobby" />
    </Section>
  )
})
