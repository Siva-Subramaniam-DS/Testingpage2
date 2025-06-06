import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import AboutPage from './pages/About/AboutPage'
import ServicesPage from './pages/Services/ServicesPage'
import ContactPage from './pages/Contact/ContactPage'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import './App.css'

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="App min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 perspective-1000">
        <div className="transform-style-3d">
          <Header className="transform hover:scale-105 transition-transform duration-300" />
          <main className="main-content transform hover:translate-z-10 transition-all duration-300">
            <div className="container mx-auto px-4 py-8">
              <div className="transform hover:rotate-y-5 transition-transform duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/TestingPage/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
              </div>
            </div>
      </main>
          <Footer className="transform hover:scale-105 transition-transform duration-300" />
          <ScrollToTopButton className="transform hover:scale-110 transition-transform duration-300" />
        </div>
    </div>
      <WhatsAppButton />
    </>
  )
}

export default App