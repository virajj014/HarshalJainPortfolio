"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";
import Footer from "@/components/Footer";
import SocialSection from "@/components/SocialSection";
import ProjectSection from "@/components/ProjectSection"
import { useRef } from "react";
export default function Home() {

  const homeRef = useRef<HTMLDivElement | null>(null); // Specify type
  const aboutRef = useRef<HTMLDivElement | null>(null); // Specify type
  const projectsRef = useRef<HTMLDivElement | null>(null); // Specify type
  const skillsRef = useRef<HTMLDivElement | null>(null); // Specify type

  const contactRef = useRef<HTMLDivElement | null>(null); // Specify type

  return (
    <div>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}

        contactRef={contactRef}
      />

      <div ref={homeRef} id="home-section">
        <PortfolioSection />
      </div>
      <div ref={aboutRef} id="about-section">
        <AboutSection />
      </div>
      <div ref={projectsRef} id="projects-section">

        <ProjectSection />
      </div>

      <div ref={skillsRef} id="projects-section">
        <SkillSection />
      </div>
      <div ref={contactRef} id="contact-section">
        <Footer />
      </div>
      <SocialSection />
      {/* 
     
      <ProtfolioSection/>
      
       */}
    </div>
  );
}
