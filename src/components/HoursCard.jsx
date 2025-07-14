const HoursCard = () => {
  const hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 10:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 2:00 AM' },
    { day: 'Sunday', time: '7:00 AM - 2:00 AM' }
  ]

  return (
    <div className="rounded-xl shadow-lg p-4 md:p-8" style={{ backgroundColor: '#111111'}}>
      <div className="text-center mb-4 md:mb-6">
      </div>
      <div className="space-y-3 md:space-y-4">
        {hours.map((schedule, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 md:py-3 border-b border-gray-800 last:border-b-0">
            <span className="font-medium text-white text-sm md:text-base mb-1 sm:mb-0">{schedule.day}</span>
            <span className="text-white font-semibold text-sm md:text-base">{schedule.time}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-lg" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="flex items-center justify-center space-x-2">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-accent-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="text-xs md:text-sm text-white font-medium text-center">
            Extended hours for your convenience
          </span>
        </div>
      </div>
    </div>
  )
}

export default HoursCard 