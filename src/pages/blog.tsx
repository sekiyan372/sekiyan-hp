import type { NextPage } from 'next'
import Footer from '~/components/Footer'
import Head from '~/components/Head'
import Header from '~/components/Header'
import { Heading } from '~/components/Heading'

const Product: NextPage = () => {
  return(
    <>
      <Head title="Blog" />

      <Header />
      <Heading>Blog Index</Heading>
      <Footer />
    </>
  )
}

export default Product
