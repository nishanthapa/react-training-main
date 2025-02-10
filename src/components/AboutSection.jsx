import { motion } from "framer-motion";

const motionSettings = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.2 },
    viewport: { once: true },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.4 },
    viewport: { once: true },
  },
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-800"
          {...motionSettings.fadeIn}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            {...motionSettings.slideInLeft}
          >
            <img
              src="/nishan.jpg" 
              alt="Profile of the developer"
              className="rounded-full mx-auto"
              width={300}
              height={300}
            />
          </motion.div>
          <motion.div className="md:w-1/2" {...motionSettings.slideInRight}>
            <p className="text-lg mb-4 text-gray-600">
              Hello! I&apos;m a passionate web developer with experience in
              creating responsive and user-friendly websites. I love turning
              complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-gray-600">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or enjoying a
              good book.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
