'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MainMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MainMenu = ({ isOpen, onClose }: MainMenuProps) => {
  const menuItems = [
    {
      title: 'Services',
      description: 'Web Development Services That Drive Growth',
      path: '/services',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Process',
      description: 'How We Transform Ideas Into Reality',
      path: '/process',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Portfolio',
      description: 'See Our Success Stories',
      path: '/portfolio',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'About',
      description: 'Meet The Team Behind The Magic',
      path: '/about',
      gradient: 'from-cyan-500 to-green-500'
    },
    {
      title: 'Contact',
      description: 'Let\'s Start Your Project',
      path: '/contact',
      gradient: 'from-green-500 to-yellow-500'
    }
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Menu Panel */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[600px] bg-black border-l border-white/10 z-50 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Menu Content */}
            <div className="p-12 pt-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
              >
                Navigation
              </motion.h2>

              <nav className="space-y-6">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    className="group"
                  >
                    <Link 
                      href={item.path}
                      onClick={onClose}
                      className="block p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
                    >
                      <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
                <p className="text-gray-400 mb-4">Get in touch for a free consultation</p>
                <button className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  Schedule a Call
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 