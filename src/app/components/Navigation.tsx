import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Check if we're on an Annapolis Valley page
  const isAnnapolisValley = location.pathname.startsWith('/av/');
  const basePath = isAnnapolisValley ? '/av' : '';

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: `${basePath}/depression`, label: 'Depression' },
    { path: `${basePath}/anxiety`, label: 'Anxiety' },
    { path: `${basePath}/substance-use`, label: 'Substance Use Disorder' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-600" />
            <span className="text-xl text-gray-900 hidden sm:inline">Mental Health Clinical Guide</span>
            <span className="text-xl text-gray-900 sm:hidden">MH Guide</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* Region Toggle */}
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
              <MapPin className="w-3 h-3 text-gray-700" />
              <span className="text-sm text-gray-900">Annapolis Valley</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {/* Mobile Region Toggle */}
            <div className="flex gap-2 mb-4 bg-gray-100 rounded-lg p-1">
              <Link
                to={`/av${location.pathname === '/' ? '/depression' : location.pathname}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex-1 px-3 py-2 rounded text-sm text-center transition-colors flex items-center justify-center gap-1 ${
                  isAnnapolisValley
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                <MapPin className="w-3 h-3" />
                Annapolis Valley
              </Link>
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}