import './style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Form from "./components/Form"

function App() {
  return (
    <div className="min-h-screen">
      <Router >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
