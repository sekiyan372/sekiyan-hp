import type { NextPage } from 'next'
import Head from '~/components/Head'
import ProductCard from '~/components/ProductCard'

const EFFECTOR_GEEK = require('../../public/image/effector-geek.png')

const Product: NextPage = () => {
  return(
    <>
      <Head title="Product" />

      <div className="bg-jade text-white">
        <h2 className="text-center">Product</h2>
        <div>
          <div>
            <h3 className="text-center">Individual</h3>
            <div className="flex">
              <ProductCard
                url="https://effector-geek.vercel.app/"
                imagePath={EFFECTOR_GEEK}
                alt="Effector Geek"
                title="Effector Geek"
                desc="desc"
              />
            </div>
          </div>

          <div>
            <h3 className="text-center">Join</h3>
            <div>
              <ProductCard
                url="https://effector-geek.vercel.app/"
                imagePath={EFFECTOR_GEEK}
                alt="Effector Geek"
                title="Effector Geek"
                desc="desc"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
