import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAnchorNavigation } from '../hooks/useAnchorNavigation'

const Interior = () => {
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
      icon: "🧹",
      title: "Vacuum & Steam Clean",
      description: "Complete removal of dirt, dust, and debris from all surfaces including seats, carpets, and hard-to-reach areas."
    },
    {
      icon: "🧽",
      title: "Dashboard & Console Cleaning",
      description: "Thorough cleaning of all dashboard components, center console, and control surfaces with safe, non-abrasive products."
    },
    {
      icon: "🪑",
      title: "Leather/Vinyl Conditioning",
      description: "Deep cleaning and conditioning of leather and vinyl surfaces to restore softness and prevent cracking."
    },
    {
      icon: "🪟",
      title: "Glass Cleaning + Anti-Fog",
      description: "Streak-free interior glass cleaning with anti-fog treatment for improved visibility and safety."
    },
    {
      icon: "🌸",
      title: "Air Freshener Application",
      description: "Application of premium air freshener to leave your vehicle smelling fresh and clean."
    },
    {
      icon: "✨",
      title: "Final Inspection & Polish",
      description: "Comprehensive quality check and final touch-ups to ensure every detail meets our high standards."
    }
  ]

  const benefits = [
    {
      icon: "🚗",
      title: "Convenient Mobile Service",
      description: "We come to you - no need to drive anywhere. Perfect for busy professionals and families."
    },
    {
      icon: "💧",
      title: "Water-Conscious Techniques",
      description: "Our rinse-less method uses minimal water, making it ideal for condos, garages, and water-restricted areas."
    },
    {
      icon: "🛡️",
      title: "Safe for All Surfaces",
      description: "Professional-grade products that are safe for upholstery, electronics, and all interior materials."
    },
    {
      icon: "🌱",
      title: "Eco-Friendly Process",
      description: "Environmentally conscious cleaning that's gentle on your car and the planet."
    },
    {
      icon: "⏰",
      title: "Time-Saving Solution",
      description: "Professional service that saves you hours of cleaning time while delivering superior results."
    },
    {
      icon: "🎯",
      title: "Attention to Detail",
      description: "Every nook and cranny receives our meticulous attention for a truly comprehensive clean."
    }
  ]

  const pricing = [
    { vehicle: "Coupe/Sedan", amount: "199" },
    { vehicle: "SUV (5-Seater)", amount: "219" },
    { vehicle: "SUV (7-Seater)", amount: "249" },
    { vehicle: "Truck", amount: "269" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center text-white py-20 lg:py-32 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
        {/* Background image */}
        <motion.div
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{
            backgroundImage: "url('/images/car-interior.jpg')",
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
              Interior Car Detailing
            </motion.h1>
            <motion.p
              className="text-2xl lg:text-3xl mb-8 font-bold uppercase"
              style={{ color: '#008bff', textShadow: '0px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '0.04em', fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
              variants={heroVariants}
            >
              Complete Interior Transformation
            </motion.p>
            <motion.p
              className="text-lg mb-8 text-white leading-relaxed"
              style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
              variants={heroVariants}
            >
              Transform your vehicle's interior with our professional, eco-friendly detailing service
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
                Book Interior Service
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
                Professional Interior Detailing Process
              </h2>
              <p className="text-xl text-white leading-relaxed">
                Our comprehensive interior detailing service uses advanced, water-conscious techniques 
                to deep clean every surface of your vehicle. Using eco-friendly products and professional 
                equipment, we ensure your car's interior looks and feels like new.
              </p>
            </div>
            {/* Image */}
            <motion.div 
              className="order-1 lg:order-2 h-64 lg:h-full min-h-[300px] lg:min-h-[400px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img 
                src="/images/interior-home.jpg" 
                alt="Professional interior detailing process" 
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
            <h2 className="text-4xl modern-heading mb-4">Our Interior Process</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A comprehensive 5-step process designed to restore your vehicle's interior to showroom condition
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
                Professional interior detailing packages designed for your vehicle type
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
                  Book Interior Service
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
            <h2 className="text-4xl modern-heading mb-4">Why Choose Interior Detailing</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Experience the benefits of professional interior detailing with our mobile service
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

export default Interior 