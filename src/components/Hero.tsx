import React from 'react';
import { ArrowRight, Brain, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center space-x-4">
          <div className="animate-bounce delay-100">
            <Brain className="w-16 h-16 text-cyan-400" />
          </div>
          <div className="animate-bounce delay-300">
            <Heart className="w-16 h-16 text-pink-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          AI in Healthcare
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          The Future of Medicine is Here
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Join 500+ healthcare professionals, researchers, and innovators in exploring how AI is revolutionizing patient care, diagnosis, and treatment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            <span className="flex items-center">
              Register Now
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full transform transition-all duration-300 hover:bg-purple-400 hover:text-white hover:scale-105">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="transform hover:scale-110 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400">2</div>
            <div className="text-gray-400">Days</div>
          </div>
          <div className="transform hover:scale-110 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400">12</div>
            <div className="text-gray-400">Speakers</div>
          </div>
          <div className="transform hover:scale-110 transition-all duration-300">
            <div className="text-3xl font-bold text-pink-400">500+</div>
            <div className="text-gray-400">Attendees</div>
          </div>
          <div className="transform hover:scale-110 transition-all duration-300">
            <div className="text-3xl font-bold text-orange-400">8</div>
            <div className="text-gray-400">Workshops</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;