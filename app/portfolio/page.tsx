'use client';

import { motion } from 'framer-motion';
import { Menu, ArrowRight, Play, Pause, ExternalLink, Star, Clock, Target, Award } from 'lucide-react';
import { MainMenu } from '../components/MainMenu';
import { useState } from 'react';
import Link from 'next/link';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

// Define project categories and tags
const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'saas', label: 'SaaS' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'ecommerce', label: 'E-Commerce' }
];

const services = [
  { id: 'redesign', label: 'Redesign' },
  { id: 'development', label: 'App Development' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'mobile', label: 'Mobile Apps' }
];

// Case studies data
const caseStudies = [
  {
    id: 1,
    title: 'TechFlow SaaS Platform',
    category: 'saas',
    service: 'redesign',
    client: 'TechFlow Solutions',
    goal: 'Increase mobile conversions by 40% in 3 months',
    challenge: 'Outdated site with 5-second load times',
    solution: 'Next.js rebuild + mobile-first UX',
    result: {
      metrics: [
        { label: 'Conversion Rate', value: '+127%' },
        { label: 'Load Time', value: '0.8s' },
        { label: 'User Engagement', value: '+85%' }
      ],
      rating: 4.9
    },
    videoUrl: '/videos/case-study-1.mp4',
    beforeImage: '/images/before-1.jpg',
    afterImage: '/images/after-1.jpg',
    testimonial: {
      text: "The new platform exceeded our expectations. Load times dropped dramatically and user engagement skyrocketed.",
      author: "Alex Chen",
      role: "CTO, TechFlow"
    }
  },
  {
    id: 2,
    title: 'MediCare Patient Portal',
    category: 'healthcare',
    service: 'development',
    client: 'MediCare Health',
    goal: 'Create a seamless patient scheduling system',
    challenge: 'Complex legacy system with poor user experience',
    solution: 'Modern React app with intuitive UI/UX',
    result: {
      metrics: [
        { label: 'Patient Satisfaction', value: '+92%' },
        { label: 'Booking Time', value: '-75%' },
        { label: 'User Retention', value: '+64%' }
      ],
      rating: 4.8
    },
    videoUrl: '/videos/case-study-2.mp4',
    beforeImage: '/images/before-2.jpg',
    afterImage: '/images/after-2.jpg',
    testimonial: {
      text: "Patient satisfaction scores have never been higher. The new portal is a game-changer.",
      author: "Dr. Sarah Kim",
      role: "Director of Digital Health"
    }
  },
  {
    id: 3,
    title: 'FashionForward E-Commerce',
    category: 'ecommerce',
    service: 'ecommerce',
    client: 'FashionForward',
    goal: 'Double mobile sales within 6 months',
    challenge: 'High cart abandonment on mobile devices',
    solution: 'Headless commerce with Next.js and Shopify',
    result: {
      metrics: [
        { label: 'Mobile Sales', value: '+143%' },
        { label: 'Cart Completion', value: '+87%' },
        { label: 'Page Speed', value: '95/100' }
      ],
      rating: 5.0
    },
    videoUrl: '/videos/case-study-3.mp4',
    beforeImage: '/images/before-3.jpg',
    afterImage: '/images/after-3.jpg',
    testimonial: {
      text: "Our mobile sales doubled within 4 months. The new site is lightning fast and customers love it.",
      author: "Emily Wang",
      role: "E-Commerce Director"
    }
  }
];

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeService, setActiveService] = useState('all');
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});

  // Filter projects based on selected category and service
  const filteredProjects = caseStudies.filter(project => {
    const categoryMatch = activeCategory === 'all' || project.category === activeCategory;
    const serviceMatch = activeService === 'all' || project.service === activeService;
    return categoryMatch && serviceMatch;
  });

  const toggleVideo = (id: number) => {
    setActiveVideo(activeVideo === id ? null : id);
    setIsPlaying(prev => ({ ...prev, [id]: !prev[id] }));
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
            Our Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Explore our portfolio of transformative digital solutions that have helped businesses achieve exceptional results.
          </motion.p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
            {/* Industry Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Service Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {service.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="gradient-border p-[1px] rounded-2xl">
                  <div className="bg-black rounded-2xl p-8 space-y-6">
                    {/* Project Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                          {project.title}
                        </h3>
                        <p className="text-gray-400">{project.client}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(project.result.rating)
                                  ? 'text-yellow-400'
                                  : 'text-gray-600'
                              }`}
                              fill={i < Math.floor(project.result.rating) ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                        <span className="text-yellow-400 font-medium">{project.result.rating}</span>
                      </div>
                    </div>

                    {/* Video Preview */}
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5">
                      {activeVideo === project.id ? (
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src={project.videoUrl} type="video/mp4" />
                        </video>
                      ) : (
                        <BeforeAfterSlider
                          beforeImage={project.beforeImage}
                          afterImage={project.afterImage}
                          className="w-full h-full"
                        />
                      )}
                      <button
                        onClick={() => toggleVideo(project.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        {isPlaying[project.id] ? (
                          <Pause className="w-12 h-12 text-white" />
                        ) : (
                          <Play className="w-12 h-12 text-white" />
                        )}
                      </button>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-purple-400 flex items-center gap-2">
                          <Target className="w-5 h-5" />
                          Goal
                        </h4>
                        <p className="text-gray-300">{project.goal}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-pink-400 flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          Challenge
                        </h4>
                        <p className="text-gray-300">{project.challenge}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-purple-400 flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Solution & Results
                      </h4>
                      <p className="text-gray-300 mb-4">{project.solution}</p>
                      
                      {/* Metrics Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {project.result.metrics.map((metric, i) => (
                          <div key={i} className="p-3 rounded-lg bg-white/5">
                            <div className="text-sm text-gray-400">{metric.label}</div>
                            <div className="text-lg font-bold text-white">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-gray-300 italic text-sm">"{project.testimonial.text}"</p>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <span className="text-xl">
                            {project.testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-white">{project.testimonial.author}</p>
                          <p className="text-sm text-gray-400">{project.testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
            <h2 className="text-3xl font-bold mb-6">Ready for Similar Results?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve exceptional results for your business.
            </p>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 