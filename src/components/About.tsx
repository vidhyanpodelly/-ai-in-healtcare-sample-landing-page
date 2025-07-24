import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Zap, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About the Workshop
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dive deep into the intersection of artificial intelligence and healthcare, where innovation meets compassion to transform lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg" 
                alt="AI Healthcare Technology" 
                className="relative w-full h-80 object-cover rounded-lg transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          <div className={`space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Zap className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Innovation</h3>
              <p className="text-gray-300">Explore the latest AI breakthroughs in medical imaging, drug discovery, and personalized treatment plans.</p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Network</h3>
              <p className="text-gray-300">Connect with leading researchers, clinicians, and AI specialists from top institutions worldwide.</p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Award className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Practical Skills</h3>
              <p className="text-gray-300">Gain hands-on experience with AI tools and techniques you can implement in your practice.</p>
            </div>
          </div>
        </div>

        <div className={`text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="backdrop-blur-sm bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Transform Healthcare with AI</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join us for an immersive experience that will reshape how you think about the future of medicine. 
              From diagnostic AI to treatment optimization, discover how technology is making healthcare more precise, 
              accessible, and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;