import NextHead from 'next/head'
import { VFC } from 'react'

type Props = {
  title?: string
}

const BASE_TITLE = 'Sekiyan HP'
const DESCRIPTION = 'せきやんのポートフォリオサイトです。'

const Head: VFC<Props> = (props) => {
  const title = props.title ? `${props.title} | ${BASE_TITLE}` : BASE_TITLE

  return(
    <NextHead>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@sekiyan372" />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="description" content={DESCRIPTION} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
