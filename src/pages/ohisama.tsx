import type { GetStaticProps, NextPage } from 'next'

import { Footer, Head, Header } from '~/components/Layout'
import { microcmsClient } from '~/libs/microcms'
import { baseUrl, params } from '~/libs/youtube'
import { LiveLog, OhisamaProfile, QAndA } from '~/sections/ohisamaPage'
import type { Live, MicrocmsResponse, YouTubeResponse } from '~/types'
import { microcmsEndPoints } from '~/utils/constant'

type Props = {
  lives: Live[]
  videoIds: string[]
}

const OhisamaPage: NextPage<Props> = ({ lives, videoIds }) => {
  return (
    <>
      <Head title="おひさまhistory" />

      <Header />

      <div className="pt-12">
        <OhisamaProfile videoIds={videoIds} />
        <LiveLog lives={lives} />
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
    const liveResponse: MicrocmsResponse<Live> = await microcmsClient.get({
      endpoint: microcmsEndPoints.LIVE,
      queries: {
        orders: 'dateAt',
        fields: ['id', 'name', 'day', 'dateAt', 'venue', 'image'],
        limit: 100,
      },
    })

    const response = await fetch(baseUrl + queryParams)
    const data: YouTubeResponse = await response.json()
    const videoIds = data.items.map((item) => item.id.videoId)

    return {
      props: { lives: liveResponse.contents, videoIds: videoIds },
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
    }
    return { props: { lives: [], videoIds: [] } }
  }
}
