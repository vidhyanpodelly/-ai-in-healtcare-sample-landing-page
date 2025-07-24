import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Linkedin, Twitter, Award } from 'lucide-react';

const Speakers: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const speakers = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief AI Officer",
      company: "Stanford Medical Center",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
      expertise: "Medical Imaging AI",
      description: "Pioneer in AI-powered diagnostic imaging with 15+ years in healthcare innovation.",
      achievement: "Led team that reduced MRI analysis time by 70%"
    },
    {
      name: "Prof. Michael Rodriguez",
      title: "Director of AI Research",
      company: "MIT Healthcare Lab",
      image: "https://images.pexels.com/photos/6749818/pexels-photo-6749818.jpeg",
      expertise: "Drug Discovery AI",
      description: "Revolutionizing pharmaceutical research through machine learning algorithms.",
      achievement: "Published 50+ papers on AI in drug development"
    },
    {
      name: "Dr. Aisha Patel",
      title: "Head of Digital Health",
      company: "Johns Hopkins",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg",
      expertise: "Predictive Analytics",
      description: "Expert in AI-driven patient outcome prediction and preventive care strategies.",
      achievement: "Improved patient outcomes by 45% using AI models"
    },
    {
      name: "Dr. James Thompson",
      title: "VP of Innovation",
      company: "Google Health",
      image: "https://images.pexels.com/photos/6749833/pexels-photo-6749833.jpeg",
      expertise: "Healthcare AI Ethics",
      description: "Leading voice in responsible AI deployment in healthcare settings.",
      achievement: "Co-authored WHO guidelines on AI in healthcare"
    },
    {
      name: "Dr. Lisa Wang",
      title: "Chief Data Scientist",
      company: "Amazon Healthcare",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg",
      expertise: "Natural Language Processing",
      description: "Transforming medical records and patient communication through NLP.",
      achievement: "Automated 80% of clinical documentation processes"
    },
    {
      name: "Prof. David Kim",
      title: "Research Director",
      company: "Mayo Clinic",
      image: "https://images.pexels.com/photos/6749862/pexels-photo-6749862.jpeg",
      expertise: "Surgical Robotics AI",
      description: "Pioneering AI-assisted surgical procedures and robotic surgery systems.",
      achievement: "Performed 1000+ AI-assisted surgeries"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%200h80v80H0V0zm20%2020v40h40V20H20zm20%2035a15%2015%200%201%201%200-30%2015%2015%200%200%201%200%2030z%22%20/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            World-Class Speakers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn from the brilliant minds who are shaping the future of AI in healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="relative backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
                
                <div className="relative p-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {speaker.name}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-1">{speaker.title}</p>
                    <p className="text-gray-400 text-sm">{speaker.company}</p>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30">
                      {speaker.expertise}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {speaker.description}
                  </p>

                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3 rounded-xl border border-blue-500/20 mb-4">
                    <p className="text-blue-300 text-xs font-medium">
                      🏆 {speaker.achievement}
                    </p>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <button className="p-2 bg-blue-600/20 hover:bg-blue-600/40 rounded-full transition-colors duration-300 group-hover:scale-110">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                    </button>
                    <button className="p-2 bg-sky-600/20 hover:bg-sky-600/40 rounded-full transition-colors duration-300 group-hover:scale-110">
                      <Twitter className="w-4 h-4 text-sky-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Plus 6 More Industry Leaders</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join an exclusive gathering of the world's top AI healthcare experts, researchers, and innovators. 
              Network with the people who are literally writing the future of medicine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;