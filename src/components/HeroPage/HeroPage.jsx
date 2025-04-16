import React from 'react'
import styles from "./HeroPage.module.css"


const HeroPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper1}><h1>Be healthy, <br /> enjoy life!</h1>
        <p>Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo <br /> consequat</p>
        <p className='{styles.text1}'>Image from Freepik</p>
        <a href="#">JOIN NOW</a>
      </div>
      <div className={styles.foto}>

      </div>
    </div>
  )
}

export default HeroPage
