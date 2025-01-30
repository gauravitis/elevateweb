'use client';

import { motion } from 'framer-motion';
import { Menu, ArrowRight, Coffee, Code, Lightbulb, Target, Users, Rocket, Heart, Zap, Mail } from 'lucide-react';
import { MainMenu } from '../components/MainMenu';
import { useState } from 'react';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    image: '/team/alex.jpg',
    bio: 'Passionate about turning innovative ideas into successful digital products.',
    funFact: 'Can\'t start coding without his lucky mechanical keyboard',
    expertise: ['Product Strategy', 'Tech Architecture', 'Team Leadership'],
    social: {
      twitter: 'alexchen',
      linkedin: 'alexchen',
      github: 'alexchen'
    }
  },
  {
    name: 'Sarah Kim',
    role: 'Lead Designer',
    image: '/team/sarah.jpg',
    bio: 'Believes in the perfect balance of aesthetics and functionality.',
    funFact: 'Creates UI components in her dreams',
    expertise: ['UI/UX Design', 'Brand Strategy', 'User Research'],
    social: {
      twitter: 'sarahkim',
      linkedin: 'sarahkim',
      dribbble: 'sarahkim'
    }
  },
  {
    name: 'Mike Johnson',
    role: 'Tech Lead',
    image: '/team/mike.jpg',
    bio: 'Loves optimizing sites for speed—ask him about lazy loading!',
    funFact: 'Has a collection of 42 coffee mugs',
    expertise: ['Performance Optimization', 'Architecture', 'Next.js'],
    social: {
      github: 'mikej',
      linkedin: 'mikejohnson',
      twitter: 'mikej'
    }
  },
  {
    name: 'Emily Wang',
    role: 'Project Manager',
    image: '/team/emily.jpg',
    bio: 'Ensures projects run smoothly while exceeding client expectations.',
    funFact: 'Plans her vacations using Gantt charts',
    expertise: ['Agile Management', 'Client Relations', 'Strategy'],
    social: {
      linkedin: 'emilywang',
      twitter: 'emilyw'
    }
  }
];

const companyValues = [
  {
    title: 'Transparency',
    description: 'Open communication and clear expectations in everything we do.',
    icon: Users
  },
  {
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge solutions.',
    icon: Lightbulb
  },
  {
    title: 'Client Success',
    description: 'Your growth is our primary measure of success.',
    icon: Target
  }
];

const milestones = [
  {
    year: 2020,
    title: 'Company Founded',
    description: 'Started with a vision to transform digital experiences'
  },
  {
    year: 2021,
    title: 'First Major Client',
    description: 'Successfully launched enterprise SaaS platform'
  },
  {
    year: 2022,
    title: '50 Clients Milestone',
    description: 'Expanded team and opened new office'
  },
  {
    year: 2023,
    title: 'Industry Recognition',
    description: 'Awarded "Top Web Development Agency"'
  }
];

const differentiators = [
  {
    title: 'Business-First Approach',
    description: 'We align technology decisions with your business goals and KPIs.',
    icon: Target
  },
  {
    title: 'Full-Stack Excellence',
    description: 'From design to deployment, we handle every aspect of your digital presence.',
    icon: Code
  },
  {
    title: 'Rapid Innovation',
    description: 'Stay ahead with cutting-edge tech and agile development.',
    icon: Rocket
  },
  {
    title: 'Client Partnership',
    description: 'We\'re not just vendors—we\'re your long-term growth partners.',
    icon: Heart
  }
];

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">ElevateWeb</Link>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-purple-400 transition-colors"
          >
            <span>Menu</span>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <MainMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Hero Section */}
      <div className="pt-24 px-6 py-24 bg-gradient-to-b from-purple-500/20 via-black to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            More Than Coders—
            <br />
            We're Your Growth Partners
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Founded in 2020, we've helped 100+ brands turn innovative ideas into industry leaders.
            Our passion for technology is matched only by our commitment to your success.
          </motion.p>
        </div>
      </div>

      {/* Values Section */}
      <div className="px-6 py-24 bg-gradient-to-b from-black via-purple-500/10 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
                onMouseEnter={() => setActiveTeamMember(index)}
                onMouseLeave={() => setActiveTeamMember(null)}
              >
                <div className="gradient-border p-[1px] rounded-2xl">
                  <div className="bg-black rounded-2xl p-6 space-y-4">
                    {/* Profile Image */}
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                        {member.name}
                      </h3>
                      <p className="text-gray-400">{member.role}</p>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-300 text-sm">{member.bio}</p>

                    {/* Fun Fact */}
                    <div className="flex items-center gap-2 text-sm text-purple-400">
                      <Coffee className="w-4 h-4" />
                      <span>{member.funFact}</span>
                    </div>

                    {/* Expertise */}
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="px-6 py-24 bg-gradient-to-b from-black via-purple-500/10 to-black relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Our Journey
          </motion.h2>

          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-pink-500/50 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'
                }`}
              >
                <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-500">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Differentiators Section */}
      <div className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={diff.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                        {diff.title}
                      </h3>
                      <p className="text-gray-400">{diff.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our newsletter for the latest tech insights and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 focus:border-purple-500 outline-none text-white"
              />
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 