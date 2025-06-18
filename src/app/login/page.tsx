'use client'; // Bu sayfa bir istemci bileşeni olacak (Next.js 13+ için gerekli)

// Gerekli hook ve router importları
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// API temel adresi (localhost geliştirici ortamı için)
const API_BASE = 'http://localhost:3000/api/auth';

export default function LoginRegisterPage() {
    // Giriş mi yoksa kayıt ekranında mıyız? true = giriş ekranı
    const [isLogin, setIsLogin] = useState(true);

    // Kullanıcıdan alınacak email ve şifre bilgisi
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Şifreyi göster/gizle durumu
    const [showPassword, setShowPassword] = useState(false);

    // Kullanıcıya gösterilecek uyarı/başarı mesajı
    const [message, setMessage] = useState('');

    // Sayfa yönlendirme işlemleri için useRouter
    const router = useRouter();

    // Form gönderilince tetiklenen fonksiyon
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Sayfa yenilenmesini engeller

        // Email veya şifre boşsa kullanıcıya uyarı ver
        if (!email || !password) {
            setMessage('Email and password are required.');
            return;
        }

        setMessage(''); // Önceki mesajları temizle

        // Giriş mi kayıt mı olduğuna göre API endpoint belirle
        const endpoint = isLogin ? `${API_BASE}/login` : `${API_BASE}/register`;

        try {
            // API'ye POST isteği at
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            // API'den dönen cevabı JSON olarak al
            const data = await res.json();

            // Hata varsa mesajı göster
            if (!res.ok) throw new Error(data.message || 'Error');

            if (isLogin) {
                // Giriş başarılıysa ve token döndüyse localStorage'a kaydet
                if (data.token) {
                    localStorage.setItem('token', data.token);

                    // Anasayfaya yönlendir
                    router.push('/');
                } else {
                    setMessage('Login successful, but no token received.');
                }
            } else {
                // Kayıt başarılıysa kullanıcıya mesaj göster
                setMessage('Registration successful!');
            }
} catch (err: unknown) {
  if (err instanceof Error) {
    setMessage(err.message);
  } else {
    setMessage('Bilinmeyen bir hata oluştu');
  }
}

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* Form kutusu */}
            <div
                className="max-w-sm w-full p-6 rounded-2xl shadow-md border border-gray-200"
                style={{ backgroundColor: '#F5F9FF' }}
            >
                {/* Başlık */}
                <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#222222' }}>
                    {isLogin ? 'Login' : 'Register'}
                </h2>

                {/* Form başlangıcı */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email input alanı */}
                    <div>
                        <label className="block text-sm font-medium mb-1" style={{ color: '#222222' }}>
                            Email:
                        </label>
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                            style={{ borderColor: '#2AA9FE' }}
                        />
                    </div>

                    {/* Şifre input alanı + gözle gösterme/gizleme */}
                    <div>
                        <label className="block text-sm font-medium mb-1" style={{ color: '#222222' }}>
                            Password:
                        </label>
                        <div className="relative">
                            {/* Şifre input */}
                            <input
                                type={showPassword ? 'text' : 'password'} // göz açıldıysa text, değilse password
                                value={password}
                                required
                                onChange={e => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 pr-10"
                                style={{ borderColor: '#2AA9FE' }}
                            />
                            {/* Göz ikonu */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)} // göster/gizle değişimi
                                className="absolute inset-y-0 right-2 flex items-center text-gray-600"
                            >
                                {showPassword ? '🙈' : '👁️'} {/* Emoji ile ikon gösterimi */}
                            </button>
                        </div>
                    </div>

                    {/* Giriş veya kayıt butonu */}
                    <button
                        type="submit"
                        className="w-full py-2 rounded-md text-white transition duration-200"
                        style={{ backgroundColor: '#2AA9FE' }}
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>

                {/* Kayıt/Giriş arasında geçiş butonu */}
                <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="mt-4 w-full py-2 border rounded-md transition duration-200"
                    style={{
                        borderColor: '#888888',
                        color: '#222222',
                        backgroundColor: 'transparent',
                    }}
                >
                    {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
                </button>

                {/* Mesaj kutusu */}
                {message && (
                    <div className="mt-4 text-center font-medium" style={{ color: 'red' }}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}
