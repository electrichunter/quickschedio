'use client';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaUser } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            QuickSchedio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Ana Sayfa
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Özellikler
            </Link>
            <Link href="/PricingPage" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Fiyatlar
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
              İletişim
            </Link>

            <div className="flex items-center space-x-4 ml-6">
              <Link 
                href="/login" 
                className="flex items-center text-gray-700 hover:text-blue-600 transition font-medium"
              >
                <FaUser className="mr-2" />
                Giriş Yap
              </Link>
              <Link 
                href="/signup" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-medium"
              >
                Ücretsiz Deneme
              </Link>
            </div>
          </nav>

          {/* Mobile Burger Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <div className="pt-4 pb-6 space-y-4">
            <Link 
              href="/" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link 
              href="#features" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Özellikler
            </Link>
            <Link 
              href="/pricing" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Fiyatlar
            </Link>
            <Link 
              href="/blog" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>

            <div className="border-t border-gray-200 mt-4 pt-4">
              <Link 
                href="/login" 
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                <FaUser className="mr-2" />
                Giriş Yap
              </Link>
              <Link 
                href="/signup" 
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-medium mt-2"
                onClick={() => setIsOpen(false)}
              >
                Ücretsiz Deneme
              </Link>
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              <a href="tel:+902123456789" className="flex items-center text-blue-600">
                <FaPhone className="mr-2" />
                <span>Ara</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}