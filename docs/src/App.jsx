// App.jsx
import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Recommendations from './components/Recommendations';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-20">
        <About />
        <Experience />
        <Education />
        <Recommendations />
      </main>
      <footer className="bg-gray-800 py-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Mojtaba Taleghani. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;