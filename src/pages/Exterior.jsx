import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAnchorNavigation } from '../hooks/useAnchorNavigation'

const Exterior = () => {
  const location = useLocation()
  const { scrollToAnchor } = useAnchorNavigation()

  // Handle scroll to anchor when navigating from other routes
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }, 300)
      }
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const processSteps = [
    {
      icon: "🚿",
      title: "Rinse-less Hand Wash",
      description: "Professional rinse-less washing technique that removes dirt and grime without water runoff."
    },
    {
      icon: "🛞",
      title: "Wheel & Tire Cleaning",
      description: "Deep cleaning of wheels, rims, and tires to restore their original shine and appearance."
    },
    {
      icon: "🐛",
      title: "Bug & Tar Removal",
      description: "Safe removal of stubborn bug residue, tar, and other road contaminants from your vehicle's surface."
    },
    {
      icon: "🪟",
      title: "Streak-free Glass Cleaning",
      description: "Crystal clear exterior glass cleaning for optimal visibility and a professional finish."
    },
    {
      icon: "✨",
      title: "Gentle Scratch-free Method",
      description: "Advanced techniques that work on all paint finishes without causing swirls or scratches."
    },
    {
      icon: "🔍",
      title: "Final Quality Inspection",
      description: "Comprehensive final check to ensure every surface meets our showroom-quality standards."
    }
  ]

  const benefits = [
    {
      icon: "🌱",
      title: "Eco-Friendly with No Water Runoff",
      description: "Our rinse-less method eliminates water waste and runoff, making it environmentally responsible."
    },
    {
      icon: "🏢",
      title: "Works in Any Environment",
      description: "Perfect for parking garages, driveways, condos, and anywhere traditional washing isn't allowed."
    },
    {
      icon: "🛡️",
      title: "Safe for All Paint Finishes",
      description: "Professional products and techniques that protect your vehicle's paint while delivering exceptional results."
    },
    {
      icon: "🚗",
      title: "Mobile Convenience",
      description: "We bring our professional service to your location, saving you time and hassle."
    },
    {
      icon: "⏰",
      title: "Quick & Efficient",
      description: "Professional results in a fraction of the time it would take to wash your car yourself."
    },
    {
      icon: "🎯",
      title: "Showroom-Quality Results",
      description: "Every detail is perfected to give your vehicle that brand-new showroom appearance."
    }
  ]

  const pricing = [
    { vehicle: "Coupe/Sedan", amount: "149" },
    { vehicle: "SUV (5-Seater)", amount: "169" },
    { vehicle: "SUV (7-Seater)", amount: "189" },
    { vehicle: "Truck", amount: "199" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center text-white py-20 lg:py-32 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
        {/* Background image */}
        <motion.div
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{
            backgroundImage: "url('/images/car-exterior.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.8,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.02 }}
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-10" style={{ background: 'rgba(0,0,0,0.7)' }}></div>
        
        {/* Hero content */}
        <div className="container-custom relative z-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-xl"
              style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
              variants={heroVariants}
            >
              Exterior Car Detailing
            </motion.h1>
            <motion.p
              className="text-2xl lg:text-3xl mb-8 font-bold uppercase"
              style={{ color: '#008bff', textShadow: '0px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '0.04em', fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
              variants={heroVariants}
            >
              Showroom Shine Restoration
            </motion.p>
            <motion.p
              className="text-lg mb-8 text-white leading-relaxed"
              style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
              variants={heroVariants}
            >
              Restore your vehicle's showroom shine with our professional, eco-friendly exterior detailing
            </motion.p>
            <motion.div 
              className="space-y-4"
              variants={heroVariants}
            >
              <motion.button 
                onClick={() => scrollToAnchor('#booking')}
                className="btn-primary text-lg px-8 py-4 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Book Exterior Service
              </motion.button>
              <div className="text-accent-light">
                <p className="text-lg leading-relaxed">or email</p>
                <a href="mailto:fivestardetailingto@gmail.com" className="text-2xl font-bold text-accent-blue hover:text-accent-blue-light transition-colors duration-200" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}>
                  fivestardetailingto@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Description */}
      <motion.section 
        className="section-padding"
        style={{ backgroundColor: '#111111' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl modern-heading mb-6">
                Professional Exterior Detailing Process
              </h2>
              <p className="text-xl text-white leading-relaxed">
                Our exterior detailing service uses advanced rinse-less technology to deliver exceptional 
                results without the environmental impact of traditional car washing. Every step is designed 
                to protect your vehicle while achieving a showroom-quality finish.
              </p>
            </div>
            {/* Image */}
            <motion.div 
              className="order-1 lg:order-2 h-64 lg:h-full min-h-[300px] lg:min-h-[400px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img 
                src="/images/exterior-home.jpg" 
                alt="Professional exterior detailing process" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Process Steps */}
      <motion.section 
        className="section-padding"
        style={{ backgroundColor: '#0a0a0a' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl modern-heading mb-4">Our Exterior Process</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A comprehensive 5-step process designed to restore your vehicle's exterior to showroom condition
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                className="bg-secondary-dark p-6 rounded-xl border-2"
                style={{ borderColor: '#31c5f4' }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        className="section-padding"
        style={{ backgroundColor: '#111111' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl modern-heading mb-4">Pricing</h2>
              <p className="text-xl text-white">
                Professional exterior detailing packages designed for your vehicle type
              </p>
            </div>

            <motion.div 
              className="bg-secondary-dark rounded-xl shadow-lg p-8 border-2"
              style={{ borderColor: '#31c5f4' }}
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                y: -8,
                transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Price List</h3>
              <div className="space-y-4 mb-8">
                {pricing.map((price, index) => (
                  <div key={index} className="flex justify-between items-center p-4 rounded-lg" style={{ backgroundColor: '#0a0a0a' }}>
                    <span className="font-medium text-white">{price.vehicle}</span>
                    <span className="text-2xl font-bold text-white">${price.amount}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <motion.button 
                  onClick={() => scrollToAnchor('#booking')}
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Book Exterior Service
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section 
        className="section-padding"
        style={{ backgroundColor: '#0a0a0a' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl modern-heading mb-4">Why Choose Exterior Detailing</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Experience the benefits of professional exterior detailing with our mobile service
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                className="flex items-start space-x-4 bg-secondary-dark p-6 rounded-xl border-2"
                style={{ borderColor: '#31c5f4' }}
              >
                <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Exterior 