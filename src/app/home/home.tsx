"use client";
import React from "react";
import { FaCalendarAlt, FaBell, FaCog, FaArrowRight, FaCheck } from "react-icons/fa";
 

export default function HomePage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Randevularınızı Kolayca Yönetin
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            QuickSchedio ile müşterilerinizin randevularını saniyeler içinde alın,
            zaman kaybına son verin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/signup" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
            >
              Hemen Başla <FaArrowRight className="ml-2" />
            </a>
            <a 
              href="#features" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
            >
              Özellikleri Gör
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md h-80 flex items-center justify-center text-blue-600">
              <div className="text-center">
                <div className="text-5xl mb-4">📅</div>
                <p className="font-bold">QuickSchedio Demo</p>
                <p className="text-sm mt-2">Randevu yönetiminin en kolay yolu</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-300 text-black p-4 rounded-xl shadow-lg w-32 h-32 flex items-center justify-center font-bold text-sm">
              Yeni Randevu!
            </div>
            <div className="absolute -top-6 -right-6 bg-green-400 text-white p-3 rounded-full shadow-lg w-24 h-24 flex items-center justify-center font-bold text-sm">
              Müsait
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Güçlü Özellikler</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            QuickSchedio ile işlerinizi kolaylaştıracak tüm araçlar bir arada
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="text-blue-500 mb-4">
              <FaCalendarAlt size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Kolay Takvim</h3>
            <p className="text-gray-600">
              Randevularınızı hızlıca takvime ekleyin ve yönetin. Kullanıcı dostu arayüzü sayesinde hiçbir randevuyu kaçırmayın.
            </p>
          </div>
          <div className="feature-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="text-purple-500 mb-4">
              <FaBell size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Müşteri Bildirimi</h3>
            <p className="text-gray-600">
              Randevu hatırlatıcıları otomatik olarak müşterilerinize gönderilsin. SMS ve email bildirimleri ile randevularınızı garanti altına alın.
            </p>
          </div>
          <div className="feature-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="text-green-500 mb-4">
              <FaCog size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Esnek Ayarlar</h3>
            <p className="text-gray-600">
              Çalışma saatlerini ve mola zamanlarını özelleştirin. Özel tatiller ve kişisel programınıza göre randevu sisteminizi yapılandırın.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 md:px-16 lg:px-32 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Müşterilerimiz Ne Diyor?</h2>
          
          <div className="mb-8">
            <p className="text-xl italic mb-6">
              "QuickSchedio sayesinde randevu yönetimi artık çok kolay. Müşterilerim kendi randevularını oluşturabiliyor ve ben de zamanımı çok daha verimli kullanabiliyorum."
            </p>
            <p className="font-bold">- Ayşe K., Kuaför Salonu Sahibi</p>
          </div>
          
          <div className="flex justify-center gap-2 mb-12">
            {[1, 2, 3].map((dot) => (
              <div key={dot} className="w-3 h-3 rounded-full bg-white opacity-50"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-8 md:px-16 lg:px-32 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Uygun Fiyatlar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İhtiyacınıza göre seçebileceğiniz esnek planlar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Başlangıç", price: "₺99", features: ["100 randevu/ay", "Temel bildirimler", "Email desteği"] },
            { 
              name: "Profesyonel", 
              price: "₺199", 
              features: ["Sınırsız randevu", "SMS bildirimleri", "Öncelikli destek", "Takvim entegrasyonu"],
              popular: true
            },
            { name: "Kurumsal", price: "Özel Fiyat", features: ["Çoklu kullanıcı", "API erişimi", "Özel entegrasyonlar", "Dedike destek"] }
          ].map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 ${plan.popular ? "border-2 border-purple-500" : "border border-gray-200"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  POPÜLER
                </div>
              )}
              <h3 className="text-xl font-bold mb-2 text-center">{plan.name}</h3>
              <p className="text-3xl font-bold text-center mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                plan.popular 
                  ? "bg-purple-500 hover:bg-purple-600 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}>
                Hemen Başla
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 md:px-16 lg:px-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Randevu Yönetiminde Devrimi Yaşayın</h2>
          <p className="text-xl mb-8 text-gray-300">
            14 gün ücretsiz deneyin. Kredi kartı bilgisi gerekmez.
          </p>
          <a 
            href="/signup" 
            className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Ücretsiz Deneme Başlat
          </a>
        </div>
      </section>

 
     
    </main>
  );
}