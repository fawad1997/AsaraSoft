import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const teamMembers = [
  {
    name: 'Asad Choudhry',
    role: 'CEO & Founder',
    image: '/pics/asad.png',
    bio: 'Visionary leader with expertise in AI and software architecture.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'asad@asarasoft.com'
    }
  },
  {
    name: 'Fawad Bin Tariq',
    role: 'CTO',
    image: '/pics/fawad.jpg',
    bio: 'Tech innovator specializing in scalable solutions and cloud architecture.',
    social: {
      linkedin: 'https://www.linkedin.com/in/fawadbintariq/',
      twitter: '#',
      email: 'fawad@asarasoft.com'
    }
  },
  {
    name: 'Ziad',
    role: 'Lead Developer',
    image: '/pics/ziad.jpg',
    bio: 'Full-stack expert with a passion for creating elegant solutions.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'ziad@asarasoft.com'
    }
  }
];

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const socialVariants = {
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              We're a group of passionate individuals dedicated to delivering innovative solutions
              that drive business success.
            </p>
          </div>
        </ScrollAnimation>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member, index) => (
            <ScrollAnimation 
              key={member.name}
              delay={index * 0.2}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="relative aspect-[4/5] overflow-hidden"
                  variants={imageVariants}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="flex items-center space-x-4">
                    <motion.a
                      href={member.social.linkedin}
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                      variants={socialVariants}
                      whileHover="hover"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                      variants={socialVariants}
                      whileHover="hover"
                    >
                      <Twitter className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                      variants={socialVariants}
                      whileHover="hover"
                    >
                      <Mail className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </motion.div>

        <ScrollAnimation delay={0.6}>
          <div className="mt-16 text-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Team
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}