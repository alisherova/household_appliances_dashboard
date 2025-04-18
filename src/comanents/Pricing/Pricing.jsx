import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import styles from "./Pricing.module.css"
import "./Pricing.js"

function Pricing() {
  return (
<div className={styles.wrapper}>
    <div className={styles.done}>
        <div className="prc">
            <h1>Pricing</h1>
            <p className={styles.p__p}>
            Vel risus commodo viverra maecenas 
            accumsan lacus vel facilisis. Eu tincidunt tortor 
            aliquam nulla facilisi cras fermentum odio eu. Cras 
            semper auctor neque vitae tempus quam.
            </p>
        </div>
    </div>
    <div className={styles.dtwo}>
        <div className={styles.box}>
        <h2>$39</h2>
        <h3>Jumpstart Plan</h3>
        <p className={styles.x__p}>Perfect for get started on their nutrition journey</p>
        <p className={styles.v__p}><IoCheckmark /> Online Consultation</p>
        <p className={styles.v__p}><IoCheckmark /> Daily meal tracking</p>
        <p className={styles.v__p}><IoCheckmark /> Weekly meal tracking</p>
        <p className={styles.f__p}><IoCloseCircleOutline /> Strategy to more healthy</p>
        <p className={styles.f__p}><IoCloseCircleOutline /> Weight Assessment</p>
        <button>SELECT PLAN</button>
        </div>
        <div className={styles.box}>
        <h2>$59</h2>
        <h3>Transform Plan</h3>
        <p className={styles.x__p}>Perfect for achieve their health and wellness goals</p>
        <p className={styles.v__p}><IoCheckmark /> Online Consultation</p>
        <p className={styles.v__p}><IoCheckmark /> Daily meal tracking</p>
        <p className={styles.v__p}><IoCheckmark /> Weekly meal tracking</p>
        <p className={styles.v__p}><IoCheckmark /> Strategy to more healthy</p>
        <p className={styles.f__p}><IoCloseCircleOutline /> Weight Assessment</p>
        <button>SELECT PLAN</button>
        </div>
        <div className={styles.box}>
        <h2>$149</h2>
        <h3>Daily Plan</h3>
        <p className={styles.x__p}>Duis aute irure dolor in reprehenderit in voluptate velit</p>
        <p className={styles.v__p}><IoCheckmark /> Online Consultation</p>
        <p className={styles.v__p}><IoCheckmark /> Daily meal tracking</p>
        <p className={styles.v__p}><IoCheckmark /> Weekly meal tracking</p>
        <p className={styles.v__p}><IoCheckmark /> Strategy to more healthy</p>
        <p className={styles.v__p}><IoCheckmark /> Weight Assessment</p>
        <button>SELECT PLAN</button>
        </div>
    </div>
</div>
  )
}

export default Pricing