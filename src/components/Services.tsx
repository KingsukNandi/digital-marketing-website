import React from 'react';
import { 
  Search, 
  Megaphone, 
  Palette, 
  BarChart3, 
  MessageSquare, 
  Globe,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and drive organic traffic with our proven SEO strategies.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO']
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted pay-per-click campaigns across all major platforms.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'Conversion Tracking']
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience through strategic social media campaigns.',
      features: ['Content Creation', 'Community Management', 'Influencer Marketing', 'Analytics']
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Brand Design',
      description: 'Create a memorable brand identity that resonates with your target audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Materials']
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Build fast, responsive websites that convert visitors into customers.',
      features: ['Custom Development', 'E-commerce', 'Mobile Optimization', 'CMS Integration']
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics and detailed reporting.',
      features: ['Performance Tracking', 'ROI Analysis', 'Custom Dashboards', 'Monthly Reports']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="group/btn flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;