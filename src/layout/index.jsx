import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar' 
import Main from './Main/Main'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Layout