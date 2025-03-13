import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Retail Analytics',
    category: 'Artificial Intelligence',
    description: 'Predictive analytics system for retail inventory management and sales forecasting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Feature-rich online store with advanced analytics and inventory management.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    title: 'Enterprise Cloud Migration',
    category: 'IT Solutions',
    description: 'Successful transition of enterprise infrastructure to cloud platforms.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=500'
  }
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                <span className="text-indigo-400 text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <button className="mt-4 inline-flex items-center text-white hover:text-indigo-400 transition-colors">
                  View Details <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}