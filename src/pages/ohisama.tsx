import type { NextPage } from 'next'

import { Footer, Head, Header } from '~/components/Layout'
import { LiveLog, OhisamaProfile, QAndA } from '~/sections/ohisamaPage'

const OhisamaPage: NextPage = () => {
  return (
    <>
      <Head title="おひさまhistory" />

      <Header />

      <div className="pt-12">
        <OhisamaProfile />
        <LiveLog />
        <QAndA />
      </div>

      <Footer />
    </>
  )
}

export default OhisamaPage
