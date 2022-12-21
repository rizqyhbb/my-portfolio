import React, { ReactElement } from 'react'
import { Button, Input, Layout, Textarea, Title } from '../components'
import { NextPageWithLayout } from './_app'

import styles from "../styles/Contact.module.css"

const Contact: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title title="Let's talk." dark={true} />
      </div>
      <div className={styles.formContainer}>
        <form>
          <Input id="name" label='NAME' name='name' />
          <Input id="email" label='EMAIL' name='email' type="email" />
          <Textarea id='message' label='MESSAGE' name='message' />
        </form>
      </div>
      <div className={styles.submit}>
        <Button>Submit</Button>
      </div>
    </div>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout dark={true} footer={false}>{page}</Layout>
}
export default Contact