import React, { ReactNode } from 'react'
import Navbar from './navbar'


interface ILayout {
  children: ReactNode,
  dark?: boolean
}

const layout = ({ children, dark }: ILayout) => {
  return (
    <>
      <Navbar dark={dark} />
      <div>{children}</div>
    </>
  )
}

export default layout