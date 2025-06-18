# QuickSchedio

[https://quickschedio.netlify.app/](https://quickschedio.netlify.app/)  
Hızlı ve pratik randevu planlama uygulaması.

---

## Proje Hakkında

QuickSchedio, kullanıcıların kolayca randevu oluşturup yönetebileceği modern, hızlı ve kullanıcı dostu bir web uygulamasıdır. Next.js ve Tailwind CSS ile geliştirilmiş olup, kimlik doğrulama için JWT tabanlı sistem kullanmaktadır.

---

## Özellikler

- Kullanıcı kayıt ve giriş işlemleri
- JWT ile güvenli kimlik doğrulama
- Mail doğrulama (e-posta aktivasyonu) sistemi
- Randevu oluşturma, listeleme ve düzenleme
- Mobil uyumlu responsive tasarım

---

## Kurulum

1. Depoyu klonlayın:
 

2. Bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

3. Ortam değişkenlerini ayarlayın (`.env.local`):
    ```env
    NEXT_PUBLIC_API_URL=https://api.quickschedio.netlify.app
    JWT_SECRET=your_jwt_secret_key
    EMAIL_SERVICE_API_KEY=your_email_service_api_key
    ```

4. Geliştirme sunucusunu başlatın:
    ```bash
    npm run dev
    ```

---

## Önemli Notlar

### Mail Doğrulaması

- Kullanıcı kaydı sonrası gönderilen doğrulama e-postası, hesabın aktif hale gelmesi için zorunludur.
- Mail doğrulaması yapılmadan kullanıcı uygulamaya tam erişim sağlayamaz.
- Mail doğrulama linki tek kullanımlıktır ve süresi sınırlıdır.

### JWT Güvenliği

- JWT tokenları güvenli `HttpOnly` ve `Secure` cookie olarak saklanmalıdır.
- JWT içerisinde hassas kullanıcı bilgileri (şifre, kredi kartı vb.) kesinlikle yer almamalıdır.
- Token süre aşımı (expiration) mutlaka uygulanmalıdır.
- Tokenlar, yalnızca yetkilendirilmiş isteklerde kullanılmalıdır.
- XSS ve CSRF saldırılarına karşı ekstra önlemler alınmalıdır.

---

## Kullanılan Teknolojiler

- Next.js
- React
- Tailwind CSS
- JSON Web Tokens (JWT)
- Node.js (backend)
- Netlify (hosting)

---

## Katkıda Bulunma

Katkı sağlamak isterseniz, lütfen `pull request` gönderin ya da `issue` açın.

---

## Lisans

MIT License © 2025 Ömer Faruk Uysal
