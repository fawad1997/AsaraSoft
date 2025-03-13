import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Build the Future Together</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Contact us to discuss how we can help you innovate and excel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                <p className="text-gray-600">Texas, United States</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <a href="mailto:contact@asarasoft.com" className="text-gray-600 hover:text-indigo-600">
                  contact@asarasoft.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-indigo-600">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}