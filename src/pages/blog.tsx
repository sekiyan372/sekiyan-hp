import type { NextPage } from 'next'

import { BlogCard } from '~/components/Card'
import { Footer, Head, Header } from '~/components/Layout'
import { Heading } from '~/components/Text'
import { useBlog } from '~/hooks/useBlog'
import { microcmsClient } from '~/libs/microcms'
import type { Blog } from '~/types'

type Props = {
  blogData: Blog
}

const Product: NextPage<Props> = ({ blogData }) => {
  const { data, recommends, count, viewMore } = useBlog(blogData.contents)

  return (
    <>
      <Head title="Blog" />

      <Header />

      <div className="py-12 bg-gray-200">
        <Heading className="p-8 md:p-16 sm:text-4xl text-gray-800">
          せきやんのブログ 記事一覧
        </Heading>

        <h4 className="py-2 text-center text-jade font-bold border-b-2">
          特に読んでほしい渾身の記事
        </h4>
        <div className="flex flex-wrap justify-center px-2 sm:px-16">
          {recommends.map((recommend) => (
            <BlogCard key={recommend.id} blog={recommend} />
          ))}
        </div>

        <h4 className="pb-2 pt-8 text-center text-jade font-bold">
          こっちも読んでね
        </h4>
        <div className="flex flex-wrap justify-center px-2 sm:px-16">
          {data.map((recommend) => (
            <BlogCard key={recommend.id} blog={recommend} />
          ))}
        </div>

        {count < blogData.totalCount && (
          <div className="text-center">
            <button
              onClick={viewMore}
              className="px-4 pt-2 pb-1 rounded-lg bg-jade text-white sm:text-xl"
            >
              もっと見る
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  )
}

export default Product

export const getStaticProps = async () => {
  const response: Blog = await microcmsClient.get({
    endpoint: process.env.MICROCMS_END_POINT ?? '',
    queries: {
      orders: '-createdAt',
      fields: [
        'id',
        'createdAt',
        'title',
        'url',
        'isRecommend',
        'writeAt',
        'categories',
      ],
    },
  })

  return {
    props: { blogData: response },
  }
}
