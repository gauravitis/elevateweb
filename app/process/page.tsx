'use client';

import { motion } from 'framer-motion';
import { Menu, ArrowRight, FileDown, MessageSquare, GitBranch, Rocket, Paintbrush, Search, Wrench } from 'lucide-react';
import { MainMenu } from '../components/MainMenu';
import { useState } from 'react';
import Link from 'next/link';

const processSteps = [
  {
    phase: 'Discovery',
    icon: Search,
    duration: '1-2 weeks',
    description: 'Deep dive into your business goals and technical requirements',
    activities: [
      'Stakeholder interviews',
      'Technical requirements gathering',
      'Market & competitor analysis',
      'Project scope definition'
    ],
    deliverables: [
      'Project roadmap',
      'Technical specifications',
      'Timeline & milestones'
    ],
    tools: ['Miro', 'Notion', 'Google Meet']
  },
  {
    phase: 'Design',
    icon: Paintbrush,
    duration: '2-3 weeks',
    description: 'Transform requirements into intuitive user experiences',
    activities: [
      'UX research & wireframing',
      'UI design & prototyping',
      'Design system creation',
      'Client feedback iterations'
    ],
    deliverables: [
      'Wireframes',
      'UI design mockups',
      'Interactive prototype',
      'Design system'
    ],
    tools: ['Figma', 'Framer', 'Adobe Creative Suite']
  },
  {
    phase: 'Development',
    icon: GitBranch,
    duration: '4-8 weeks',
    description: 'Build your solution with cutting-edge technology',
    activities: [
      'Frontend development',
      'Backend implementation',
      'API integration',
      'Regular testing & QA'
    ],
    deliverables: [
      'Production-ready code',
      'Documentation',
      'Testing reports'
    ],
    tools: ['Next.js', 'React', 'Node.js', 'GitHub']
  },
  {
    phase: 'Launch',
    icon: Rocket,
    duration: '1 week',
    description: 'Deploy your project with confidence',
    activities: [
      'Final testing & QA',
      'Performance optimization',
      'SEO implementation',
      'Analytics setup'
    ],
    deliverables: [
      'Deployed application',
      'Performance report',
      'SEO audit',
      'Analytics dashboard'
    ],
    tools: ['Vercel', 'Google Analytics', 'Lighthouse']
  },
  {
    phase: 'Support',
    icon: Wrench,
    duration: 'Ongoing',
    description: 'Ensure continuous improvement and optimal performance',
    activities: [
      '24/7 monitoring',
      'Regular updates',
      'Performance optimization',
      'Feature enhancements'
    ],
    deliverables: [
      'Monthly reports',
      'Update schedule',
      'Performance metrics'
    ],
    tools: ['Datadog', 'Sentry', 'GitHub']
  }
];

const collaborationTools = [
  {
    name: 'Real-time Dashboard',
    description: 'Track project progress, milestones, and deliverables in real-time',
    features: ['Live updates', 'Task tracking', 'Resource allocation', 'Timeline view']
  },
  {
    name: 'Weekly Updates',
    description: 'Stay informed with detailed progress reports and next steps',
    features: ['Progress summary', 'Upcoming tasks', 'Risk assessment', 'Resource updates']
  },
  {
    name: 'Design Access',
    description: 'Direct access to design files and prototypes in Figma',
    features: ['Live design files', 'Comment & feedback', 'Version history', 'Asset library']
  }
];

export default function ProcessPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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
            Our Proven Process
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A transparent, collaborative approach to bringing your vision to life.
            Every step is designed to reduce uncertainty and deliver exceptional results.
          </motion.p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="px-6 py-24 relative">
        <div className="max-w-7xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-pink-500/50 hidden md:block" />

          {/* Process Steps */}
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-24 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-[50%] text-right' : 'md:pl-[50%] md:text-left'
                }`}
              >
                {/* Timeline Node */}
                <div 
                  className={`absolute top-0 ${
                    index % 2 === 0 ? 'md:right-[-25px]' : 'md:left-[-25px]'
                  } hidden md:block`}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-500">
                  <div className="md:hidden mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                    {step.phase}
                  </h3>
                  <p className="text-purple-300 mb-2">{step.duration}</p>
                  <p className="text-gray-400 mb-6">{step.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-purple-400">Activities</h4>
                      <ul className="space-y-2">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="text-gray-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-pink-400">Deliverables</h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i} className="text-gray-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold mb-2 text-gray-400">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Collaboration Tools Section */}
      <div className="px-6 py-24 bg-gradient-to-b from-black via-purple-500/10 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Collaboration Tools
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborationTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-500"
              >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                  {tool.name}
                </h3>
                <p className="text-gray-400 mb-6">{tool.description}</p>
                <ul className="space-y-3">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Download our detailed process guide or schedule a free consultation to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <FileDown className="w-5 h-5" />
                Download Process Guide
              </button>
              <button className="px-8 py-3 rounded-full border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 