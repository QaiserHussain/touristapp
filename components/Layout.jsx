import React from 'react'
import Navbar from './Navbar'
import NavbarChild from './NavbarChild'

function Layout({children}) {
  return (
    <div>
        <Navbar />
        <NavbarChild />
        {children}
    </div>
  )
}

export default Layout