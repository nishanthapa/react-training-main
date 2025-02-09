import { motion } from "framer-motion"

const ProjectsSection = () => {
  const projects = [
    { id: 1, title: "E-commerce Website", description: "A fully functional online store built with React and Node.js" },
    { id: 2, title: "Task Management App", description: "A productivity app created using Vue.js and Firebase" },
    { id: 3, title: "Weather Dashboard", description: "A real-time weather application using OpenWeatherMap API" },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-800 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

