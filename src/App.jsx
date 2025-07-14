import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Interior from './pages/Interior'
import Exterior from './pages/Exterior'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/exterior" element={<Exterior />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 