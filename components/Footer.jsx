import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">SAHAJ</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Supporting student mental health with AI-powered tools, verified experts, 
              and complete privacy protection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Features</a></li>
              <li><a href="#safety" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Privacy & Safety</a></li>
              <li><a href="#experts" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Our Experts</a></li>
              <li><a href="#institutions" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">For Institutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Crisis Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Community Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Report Issue</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">support@sahaj.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">+91XXXXXXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">Available Worldwide</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-red-900/50 to-pink-900/50 rounded-xl border border-red-800">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-red-200">Crisis Support</span>
              </div>
              <p className="text-red-200 text-sm">24/7 emergency helpline available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 MindCare. All rights reserved. Supporting student mental health worldwide.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;