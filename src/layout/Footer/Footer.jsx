import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import LogoFooter from "../../assets/logoFooter.png"
import styles from "./Footer.module.css"




const Footer = () => {
  return (
    <div className={styles.wrapper} >
      <div className={styles.miniwrap} >
     <div className={styles.mini}>
        <img src={LogoFooter} alt="" />
        <p>Sample text. Click to select the Text Element.</p>
       <div className={styles.icon} >
       <FaFacebookF className={styles.icon} />
        <FaXTwitter  className={styles.icon} />
        <FaInstagram className={styles.icon} />
       </div>
      </div>

      <div className={styles.wrap}>
      <h1>Quick Links</h1>
      
        <a href="#">About Us</a>
        <a href="#">Our Services</a>
        <a href="#">Blog</a>
        <a href="#">Testimonials</a>
        <a href="#">FAQ</a>
      </div>
    
      <div className={styles.main}>
        <h2>Get In Touch</h2>
        <p>​​​456 Elm St, Los Angeles, CA 90001, United States</p>
        <a href="#">hi@nutrion.com</a>
        <p>+998 (99) 909 99 99</p>
      </div>
    <div className={styles.inputwrapper}>
    <h2>Subscribe</h2>
    <input  className={styles.input} type="email" placeholder='Enter a valid email address'/>
    <button>SEND A MESSAGE</button>
    </div>
    </div>
    </div>


  )
}

export default Footer
