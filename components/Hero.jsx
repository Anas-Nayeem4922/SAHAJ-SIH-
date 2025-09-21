import React from 'react';
import { Brain, MessageCircle, AArrowDown as SOS } from 'lucide-react';

const Hero = ({ onStartQuiz }) => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Your Mental Health
                </span>
                <br />
                <span className="text-gray-800">Matters Most</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Supporting students with AI-powered tools, verified experts, and institutional insights 
                while maintaining complete privacy and confidentiality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onStartQuiz}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Brain className="w-5 h-5" />
                <span>Take Wellbeing Test</span>
              </button>
              <button className="group px-8 py-4 bg-white text-purple-600 border-2 border-purple-200 rounded-full font-semibold hover:bg-purple-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Start Meditating</span>
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <SOS className="w-4 h-4 text-red-400" />
                <span>Emergency SOS Button</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">AI Support Chat</h3>
                      <p className="text-sm text-gray-500">Available 24/7</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4">
                    <p className="text-gray-700 text-sm">
                      "How are you feeling today? I'm here to listen and provide support whenever you need it."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-blue-200 to-green-200 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;