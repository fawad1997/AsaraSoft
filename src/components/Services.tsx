import React from 'react';
import { Brain, Globe, Shield, Check } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Advanced AI models and machine learning solutions to optimize your business processes.',
    features: ['Predictive Analytics', 'Machine Learning', 'Natural Language Processing']
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive and scalable web solutions tailored to your business needs.',
    features: ['Custom Web Apps', 'E-commerce Solutions', 'Progressive Web Apps']
  },
  {
    icon: Shield,
    title: 'IT Solutions',
    description: 'Comprehensive IT services to keep your business running smoothly.',
    features: ['Cloud Computing', 'Network Security', 'IT Infrastructure']
  }
];

export default function Services() {
  return (
    <div id="services" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-indigo-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}