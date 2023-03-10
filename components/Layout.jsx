import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import NavbarChild from './NavbarChild'
import {Box} from '@mui/material'
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <NavbarChild />
      <Box sx={{ margin:{xs: '110px 10px 20px 10px',sm: '110px 50px 20px 50px', md: '110px 50px 50px 50px'}}}>
        {children}
      </Box>
      <Footer />
    </div>
  )
}

export default Layout