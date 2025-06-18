'use client';
import { FaCheck, FaQuestionCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import Footer  from "@/app/component/footer"
import Navbar from "@/app/component/menu";

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Başlangıç",
      price: "₺99",
      period: "aylık",
      description: "Bireysel kullanıcılar ve küçük ekipler için",
      popular: false,
      features: [
        "100 randevu/ay limiti",
        "Temel takvim görünümü",
        "Email bildirimleri",
        "Müşteri yönetimi",
        "Temel raporlar",
        "Email desteği"
      ]
    },
    {
      name: "Profesyonel",
      price: "₺199",
      period: "aylık",
      description: "Büyüyen işletmeler için ideal çözüm",
      popular: true,
      features: [
        "Sınırsız randevu",
        "Gelişmiş takvim görünümü",
        "SMS + Email bildirimleri",
        "Ödeme entegrasyonları",
        "Google Takvim senkronizasyonu",
        "Öncelikli email desteği",
        "Temel API erişimi"
      ]
    },
    {
      name: "Kurumsal",
      price: "Özel Fiyat",
      period: "",
      description: "Büyük ekipler ve kurumsal ihtiyaçlar",
      popular: false,
      features: [
        "Çoklu kullanıcı yönetimi",
        "Beyaz etiket çözümü",
        "Özel entegrasyonlar",
        "Dedike hesap yöneticisi",
        "7/24 telefon desteği",
        "Tam API erişimi",
        "Özel eğitimler",
        "SSO (Single Sign-On)"
      ]
    }
  ];

  const faqs = [
    {
      question: "Ücretsiz deneme sürümü var mı?",
      answer: "Evet, tüm planlarımızı 14 gün boyunca ücretsiz deneyebilirsiniz. Kredi kartı bilgisi gerektirmez."
    },
    {
      question: "Planlar arasında geçiş yapabilir miyim?",
      answer: "Evet, istediğiniz zaman daha yüksek bir plana geçiş yapabilirsiniz. Fark ödemesi yaparak hemen geçiş yapabilirsiniz."
    },
    {
      question: "İptal politikası nedir?",
      answer: "Dilediğiniz zaman iptal edebilirsiniz. İptal işlemi sonrası aboneliğiniz fatura dönemi sonunda sona erer."
    },
    {
      question: "Kurumsal plan için nasıl teklif alabilirim?",
      answer: "İletişim formunu doldurarak veya doğrudan satış ekibimizi arayarak özel teklifimiz hakkında bilgi alabilirsiniz."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
  <div className="max-w-4xl">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">QuickSchedio ile İşinizi Büyütün</h1>
    <p className="text-xl md:text-2xl mb-8">
      İhtiyacınıza uygun planı seçin, randevu yönetiminde zaman kazanın
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="#plans"
        className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        Planları Gör
      </a>
      <a
        href="#faq"
        className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        SSS
      </a>
    </div>
  </div>
</section>


        {/* Pricing Plans */}
        <section id="plans" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fiyatlandırma Planları</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                İşletmenizin büyüklüğüne ve ihtiyaçlarına uygun esnek planlar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                    plan.popular ? "border-2 border-blue-500 transform md:-translate-y-4" : "border border-gray-200 bg-white"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-bold">
                      EN ÇOK TERCİH EDİLEN
                    </div>
                  )}
                  <div className={`p-8 ${plan.popular ? "pt-16" : "pt-8"}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-end mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && (
                        <span className="text-lg text-gray-500 ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <a
                      href={plan.name === "Kurumsal" ? "/contact" : "/signup"}
                      className={`block text-center py-3 px-6 rounded-lg font-semibold transition duration-300 ${
                        plan.popular
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                      }`}
                    >
                      {plan.name === "Kurumsal" ? "Teklif Al" : "Ücretsiz Dene"}
                    </a>
                    <ul className="mt-8 space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Kurumsal Çözümler</h3>
              <p className="text-gray-600 mb-6 text-center">
                10+ kullanıcılı ekipler için özel çözümler sunuyoruz. Toplu kullanıcı yönetimi, 
                özel entegrasyonlar ve kurumsal gereksinimleriniz için özelleştirilmiş planlar.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center"
                >
                  <FaPhone className="mr-2" />
                  Bizimle İletişime Geçin
                </a>
                <a
                  href="mailto:kurumsal@quickschedio.com"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center"
                >
                  <FaEnvelope className="mr-2" />
                  E-posta Gönder
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
              <p className="text-xl text-gray-600">
                QuickSchedio hakkında merak ettikleriniz
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-6 text-left hover:bg-gray-50 transition duration-300">
                    <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                    <FaQuestionCircle className="text-blue-500 ml-4 flex-shrink-0" />
                  </button>
                  <div className="p-6 pt-0 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Başka sorunuz mu var?</h3>
              <p className="text-gray-600 mb-6">
                Destek ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                İletişime Geçin
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}