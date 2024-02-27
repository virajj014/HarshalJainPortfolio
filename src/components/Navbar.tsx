"use client"
import React, { useState } from 'react'
import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import signature from '@/assets/hj_signature.png'

const Navbar = ({
    homeRef,
    aboutRef,
    projectsRef,
    contactRef,
    skillsRef
}: {
    homeRef: React.RefObject<HTMLDivElement>
    aboutRef: React.RefObject<HTMLDivElement>
    projectsRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
    skillsRef: React.RefObject<HTMLDivElement>
}) => {
    const [navActive, setNavActive] = useState(false)

    const handleButtonClick = (section: any) => {
        console.log(section)

        if (section === 'home' && homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });

        }
        else if (section === 'about' && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'projects' && projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        } 
        else if (section === 'skills' && skillsRef.current) {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (section === 'contact' && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Provide clear error message for missing section
            console.warn(`Section "${section}" not found. Please ensure it exists.`);
        }

    }
    const handlenavbarclick = () => {
        setNavActive(!navActive)
    }

    return (
        <div className={styles.navouter}>
            <div className={styles.left}>
                <Image alt="" src={signature} width={500} height={500}
                    quality={100} className={styles.sign} />
            </div>


            <div className={navActive ? `${styles.nav_toggler} ${styles.navactive}` : `${styles.nav_toggler}`} onClick={handlenavbarclick}>
                <span></span>
            </div>

            <div className={styles.right}>
                <button onClick={() => handleButtonClick('home')}>Home</button>
                <button onClick={() => handleButtonClick('about')}>About</button>
                <button onClick={() => handleButtonClick('projects')}>Projects</button>
                <button onClick={() => handleButtonClick('skills')}>Skills</button>
                <button onClick={() => handleButtonClick('contact')}>Contact</button>
            </div>

            {navActive && <div className={styles.right1}>
                <button onClick={() => handleButtonClick('home')}>Home</button>
                <button onClick={() => handleButtonClick('about')}>About</button>
                <button onClick={() => handleButtonClick('projects')}>Projects</button>
                <button onClick={() => handleButtonClick('skills')}>Skills</button>
                <button onClick={() => handleButtonClick('contact')}>Contact</button>
            </div>
            }
        </div>
    )
}

export default Navbar