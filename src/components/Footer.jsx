import { Facebook, Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">My Portfolio</h2>
            <p className="mt-2 text-gray-300">Building amazing web experiences</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-blue-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/nishanthapa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nishan-thapa-93a594216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://x.com/NishanT47295626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100067017468408   "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                

              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

