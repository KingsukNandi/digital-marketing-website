import React from 'react';
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Rocket, 
  BarChart3, 
  RefreshCw 
} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: <Search className="h-8 w-8" />,
      title: 'Discovery & Research',
      description: 'We dive deep into your business, analyzing your market, competitors, and target audience to create a solid foundation.',
      duration: '1-2 weeks'
    },
    {
      id: 2,
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Strategy Development',
      description: 'Based on our research, we develop a comprehensive digital marketing strategy tailored to your specific goals.',
      duration: '1 week'
    },
    {
      id: 3,
      icon: <Palette className="h-8 w-8" />,
      title: 'Creative Design',
      description: 'Our creative team brings your brand to life with stunning visuals and compelling content that resonates with your audience.',
      duration: '2-3 weeks'
    },
    {
      id: 4,
      icon: <Rocket className="h-8 w-8" />,
      title: 'Implementation',
      description: 'We execute the strategy across all chosen channels, ensuring everything is perfectly aligned and optimized for success.',
      duration: '2-4 weeks'
    },
    {
      id: 5,
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Monitor & Analyze',
      description: 'We continuously track performance metrics and analyze data to ensure your campaigns are delivering optimal results.',
      duration: 'Ongoing'
    },
    {
      id: 6,
      icon: <RefreshCw className="h-8 w-8" />,
      title: 'Optimize & Scale',
      description: 'Using insights from our analysis, we refine and scale successful strategies to maximize your return on investment.',
      duration: 'Ongoing'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We follow a proven methodology that ensures consistent results and exceptional outcomes for every project.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 group">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-200">
                        {step.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        <span className="text-sm text-cyan-400">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative flex items-center justify-center w-full lg:w-2/12 my-8 lg:my-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold text-xl shadow-lg shadow-cyan-500/25 relative z-10">
                    {step.id}
                  </div>
                  {/* Mobile connector line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-16 left-1/2 transform -translate-x-px w-0.5 h-12 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
                  )}
                </div>

                {/* Spacer for desktop */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-8">
            Ready to start your digital transformation journey?
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;