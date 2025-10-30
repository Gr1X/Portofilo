export default function Footer() {
  return (
    // Menggunakan warna background ungu gelap Anda dan padding
    <footer className="bg-black text-gray-400 pb-30 px-4 text-center">

      {/* 1. Motto Anda */}
      <p className="text-4xl text-gray-200 mb-4 font-semibold italic">
        "Keep Growth with Learning"
      </p>

      {/* 2. Copyright */}
      <p className="text-sm">
        © {new Date().getFullYear()} Gregorius Frederico. All rights reserved. 
        {/* Ganti 'Your Company' dengan nama Anda */}
      </p>

      {/* 3. Built With (Opsional, tapi bagus untuk footer portofolio) */}
      <p className="text-xs mt-2">
        Built with <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">React</a>, <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Tailwind CSS</a>, and <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Vite</a>.
      </p>
    </footer>
  );
}