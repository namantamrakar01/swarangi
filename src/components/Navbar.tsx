import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#collection' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav>
      <div className="navbar-container">
        <a href="#home" className="logo-link">
          <img 
            src="https://res.cloudinary.com/dqn2dna4p/image/upload/v1781543833/swarangi_logo_v4_wkeeqc.svg" 
            alt="Swarangi Logo"
            className="logo-img"
          />
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
