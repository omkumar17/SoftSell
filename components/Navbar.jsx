'use client';
import { useState } from 'react';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className={`font-bold text-xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                <i className="fas fa-tags mr-2"></i>
                SoftSell
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#how-it-works" className={`inline-flex items-center px-1 pt-1 border-b-2 ${darkMode ? 'text-gray-100 border-blue-400' : 'text-gray-900 border-blue-500'} text-sm font-medium`}>
                How It Works
              </a>
              <a href="#why-choose-us" className={`inline-flex items-center px-1 pt-1 border-b-2 border-transparent ${darkMode ? 'text-gray-300 hover:text-gray-100 hover:border-gray-300' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'} text-sm font-medium`}>
                Why Choose Us
              </a>
              <a href="#testimonials" className={`inline-flex items-center px-1 pt-1 border-b-2 border-transparent ${darkMode ? 'text-gray-300 hover:text-gray-100 hover:border-gray-300' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'} text-sm font-medium`}>
                Testimonials
              </a>
              <a href="#contact" className={`inline-flex items-center px-1 pt-1 border-b-2 border-transparent ${darkMode ? 'text-gray-300 hover:text-gray-100 hover:border-gray-300' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'} text-sm font-medium`}>
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-md ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}
            >
              {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
            <div className="ml-3 relative">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className={`pt-2 pb-3 space-y-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <a href="#how-it-works" className={`block pl-3 pr-4 py-2 border-l-4 ${darkMode ? 'border-blue-400 text-blue-300 bg-gray-900' : 'border-blue-500 text-blue-700 bg-blue-50'} text-base font-medium`}>
              How It Works
            </a>
            <a href="#why-choose-us" className={`block pl-3 pr-4 py-2 border-l-4 border-transparent ${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'} text-base font-medium`}>
              Why Choose Us
            </a>
            <a href="#testimonials" className={`block pl-3 pr-4 py-2 border-l-4 border-transparent ${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'} text-base font-medium`}>
              Testimonials
            </a>
            <a href="#contact" className={`block pl-3 pr-4 py-2 border-l-4 border-transparent ${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'} text-base font-medium`}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
