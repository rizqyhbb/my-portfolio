import React, { ReactNode } from 'react'
import Navbar from './navbar'


interface ILayout {
  children: ReactNode
}

const layout = ({ children }: ILayout) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default layout