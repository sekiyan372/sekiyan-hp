export type Blog = {
  contents: BlogContent[]
  totalCount: number
  offset: number
  limit: number
}

export type BlogContent = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  url: string
  isRecommend: boolean
  writeAt?: string
  categories: string[]
}
