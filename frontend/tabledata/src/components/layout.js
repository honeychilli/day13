import React from 'react'
import MyNavbar from './navbar'
import Footer from './footer'

const Layout = () => {
  return (
    <>
    <MyNavbar />
    <Container fluid='md'>
        <main>
        <Outlet />
        </main>
    </Container>
    <Footer/>
    </>
    
  )
}

export default Layout