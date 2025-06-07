import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: <Award className="h-8 w-8" />, title: 'Award Winning', value: '25+', description: 'Industry Awards' },
    { icon: <Users className="h-8 w-8" />, title: 'Expert Team', value: '50+', description: 'Digital Specialists' },
    { icon: <Target className="h-8 w-8" />, title: 'Success Rate', value: '99%', description: 'Client Satisfaction' },
    { icon: <Zap className="h-8 w-8" />, title: 'Growth Rate', value: '300%', description: 'Average ROI Increase' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">DigitalFlow</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                We're not just another digital marketing agency. We're your strategic partners in growth, 
                combining creativity with data-driven insights to deliver exceptional results.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-cyan-500/20 rounded-lg mt-1">
                  <Target className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Strategic Approach</h3>
                  <p className="text-gray-400">Every campaign is tailored to your unique business goals and target audience.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-cyan-500/20 rounded-lg mt-1">
                  <Zap className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cutting-Edge Technology</h3>
                  <p className="text-gray-400">We leverage the latest tools and technologies to stay ahead of the curve.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-cyan-500/20 rounded-lg mt-1">
                  <Users className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Dedicated Team</h3>
                  <p className="text-gray-400">Our experienced professionals are committed to your success.</p>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-200">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{achievement.value}</div>
                <div className="text-white font-semibold mb-1">{achievement.title}</div>
                <div className="text-sm text-gray-400">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;