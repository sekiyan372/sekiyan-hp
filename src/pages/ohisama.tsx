import type { NextPage } from 'next'

import { Footer, Head, Header } from '~/components/Layout'
import { LiveLog, OhisamaProfile, QAndA } from '~/sections/ohisamaPage'

const OhisamaPage: NextPage = () => {
  return (
    <>
      <Head title="おひさまhistory" />

      <Header />

      <OhisamaProfile />
      <LiveLog />
      <QAndA />

      <Footer />
    </>
  )
}

export default OhisamaPage
