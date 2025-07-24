import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check, Star, Gift, Calendar, MapPin, Mail, User, Building } from 'lucide-react';

const Registration: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'student',
      name: 'Student Pass',
      price: '₹4,999',
      originalPrice: '₹7,999',
      badge: 'Early Bird',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Access to all sessions',
        'Digital materials',
        'Networking events',
        'Student certification',
        'Career mentoring session'
      ]
    },
    {
      id: 'professional',
      name: 'Professional Pass',
      price: '₹9,999',
      originalPrice: '₹14,999',
      badge: 'Most Popular',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Everything in Student Pass',
        'Workshop materials',
        'Premium networking events',
        'Professional certification',
        'One-on-one speaker meetings',
        'AI toolkit access (6 months)'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Pass',
      price: '₹14,999',
      originalPrice: '₹19,999',
      badge: 'Best Value',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Everything in Professional Pass',
        'Priority seating',
        'Exclusive enterprise sessions',
        'Custom workshop for your team',
        'Direct access to all speakers',
        'AI implementation consultation',
        'Lifetime AI toolkit access'
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM12%2086c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm28-65c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm23-11c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-6%2060c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm29%2022c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zM32%2063c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm57-13c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-9-21c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM60%2091c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM35%2041c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2060c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22/%3E%3C/svg%3E')] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Secure Your Spot
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Join the most influential AI healthcare event of 2025. Limited seats available.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center text-green-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span>March 15-16, 2025</span>
            </div>
            <div className="flex items-center text-blue-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center text-purple-400">
              <Gift className="w-4 h-4 mr-2" />
              <span>Early Bird Pricing</span>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative group transform transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } ${selectedPlan === plan.id ? 'scale-105' : 'hover:scale-105'}`}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${plan.color} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
              
              <div className={`relative backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 ${
                selectedPlan === plan.id ? 'bg-white/10 border-white/20' : ''
              }`}>
                {plan.badge && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r ${plan.color} text-white text-xs font-bold rounded-full`}>
                    {plan.badge}
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-lg text-gray-400 line-through ml-2">{plan.originalPrice}</span>
                  </div>
                  <p className="text-green-400 font-semibold">Save ₹{parseInt(plan.originalPrice.slice(1).replace(/,/g, '')) - parseInt(plan.price.slice(1).replace(/,/g, ''))}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? `bg-gradient-to-r ${plan.color} text-white shadow-2xl`
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Registration Form */}
        <div className={`max-w-2xl mx-auto transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Complete Your Registration</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your hospital, company, or institution"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Professional Role
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300">
                    <option value="">Select your role</option>
                    <option value="physician">Physician</option>
                    <option value="researcher">Researcher</option>
                    <option value="nurse">Nurse</option>
                    <option value="administrator">Healthcare Administrator</option>
                    <option value="data-scientist">Data Scientist</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-semibold">Selected Plan:</span>
                    <span className="text-purple-400 font-bold">
                      {plans.find(p => p.id === selectedPlan)?.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Total:</span>
                    <span className="text-2xl font-bold text-white">
                      {plans.find(p => p.id === selectedPlan)?.price}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  Complete Registration
                </button>

                <p className="text-sm text-gray-400 text-center">
                  Secure payment powered by Stripe. 30-day money-back guarantee.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span>4.9/5 Rating from 2024 attendees</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center">
              <Gift className="w-5 h-5 text-purple-400 mr-2" />
              <span>30-Day Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;