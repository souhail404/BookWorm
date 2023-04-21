import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
        <Header />
        <div className="page-content">
          <div className="container main-container max-width">
            <Outlet />
          </div>
        </div>
        <Footer />
    </>
    )
}

export default Layout