import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = (props) => {
  return (
    <>
        <Navbar></Navbar>
        {props.children}
        {/* footer */}
    </>
  )
}

export default Layout