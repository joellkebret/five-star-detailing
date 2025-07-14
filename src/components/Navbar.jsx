import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAnchorNavigation } from '../hooks/useAnchorNavigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { scrollToAnchor } = useAnchorNavigation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setServicesOpen(!servicesOpen)
  }

  const handleAnchorClick = (anchorId, closeMenu = false) => {
    scrollToAnchor(anchorId)
    if (closeMenu) {
      setIsOpen(false)
      setServicesOpen(false)
    }
  }

  return (
    <nav className="bg-[#171715] shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <img src="/images/fivestarlogo.png" alt="Five Star Detailing Toronto Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold modern-heading text-white">FIVE STAR DETAILING</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="uppercase font-bold modern-heading text-white hover:text-accent-blue transition-colors duration-200">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center uppercase font-bold modern-heading text-white hover:text-accent-blue transition-colors duration-200 focus:outline-none"
              >
                Services
                <span className="ml-1">
                  {servicesOpen ? (
                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                  ) : (
                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  )}
                </span>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-secondary-dark border border-accent-blue rounded shadow-lg z-10">
                  <Link to="/interior" className="block px-4 py-2 text-white hover:bg-accent-blue hover:text-white font-medium" onClick={() => setServicesOpen(false)}>
                    Interior
                  </Link>
                  <Link to="/exterior" className="block px-4 py-2 text-white hover:bg-accent-blue hover:text-white font-medium" onClick={() => setServicesOpen(false)}>
                    Exterior
                  </Link>
                </div>
              )}
            </div>
            <button 
              onClick={() => handleAnchorClick('#booking')}
              className="btn-primary"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-white hover:text-accent-blue hover:bg-secondary-dark transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-accent-blue">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 uppercase font-bold text-white hover:text-accent-blue hover:bg-secondary-dark rounded-md transition-colors duration-200 modern-heading"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={toggleServices}
                className="flex items-center w-full px-3 py-2 uppercase font-bold text-white hover:text-accent-blue hover:bg-secondary-dark rounded-md transition-colors duration-200 modern-heading focus:outline-none"
              >
                Services
                <span className="ml-1">
                  {servicesOpen ? (
                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                  ) : (
                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  )}
                </span>
              </button>
              {servicesOpen && (
                <div className="ml-4">
                  <Link to="/interior" className="block px-4 py-2 text-white hover:bg-accent-blue hover:text-white font-medium" onClick={() => { setServicesOpen(false); setIsOpen(false); }}>
                    Interior
                  </Link>
                  <Link to="/exterior" className="block px-4 py-2 text-white hover:bg-accent-blue hover:text-white font-medium" onClick={() => { setServicesOpen(false); setIsOpen(false); }}>
                    Exterior
                  </Link>
                </div>
              )}
              <button
                onClick={() => handleAnchorClick('#gallery', true)}
                className="block w-full text-left px-3 py-2 uppercase font-bold text-white hover:text-accent-blue hover:bg-secondary-dark rounded-md transition-colors duration-200 modern-heading"
              >
                Gallery
              </button>
              <button
                onClick={() => handleAnchorClick('#booking', true)}
                className="block w-full text-left px-3 py-2 btn-primary"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 