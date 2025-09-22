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
            <div className="w-10 h-10 bg-radicchio rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-butter" />
            </div>
            <span className="text-2xl font-bold text-cherry bg-clip-text">
              SAHAJ
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:font-bold hover:text-radiate transition-all duration-300">Features</a>
            <a href="#safety" className="text-gray-700 hover:font-bold hover:text-radiate transition-all duration-300">Safety</a>
            <a href="#experts" className="text-gray-700 hover:font-bold hover:text-radiate transition-all duration-300">Experts</a>
            <a href="#institutions" className="text-gray-700 hover:font-bold hover:text-radiate transition-all duration-300">For Institutions</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-radicchio font-semibold hover:scale-110 transition-all duration-300 cursor-pointer rounded-md">
              Signin
            </button>
            <button className="px-6 py-2 bg-cherry text-pearl rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer font-semibold">
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
            <a href="#features" className="block text-gray-700 hover:font-semibold hover:text-radiate transition-all duration-300">Features</a>
            <a href="#safety" className="block text-gray-700 hover:font-semibold hover:text-radiate transition-all duration-300">Safety</a>
            <a href="#experts" className="block text-gray-700 hover:font-semibold hover:text-radiate transition-all duration-300">Experts</a>
            <a href="#institutions" className="block text-gray-700 hover:font-semibold hover:text-radiate transition-all duration-300">For Institutions</a>
            <div className="pt-4 space-y-2">
              <button className="w-full px-4 py-2 text-moss border border-kaleleaf rounded-full font-semibold cursor-pointer">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-spinach to-kaleleaf text-pearl rounded-full">
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