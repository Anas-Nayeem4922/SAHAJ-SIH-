"use client"
import React, { useState } from 'react';
import { Menu, X, Heart} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SAHAJ
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Features</a>
            <a href="#safety" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Safety</a>
            <a href="#experts" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Experts</a>
            <a href="#institutions" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">For Institutions</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-purple-600 hover:text-purple-700 transition-colors duration-300">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-purple-100">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-purple-600">Features</a>
            <a href="#safety" className="block text-gray-700 hover:text-purple-600">Safety</a>
            <a href="#experts" className="block text-gray-700 hover:text-purple-600">Experts</a>
            <a href="#institutions" className="block text-gray-700 hover:text-purple-600">For Institutions</a>
            <div className="pt-4 space-y-2">
              <button className="w-full px-4 py-2 text-purple-600 border border-purple-200 rounded-full">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;