'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, X, Menu } from 'lucide-react';
import { MainMenu } from '../components/MainMenu';
import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Custom Web Development',
    description: 'Tailored solutions for startups, enterprises, and SaaS platforms',
    features: [
      'Modern tech stack (Next.js, React, Node.js)',
      'Scalable architecture design',
      'API development and integration',
      'Cloud deployment and optimization'
    ],
    benefits: [
      'Faster time-to-market',
      'Improved performance',
      'Better user experience',
      'Future-proof technology'
    ]
  },
  {
    title: 'E-Commerce Development',
    description: 'Build Scalable Stores with Shopify/Headless Commerce',
    features: [
      'Custom Shopify development',
      'Headless commerce solutions',
      'Payment gateway integration',
      'Inventory management systems'
    ],
    benefits: [
      'Higher conversion rates',
      'Seamless shopping experience',
      'Mobile-first design',
      'Secure transactions'
    ]
  },
  {
    title: 'UX/UI Design',
    description: 'User-Centered Designs That Convert',
    features: [
      'User research and testing',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Interactive animations'
    ],
    benefits: [
      'Increased engagement',
      'Lower bounce rates',
      'Brand consistency',
      'Higher satisfaction'
    ]
  },
  {
    title: 'Website Maintenance',
    description: 'Keep Your Site Secure, Fast, and Updated',
    features: [
      'Regular security updates',
      'Performance optimization',
      'Content management',
      '24/7 monitoring'
    ],
    benefits: [
      'Peace of mind',
      'Consistent performance',
      'Regular backups',
      'Quick support'
    ]
  }
];

const comparisonPoints = [
  {
    us: 'Agile development with weekly updates',
    them: 'Rigid timelines with limited flexibility'
  },
  {
    us: 'Dedicated project manager and direct communication',
    them: 'Multiple layers of communication'
  },
  {
    us: 'Custom solutions tailored to your needs',
    them: 'One-size-fits-all approach'
  },
  {
    us: 'Transparent pricing and no hidden fees',
    them: 'Unclear pricing structure'
  }
];

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

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
      <div className="px-6 py-24 bg-gradient-to-b from-purple-500/20 via-black to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Web Development Services That Drive Growth
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Transform your digital presence with cutting-edge technology and expert guidance.
            We build solutions that scale with your business.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-500"
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-purple-400">Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-purple-500 mt-1" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-pink-400">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-pink-500 mt-1" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="px-6 py-24 bg-gradient-to-b from-black via-purple-500/10 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Why Choose Us?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {comparisonPoints.map((point, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="grid md:grid-cols-2 gap-4"
              >
                <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300">{point.us}</p>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-gray-500">{point.them}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-12 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with our expert web development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Get a Custom Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 rounded-full border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                See How We Work
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 