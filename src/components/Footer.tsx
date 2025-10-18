export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Noxa Assistant</h3>
            <p className="text-gray-400">Solusi bot WhatsApp terpercaya untuk meningkatkan produktivitas bisnis Anda.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Fitur</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Auto Reply</a></li>
              <li><a href="#" className="hover:text-white">Broadcast</a></li>
              <li><a href="#" className="hover:text-white">Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white">Karir</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@noxassistant.com</li>
              <li>+62 812-3456-7890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Noxa Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
