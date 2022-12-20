import React, { ReactElement } from 'react'
import { Layout } from '../components'
import { NextPageWithLayout } from './_app'

const Work: NextPageWithLayout = () => {
  return (
    <div>
      <div>
        <h1>Work.</h1>
      </div>
    </div>
  )
}

Work.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default Work