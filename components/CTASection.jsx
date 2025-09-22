import React from 'react';
import { Brain, Heart, MessageCircle, AArrowDown as SOS } from 'lucide-react';

const CTASection = ({ onStartQuiz }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-radicchio to-cherry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-950 mb-4">
            Ready to Start Your Mental Health Journey?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Take the first step towards better mental health with our comprehensive support system.
            Anonymous, secure, and always available when you need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Quick Assessment</h3>
            <p className="text-purple-100 text-sm">Take our 5-minute mental wellbeing quiz</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Guided Meditation</h3>
            <p className="text-purple-100 text-sm">Start with calming meditation sessions</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">AI Support Chat</h3>
            <p className="text-purple-100 text-sm">24/7 AI companion for immediate support</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
              <SOS className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Emergency Support</h3>
            <p className="text-purple-100 text-sm">Instant connection to crisis support</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onStartQuiz}
            className="group px-8 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/30 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 cursor-pointer"
          >
            <Brain className="w-5 h-5" />
            <span>Take Wellbeing Assessment</span>
          </button>
          <button className="group px-8 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/30 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 cursor-pointer">
            <Heart className="w-5 h-5" />
            <span>Start Meditation Now</span>
          </button>
        </div>

        <div className="text-center mt-8">
          <p className="text-purple-100 text-sm">
            No registration required • Completely anonymous • Available 24/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;