import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
    </Router>
  )
}

export default App

