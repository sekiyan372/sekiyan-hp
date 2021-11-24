import { forwardRef, ForwardRefRenderFunction } from "react"
import Image from 'next/image'
import Link from 'next/link'
import Down from '~/components/Button/Down'
import { Heading } from '~/components/Heading'
import Section from '~/components/Section'

const PRODUCT = require('../../public/image/product-page.png')

const Product: ForwardRefRenderFunction<HTMLElement> = ({}, ref) => {
  return (
    <Section
      ref={ref}
      id="product"
      className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-200"
    >
      <Heading>Product</Heading>
      <Link href="/product" passHref>
        <div className="relative flex justify-center items-center w-160 h-96 m-8 cursor-pointer">
          <div className="absolute w-160 h-96 my-12 bg-black inline-block">
            <Image
              src={PRODUCT}
              alt="product page"
              width={640}
              height={384}
              className="block opacity-40"
            />
          </div>
          <p className="absolute text-3xl text-white">Please click to move the page.</p>
        </div>
      </Link>
      <Down href="#hobby" />
    </Section>
  )
}

export default forwardRef(Product)
