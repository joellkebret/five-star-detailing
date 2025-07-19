import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceAddress: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleType: '',
    preferredDate: '',
    preferredTime: '',
    selectedPackage: '',
    paymentMethod: '',
    specialInstructions: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState('')

  // Scroll to top when form is successfully submitted
  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      const bookingSection = document.getElementById('booking')
      if (bookingSection) {
        bookingSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }
    }
  }, [submitStatus])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Remove all validation logic so the backend handles it
  const validateForm = () => {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Clear previous status
    setSubmitStatus(null)
    setSubmitMessage('')

    // Validate form
    const validationError = validateForm()
    if (validationError) {
      setSubmitStatus('error')
      setSubmitMessage(validationError)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage(result.message)
        // Reset form on success
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          serviceAddress: '',
          vehicleMake: '',
          vehicleModel: '',
          vehicleYear: '',
          vehicleType: '',
          preferredDate: '',
          preferredTime: '',
          selectedPackage: '',
          paymentMethod: '',
          specialInstructions: ''
        })
      } else {
        setSubmitStatus('error')
        // Show specific validation errors if available
        if (result.errors && result.errors.length > 0) {
          const errorMessages = result.errors.map(err => `${err.field}: ${err.message}`).join(', ')
          setSubmitMessage(`Validation failed: ${errorMessages}`)
        } else {
          setSubmitMessage(result.message || 'Failed to send booking request')
        }
      }
    } catch (error) {
      console.error('Error submitting booking:', error)
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStatusIcon = () => {
    if (submitStatus === 'success') {
      return (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
    if (submitStatus === 'error') {
      return (
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )
    }
    return null
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  return (
    <section id="booking" className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#008bff' }}>Book Your Detailing Session</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Ready to give your vehicle the 5-star treatment it deserves? 
            Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Status Message */}
          {submitStatus && (
            <motion.div 
              className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                submitStatus === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {getStatusIcon()}
              <p className="font-medium">{submitMessage}</p>
            </motion.div>
          )}

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Personal Information */}
            <motion.div 
              className="rounded-lg shadow-md p-6 space-y-6 hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: '#0a0a0a' }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                    placeholder="647-710-7247"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </motion.div>

            {/* Service Location */}
            <motion.div 
              className="rounded-lg shadow-md p-6 space-y-6 hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: '#0a0a0a' }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Service Location</h3>
              <div>
                <label htmlFor="serviceAddress" className="block text-sm font-medium text-white mb-2">
                  Service Address *
                </label>
                <textarea
                  id="serviceAddress"
                  name="serviceAddress"
                  value={formData.serviceAddress}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                  placeholder="Enter the address where you'd like the detailing service performed"
                />
              </div>
            </motion.div>

            {/* Vehicle Information */}
            <motion.div 
              className="rounded-lg shadow-md p-6 space-y-6 hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: '#0a0a0a' }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Vehicle Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label htmlFor="vehicleMake" className="block text-sm font-medium text-white mb-2">
                    Make *
                  </label>
                  <input
                    type="text"
                    id="vehicleMake"
                    name="vehicleMake"
                    value={formData.vehicleMake}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                    placeholder="Toyota"
                  />
                </div>
                <div>
                  <label htmlFor="vehicleModel" className="block text-sm font-medium text-white mb-2">
                    Model *
                  </label>
                  <input
                    type="text"
                    id="vehicleModel"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                    placeholder="Camry"
                  />
                </div>
                <div>
                  <label htmlFor="vehicleYear" className="block text-sm font-medium text-white mb-2">
                    Year *
                  </label>
                  <input
                    type="number"
                    id="vehicleYear"
                    name="vehicleYear"
                    value={formData.vehicleYear}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    min="1990"
                    max="2024"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                    placeholder="2020"
                  />
                </div>
                <div>
                  <label htmlFor="vehicleType" className="block text-sm font-medium text-white mb-2">
                    Type *
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                  >
                    <option value="">Select Type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="truck">Truck</option>
                    <option value="luxury">Luxury</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Appointment Details */}
            <motion.div 
              className="rounded-lg shadow-md p-6 space-y-6 hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: '#0a0a0a' }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Appointment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-white mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-white mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (7 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 10 PM)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="selectedPackage" className="block text-sm font-medium text-white mb-2">
                    Service Package *
                  </label>
                  <select
                    id="selectedPackage"
                    name="selectedPackage"
                    value={formData.selectedPackage}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                  >
                    <option value="">Select Package</option>
                    <option value="interior">Interior Only</option>
                    <option value="exterior">Exterior Only</option>
                    <option value="full">Full Package</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Payment & Instructions */}
            <motion.div 
              className="rounded-lg shadow-md p-6 space-y-6 hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: '#0a0a0a' }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Payment & Special Instructions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-white mb-2">
                    Preferred Payment Method *
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                  >
                    <option value="">Select Payment Method</option>
                    <option value="cash">Cash</option>
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="etransfer">E-Transfer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="specialInstructions" className="block text-sm font-medium text-white mb-2">
                    Special Instructions
                  </label>
                  <textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 hover:border-blue-500 bg-white text-gray-800"
                    placeholder="Any special requests or instructions..."
                  />
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn-secondary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto space-x-2`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending Booking Request...</span>
                  </>
                ) : (
                  <span>Submit Booking Request</span>
                )}
              </motion.button>
              <p className="text-sm text-white mt-4">
                * Required fields. We'll contact you within 24 hours to confirm your appointment.
              </p>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default BookingForm 