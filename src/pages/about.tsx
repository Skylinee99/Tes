import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Tentang Noxa Assistant</title>
      </Head>

      <Header />

      <main className="flex-grow py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Tentang Noxa Assistant</h1>
            
            <div className="prose prose-lg">
              <p>
                Noxa Assistant adalah solusi bot WhatsApp yang dirancang khusus untuk membantu bisnis 
                dalam mengelola komunikasi pelanggan secara efisien. Dengan teknologi AI terkini, 
                kami membantu perusahaan dari berbagai ukuran untuk meningkatkan layanan pelanggan, 
                penjualan, dan efektivitas pemasaran melalui platform WhatsApp.
              </p>
              
              <h2 className="mt-8">Visi Kami</h2>
              <p>
                Menjadi solusi komunikasi bisnis terdepan di Indonesia yang menghubungkan perusahaan 
                dengan pelanggan secara lebih personal dan efisien melalui teknologi.
              </p>
              
              <h2 className="mt-8">Misi Kami</h2>
              <ul>
                <li>Memberikan solusi WhatsApp Business yang mudah digunakan dan terjangkau</li>
                <li>Membantu bisnis meningkatkan kepuasan pelanggan melalui respon cepat</li>
                <li>Menyediakan tools analitik untuk pengambilan keputusan bisnis yang lebih baik</li>
                <li>Terus berinovasi mengikuti perkembangan teknologi dan kebutuhan pasar</li>
              </ul>
              
              <h2 className="mt-8">Tim Kami</h2>
              <p>
                Noxa Assistant dikembangkan oleh tim profesional yang berpengalaman di bidang teknologi, 
                pemasaran digital, dan layanan pelanggan. Kami berkomitmen untuk memberikan produk 
                terbaik dengan dukungan pelanggan yang responsif.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
