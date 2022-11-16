import type { NextPage } from 'next'

import { Footer, Head, Header } from '~/components/Layout'
import { Heading, SubHeading } from '~/components/Text'

const Product: NextPage = () => {
  return (
    <>
      <Head title="Blog" />

      <Header />
      <Heading>せきやんのブログ 記事一覧</Heading>
      <SubHeading>特にみてほしい渾身の記事</SubHeading>

      <Footer />
    </>
  )
}

export default Product
