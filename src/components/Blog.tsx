import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of AI in Business Operations',
    excerpt: 'Explore how artificial intelligence is revolutionizing business processes and decision-making.',
    author: 'Dr. Aisha Patel',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=500',
    category: 'Artificial Intelligence'
  },
  {
    title: 'Web Development Trends for 2024',
    excerpt: 'Stay ahead of the curve with these emerging web development technologies and practices.',
    author: 'Marcus Rodriguez',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500',
    category: 'Web Development'
  },
  {
    title: 'Cybersecurity Best Practices',
    excerpt: 'Essential security measures every business should implement to protect their digital assets.',
    author: 'Sarah Chen',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500',
    category: 'IT Security'
  }
];

export default function Blog() {
  return (
    <div id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and expert opinions in technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}