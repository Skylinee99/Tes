import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Kontak Noxa Assistant</title>
      </Head>

      <Header />

      <main className="flex-grow py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Hubungi Kami</h1>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold mb-4">Informasi Kontak</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>contact@noxassistant.com</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+62 812-3456-7890</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Jl. Teknologi No. 123, Jakarta, Indonesia</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h3 className="font-bold mb-2">Jam Operasional</h3>
                    <p>Senin - Jumat: 09.00 - 18.00 WIB</p>
                    <p>Sabtu: 09.00 - 15.00 WIB</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Kirim Pesan</h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-1 font-medium">Nama</label>
                      <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                      <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-1 font-medium">Pesan</label>
                      <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                    </div>
                    <Button type="submit">Kirim Pesan</Button>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Coba Noxa Assistant Sekarang</h2>
              <p className="mb-6">Kirim pesan ke nomor WhatsApp kami untuk mencoba demo gratis</p>
              <Button href="https://wa.me/6281234567890" variant="primary">
                Chat di WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
