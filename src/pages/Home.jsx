import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAnchorNavigation } from '../hooks/useAnchorNavigation'
import ServiceCard from '../components/ServiceCard'
import Gallery from '../components/Gallery'
import BookingForm from '../components/BookingForm'
import HoursCard from '../components/HoursCard'

const Home = () => {
  const location = useLocation()
  const { scrollToAnchor } = useAnchorNavigation()

  // Handle scroll to anchor when navigating from other routes
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo)
      if (element) {
        // Add a delay to ensure the component has mounted
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }, 300)
      }
      // Clear the state to prevent re-scrolling on re-renders
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const services = [
    {
      title: "Interior Only",
      description: "Complete interior cleaning and sanitization for a fresh, like-new cabin experience.",
      features: [
        "Seats, carpets, and mats cleaned",
        "Dashboard and console wiped down",
        "Interior windows cleaned",
        "No-hose, rinse-less process",
        "Safe for all surfaces",
        "Mobile service to your location"
      ],
      prices: [
        { vehicle: "Coupe/Sedan", amount: "199" },
        { vehicle: "SUV (5-Seater)", amount: "219" },
        { vehicle: "SUV (7-Seater)", amount: "249" },
        { vehicle: "Truck", amount: "269" }
      ]
    },
    {
      title: "Exterior Only",
      description: "Professional exterior detailing to restore your vehicle's showroom shine.",
      features: [
        "Streak-free body wash",
        "Wheels and tires wiped down",
        "Windows and mirrors cleaned",
        "Rinse-less method — no hose required",
        "Eco-friendly, scratch-safe",
        "Done at your home or condo"
      ],
      prices: [
        { vehicle: "Coupe/Sedan", amount: "149" },
        { vehicle: "SUV (5-Seater)", amount: "169" },
        { vehicle: "SUV (7-Seater)", amount: "189" },
        { vehicle: "Truck", amount: "199" }
      ]
    },
    {
      title: "Full Package",
      description: "Complete interior and exterior detailing for the ultimate transformation.",
      features: [
        "Includes everything from the Interior and Exterior packages"
      ],
      prices: [
        { vehicle: "Coupe/Sedan", amount: "299" },
        { vehicle: "SUV (5-Seater)", amount: "319" },
        { vehicle: "SUV (7-Seater)", amount: "339" },
        { vehicle: "Truck", amount: "359" }
      ],
      popular: true
    }
  ]

  return (
    <div>
      {/* Hero Section with Toronto Skyline Background */}
      <section className="relative min-h-[500px] flex items-center justify-center text-white py-20 lg:py-32 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
        {/* Background image with zoom effect */}
        <motion.div
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{
            backgroundImage: "url('/images/five-star-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.8,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          aria-hidden="true"
        />
        {/* Dark overlay for legibility */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'rgba(0,0,0,0.7)',
          }}
        ></div>
        {/* Hero content with staggered animations */}
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
              Five Star Detailing
            </motion.h1>
            <motion.p
              className="text-2xl lg:text-3xl mb-8 font-bold uppercase"
              style={{ color: '#008bff', textShadow: '0px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '0.04em', fontFamily: 'Montserrat, Inter, system-ui, sans-serif' }}
              variants={heroVariants}
            >
              Car Detailing, Done Right.
            </motion.p>
            <motion.p
              className="text-lg mb-8 text-white leading-relaxed"
              style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}
              variants={heroVariants}
            >
              Professional, eco-friendly detailing services that come to you
            </motion.p>
            <motion.div 
              className="space-y-4"
              variants={heroVariants}
            >
              <motion.button 
                onClick={() => scrollToAnchor('#booking')}
                className="btn-primary text-lg px-8 py-4 inline-block"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Book Now
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

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="section-padding"
        style={{ backgroundColor: '#0a0a0a' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl modern-heading mb-4">Our Services</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Choose from our three comprehensive detailing packages, each designed to meet your specific needs 
              and budget. All services are performed at your location for maximum convenience.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                <ServiceCard {...service} index={index} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <p className="text-white mb-6">
              All prices include travel within the GTA. Additional charges may apply for areas outside our standard service zone.
            </p>
            <motion.button 
              onClick={() => scrollToAnchor('#booking')}
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Get Your Custom Quote
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Statement */}
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
                Our Mission
              </h2>
              <p className="text-xl text-white leading-relaxed">
                At Five Star Detailing, we're committed to delivering exceptional mobile car detailing services 
                throughout the Greater Toronto Area. Using eco-friendly products and professional techniques, 
                we transform your vehicle into a pristine, showroom-worthy condition. Our attention to detail 
                and commitment to customer satisfaction has earned us a reputation as Toronto's premier mobile 
                detailing service.
              </p>
            </div>
            {/* Image */}
            <motion.div 
              className="order-1 lg:order-2 h-64 lg:h-full min-h-[300px] lg:min-h-[400px]"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img 
                src="/images/hero-skyline.jpg" 
                alt="Toronto skyline" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ backgroundColor: '#0a0a0a' }}
      >
        <Gallery />
      </motion.div>

      {/* Booking Form Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ backgroundColor: '#111111' }}
      >
        <BookingForm />
      </motion.div>

      {/* Hours Section */}
      <motion.section 
        className="py-8 md:py-16 px-4 border-t border-secondary-dark"
        style={{ backgroundColor: '#0a0a0a' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
            {/* Left: Image */}
            <div className="w-full lg:w-7/12 rounded-xl shadow-md overflow-hidden">
              <img src="/images/hours-card.jpg" alt="Business Hours" className="object-cover w-full h-64 md:h-full" />
            </div>
            {/* Right: Content Card */}
            <div className="w-full lg:w-5/12 flex flex-col space-y-4 md:space-y-6 bg-secondary-dark p-4 md:p-8 rounded-xl shadow-lg border-2" style={{ borderColor: '#31c5f4' }}>
              <div className="text-center">
                <h2 className="text-2xl md:text-4xl modern-heading mb-2 md:mb-4 text-white">Business Hours</h2>
                <p className="text-lg md:text-xl text-white">
                  We are here when you need us!
                </p>
              </div>
              <HoursCard />
              <div className="text-center">
                <p className="text-white mb-4 text-sm md:text-base">
                  Need service outside our regular hours? Contact us for special arrangements.
                </p>
                <motion.a 
                  href="mailto:fivestardetailingto@gmail.com" 
                  className="btn-primary text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Email Us: fivestardetailingto@gmail.com
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home 