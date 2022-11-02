import type { NextPage } from 'next'

import { Footer, Head, Header } from '~/components/Layout'
import { Heading } from '~/components/Text'

const Product: NextPage = () => {
  return (
    <>
      <Head title="Blog" />

      <Header />
      <Heading>Blog Index</Heading>
      <Footer />
    </>
  )
}

export default Product
