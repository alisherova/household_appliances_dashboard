import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Footer/Footer'
import styles from "./Layout.module.css"
import Main from './Main/Main'

const Layout = () => {
  return (
    <div className={styles.container}>
        <Navbar/>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Layout