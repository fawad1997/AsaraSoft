import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, and technology. Our solutions are customized to meet the specific needs of each sector.'
  },
  {
    question: 'How do you ensure data security?',
    answer: 'We implement industry-leading security measures including encryption, secure cloud storage, regular security audits, and compliance with international data protection standards.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. Typically, small projects take 4-8 weeks, while larger enterprise solutions may take 3-6 months. We provide detailed timelines during initial consultations.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer comprehensive support and maintenance packages. Our team is available 24/7 for critical issues, and we provide regular updates and improvements to ensure optimal performance.'
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We maintain transparent communication through regular progress meetings, detailed documentation, and dedicated project managers. Clients have access to our project management tools for real-time updates.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="faq" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-white rounded-lg shadow-sm px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-white px-6 py-4 rounded-b-lg shadow-sm border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}