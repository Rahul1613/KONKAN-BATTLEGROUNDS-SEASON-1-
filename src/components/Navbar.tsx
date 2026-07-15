import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Leaderboard', path: '/' },
    { name: 'Match Results', path: '/match-results' },
    { name: 'MVP', path: '/mvp' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-primary/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/assets/logo.png" 
              alt="Konkan Battlegrounds Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-bebas text-xl tracking-wider hidden sm:block">KONKAN BATTLEGROUNDS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-inter text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="p-2 rounded-lg bg-surface border border-primary/20 hover:border-primary/50 transition-colors"
            >
              <Shield className="w-5 h-5 text-primary" />
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-primary/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block font-inter text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-white/70'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="flex items-center space-x-2 text-sm font-medium text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Shield className="w-5 h-5" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
