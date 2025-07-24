import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Target, Network, Lightbulb, Trophy, Rocket, Globe } from 'lucide-react';

const WhyAttend: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: Target,
      title: "Future-Proof Your Career",
      description: "Stay ahead of the curve with AI skills that are reshaping healthcare jobs",
      color: "text-red-400"
    },
    {
      icon: Network,
      title: "Expand Your Network",
      description: "Connect with innovators, researchers, and decision-makers in healthcare AI",
      color: "text-blue-400"
    },
    {
      icon: Lightbulb,
      title: "Gain Practical Insights",
      description: "Learn real-world applications you can implement immediately",
      color: "text-yellow-400"
    },
    {
      icon: Trophy,
      title: "Industry Recognition",
      description: "Receive certificates and recognition from leading healthcare institutions",
      color: "text-purple-400"
    },
    {
      icon: Rocket,
      title: "Launch Innovation",
      description: "Get inspired to start your own AI healthcare projects and solutions",
      color: "text-orange-400"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Understand AI healthcare trends and regulations worldwide",
      color: "text-green-400"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM12%2086c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm28-65c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm23-11c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-6%2060c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm29%2022c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zM32%2063c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm57-13c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-9-21c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM60%2091c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM35%2041c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2060c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22/%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Why Attend?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            This isn't just another conference—it's your gateway to the future of healthcare innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group transform transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                <div className="relative backdrop-blur-sm bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative backdrop-blur-sm bg-gradient-to-r from-purple-900/80 to-pink-900/80 p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Shape the Future?</h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Join healthcare leaders, researchers, and innovators who are already transforming medicine with AI.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                Secure Your Spot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;