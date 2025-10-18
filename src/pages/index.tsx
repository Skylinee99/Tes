import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Noxa Assistant - Bot WhatsApp Pintar untuk Bisnis</title>
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Bot WhatsApp Terbaik untuk Bisnis Anda
                </h1>
                <p className="text-xl mb-8 text-indigo-100">
                  Noxa Assistant membantu otomatisasi layanan pelanggan, penjualan, dan pemasaran melalui WhatsApp dengan mudah.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="https://wa.me/6281234567890" variant="secondary">
                    Coba Demo Gratis
                  </Button>
                  <Button href="/features">
                    Lihat Fitur
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image src="/images/hero-image.png" alt="Noxa Assistant" width={500} height={500} />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Fitur Unggulan Noxa Assistant</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Solusi lengkap untuk kebutuhan komunikasi bisnis Anda melalui WhatsApp
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Auto Reply Cerdas" 
                description="Balas pesan pelanggan secara otomatis dengan AI yang memahami konteks percakapan"
                image="/images/features/feature-1.png"
              />
              <FeatureCard 
                title="Broadcast Massal" 
                description="Kirim promosi dan informasi ke ribuan pelanggan sekaligus dengan satu klik"
                image="/images/features/feature-2.png"
              />
              <FeatureCard 
                title="Analitik Performa" 
                description="Pantau performa kampanye dan interaksi pelanggan dengan dashboard intuitif"
                image="/images/features/feature-3.png"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Siap Meningkatkan Bisnis Anda?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-indigo-100">
              Bergabung dengan ribuan bisnis yang telah menggunakan Noxa Assistant
            </p>
            <Button href="https://wa.me/6281234567890" variant="secondary" className="text-lg">
              Mulai Sekarang
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
