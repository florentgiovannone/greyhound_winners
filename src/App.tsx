import './style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Form from "./components/Form"
import HoldingPage from "./components/HoldingPage"
import AboutTheGame from './components/AboutTheGame'
import FormNetlify from "./components/FormNetlify"
import FormSuccess from "./components/FormSuccess"
import CookieConsent from "./components/CookieConsent"
import Booklet from "./components/Booklet"

function AppContent() {
  return (
    <>
      <NavBar />
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/form" element={<Form />} /> */}
          <Route path="/form" element={<FormNetlify />} />
          <Route path="/about-the-game" element={<AboutTheGame />} />
          <Route path="/form-success" element={<FormSuccess />} />
          <Route path="/booklet" element={<Booklet />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (<>
    <div className="min-h-screen font-sans leading-relaxed text-gray-800 bg-gradient-to-b from-gw-purple to-black">
      <Router>
        <AppContent />
      </Router>
    </div>
    <CookieConsent />
    {/* <div className="min-h-screen">
      <HoldingPage />
    </div> */}
  </>
  )
}

export default App
