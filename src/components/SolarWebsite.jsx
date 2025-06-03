import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sun, Zap, Home, Building, Users, Phone, Mail, MapPin, 
  ChevronRight, Star, Shield, Award, Clock, Calculator, CheckCircle,
  MessageCircle, Send, Youtube, Facebook, Instagram
} from 'lucide-react';

import WhatsAppButton from './WhatsAppButton/WhatsAppButton';

const SolarWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    pincode: '',
    monthlyBill: '',
    propertyType: 'Residential',
    agreed: false
  });

  // Smooth scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'calculator', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleFormSubmit = () => {
    if (!formData.agreed) {
      alert('Please agree to terms and conditions');
      return;
    }
    if (!formData.fullName || !formData.whatsapp || !formData.pincode || !formData.monthlyBill) {
      alert('Please fill all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon for a FREE consultation.');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                <Sun className="w-7 h-7 text-white animate-spin-slow" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  KON Sun Energy
                </h1>
                <p className="text-sm text-gray-600">Solar Solutions</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex space-x-8">
              {['Home', 'About', 'Services', 'Calculator', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {['Home', 'About', 'Services', 'Calculator', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="block w-full text-left py-2 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-500 bg-clip-text text-transparent">
                    Solar Power
                  </span>
                  <br />
                  <span className="text-gray-800">Made Simple</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We don't just sell solar — we give you peace of mind. Transform your home with clean, renewable energy and start saving today.
                </p>
                <div className="flex items-center space-x-2 text-lg font-semibold text-green-600">
                  <CheckCircle className="w-6 h-6" />
                  <span>Proudly FROM TAMIL NADU & TAMIL BRAINS ❤️</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollTo('calculator')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Calculator className="w-5 h-5" />
                  <span>Get FREE Consultation</span>
                </button>
                <button
                  onClick={() => scrollTo('about')}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { icon: Award, label: "5+ Years Experience", value: "Trusted" },
                  { icon: Users, label: "1000+ Happy Customers", value: "Satisfied" },
                  { icon: Zap, label: "99% Success Rate", value: "Reliable" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-blue-100">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-green-400 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Sun className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                      <h3 className="text-2xl font-bold mb-2">Solar Installation</h3>
                      <p className="text-lg opacity-90">Professional & Reliable</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Solar Energy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the amazing benefits of switching to solar power for your home or business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Reduced Electricity Bills",
                description: "Generate your own electricity and decrease reliance on the grid with substantial savings."
              },
              {
                icon: Shield,
                title: "Energy Independence",
                description: "Enhance energy security and reduce vulnerability to power outages and price fluctuations."
              },
              {
                icon: Sun,
                title: "Environmental Impact",
                description: "Clean, renewable energy that reduces your carbon footprint and greenhouse gas emissions."
              },
              {
                icon: Home,
                title: "Increased Property Value",
                description: "Homes with solar panels often see property value appreciation due to sustainable living appeal."
              }
            ].map((benefit, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Solar Solutions</h2>
            <p className="text-xl text-gray-600">Comprehensive solar services tailored to your needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Solar",
                icon: Home,
                image: "🏠",
                features: ["Rooftop Installation", "Net Metering", "25-Year Warranty", "Maintenance Support"]
              },
              {
                title: "Commercial Solar",
                icon: Building,
                image: "🏢",
                features: ["Large Scale Systems", "Tax Benefits", "Quick ROI", "Energy Monitoring"]
              },
              {
                title: "Housing Society",
                icon: Users,
                image: "🏘️",
                features: ["Community Solar", "Shared Benefits", "Easy Management", "Cost Effective"]
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-6xl">
                  {service.image}
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Calculator / Consultation Form */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Schedule a FREE Consultation
              </h2>
              <p className="text-xl text-gray-600">
                Fill the form and we will get in touch with you for personalized consultation
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {['Residential', 'Housing Society', 'Commercial'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData(prev => ({...prev, propertyType: type}))}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.propertyType === type
                          ? 'border-blue-600 bg-blue-600 text-white shadow-lg'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number *</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pin Code *</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Average Monthly Bill *</label>
                    <select
                      name="monthlyBill"
                      value={formData.monthlyBill}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                      required
                    >
                      <option value="">Select Range</option>
                      <option value="less-1500">Less than ₹1,500</option>
                      <option value="1500-2500">₹1,500 - ₹2,500</option>
                      <option value="2500-4000">₹2,500 - ₹4,000</option>
                      <option value="4000-8000">₹4,000 - ₹8,000</option>
                      <option value="more-8000">More than ₹8,000</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    required
                  />
                  <label className="text-sm text-gray-600">
                    I agree to KON Sun Energy's terms of service & privacy policy. By registering, you authorize us to contact you via email, phone, WhatsApp or SMS to offer our services and promotional offers.
                  </label>
                </div>

                <button
                  onClick={handleFormSubmit}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Schedule FREE Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Connect With Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-yellow-400" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:9600130810" className="text-yellow-400 hover:underline">
                      9600 13 0810
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-yellow-400" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:tellus@konsunenergy.in" className="text-yellow-400 hover:underline">
                      tellus@konsunenergy.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-300">NAVANEETHAN NILAYAM 02/192<br />Chennai - 600023</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: MessageCircle, label: "WhatsApp", color: "hover:bg-green-600" },
                    { icon: Send, label: "Telegram", color: "hover:bg-blue-500" },
                    { icon: Youtube, label: "YouTube", color: "hover:bg-red-600" },
                    { icon: Instagram, label: "Instagram", color: "hover:bg-pink-600" },
                    { icon: Facebook, label: "Facebook", color: "hover:bg-blue-700" }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`p-3 bg-white/10 rounded-full ${social.color} transition-all duration-300 hover:scale-110`}
                    >
                      <social.icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'About Us', 'SolarPro Partner', 'On-Grid Solar', 'Off-Grid Solar',
                  'Privacy Policy', 'Terms of Service', 'Sitemap', 'Refund Policy'
                ].map((link, index) => (
                  <button
                    key={index}
                    className="text-left py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-4">We are present in:</h4>
                <div className="space-y-2 text-sm">
                  <p>• Solar in Tamil Nadu</p>
                  <p>• Solar in Chennai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sun className="w-8 h-8 text-yellow-400" />
              <span className="text-xl font-bold">KON Sun Energy Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Rooftop solar made simple. We don't just sell solar — we give you peace of mind.
            </p>
            
            <div className="border-t border-gray-800 pt-4">
              <p className="text-sm text-gray-500">
                © 2025 KON Sun Energy Solutions. All rights reserved. | 
                Project timeline: 45-90 days | Advance payment is non-refundable
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default SolarWebsite;