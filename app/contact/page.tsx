'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Phone, Mail, Calendar, Clock, MapPin, ArrowRight, Check } from 'lucide-react';
import { MainMenu } from '../components/MainMenu';
import Link from 'next/link';

// Client logos for trust signals
const clientLogos = [
  { name: 'Client 1', logo: '/clients/client1.png' },
  { name: 'Client 2', logo: '/clients/client2.png' },
  { name: 'Client 3', logo: '/clients/client3.png' },
  { name: 'Client 4', logo: '/clients/client4.png' },
];

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDecisionMaker, setIsDecisionMaker] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
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
      <div className="pt-24 px-6 py-24 bg-gradient-to-b from-purple-500/20 via-black to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Let's Build Something Amazing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Ready to transform your digital presence? We're here to help turn your vision into reality.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="gradient-border p-[1px] rounded-2xl">
              <form onSubmit={handleSubmit} className="bg-black rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                    <textarea
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="decisionMaker"
                      checked={isDecisionMaker}
                      onChange={(e) => setIsDecisionMaker(e.target.checked)}
                      className="w-4 h-4 rounded border-white/10 bg-white/5"
                    />
                    <label htmlFor="decisionMaker" className="text-sm text-gray-400">
                      I am the decision-maker for this project
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Direct Contact & Trust Signals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Response Time */}
            <div className="flex items-center gap-4 p-6 rounded-xl bg-white/5">
              <Clock className="w-8 h-8 text-purple-400" />
              <div>
                <h3 className="font-medium">Quick Response Time</h3>
                <p className="text-gray-400">We typically respond in less than 4 hours</p>
              </div>
            </div>

            {/* Direct Contact Options */}
            <div className="gradient-border p-[1px] rounded-2xl">
              <div className="bg-black rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold mb-6">Direct Contact</h2>
                
                <div className="space-y-4">
                  <a href="tel:+1234567890" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Phone className="w-6 h-6 text-purple-400" />
                    <span>+1 (234) 567-890</span>
                  </a>
                  
                  <a href="mailto:hello@elevateweb.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <span>hello@elevateweb.com</span>
                  </a>
                  
                  <a href="https://calendly.com/elevateweb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Calendar className="w-6 h-6 text-purple-400" />
                    <span>Schedule a Meeting</span>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <span>123 Tech Street, Digital City, 12345</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Logos */}
            <div className="p-8 rounded-2xl bg-white/5">
              <h3 className="text-lg font-medium mb-6">Trusted By Industry Leaders</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {clientLogos.map((client) => (
                  <div key={client.name} className="aspect-square rounded-lg bg-white/10 p-4 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-24 bg-gradient-to-b from-black via-purple-500/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-6">Prefer a Call?</h2>
            <a
              href="https://calendly.com/elevateweb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Schedule Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 