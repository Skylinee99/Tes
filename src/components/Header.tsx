import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Noxa Assistant" width={40} height={40} />
          <span className="text-xl font-bold text-indigo-600">Noxa Assistant</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium hover:text-indigo-600 transition">Beranda</Link>
          <Link href="/features" className="font-medium hover:text-indigo-600 transition">Fitur</Link>
          <Link href="/about" className="font-medium hover:text-indigo-600 transition">Tentang</Link>
          <Link href="/contact" className="font-medium hover:text-indigo-600 transition">Kontak</Link>
        </nav>
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
