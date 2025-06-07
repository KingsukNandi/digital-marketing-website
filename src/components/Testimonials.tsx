import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'DigitalFlow transformed our online presence completely. Our conversion rates increased by 250% within just 3 months. Their team is incredibly professional and results-driven.',
      rating: 5,
      results: '+250% Conversion Rate'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'EcoMart Solutions',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Working with DigitalFlow has been a game-changer for our e-commerce business. Their strategic approach and attention to detail helped us achieve unprecedented growth.',
      rating: 5,
      results: '+180% Revenue Growth'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'HealthPlus Clinic',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The team at DigitalFlow understood our healthcare business perfectly. They created campaigns that not only increased our leads but also improved our brand reputation significantly.',
      rating: 5,
      results: '+400% Lead Generation'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'CMO',
      company: 'FinanceFlow Corp',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'DigitalFlow\'s data-driven approach and creative solutions helped us reach new markets and exceed our growth targets. Highly recommend their services.',
      rating: 5,
      results: '+300% Market Reach'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the businesses we've helped transform their digital presence.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="h-24 w-24 text-cyan-400" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentSlide].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500/50"
                  />
                  <div className="ml-4">
                    <div className="text-lg font-bold text-white">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-cyan-400 font-medium">
                      {testimonials[currentSlide].role}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonials[currentSlide].company}
                    </div>
                  </div>
                </div>

                {/* Results Badge */}
                <div className="hidden md:block bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full px-4 py-2">
                  <span className="text-cyan-400 font-semibold text-sm">
                    {testimonials[currentSlide].results}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 group"
              >
                <ChevronLeft className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 group"
              >
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-cyan-400'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;