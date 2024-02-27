import React from 'react'
import styles from '@/styles/PortfolioSection.module.css'
import mainImg from '@/assets/hj_mainimg.png'
import Image from 'next/image'

const PortfolioSection = () => {
  return (
    <div className={styles.section1outer}>
      <div className={styles.subtextdiv}>
        <div className={styles.left}>
          <div className={styles.about}>
            <p>Hi, I am <span>Harshal Jain</span></p>
            <p>I build full stack websites and mobile applications, I will solve all your business problems. I am open to freelance work.</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.stat}>
            <h1>30+</h1>
            <p>Happy<br></br>clients</p>
          </div>
          <div className={styles.stat}>
            <h1>5+</h1>
            <p>Years of<br></br> experience</p>

          </div>
        </div>

      </div>
      <Image src={mainImg} className={styles.mainimg} alt="mainimg" quality={100} />
      <div className={styles.maintextdiv}>
        <p>I am a </p>
        <h1><span>&nbsp;</span>FULL STACK</h1>
        <h2>Developer</h2>
      </div>
      <video src={'/smoke1.mp4'} autoPlay loop muted
        className={styles.smokevideo}
      />
    </div>
  )
}

export default PortfolioSection