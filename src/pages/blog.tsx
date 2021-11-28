import type { NextPage, GetStaticProps } from 'next'
import axios from "axios"
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
