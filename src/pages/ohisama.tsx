import type { GetStaticProps, NextPage } from 'next'

import { Footer, Head, Header } from '~/components/Layout'
import { baseUrl, params } from '~/libs/youtube'
import { LiveLog, OhisamaProfile, QAndA } from '~/sections/ohisamaPage'
import type { YouTubeResponse } from '~/types'

type Props = {
  videoIds: string[]
}

const OhisamaPage: NextPage<Props> = ({ videoIds }) => {
  return (
    <>
      <Head title="おひさまhistory" />

      <Header />

      <div className="pt-12">
        <OhisamaProfile videoIds={videoIds} />
        <LiveLog />
        <QAndA />
      </div>

      <Footer />
    </>
  )
}

export default OhisamaPage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const queryParams = new URLSearchParams(params)

  try {
    const response = await fetch(baseUrl + queryParams)
    const data: YouTubeResponse = await response.json()
    const videoIds = data.items.map((item) => item.id.videoId)
    return {
      props: { videoIds: videoIds },
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
    }
    return { props: { videoIds: [] } }
  }
}
