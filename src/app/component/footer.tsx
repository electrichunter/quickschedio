'use client';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      <div className="container mx-auto px-8 md:px-16 lg:px-32 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="mb-8">
            <h3 className="text-white text-xl font-bold mb-4">QuickSchedio</h3>
            <p className="mb-4">
              Randevu yönetiminde devrim yaratan çözümler sunuyoruz. İşinizi kolaylaştırmak için buradayız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-white text-xl font-bold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-300">Ana Sayfa</a></li>
              <li><a href="#features" className="hover:text-white transition duration-300">Özellikler</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Fiyatlandırma</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">SSS</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="mb-8">
            <h3 className="text-white text-xl font-bold mb-4">Yasal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-300">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Kullanım Şartları</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Çerez Politikası</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">KVKK Aydınlatma Metni</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="mb-8">
            <h3 className="text-white text-xl font-bold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>1234 İş Merkezi, Maslak, İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <a href="tel:+902123456789" className="hover:text-white transition duration-300">+90 212 345 67 89</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a href="mailto:info@quickschedio.com" className="hover:text-white transition duration-300">info@quickschedio.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-sm">
            © {currentYear} QuickSchedio. Tüm hakları saklıdır.
          </div>
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm">
            <a href="#" className="hover:text-white transition duration-300">Çerez Ayarları</a>
            <a href="#" className="hover:text-white transition duration-300">Site Haritası</a>
            <a href="#" className="hover:text-white transition duration-300">Kariyer</a>
            <a href="#" className="hover:text-white transition duration-300">Yardım Merkezi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}