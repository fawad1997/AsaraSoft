import React from 'react';
import { ArrowRight, Brain, Globe, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovating Tomorrow with <span className="text-indigo-400">AsaraSoft</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We transform businesses through cutting-edge AI, Web Development, and IT solutions. 
              Based in Texas, serving clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-white/10">
                View Portfolio
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Brain className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
              <p className="text-gray-300">Advanced AI models and machine learning solutions</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Globe className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
              <p className="text-gray-300">Scalable and responsive web applications</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm col-span-2">
              <Shield className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">IT Solutions</h3>
              <p className="text-gray-300">End-to-end IT services and security solutions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </div>
  );
}