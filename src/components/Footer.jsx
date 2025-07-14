import { useAnchorNavigation } from '../hooks/useAnchorNavigation'

const Footer = () => {
  const { scrollToAnchor } = useAnchorNavigation()

  return (
    <footer className="section-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                  <img src="/images/fivestarlogo.png" alt="Five Star Detailing Toronto Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                  <span className="text-lg md:text-xl font-bold modern-heading">Five Star Detailing</span>
                </div>
                <p className="mb-4 md:mb-6 max-w-md text-white text-sm md:text-base">
                  Professional mobile car detailing services in Toronto. We bring the 5-star experience 
                  right to your doorstep with eco-friendly products and exceptional attention to detail.
                </p>
              </div>
              <div className="flex flex-col space-y-3 mt-4 sm:mt-0">
                <a href="tel:647-710-7247" className="flex items-center space-x-2 text-accent-blue hover:text-accent-blue-light transition-colors duration-200 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>647-710-7247</span>
                </a>
                <a href="mailto:fivestardetailingto@gmail.com" className="flex items-center space-x-2 text-accent-blue hover:text-accent-blue-light transition-colors duration-200 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>fivestardetailingto@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 modern-heading">Quick Links</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <a href="/" className="text-white hover:text-accent-blue transition-colors duration-200 modern-heading text-sm md:text-base">
                    Home
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToAnchor('#services')}
                    className="text-white hover:text-accent-blue transition-colors duration-200 text-left w-full modern-heading text-sm md:text-base"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToAnchor('#gallery')}
                    className="text-white hover:text-accent-blue transition-colors duration-200 text-left w-full modern-heading text-sm md:text-base"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToAnchor('#booking')}
                    className="text-white hover:text-accent-blue transition-colors duration-200 text-left w-full modern-heading text-sm md:text-base"
                  >
                    Book Now
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 modern-heading">Services</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <span className="text-white text-sm md:text-base">Interior Detailing</span>
                </li>
                <li>
                  <span className="text-white text-sm md:text-base">Exterior Detailing</span>
                </li>
                <li>
                  <span className="text-white text-sm md:text-base">Full Package</span>
                </li>
                <li>
                  <span className="text-white text-sm md:text-base">Mobile Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-blue py-3 md:py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-center">
            <p className="text-white text-xs md:text-sm">
              © 2025 Five Star Detailing. All rights reserved.
            </p>
            <p className="text-accent-blue font-semibold text-xs md:text-sm">
              Car Detailing, Done Right.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 