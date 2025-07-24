import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Clock, MapPin, Users, Play } from 'lucide-react';

const Schedule: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const schedule = [
    {
      day: "Day 1",
      date: "March 15, 2025",
      events: [
        {
          time: "9:00 AM",
          title: "Opening Keynote: The AI Revolution in Healthcare",
          speaker: "Dr. Sarah Chen",
          type: "Keynote",
          duration: "60 min",
          description: "Setting the stage for AI's transformative impact on patient care"
        },
        {
          time: "10:30 AM",
          title: "AI in Medical Imaging: From Scans to Insights",
          speaker: "Prof. Michael Rodriguez",
          type: "Workshop",
          duration: "90 min",
          description: "Hands-on workshop with real diagnostic imaging AI tools"
        },
        {
          time: "12:30 PM",
          title: "Networking Lunch & AI Showcase",
          speaker: "All Attendees",
          type: "Networking",
          duration: "90 min",
          description: "Connect with peers while exploring cutting-edge AI demos"
        },
        {
          time: "2:00 PM",
          title: "Drug Discovery Revolution: AI in Pharmaceuticals",
          speaker: "Dr. Aisha Patel",
          type: "Panel",
          duration: "75 min",
          description: "Panel discussion with industry leaders on AI-driven drug development"
        },
        {
          time: "4:00 PM",
          title: "Ethics & Bias in Healthcare AI",
          speaker: "Dr. James Thompson",
          type: "Discussion",
          duration: "60 min",
          description: "Critical discussion on responsible AI implementation"
        }
      ]
    },
    {
      day: "Day 2",
      date: "March 16, 2025",
      events: [
        {
          time: "9:00 AM",
          title: "AI-Powered Predictive Medicine",
          speaker: "Dr. Lisa Wang",
          type: "Keynote",
          duration: "60 min",
          description: "Using AI to predict and prevent health issues before they occur"
        },
        {
          time: "10:30 AM",
          title: "Natural Language Processing in Clinical Settings",
          speaker: "Prof. David Kim",
          type: "Workshop",
          duration: "90 min",
          description: "Transform medical documentation with AI-powered NLP"
        },
        {
          time: "12:30 PM",
          title: "Innovation Lunch: Startup Showcase",
          speaker: "Healthcare Startups",
          type: "Showcase",
          duration: "90 min",
          description: "Discover the latest AI healthcare startups and innovations"
        },
        {
          time: "2:00 PM",
          title: "Surgical AI & Robotics: The Operating Room of Tomorrow",
          speaker: "Dr. Sarah Chen & Team",
          type: "Demo",
          duration: "75 min",
          description: "Live demonstrations of AI-assisted surgical procedures"
        },
        {
          time: "4:00 PM",
          title: "Future Roadmap: What's Next for AI in Healthcare",
          speaker: "All Speakers",
          type: "Panel",
          duration: "90 min",
          description: "Closing panel with all speakers discussing the future landscape"
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Keynote': return 'from-purple-500 to-pink-500';
      case 'Workshop': return 'from-blue-500 to-cyan-500';
      case 'Panel': return 'from-green-500 to-teal-500';
      case 'Discussion': return 'from-orange-500 to-red-500';
      case 'Networking': return 'from-yellow-500 to-orange-500';
      case 'Showcase': return 'from-indigo-500 to-purple-500';
      case 'Demo': return 'from-pink-500 to-rose-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%20120%20120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M9%200h2v20H9V0zm25.134.84l1.732%201-10%2017.32-1.732-1%2010-17.32zm-2.097%2018.92l1.732-1%2010%2017.32-1.732%201-10-17.32zM21%2040h-2V20h2v20zm25.134%2039.16l1.732%201-10%2017.32-1.732-1%2010-17.32zm-2.097-18.92l1.732%201-10%2017.32-1.732-1%2010-17.32zM41%2060h-2V40h2v20zm25.134%2039.16l1.732%201-10%2017.32-1.732-1%2010-17.32zm-2.097-18.92l1.732%201-10%2017.32-1.732-1%2010-17.32zM61%2080h-2V60h2v20zm25.134%2039.16l1.732%201-10%2017.32-1.732-1%2010-17.32zm-2.097-18.92l1.732%201-10%2017.32-1.732-1%2010-17.32zM81%20100h-2V80h2v20z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22/%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Workshop Schedule
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Two intensive days packed with insights, hands-on workshops, and networking opportunities.
          </p>
        </div>

        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`transform transition-all duration-1000 delay-${dayIndex * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">{day.day}</h3>
                <p className="text-lg text-purple-400 font-semibold">{day.date}</p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500"></div>

                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={`relative group transform transition-all duration-500 delay-${eventIndex * 100} hover:scale-105`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>

                      <div className="ml-20 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 group-hover:bg-white/10 transition-all duration-300">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>
                        
                        <div className="relative">
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <div className="flex items-center text-cyan-400">
                              <Clock className="w-4 h-4 mr-2" />
                              <span className="font-semibold">{event.time}</span>
                            </div>
                            <span className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(event.type)} text-white text-xs font-semibold rounded-full`}>
                              {event.type}
                            </span>
                            <div className="flex items-center text-gray-400">
                              <Play className="w-3 h-3 mr-1" />
                              <span className="text-sm">{event.duration}</span>
                            </div>
                          </div>

                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                            {event.title}
                          </h4>

                          <div className="flex items-center text-purple-400 mb-3">
                            <Users className="w-4 h-4 mr-2" />
                            <span className="font-medium">{event.speaker}</span>
                          </div>

                          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="backdrop-blur-sm bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-8 rounded-3xl border border-white/10">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-cyan-400 mr-2" />
              <span className="text-lg font-semibold text-white">San Francisco Convention Center</span>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              All sessions include interactive Q&A, networking breaks, and access to our AI Healthcare Innovation Showcase.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              Download Full Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;