import type { GetStaticProps, NextPage } from 'next'
import { useInView } from 'react-intersection-observer'

import { Head, Header } from '~/components/Layout'
import { NavLink } from '~/components/Link'
import { microcmsClient } from '~/libs/microcms'
import { baseUrl, params } from '~/libs/youtube'
import {
  Career,
  Contact,
  Hobby,
  Product,
  Profile,
  Top,
} from '~/sections/topPage'
import type { MicrocmsResponse, Work, YouTubeResponse } from '~/types'
import { microcmsEndPoints } from '~/utils/constant'

type Props = {
  works: Work[]
  videoIds: string[]
}

const Home: NextPage<Props> = ({ works, videoIds }) => {
  const [topRef, inTopView] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  })

  const [profileRef, inProfileView] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  })

  const [careerRef, inCareerView] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  })

  const [productRef, inProductView] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  })

  const [hobbyRef, inHobbyView] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  })

  const [contactRef, inContactView] = useInView({
    rootMargin: '-50% 0px',
    threshold: 0,
  })

  return (
    <>
      <Head />

      <Header />

      <div className="w-full h-screen snap overflow-y-auto scrolling-touch">
        <Top ref={topRef} />
        <Profile ref={profileRef} />
        <Career ref={careerRef} />
        <Product ref={productRef} works={works} />
        <Hobby ref={hobbyRef} videoIds={videoIds} />
        <Contact ref={contactRef} />
      </div>

      <nav
        id="pagination"
        className="fixed top-1/2 md:right-8 right-4 nav-transform"
      >
        <NavLink inView={inTopView} href="#top" />
        <NavLink inView={inProfileView} href="#profile" />
        <NavLink inView={inCareerView} href="#career" />
        <NavLink inView={inProductView} href="#product" />
        <NavLink inView={inHobbyView} href="#hobby" />
        <NavLink inView={inContactView} href="#contact" />
      </nav>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const queryParams = new URLSearchParams(params)

  try {
    const productResponse: MicrocmsResponse<Work> = await microcmsClient.get({
      endpoint: microcmsEndPoints.WORK,
      queries: {
        orders: 'createdAt',
        fields: ['id', 'title', 'desc', 'url', 'github', 'techs', 'image'],
      },
    })

    const response = await fetch(baseUrl + queryParams)
    const data: YouTubeResponse = await response.json()
    const videoIds = data.items.map((item) => item.id.videoId)

    return {
      props: { works: productResponse.contents, videoIds: videoIds },
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
    }
    return { props: { works: [], videoIds: [] } }
  }
}
