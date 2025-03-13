import React from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Team' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Terminal className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">AsaraSoft</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-indigo-600 ${
                  item.label === 'Contact' ? 'bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 text-gray-700 hover:text-indigo-600 ${
                  item.label === 'Contact' ? 'text-indigo-600 font-medium' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}