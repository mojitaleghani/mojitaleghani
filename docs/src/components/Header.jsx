// Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="relative bg-gradient-to-r from-gray-800 to-gray-900 py-20">
      <nav className="absolute top-0 w-full bg-gray-800 bg-opacity-90 py-4">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8">
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
            <li><a href="#education" className="hover:text-blue-400 transition-colors">Education</a></li>
            <li><a href="#recommendations" className="hover:text-blue-400 transition-colors">Recommendations</a></li>
          </ul>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Mojtaba (Moji) Taleghani</h1>
        <h2 className="text-2xl text-blue-400 mb-4">DevOps Director & SRE</h2>
        <p className="text-gray-300">Tehran, Tehran Province, Iran</p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="mailto:contact@example.com" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors">
            Contact Me
          </a>
          <a href="https://linkedin.com/in/mj-taleghani" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full transition-colors">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;