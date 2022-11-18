export type MicrocmsResponse<T> = {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}

export type MicrocmsImage = {
  url: string
  height: number
  width: number
}

export type Work = {
  id: string
  title: string
  desc: string
  url: string
  github: string
  techs: string[]
  image: MicrocmsImage
}

export type Live = {
  id: string
  name: string
  day: number
  dateAt: Date
  venue: string
  image: MicrocmsImage
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
