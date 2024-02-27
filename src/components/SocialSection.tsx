"use client"
import React from 'react'
import styles from '@/styles/SocialSection.module.css';
import { SocialIcon } from 'react-social-icons'

const SocialSection = () => {
  return (
    <div className={styles.social}>
      <div className={styles.socialcard}
        onClick={() => window.open('https://instagram.com/codershub.dev', '_blank')}
      >
        <SocialIcon url="https://instagram.com" style={{ height: 40, width: 40 }} />
        <p>@codershub.dev</p>
      </div>

      <div className={styles.socialcard}
        onClick={() => window.open('https://mail.google.com/mail/u/1/#inbox?compose=new', '_blank')}
      >
        <SocialIcon url="https://mail.google.com" style={{ height: 40, width: 40 }} />
        <p>virajj014@gmail.com</p>
      </div>

      <div className={styles.socialcard}
        onClick={() => window.open('https://www.linkedin.com/in/harshal-jain-5742b1199/', '_blank')}
      >
        <SocialIcon url="https://linkedin.com" style={{ height: 40, width: 40 }} />
        <p>Harshal Jain</p>
      </div>

      <div className={styles.socialcard}
        onClick={() => window.open('https://www.youtube.com/@CodersHubYoutube', '_blank')}
      >
        <SocialIcon url="https://www.youtube.com" style={{ height: 40, width: 40 }} />
        <p>Coders Hub</p>
      </div>
    </div>


  )
}

export default SocialSection