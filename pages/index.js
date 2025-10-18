// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '🤖',
      title: 'AI Canggih',
      description: 'Didukung oleh teknologi AI terkini untuk memberikan respons yang akurat dan relevan'
    },
    {
      icon: '⚡',
      title: 'Respons Cepat',
      description: 'Balas pesan dalam hitungan detik, kapan saja Anda butuhkan'
    },
    {
      icon: '🔒',
      title: 'Aman & Pribadi',
      description: 'Data Anda terenkripsi dan tidak akan dibagikan kepada pihak ketiga'
    },
    {
      icon: '🌐',
      title: '24/7 Online',
      description: 'Selalu siap membantu Anda kapan saja, di mana saja'
    }
  ];

  const testimonials = [
    {
      name: 'Andi Pratama',
      role: 'Pebisnis Online',
      content: 'Noxa sangat membantu dalam mengelola customer service. Respons cepat dan akurat!',
      avatar: '👨‍💼'
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Content Creator',
      content: 'Bot yang pintar dan ramah. Membantu saya menjawab pertanyaan followers dengan baik.',
      avatar: '👩‍💻'
    },
    {
      name: 'Budi Santoso',
      role: 'Marketing Manager',
      content: 'Efisiensi tim kami meningkat drastis setelah menggunakan Noxa. Highly recommended!',
      avatar: '👨‍🎓'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Head>
        <title>Noxa - Assistant | Bot WhatsApp Canggih</title>
        <meta name="description" content="Noxa Assistant - Bot WhatsApp pintar untuk meningkatkan produktivitas Anda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Noxa</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-green-600 transition-colors">Fitur</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-green-600 transition-colors">Cara Kerja</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-green-600 transition-colors">Testimoni</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-green-600 transition-colors">Harga</button>
          </div>
          <button 
            onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Coba Sekarang
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚀 Bot WhatsApp Terbaik 2024
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Noxa Assistant
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Asisten pintar di WhatsApp Anda yang siap membantu 24/7. Tingkatkan produktivitas dengan AI canggih yang memahami kebutuhan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Mulai Chat dengan Noxa
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-green-500 hover:text-green-600 transition-all duration-300"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
          
          {/* Animated Phone Mockup */}
          <div className="relative max-w-sm mx-auto">
            <div className="bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                <div className="bg-gray-100 h-12 flex items-center justify-center">
                  <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="bg-green-100 rounded-2xl p-3 animate-pulse">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">N</div>
                      <div className="flex-1">
                        <div className="bg-green-200 h-4 rounded w-3/4 mb-2"></div>
                        <div className="bg-green-200 h-3 rounded w-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-100 rounded-2xl p-3 ml-12 animate-pulse" style={{animationDelay: '0.5s'}}>
                    <div className="bg-blue-200 h-3 rounded w-4/5 mb-2"></div>
                    <div className="bg-blue-200 h-3 rounded w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Fitur Unggulan Noxa
              </span>
            </h2>
            <p className="text-xl text-gray-600">Semua yang Anda butuhkan dalam satu asisten pintar</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 ${
                  index === 0 ? 'from-green-50 to-green-100' :
                  index === 1 ? 'from-blue-50 to-blue-100' :
                  index === 2 ? 'from-purple-50 to-purple-100' :
                  'from-orange-50 to-orange-100'
                }`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Interactive Feature Demo */}
          <div className="mt-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">Lihat Noxa dalam Aksi</h3>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <div className="text-5xl mb-4">{features[activeFeature].icon}</div>
                <h4 className="text-2xl font-bold mb-2">{features[activeFeature].title}</h4>
                <p className="text-lg">{features[activeFeature].description}</p>
              </div>
              <div className="flex justify-center space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeFeature ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Cara Kerja Noxa
              </span>
            </h2>
            <p className="text-xl text-gray-600">Mudah digunakan, langsung bisa dipakai</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: 1, title: 'Klik Tombol Mulai', description: 'Tekan tombol "Coba Sekarang" untuk langsung terhubung dengan Noxa di WhatsApp' },
                { step: 2, title: 'Kirim Pesan', description: 'Ketik pesan apa saja yang ingin Anda tanyakan atau bantuan yang Anda butuhkan' },
                { step: 3, title: 'Dapatkan Respons', description: 'Noxa akan merespons dengan cepat dan akurat sesuai kebutuhan Anda' },
                { step: 4, title: 'Nikmati Kemudahan', description: 'Gunakan Noxa kapan saja untuk berbagai keperluan Anda' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Apa Kata Mereka
              </span>
            </h2>
            <p className="text-xl text-gray-600">Testimoni dari pengguna Noxa</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Harga Terjangkau
              </span>
            </h2>
            <p className="text-xl text-gray-600">Pilih paket yang sesuai dengan kebutuhan Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Gratis</span>
                <span className="text-gray-600">/bulan</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 100 pesan/bulan</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Respon dasar</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Support email</li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors">
                Mulai Gratis
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-2xl shadow-xl p-8 transform scale-105">
              <div className="bg-yellow-400 text-gray-800 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                POPULER
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Rp 99K</span>
                <span className="text-green-100">/bulan</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="mr-2">✓</span> Pesan tak terbatas</li>
                <li className="flex items-center"><span className="mr-2">✓</span> AI canggih</li>
                <li className="flex items-center"><span className="mr-2">✓</span> Multi bahasa</li>
                <li className="flex items-center"><span className="mr-2">✓</span> Priority support</li>
              </ul>
              <button className="w-full bg-white text-green-600 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Pilih Pro
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Semua fitur Pro</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API integration</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom training</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated support</li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Meningkatkan Produktivitas Anda?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Bergabunglah dengan ribuan pengguna yang telah merasakan kemudahan menggunakan Noxa Assistant</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Chat dengan Noxa Sekarang
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Lihat Paket Harga
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="text-2xl font-bold">Noxa</span>
              </div>
              <p className="text-gray-400">Asisten pintar untuk kehidupan digital Anda</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produk</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Harga</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Noxa Assistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
