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
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  const pricingRef = useRef(null);
  const featuresRef = useRef(null);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: '🤖',
      title: 'AI Super Cerdas',
      description: 'Ditenagai GPT-4 terbaru untuk percakapan yang natural dan solusi tepat sasaran',
      highlight: 'Akurasi 98%'
    },
    {
      icon: '⚡',
      title: 'Respons Kilat',
      description: 'Balas pesan dalam 0.3 detik, lebih cepat dari kompetitor manapun',
      highlight: '10x Lebih Cepat'
    },
    {
      icon: '🔒',
      title: 'Keamanan Bank Level',
      description: 'Enkripsi end-to-end dengan sertifikasi ISO 27001',
      highlight: '100% Aman'
    },
    {
      icon: '🌐',
      title: '24/7 Tanpa Henti',
      description: 'Selalu online siap melayani, bahkan saat libur panjang',
      highlight: '99.9% Uptime'
    }
  ];

  const benefits = [
    {
      title: 'Hemat Biaya Operasional',
      description: 'Kurangi biaya customer service hingga 70%',
      icon: '💰',
      stat: 'Rp 50 Juta+'
    },
    {
      title: 'Tingkatkan Kepuasan Pelanggan',
      description: 'Respon instan 24/7 untuk semua pertanyaan',
      icon: '😊',
      stat: '95% CSAT'
    },
    {
      title: 'Skalabilitas Tanpa Batas',
      description: 'Handle ribuan chat bersamaan tanpa lag',
      icon: '📈',
      stat: '10K+ Chat/Hari'
    }
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'CEO E-Commerce Sukses',
      content: 'Omzet kami naik 300% setelah pakai Noxa! Customer jadi lebih loyal karena respons super cepat.',
      avatar: '👨‍💼',
      result: '+300% Omzet'
    },
    {
      name: 'Sarah Wijaya',
      role: 'Head of Marketing Startup',
      content: 'Noxa mengubah cara kami berinteraksi dengan customer. Efisiensi tim meningkat drastis!',
      avatar: '👩‍💻',
      result: '+200% Efisiensi'
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Pemilik Restoran Chain',
      content: 'Reservasi dan pertanyaan customer terhandle otomatis. Staff bisa fokus ke operasional.',
      avatar: '👨‍🍳',
      result: '50% Less Staff'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Head>
        <title>Noxa Assistant - Bot WhatsApp AI Terbaik 2024 | Hemat Waktu & Uang</title>
        <meta name="description" content="Noxa Assistant - Bot WhatsApp AI canggih untuk bisnis Anda. Hemat biaya operasional hingga 70%, tingkatkan kepuasan pelanggan 95%. Coba gratis sekarang!" />
        <meta name="keywords" content="bot whatsapp, ai assistant, customer service otomatis, chatbot bisnis, noxa assistant" />
        <meta property="og:title" content="Noxa Assistant - Bot WhatsApp AI Terbaik 2024" />
        <meta property="og:description" content="Hemat biaya operasional hingga 70% dengan bot WhatsApp AI canggih. Coba gratis 7 hari!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Noxa</span>
              <p className="text-xs text-gray-400 -mt-1">AI Assistant</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors font-medium">Fitur</button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-300 hover:text-white transition-colors font-medium">Manfaat</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors font-medium">Testimoni</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors font-medium">Harga</button>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Coba Gratis
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          {/* Flash Sale Banner */}
          <div className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full mb-8 animate-pulse">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">FLASH SALE!</span>
            <span className="ml-2">Diskon 50% - Berakhir dalam:</span>
            <div className="flex items-center ml-4 space-x-2">
              <div className="bg-white/20 px-2 py-1 rounded">
                {countdown.days.toString().padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-white/20 px-2 py-1 rounded">
                {countdown.hours.toString().padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-white/20 px-2 py-1 rounded">
                {countdown.minutes.toString().padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-white/20 px-2 py-1 rounded">
                {countdown.seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolusi Customer Service
            </span>
            <br />
            <span className="text-white">dengan AI WhatsApp</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold text-green-400">Noxa Assistant</span> - Bot WhatsApp AI tercanggih yang handle 10,000+ chat/hari. 
            <span className="text-yellow-400 font-semibold"> Hemat biaya hingga 70%</span> dan tingkatkan kepuasan pelanggan 95%!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              className="group bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Coba 7 Hari GRATIS</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-gray-900"></div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400">★★★★★</div>
                <p className="text-sm">Dipercaya 10,000+ Bisnis</p>
              </div>
            </div>
          </div>

          {/* Live Demo */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur opacity-75"></div>
            <div className="relative bg-gray-800 rounded-[2.5rem] p-4 shadow-2xl">
              <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                <div className="bg-gray-800 h-14 flex items-center justify-between px-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm">9:41</div>
                </div>
                <div className="p-4 space-y-3 h-96 overflow-y-auto">
                  <div className="text-center text-xs text-gray-500 my-2">Hari ini</div>
                  
                  <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-4 max-w-[80%] animate-pulse">
                    <div className="flex items-start space-x-2">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">N</div>
                      <div>
                        <div className="text-sm font-semibold mb-1">Noxa Assistant</div>
                        <div className="text-sm">Halo! Saya Noxa, asisten AI Anda. Ada yang bisa saya bantu hari ini? 😊</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 rounded-2xl p-4 max-w-[80%] ml-auto">
                    <div className="text-sm">Saya mau tanya tentang produk kalian</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-4 max-w-[80%] animate-pulse" style={{animationDelay: '1s'}}>
                    <div className="flex items-start space-x-2">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">N</div>
                      <div>
                        <div className="text-sm font-semibold mb-1">Noxa Assistant</div>
                        <div className="text-sm">Tentu! Produk kami memiliki 3 varian utama. Mana yang ingin Anda ketahui lebih detail?</div>
                        <div className="mt-2 space-y-2">
                          <div className="bg-white/10 rounded-lg p-2 text-xs">📱 Varian Premium</div>
                          <div className="bg-white/10 rounded-lg p-2 text-xs">💎 Varian Ultimate</div>
                          <div className="bg-white/10 rounded-lg p-2 text-xs">🚀 Varian Business</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-3 flex items-center space-x-3">
                  <button className="text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <div className="flex-1 bg-gray-700 rounded-full px-4 py-2 text-sm text-gray-400">
                    Ketik pesan...
                  </div>
                  <button className="bg-green-500 text-white p-2 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Mengapa 10,000+ Bisnis Memilih Noxa?
              </span>
            </h2>
            <p className="text-xl text-gray-400">Buktikan sendiri manfaat luar biasa yang kami tawarkan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400 mb-4">{benefit.description}</p>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {benefit.stat}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Counter */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Pengguna Aktif', value: '10,000+', icon: '👥' },
              { label: 'Chat Terhandle', value: '50M+', icon: '💬' },
              { label: 'Waktu Hemat', value: '80%', icon: '⏱️' },
              { label: 'Kepuasan', value: '95%', icon: '⭐' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  const pricingRef = useRef(null);
  const featuresRef = useRef(null);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: '🤖',
      title: 'AI Super Cerdas',
      description: 'Ditenagai GPT-4 terbaru untuk percakapan yang natural dan solusi tepat sasaran',
      highlight: 'Akurasi 98%'
    },
    {
      icon: '⚡',
      title: 'Respons Kilat',
      description: 'Balas pesan dalam 0.3 detik, lebih cepat dari kompetitor manapun',
      highlight: '10x Lebih Cepat'
    },
    {
      icon: '🔒',
      title: 'Keamanan Bank Level',
      description: 'Enkripsi end-to-end dengan sertifikasi ISO 27001',
      highlight: '100% Aman'
    },
    {
      icon: '🌐',
      title: '24/7 Tanpa Henti',
      description: 'Selalu online siap melayani, bahkan saat libur panjang',
      highlight: '99.9% Uptime'
    }
  ];

  const benefits = [
    {
      title: 'Hemat Biaya Operasional',
      description: 'Kurangi biaya customer service hingga 70%',
      icon: '💰',
      stat: 'Rp 50 Juta+'
    },
    {
      title: 'Tingkatkan Kepuasan Pelanggan',
      description: 'Respon instan 24/7 untuk semua pertanyaan',
      icon: '😊',
      stat: '95% CSAT'
    },
    {
      title: 'Skalabilitas Tanpa Batas',
      description: 'Handle ribuan chat bersamaan tanpa lag',
      icon: '📈',
      stat: '10K+ Chat/Hari'
    }
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'CEO E-Commerce Sukses',
      content: 'Omzet kami naik 300% setelah pakai Noxa! Customer jadi lebih loyal karena respons super cepat.',
      avatar: '👨‍💼',
      result: '+300% Omzet'
    },
    {
      name: 'Sarah Wijaya',
      role: 'Head of Marketing Startup',
      content: 'Noxa mengubah cara kami berinteraksi dengan customer. Efisiensi tim meningkat drastis!',
      avatar: '👩‍💻',
      result: '+200% Efisiensi'
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Pemilik Restoran Chain',
      content: 'Reservasi dan pertanyaan customer terhandle otomatis. Staff bisa fokus ke operasional.',
      avatar: '👨‍🍳',
      result: '50% Less Staff'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Head>
        <title>Noxa Assistant - Bot WhatsApp AI Terbaik 2024 | Hemat Waktu & Uang</title>
        <meta name="description" content="Noxa Assistant - Bot WhatsApp AI canggih untuk bisnis Anda. Hemat biaya operasional hingga 70%, tingkatkan kepuasan pelanggan 95%. Coba gratis sekarang!" />
        <meta name="keywords" content="bot whatsapp, ai assistant, customer service otomatis, chatbot bisnis, noxa assistant" />
        <meta property="og:title" content="Noxa Assistant - Bot WhatsApp AI Terbaik 2024" />
        <meta property="og:description" content="Hemat biaya operasional hingga 70% dengan bot WhatsApp AI canggih. Coba gratis 7 hari!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Noxa</span>
              <p className="text-xs text-gray-400 -mt-1">AI Assistant</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors font-medium">Fitur</button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-300 hover:text-white transition-colors font-medium">Manfaat</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors font-medium">Testimoni</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors font-medium">Harga</button>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Coba Gratis
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          {/* Flash Sale Banner */}
          <div className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full mb-8 animate-pulse">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">FLASH SALE!</span>
            <span className="ml-2">Diskon 50% - Berakhir dalam:</span>
            <div className="flex items-center ml-4 space-x-2">
              <div className="bg-white/20 px-2 py-1 rounded">
                {countdown.days.toString().padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-white/20 px-2 py-1 rounded">
                {countdown.hours.toString().padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-white/20 px-2 py-1 rounded">
                {countdown.minutes.toString().padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-white/20 px-2 py-1 rounded">
                {countdown.seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolusi Customer Service
            </span>
            <br />
            <span className="text-white">dengan AI WhatsApp</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold text-green-400">Noxa Assistant</span> - Bot WhatsApp AI tercanggih yang handle 10,000+ chat/hari. 
            <span className="text-yellow-400 font-semibold"> Hemat biaya hingga 70%</span> dan tingkatkan kepuasan pelanggan 95%!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              className="group bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Coba 7 Hari GRATIS</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-gray-900"></div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400">★★★★★</div>
                <p className="text-sm">Dipercaya 10,000+ Bisnis</p>
              </div>
            </div>
          </div>

          {/* Live Demo */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur opacity-75"></div>
            <div className="relative bg-gray-800 rounded-[2.5rem] p-4 shadow-2xl">
              <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                <div className="bg-gray-800 h-14 flex items-center justify-between px-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm">9:41</div>
                </div>
                <div className="p-4 space-y-3 h-96 overflow-y-auto">
                  <div className="text-center text-xs text-gray-500 my-2">Hari ini</div>
                  
                  <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-4 max-w-[80%] animate-pulse">
                    <div className="flex items-start space-x-2">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">N</div>
                      <div>
                        <div className="text-sm font-semibold mb-1">Noxa Assistant</div>
                        <div className="text-sm">Halo! Saya Noxa, asisten AI Anda. Ada yang bisa saya bantu hari ini? 😊</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 rounded-2xl p-4 max-w-[80%] ml-auto">
                    <div className="text-sm">Saya mau tanya tentang produk kalian</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-4 max-w-[80%] animate-pulse" style={{animationDelay: '1s'}}>
                    <div className="flex items-start space-x-2">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">N</div>
                      <div>
                        <div className="text-sm font-semibold mb-1">Noxa Assistant</div>
                        <div className="text-sm">Tentu! Produk kami memiliki 3 varian utama. Mana yang ingin Anda ketahui lebih detail?</div>
                        <div className="mt-2 space-y-2">
                          <div className="bg-white/10 rounded-lg p-2 text-xs">📱 Varian Premium</div>
                          <div className="bg-white/10 rounded-lg p-2 text-xs">💎 Varian Ultimate</div>
                          <div className="bg-white/10 rounded-lg p-2 text-xs">🚀 Varian Business</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-3 flex items-center space-x-3">
                  <button className="text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <div className="flex-1 bg-gray-700 rounded-full px-4 py-2 text-sm text-gray-400">
                    Ketik pesan...
                  </div>
                  <button className="bg-green-500 text-white p-2 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Mengapa 10,000+ Bisnis Memilih Noxa?
              </span>
            </h2>
            <p className="text-xl text-gray-400">Buktikan sendiri manfaat luar biasa yang kami tawarkan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400 mb-4">{benefit.description}</p>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {benefit.stat}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Counter */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Pengguna Aktif', value: '10,000+', icon: '👥' },
              { label: 'Chat Terhandle', value: '50M+', icon: '💬' },
              { label: 'Waktu Hemat', value: '80%', icon: '⏱️' },
              { label: 'Kepuasan', value: '95%', icon: '⭐' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Fitur-Fitur Masa Depan
              </span>
            </h2>
            <p className="text-xl text-gray-400">Teknologi terdepan untuk bisnis Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {feature.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Comparison */}
          <div className="mt-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-12 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">Noxa vs Kompetitor</h3>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="text-gray-400 font-semibold">Fitur</div>
                <div className="text-center font-bold text-green-400">Noxa</div>
                <div className="text-center text-gray-400">Kompetitor A</div>
                <div className="text-center text-gray-400">Kompetitor B</div>
              </div>
              {[
                { feature: 'AI GPT-4', noxa: '✓', a: '✗', b: '✓' },
                { feature: '24/7 Support', noxa: '✓', a: '✓', b: '✗' },
                { feature: 'Multi Bahasa', noxa: '✓', a: '✗', b: '✗' },
                { feature: 'Custom Training', noxa: '✓', a: '✗', b: '✗' },
                { feature: 'API Integration', noxa: '✓', a: '✓', b: '✗' },
                { feature: 'Harga Terjangkau', noxa: '✓', a: '✗', b: '✗' }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 py-3 border-t border-gray-700">
                  <div className="text-gray-300">{item.feature}</div>
                  <div className="text-center text-green-400 text-xl">{item.noxa}</div>
                  <div className="text-center text-red-400 text-xl">{item.a}</div>
                  <div className="text-center text-red-400 text-xl">{item.b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Kisah Sukses Mereka
              </span>
            </h2>
            <p className="text-xl text-gray-400">Lihat bagaimana Noxa mengubah bisnis mereka</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonial */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-3xl p-1">
              <div className="bg-gray-900 rounded-3xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Tonton Testimonial Video</h3>
                <p className="text-gray-400 mb-6">Dengar langsung pengalaman CEO perusahaan ternama</p>
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300">
                  Tonton Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Pilih Paket Terbaik untuk Anda
              </span>
            </h2>
            <p className="text-xl text-gray-400">Mulai dari gratis hingga enterprise scale</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 relative">
              <h3 className="text-2xl font-bold mb-4 text-white">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Gratis</span>
                <span className="text-gray-400">/bulan</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span> 500 chat/bulan
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span> AI Basic
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span> 1 Bahasa
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span> Support Email
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors">
                Mulai Gratis
              </button>
              <div className="mt-4 text-center text-sm text-gray-400">
                Perfect untuk mencoba
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-8 border-2 border-purple-500 transform scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-sm font-bold px-4 py-1 rounded-bl-lg">
                MOST POPULAR
              </div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white">Professional</h3>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-2xl text-gray-400 line-through mr-2">Rp 199K</span>
                    <span className="text-4xl font-bold text-white">Rp 99K</span>
                  </div>
                  <span className="text-gray-400">/bulan</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> Chat tak terbatas
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> AI GPT-4
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> 10+ Bahasa
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> Priority Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> Analytics
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300">
                  Pilih Pro - Hemat 50%
                </button>
                <div className="mt-4 text-center text-sm text-yellow-400">
                  ⚡ Limited time offer!
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span> Semua fitur Pro
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span> Custom AI Training
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span> API Access
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span> Dedicated Manager
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span> SLA Guarantee
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors">
                Hubungi Sales
              </button>
              <div className="mt-4 text-center text-sm text-gray-400">
                Untuk perusahaan besar
              </div>
            </div>
          </div>

          {/* Guarantee Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full px-8 py-4">
              <svg className="w-8 h-8 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <div className="font-bold text-white text-lg">Garansi Uang Kembali 30 Hari</div>
                <div className="text-gray-400 text-sm">Tidak puas? Kami kembalikan 100% uang Anda</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Siap Revolusi Bisnis Anda?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Bergabunglah dengan 10,000+ bisnis yang telah meningkatkan penjualan dan efisiensi dengan Noxa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              className="group bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Chat dengan Noxa Sekarang</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <div className="text-gray-400">
              atau hubungi: <span className="text-green-400 font-semibold">0812-3456-7890</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                required
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                Dapatkan Tips
              </button>
            </form>
            {isSubscribed && (
              <div className="mt-3 text-green-400 text-sm">
                ✓ Terima kasih! Tips akan dikirim ke email Anda.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">N</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">Noxa</span>
                  <p className="text-xs text-gray-400 -mt-1">AI Assistant</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">Bot WhatsApp AI tercanggih untuk bisnis modern</p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-lg">📱</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Produk</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Harga</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrasi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Perusahaan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partner</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Noxa Assistant. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🇮🇩 Made in Indonesia</span>
              <span>•</span>
              <span>🔒 SSL Secured</span>
              <span>•</span>
              <span>⭐ 4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
