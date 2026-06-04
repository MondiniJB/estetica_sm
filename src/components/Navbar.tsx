import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Tratamientos', href: '#servicios' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg border-girl-pink/30 py-4 shadow-sm' : 'bg-transparent border-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#home">
                <img src="/logo.png" alt="Estética SM" className="h-16 w-auto drop-shadow-sm hover:scale-105 transition-transform" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-girl-hotpink transition-colors text-sm font-bold uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://api.whatsapp.com/send/?phone=5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-girl-hotpink text-white px-6 py-2.5 rounded-full font-bold shadow-sm hover:bg-girl-red hover:shadow-md transition-all text-sm"
              >
                Reservá tu turno
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center relative z-50">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-800 hover:text-girl-hotpink focus:outline-none"
              >
                {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-10 w-full px-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 hover:text-girl-hotpink transition-colors block text-3xl font-serif font-medium tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 w-full flex justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-girl-hotpink text-white rounded-full font-bold shadow-sm hover:bg-girl-red text-center block w-full max-w-xs text-lg py-4"
            >
              Reservá tu turno
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
