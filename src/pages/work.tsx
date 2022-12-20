import React, { ReactElement } from 'react'
import { Layout } from '../components'
import { NextPageWithLayout } from './_app'

const Work: NextPageWithLayout = () => {
  return (
    <div>work</div>
  )
}

Work.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default Work