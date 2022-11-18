export type MicrocmsResponse<T> = {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}

export type Product = {
  title: string
  desc: string
  url: string
  github: string
  techs: string[]
  imagePath: string
}

export type Live = {
  name: string
  day: number
  date: Date
  venue: string
  imgSrc: string
}

export type Blog = {
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
