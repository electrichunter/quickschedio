"use client";
import React from "react";
import "./home.css";

export default function HomePage() {
  return (
    <main>
      <section className="h-screen justify-items-center flex items-center text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
       <div className="">
       
        <h1>Randevularınızı Kolayca Yönetin</h1>
        <p>
          QuickSchedio ile müşterilerinizin randevularını saniyeler içinde alın,
          zaman kaybına son verin.
        </p>
        <div className="cta-buttons">
          <a href="/signup">Hemen Başla</a>
          <a href="#features">Özellikleri Gör</a>
        </div>
        </div>

        <div className="bg-amber-200 w-150 h-150 m-10 text-black text-3xl " >   
resim alanı

        </div>
      </section>

      <section id="features">
        <div className="features-grid">
          <div className="feature-card">
            <h3>Kolay Takvim</h3>
            <p>Randevularınızı hızlıca takvime ekleyin ve yönetin.</p>
          </div>
          <div className="feature-card">
            <h3>Müşteri Bildirimi</h3>
            <p>Randevu hatırlatıcıları otomatik olarak müşterilerinize gönderilsin.</p>
          </div>
          <div className="feature-card">
            <h3>Esnek Ayarlar</h3>
            <p>Çalışma saatlerini ve mola zamanlarını özelleştirin.</p>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} QuickSchedio. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
