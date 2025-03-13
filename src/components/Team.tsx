import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'With over 15 years of experience in AI and machine learning, Sarah leads our technical innovation and strategic development.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    funFact: 'Competitive chess player',
    social: {
      linkedin: '#',
      github: '#',
      email: 'sarah@asarasoft.com'
    }
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Web Developer',
    bio: 'Marcus brings creativity and technical expertise to every project, specializing in scalable web applications.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400&h=400',
    funFact: 'Amateur astronomer',
    social: {
      linkedin: '#',
      github: '#',
      email: 'marcus@asarasoft.com'
    }
  },
  {
    name: 'Aisha Patel',
    role: 'AI Research Director',
    bio: 'Dr. Patel leads our AI research initiatives, focusing on developing innovative solutions for complex business challenges.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400',
    funFact: 'Published author',
    social: {
      linkedin: '#',
      github: '#',
      email: 'aisha@asarasoft.com'
    }
  }
];

export default function Team() {
  return (
    <div id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team of experts brings together years of experience and passion for innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Fun fact:</span> {member.funFact}
                  </p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-indigo-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-indigo-600">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-indigo-600">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}