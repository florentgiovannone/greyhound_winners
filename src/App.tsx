import './style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen">
      <Router >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
