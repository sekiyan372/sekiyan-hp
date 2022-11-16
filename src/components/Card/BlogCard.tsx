import dayjs from 'dayjs'
import type { FC } from 'react'

import { BlogTag } from '~/components/Tag'
import type { BlogContent } from '~/types'

type Props = {
  blog: BlogContent
}

export const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <div className="m-2 sm:m-4 hover:translate-y-1">
      {blog.categories.map((category) => (
        <BlogTag key={category}>{category}</BlogTag>
      ))}
      <a href={blog.url} target="_blank" rel="noreferrer" className="">
        <div className="flex items-center justify-center w-32 sm:w-64 h-20 sm:h-36 my-2 p-2 rounded-sm text-center text-gray-800 bg-white text-xs sm:text-2xl font-bold">
          {blog.title}
        </div>
      </a>
      <p className="text-xs sm:text-base text-stone-500">
        {dayjs(blog.writeAt ?? blog.createdAt).format('YYYY/MM/DD')}
      </p>
    </div>
  )
}
