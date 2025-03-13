import React from 'react';
import { Target, Heart, Zap } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2020, AsaraSoft emerged from a vision to bridge the gap between cutting-edge technology and practical business solutions. What started as a small team of passionate technologists has grown into a dynamic force in the tech industry, serving clients across the globe.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">To empower businesses with innovative technology solutions that drive growth and success in the digital age.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Heart className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-600">Innovation, integrity, and client success are at the heart of everything we do.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">To be the leading force in technological innovation, setting new standards in AI, web development, and IT solutions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">5+ Years</p>
              <p className="text-sm">of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}