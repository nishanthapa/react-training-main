import { motion } from "framer-motion"

const SkillsSection = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "C",
    "c++",
    "Node.js",
    
  ]

  return (
    <section id="skills" className="py-20 bg-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 px-4 py-2 rounded-full text-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

