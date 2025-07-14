import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAnchorNavigation } from '../hooks/useAnchorNavigation'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { scrollToAnchor } = useAnchorNavigation()

  // Placeholder images - in a real app, these would be actual car detailing photos
  const images = [
    {
      id: 1,
      before: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&brightness=1.2&contrast=1.1',
      alt: 'Sedan interior detailing before and after',
      description: 'Sedan Interior - Complete transformation'
    },
    {
      id: 2,
      before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop&brightness=1.2&contrast=1.1',
      alt: 'SUV exterior detailing before and after',
      description: 'SUV Exterior - Paint restoration'
    },
    {
      id: 3,
      before: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop&brightness=1.2&contrast=1.1',
      alt: 'Truck detailing before and after',
      description: 'Truck - Full package detailing'
    },
    {
      id: 4,
      before: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&brightness=1.2&contrast=1.1',
      alt: 'Luxury car interior detailing',
      description: 'Luxury Interior - Premium detailing'
    },
    {
      id: 5,
      before: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop&brightness=1.2&contrast=1.1',
      alt: 'Engine bay detailing before and after',
      description: 'Engine Bay - Deep cleaning'
    },
    {
      id: 6,
      before: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop&brightness=1.2&contrast=1.1',
      alt: 'Wheel and tire detailing',
      description: 'Wheels & Tires - Complete restoration'
    }
  ]

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Work Gallery</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            See the amazing transformations we've achieved for our Toronto customers. 
            From basic cleaning to complete restoration, we deliver 5-star results every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div 
              key={image.id} 
              className={`rounded-xl border-2 overflow-hidden transition-all duration-300 ease-out transform hover:-translate-y-2`}
              style={{ 
                backgroundColor: index % 2 === 0 ? '#0a0a0a' : '#111111',
                borderColor: '#31c5f4',
                boxShadow: '0 0 12px 0 rgba(49,197,244,0.15)'
              }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={image.before}
                      alt={`Before: ${image.alt}`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={image.after}
                      alt={`After: ${image.alt}`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-white font-medium transition-colors duration-200 hover:text-blue-400">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-white mb-6">
            Want to see your car in our gallery? Book a detailing session today!
          </p>
          <motion.button 
            onClick={() => scrollToAnchor('#booking')}
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Book Your Detailing Session
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery 