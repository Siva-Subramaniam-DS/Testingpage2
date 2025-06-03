import React from 'react'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import ConsultationForm from '../../components/ConsultationForm/ConsultationForm'
import Solutions from '../../components/Solutions/Solutions'
import About from '../../components/About/About'
import DroneVideo from '../../components/DroneVideo/DroneVideo'
import Gallery from '../../components/Gallery/Gallery'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <DroneVideo />
      <Gallery />
      <ConsultationForm />
      <Solutions />
      <About />
    </div>
  )
}

export default Home