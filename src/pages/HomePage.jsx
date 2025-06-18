import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Users, Award } from 'lucide-react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import BenefitsSection from '../components/sections/BenefitsSection'
import GallerySection from '../components/sections/GallerySection'
import ConsultationSection from '../components/sections/ConsultationSection'
import DroneVideoSection from '../components/sections/DroneVideoSection'
import InstallationSection from '../components/sections/InstallationSection'

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <InstallationSection />
      <BenefitsSection />
      <GallerySection />
      <ServicesSection />
      <DroneVideoSection />
    </div>
  )
}

export default HomePage 