import { useAnchorNavigation } from '../hooks/useAnchorNavigation'

const ServiceCard = ({ title, description, features, prices, popular = false, index = 0 }) => {
  const { scrollToAnchor } = useAnchorNavigation()

  // Alternate background and border colors
  const bgColor = index % 2 === 0 ? '#0a0a0a' : '#111111';
  const borderColor = popular ? '#FFD700' : '#31c5f4';
  const priceBg = '#111111';

  return (
    <div
      className={`relative rounded-xl shadow-lg p-4 md:p-6 border-2 transition-all duration-500 ease-out transform hover:-translate-y-2 flex flex-col h-full`}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        boxShadow: '0 0 12px 0 rgba(49,197,244,0.10)'
      }}
    >
      <div className="flex items-start justify-between mb-2 md:mb-3">
        <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
        {popular && (
          <div className="bg-accent-gold text-white text-xs md:text-sm font-semibold px-2 md:px-3 py-1 rounded-full shadow-lg" style={{minWidth:'max-content'}}>
            Most Popular
          </div>
        )}
      </div>
      <p className="text-white/80 mb-4 md:mb-6 text-sm md:text-base">{description}</p>
      
      <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 h-40 md:h-48">
        {features.map((feature, idx) => (
          feature ? (
            <li key={idx} className="flex items-center text-white/90 transition-colors duration-200 hover:text-blue-400 text-sm md:text-base">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ) : (
            <li key={idx} className="h-6 md:h-8"></li>
          )
        ))}
      </ul>
      
      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
        {prices.map((price, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-2 md:p-3 rounded-lg transition-all duration-200"
            style={{ backgroundColor: priceBg }}
          >
            <span className="font-medium text-white/90 text-sm md:text-base">{price.vehicle}</span>
            <span className="text-xl md:text-2xl font-bold text-white">${price.amount}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <button 
          onClick={() => scrollToAnchor('#booking')}
          className="w-full btn-primary transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] text-sm md:text-base px-3 py-2 md:px-4 md:py-3"
        >
          Book This Package
        </button>
      </div>
    </div>
  )
}

export default ServiceCard