import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';

export default function Features() {
  const features = [
    {
      title: "Auto Reply Cerdas",
      description: "Balas pesan pelanggan secara otomatis dengan AI yang memahami konteks percakapan",
      image: "/images/features/feature-1.png"
    },
    {
      title: "Broadcast Massal",
      description: "Kirim promosi dan informasi ke ribuan pelanggan sekaligus dengan satu klik",
      image: "/images/features/feature-2.png"
    },
    {
      title: "Analitik Performa",
      description: "Pantau performa kampanye dan interaksi pelanggan dengan dashboard intuitif",
      image: "/images/features/feature-3.png"
    },
    {
      title: "Multi Akun",
      description: "Kelola beberapa akun WhatsApp dari satu dashboard terpusat",
      image: "/images/features/feature-1.png"
    },
    {
      title: "Integrasi API",
      description: "Hubungkan dengan sistem CRM, e-commerce, dan aplikasi bisnis lainnya",
      image: "/images/features/feature-2.png"
    },
    {
      title: "Keamanan Terjamin",
      description: "Data pelanggan terenkripsi dan tersimpan dengan aman di server kami",
      image: "/images/features/feature-3.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Fitur Noxa Assistant</title>
      </Head>

      <Header />

      <main className="flex-grow py-16">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Fitur Lengkap Noxa Assistant</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solusi WhatsApp Business terlengkap untuk kebutuhan bisnis modern
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                title={feature.title} 
                description={feature.description}
                image={feature.image}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
