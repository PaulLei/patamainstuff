import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Our Story', href: '#about' },
    { name: 'What We Do', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="/patalogotransparent.png"
              alt="PATA logo"
              className="h-10 w-10 object-contain"
            />

            <span className="text-2xl font-bold text-white tracking-tight">
              PATA<span className="text-amber-500"> Web Design & Branding</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-amber-500 transition-colors duration-200 text-sm font-large"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a href="#contact">
              <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/50">
                Start Your Project
              </button>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-amber-500 block px-3 py-2 text-base font-large"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-md text-sm font-medium mt-4">
              Start Your Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}