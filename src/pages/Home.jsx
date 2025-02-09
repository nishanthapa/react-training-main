import { useRef } from "react"
import { motion } from "framer-motion"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import SkillsSection from "../components/SkillsSection"
import ContactForm from "../components/ContactForm"

const Home = () => {
  const sectionRefs = useRef({})

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <section ref={(el) => (sectionRefs.current.hero = el)} id="hero">
        <HeroSection />
      </section>
      <section ref={(el) => (sectionRefs.current.about = el)} id="about">
        <AboutSection />
      </section>
      <section ref={(el) => (sectionRefs.current.projects = el)} id="projects">
        <ProjectsSection />
      </section>
      <section ref={(el) => (sectionRefs.current.skills = el)} id="skills">
        <SkillsSection />
      </section>
      <section
        ref={(el) => (sectionRefs.current.contact = el)}
        id="contact"
        className="py-20 bg-gray-50 "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Home

