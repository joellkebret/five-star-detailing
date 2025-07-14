import { useNavigate, useLocation } from 'react-router-dom'

export const useAnchorNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToAnchor = (anchorId) => {
    // Remove the # from the anchor ID
    const id = anchorId.replace('#', '')
    
    // If we're not on the homepage, navigate to home with the anchor
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
      return
    }

    // If we're already on the homepage, scroll to the anchor
    const element = document.getElementById(id)
    if (element) {
      // Add a small delay to ensure smooth scrolling
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }, 100)
    }
  }

  return { scrollToAnchor }
} 