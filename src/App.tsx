import './style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"

function App() {
  return (
    <div className="bg-gw-red">
    <Router >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
