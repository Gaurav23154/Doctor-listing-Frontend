import { useState } from 'react'
import Link from 'next/link'
import { FaUser, FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold text-primary cursor-pointer">MediMatch</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className="text-gray-700 hover:text-primary transition-colors">Home</span>
            </Link>
            <Link href="/doctors">
              <span className="text-gray-700 hover:text-primary transition-colors">Find Doctors</span>
            </Link>
            <Link href="/services">
              <span className="text-gray-700 hover:text-primary transition-colors">Services</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 hover:text-primary transition-colors">About Us</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-700 hover:text-primary transition-colors">Contact</span>
            </Link>
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
              <FaUser />
              <span>Sign In</span>
            </button>
            <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/">
                <span className="block text-gray-700 hover:text-primary transition-colors py-2">Home</span>
              </Link>
              <Link href="/doctors">
                <span className="block text-gray-700 hover:text-primary transition-colors py-2">Find Doctors</span>
              </Link>
              <Link href="/services">
                <span className="block text-gray-700 hover:text-primary transition-colors py-2">Services</span>
              </Link>
              <Link href="/about">
                <span className="block text-gray-700 hover:text-primary transition-colors py-2">About Us</span>
              </Link>
              <Link href="/contact">
                <span className="block text-gray-700 hover:text-primary transition-colors py-2">Contact</span>
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                  <FaUser />
                  <span>Sign In</span>
                </button>
                <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors">
                  Register
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
