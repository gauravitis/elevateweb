"use client";

import { Button } from "@/components/ui/button";
import { Rocket, Lightbulb, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import { BeforeAfterSlider } from './components/BeforeAfterSlider';

export default function Home() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationType = entry.target.getAttribute('data-animate');
          if (animationType === 'slide-left') {
            entry.target.classList.add('animate-slide-left');
          } else if (animationType === 'slide-right') {
            entry.target.classList.add('animate-slide-right');
          } else if (animationType === 'slide-bottom') {
            entry.target.classList.add('animate-slide-bottom');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2,
      rootMargin: '-50px'
    });

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((element) => {
      // Reset any existing animations
      element.classList.remove('animate-slide-left', 'animate-slide-right', 'animate-slide-bottom');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Hand emojis in corners */}
      <div className="absolute top-4 left-4 text-4xl animate-pulse">👌</div>
      <div className="absolute bottom-4 right-4 text-4xl animate-pulse">🤘</div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">ElevateWeb</div>
          <button className="text-sm uppercase tracking-wider">Menu</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="hero-heading">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <div className="hero-gradient-pink">
                From Idea to Impact:
              </div>
              <div className="hero-gradient-blue mt-4">
                Skyrocket Your Growth with
                <br />
                Web Solutions That
              </div>
              <div className="hero-gradient-purple mt-4">
                Deliver
              </div>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed mt-8">
              We partner with ambitious brands to design, develop, and scale 
              <span className="text-white font-semibold"> award-winning web experiences </span> 
              that drive 
              <span className="hero-gradient-pink font-bold"> 3x more leads</span>,
              <span className="hero-gradient-blue font-bold"> 40% faster load times</span>, and
              <span className="hero-gradient-purple font-bold"> 95% client satisfaction</span>.
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-10 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white transition-all duration-500 hover:scale-105 bg-300% animate-gradient overflow-hidden shine-effect glow-animation">
              <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
                Let's Build Your Vision
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-300% animate-gradient"></div>
            </button>
            
            <button className="group relative px-10 py-4 text-lg font-medium rounded-full text-white transition-all duration-500 hover:scale-105 overflow-hidden shine-effect">
              <span className="relative z-10 group-hover:text-white transition-colors">Get Your Free Strategy Session</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-300% animate-gradient opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[2px] bg-black rounded-full transition-all duration-500 group-hover:bg-black/50"></div>
              <div className="absolute inset-0 glow-animation opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Value Propositions Section */}
      <div className="relative py-24 px-6 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          {/* Grid for value props */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Launch Faster */}
            <div 
              data-animate="slide-left"
              className="opacity-0 group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 pulse-animation">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                  Launch 2x Faster
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Accelerate your development with our agile methodology and expert team.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Tailored Solutions */}
            <div 
              data-animate="slide-bottom"
              className="opacity-0 group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: '200ms' }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 pulse-animation">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Tailored Solutions
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Custom-built solutions that perfectly fit your business needs and scale.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Track Record */}
            <div 
              data-animate="slide-right"
              className="opacity-0 group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: '400ms' }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 pulse-animation">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
                  95% Client Satisfaction
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Proven track record of delivering exceptional results that exceed expectations.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Pain Points Section */}
      <div className="relative py-24 px-6 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div data-animate="slide-left" className="opacity-0 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                Transform Your Challenges Into Opportunities
              </h2>
              <div className="space-y-6">
                {[
                  {
                    problem: "Struggling with slow, outdated tech?",
                    solution: "40% faster load times with modern stack",
                    icon: "📉",
                    successIcon: "📈"
                  },
                  {
                    problem: "Low conversion rates hurting growth?",
                    solution: "2-3x conversion boost with optimized UX",
                    icon: "💔",
                    successIcon: "💎"
                  },
                  {
                    problem: "Limited in-house tech expertise?",
                    solution: "Full-stack team at your fingertips",
                    icon: "🔧",
                    successIcon: "🚀"
                  },
                  {
                    problem: "Complex user experience causing friction?",
                    solution: "Intuitive designs users love",
                    icon: "😕",
                    successIcon: "😍"
                  }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group hover-expand gradient-border cursor-pointer"
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    <div className="p-6 space-y-3">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl group-hover:hidden">{item.icon}</div>
                        <div className="text-2xl hidden group-hover:block">{item.successIcon}</div>
                        <div className="space-y-2 flex-1">
                          <p className="text-xl text-gray-300 group-hover:text-white transition-colors">
                            {item.problem}
                          </p>
                          <div className="h-0.5 w-full bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {item.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div data-animate="slide-right" className="opacity-0">
              <div className="p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm hover-expand">
                <p className="text-2xl font-medium text-gray-300 leading-relaxed mb-6">
                  "We've transformed 250+ struggling websites into high-performing digital assets. Yours could be next."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Sarah Chen</p>
                    <p className="text-sm text-gray-400">Head of Digital Transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Overview Section */}
      <div className="relative py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 data-animate="slide-bottom" className="opacity-0 text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Our Proven Process
          </h2>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2" />
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  icon: "🔍",
                  title: "Discovery",
                  description: "Deep dive into your goals",
                  duration: "1-2 weeks",
                  deliverables: ["Project Blueprint", "Tech Stack Proposal", "Timeline & Milestones"],
                  tools: ["Miro", "Notion", "Figma"]
                },
                {
                  icon: "🎨",
                  title: "Design",
                  description: "Craft the perfect experience",
                  duration: "2-3 weeks",
                  deliverables: ["Wireframes", "UI Design", "Interactive Prototype"],
                  tools: ["Figma", "Framer", "Adobe Creative Suite"]
                },
                {
                  icon: "⚡",
                  title: "Development",
                  description: "Build with precision",
                  duration: "4-6 weeks",
                  deliverables: ["Clean Code", "Regular Deploys", "Testing Reports"],
                  tools: ["Next.js", "React", "TailwindCSS"]
                },
                {
                  icon: "🚀",
                  title: "Launch",
                  description: "Deploy with confidence",
                  duration: "1 week",
                  deliverables: ["Final Testing", "Performance Audit", "Analytics Setup"],
                  tools: ["Vercel", "Google Analytics", "Hotjar"]
                }
              ].map((step, i) => (
                <div
                  key={i}
                  data-animate="slide-bottom"
                  style={{ animationDelay: `${i * 200}ms` }}
                  className="opacity-0 group relative"
                >
                  <div className="gradient-border hover-expand">
                    <div className="p-8 space-y-4">
                      <div className="relative z-10">
                        <div className="text-4xl mb-4 float-up">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {step.description}
                        </p>
                        <div className="mt-4 text-sm text-purple-400">
                          {step.duration}
                        </div>
                        
                        {/* Hover Content */}
                        <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center rounded-2xl">
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-purple-400">Deliverables</h4>
                                <ul className="mt-2 space-y-1">
                                  {step.deliverables.map((item, j) => (
                                    <li key={j} className="text-gray-300 flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-purple-400">Tools</h4>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {step.tools.map((tool, j) => (
                                  <span key={j} className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Line */}
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 -translate-y-1/2 z-0">
                      <div className="progress-bar group-hover:active" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Download Process PDF Button */}
          <div className="mt-16 text-center">
            <button className="group relative px-8 py-3 text-lg font-medium rounded-full text-white transition-all duration-500 hover:scale-105 overflow-hidden shine-effect">
              <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
                Download Our Process Guide
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-300% animate-gradient opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[2px] bg-black rounded-full transition-all duration-500 group-hover:bg-black/50"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="relative py-24 px-6 bg-gradient-to-b from-black/95 via-black to-black/95">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 data-animate="slide-bottom" className="opacity-0 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Transforming Visions into Reality
            </h2>
            <p data-animate="slide-bottom" className="opacity-0 text-xl text-gray-400">
              Our work speaks for itself - explore our success stories
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: "🏆", label: "Top Rated Agency", metric: "2023" },
              { icon: "⭐", label: "Client Satisfaction", metric: "98%" },
              { icon: "🚀", label: "Projects Delivered", metric: "250+" },
              { icon: "💎", label: "Revenue Generated", metric: "$50M+" }
            ].map((badge, i) => (
              <div
                key={i}
                data-animate="slide-bottom"
                style={{ animationDelay: `${i * 100}ms` }}
                className="opacity-0 trust-badge rounded-xl p-4 text-center"
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="text-sm text-gray-400">{badge.label}</div>
                <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                  {badge.metric}
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {[
              {
                client: "TechCorp Solutions",
                industry: "SaaS Platform",
                before: "/images/before-1.jpg",
                after: "/images/after-1.jpg",
                metrics: {
                  loadTime: "2.1s → 0.8s",
                  conversion: "+127%",
                  engagement: "+85%"
                },
                testimonial: {
                  text: "The new platform exceeded our expectations",
                  author: "Alex Chen, CTO"
                }
              },
              {
                client: "Fashion Forward",
                industry: "E-commerce",
                before: "/images/before-2.jpg",
                after: "/images/after-2.jpg",
                metrics: {
                  revenue: "+143%",
                  mobileConv: "+95%",
                  retention: "+64%"
                },
                testimonial: {
                  text: "Our sales doubled within 3 months",
                  author: "Sarah Kim, CEO"
                }
              }
            ].map((project, i) => (
              <div
                key={i}
                data-animate={i === 0 ? "slide-left" : "slide-right"}
                className="opacity-0 group"
              >
                <div className="gradient-border p-[1px] rounded-2xl">
                  <div className="bg-black rounded-2xl p-8 space-y-6">
                    {/* Project Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                          {project.client}
                        </h3>
                        <p className="text-gray-400">{project.industry}</p>
                      </div>
                      <div className="px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                        Case Study
                      </div>
                    </div>

                    {/* Before/After Slider */}
                    <BeforeAfterSlider
                      beforeImage={project.before}
                      afterImage={project.after}
                      className="w-full h-[300px] rounded-xl overflow-hidden"
                    />

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value], j) => (
                        <div key={j} className="metric-card p-3 rounded-lg bg-white/5">
                          <div className="text-sm text-gray-400 capitalize">{key}</div>
                          <div className="text-lg font-bold text-white count-up">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="border-t border-white/10 pt-4 mt-4">
                      <p className="text-gray-300 italic text-sm">"{project.testimonial.text}"</p>
                      <p className="text-sm text-gray-400 mt-2">- {project.testimonial.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <button className="group relative px-8 py-3 text-lg font-medium rounded-full text-white transition-all duration-500 hover:scale-105 overflow-hidden shine-effect">
              <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
                View All Case Studies
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-300% animate-gradient opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[2px] bg-black rounded-full transition-all duration-500 group-hover:bg-black/50"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 data-animate="slide-bottom" className="opacity-0 text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "They turned our vague concept into a user-friendly app that doubled our revenue.",
                author: "Sarah Johnson",
                role: "CEO",
                company: "TechStart Inc."
              },
              {
                quote: "The team's technical expertise and attention to detail transformed our online presence completely.",
                author: "Michael Chen",
                role: "Founder",
                company: "InnovateLab"
              }
            ].map((testimonial, i) => (
              <div
                key={i}
                data-animate={i === 0 ? "slide-left" : "slide-right"}
                className="opacity-0 group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="text-4xl mb-6 text-purple-500">❝</div>
                  <p className="text-xl text-gray-300 mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                    <div>
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-32 px-6 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            data-animate="slide-bottom"
            className="opacity-0 text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text"
          >
            Ready to Build Something Extraordinary?
          </h2>
          
          <p 
            data-animate="slide-bottom"
            style={{ animationDelay: '200ms' }}
            className="opacity-0 text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Transform your digital presence with cutting-edge technology and expert guidance.
          </p>

          <div 
            data-animate="slide-bottom"
            style={{ animationDelay: '400ms' }}
            className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="group relative px-10 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white transition-all duration-500 hover:scale-105 bg-300% animate-gradient overflow-hidden shine-effect glow-animation">
              <span className="relative z-10 group-hover:text-white transition-colors">Schedule a Free Strategy Session</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-300% animate-gradient"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Language selector */}
      <div className="fixed bottom-6 right-6 flex items-center gap-2 text-sm opacity-50">
        <span>EN</span>
        <span>TW</span>
        <span>LB</span>
        <span>IN</span>
      </div>
    </main>
  );
}