import { useMemo, useState } from 'react'

import type { BlogContent } from '~/types'

type UseBlogReturn = {
  data: BlogContent[]
  recommends: BlogContent[]
  count: number
  viewMore: () => void
}

const GET_COUNT = 12

export const useBlog = (contents: BlogContent[]): UseBlogReturn => {
  const [count, setCount] = useState<number>(GET_COUNT - 1)
  const [data, setData] = useState<BlogContent[]>(
    contents.slice(0, count).filter((content) => !content.isRecommend)
  )

  const recommends = useMemo<BlogContent[]>(
    () => contents.filter((content) => content.isRecommend),
    [contents]
  )

  const viewMore = () => {
    const nextCount = count + GET_COUNT
    setCount(nextCount)
    setData(
      contents.slice(0, nextCount).filter((content) => !content.isRecommend)
    )
  }

  return { data, recommends, count, viewMore }
}
