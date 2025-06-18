'use client'; // Bu bileşenin istemci tarafında çalışacağını belirtir (Next.js 13+)

import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaUser } from 'react-icons/fa'; // Menü ikonları
import Link from 'next/link'; // Sayfalar arası geçiş için Next.js Link bileşeni

export default function Navbar() {
  // Mobil menü açık mı? (true = açık, false = kapalı)
  const [isOpen, setIsOpen] = useState(false);

  // Sayfa aşağı kaydırıldı mı? (Navbar stilini değiştirmek için)
  const [scrolled, setScrolled] = useState(false);

  // Kullanıcı giriş yapmış mı? (Token varsa true)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Sayfa yüklendiğinde çalışacak efekt
  useEffect(() => {
    // Scroll eventini dinle, eğer 10px'ten fazla scroll varsa "scrolled" true olsun
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    // localStorage'dan token kontrolü: varsa giriş yapılmıştır
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // token varsa true, yoksa false yapar

    // Bileşen unload olursa event listener'ı kaldır
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menüyü aç/kapat
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // Sayfa yukarıda mı aşağıda mı? Ona göre stil ver
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Sol üstte logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            QuickSchedio
          </Link>

          {/* Masaüstü menü (md ve üstü ekranlar için) */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Ana navigasyon bağlantıları */}
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">Ana Sayfa</Link>
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition font-medium">Özellikler</Link>
            <Link href="/PricingPage" className="text-gray-700 hover:text-blue-600 transition font-medium">Fiyatlar</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition font-medium">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium">İletişim</Link>

            {/* Giriş yapmış kullanıcılar için özel menüler */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-4 ml-6">
                <Link href="/appointments/create" className="text-gray-700 hover:text-blue-600 transition font-medium">
                  Randevu Oluştur
                </Link>
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition font-medium">
                  Panel
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem('token'); // Çıkışta token'ı sil
                    window.location.reload(); // Sayfayı yenile
                  }}
                  className="text-red-600 hover:text-red-800 transition font-medium"
                >
                  Çıkış Yap
                </button>
              </div>
            ) : (
              // Giriş yapmamış kullanıcılar için butonlar
              <div className="flex items-center space-x-4 ml-6">
                <Link href="/login" className="flex items-center text-gray-700 hover:text-blue-600 transition font-medium">
                  <FaUser className="mr-2" /> Giriş Yap
                </Link>
                <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-medium">
                  Ücretsiz Deneme
                </Link>
              </div>
            )}
          </nav>

          {/* Mobil cihazlarda hamburger menü */}
          <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobil menü içeriği (md altında görünür) */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <div className="pt-4 pb-6 space-y-4">
            {/* Sayfa linkleri */}
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">Ana Sayfa</Link>
            <Link href="#features" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">Özellikler</Link>
            <Link href="/PricingPage" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">Fiyatlar</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">İletişim</Link>

            {/* Giriş yapılmışsa mobil menüde randevu ve çıkış seçenekleri */}
            {isLoggedIn ? (
              <div className="border-t border-gray-200 mt-4 pt-4">
                <Link href="/appointments/create" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">
                  Randevu Oluştur
                </Link>
                <Link href="/dashboard" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">
                  Panel
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem('token');
                    window.location.reload();
                  }}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 rounded-lg font-medium mt-2"
                >
                  Çıkış Yap
                </button>
              </div>
            ) : (
              // Giriş yapılmamışsa mobil menüde login/signup seçenekleri
              <div className="border-t border-gray-200 mt-4 pt-4">
                <Link href="/login" onClick={() => setIsOpen(false)} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">
                  <FaUser className="mr-2" /> Giriş Yap
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)} className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-medium mt-2">
                  Ücretsiz Deneme
                </Link>
              </div>
            )}

            {/* Telefonla arama butonu */}
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
