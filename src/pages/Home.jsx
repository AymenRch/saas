import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import Features from '../components/Features'
import Reviews from '../components/Reviews'
import CallToActionSection from '../components/pub'
import { FaBars, FaTimes } from "react-icons/fa";
import { ArrowRight, Star, Users, Zap, Shield, Palette, Code, Globe } from "lucide-react";
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navigate = useNavigate()

  return (
    <>
      <div style={{
        margin: "0", padding: "0", boxSizing: "border-box", background: "linear-gradient(to bottom right, #0f172a, #6b21a8, #0f172a)"
      }}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Navigation */}
          <nav className="header fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                {/* Logo - Left */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">PortfolioForge</span>
                </div>

                {/* Navigation Menu - Middle */}
                <div className="hidden md:flex md:space-x-8">
                  <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
                  <a href="#templates" className="text-white/80 hover:text-white transition-colors">Templates</a>
                  <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
                </div>

                {/* Buttons - Right */}
                <div className="hidden md:flex space-x-4">
                  <button className="butn text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors" onClick={()=>{
                    navigate('/login')
                  }}>
                    Sign In
                  </button>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 px-4 py-2 rounded-lg transition-colors">
                    Get Started
                  </button>
                </div>

                {/* Hamburger Icon */}
                <div className="hamburger md:hidden" onClick={handleClick}>
                  {click ? (
                    <FaTimes size={20} style={{ color: "white" }} />
                  ) : (
                    <FaBars size={20} style={{ color: "white" }} />
                  )}
                </div>
              </div>

              {/* Mobile Menu */}
              <div
                className={
                  click
                    ? "md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-white/20 transition-all duration-300 ease-in-out"
                    : "md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-white/20 opacity-0 pointer-events-none transition-all duration-300 ease-in-out"
                }
              >
                <div className="px-4 py-6 space-y-4">
                  <a href="#features" className="block text-white/80 hover:text-white transition-colors py-2">Features</a>
                  <a href="#templates" className="block text-white/80 hover:text-white transition-colors py-2">Templates</a>
                  <a href="#pricing" className="block text-white/80 hover:text-white transition-colors py-2">Pricing</a>
                  <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
                    <button className="butn text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors text-left">
                      Sign In
                    </button>
                    <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 px-4 py-2 rounded-lg transition-colors text-left">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Build Your
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {" "}Dream Portfolio
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Create stunning, professional portfolios in minutes. No coding required.
                  Stand out from the crowd with beautiful designs that showcase your work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    size="lg"
                    className="flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 px-8 py-6 text-lg font-semibold group"
                  >
                    Start Building Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    size="lg"
                    variant="outline"
                    className="butn bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm"
                  >
                    View Templates
                  </button>
                </div>
                <div className="mt-12 flex items-center justify-center space-x-8 text-white/60">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>50K+ Users</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Lightning Fast</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Everything You Need to
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {" "}Shine Online
                  </span>
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Powerful features designed to help you create, customize, and share your portfolio with the world.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Palette className="w-8 h-8" />,
                    title: "Beautiful Templates",
                    description: "Choose from dozens of professionally designed templates that make you stand out."
                  },
                  {
                    icon: <Code className="w-8 h-8" />,
                    title: "No Code Required",
                    description: "Build stunning portfolios without writing a single line of code. Drag, drop, and publish."
                  },
                  {
                    icon: <Globe className="w-8 h-8" />,
                    title: "Custom Domains",
                    description: "Connect your own domain or use our free subdomain to share your portfolio professionally."
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Lightning Fast",
                    description: "Optimized for speed and performance. Your portfolio loads instantly on any device."
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Secure & Reliable",
                    description: "Your data is safe with enterprise-grade security and 99.9% uptime guarantee."
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Analytics & Insights",
                    description: "Track visitors, understand your audience, and optimize your portfolio's performance."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                    <div className="p-8">
                      <div className="text-purple-400 mb-4 group-hover:text-blue-400 transition-colors">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-white/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Trusted by
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {" "}Thousands
                  </span>
                </h2>
                <p className="text-xl text-white/70">Join the community of creators who chose PortfolioForge</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Chen",
                    role: "UX Designer",
                    content: "PortfolioForge helped me land my dream job at Google. The templates are absolutely stunning and so easy to customize.",
                    avatar: "SC"
                  },
                  {
                    name: "Marcus Rodriguez",
                    role: "Full Stack Developer",
                    content: "I've tried many portfolio builders, but none come close to this. The performance and customization options are incredible.",
                    avatar: "MR"
                  },
                  {
                    name: "Emily Thompson",
                    role: "Graphic Designer",
                    content: "My clients are always impressed by my portfolio. PortfolioForge makes it so easy to showcase my work professionally.",
                    avatar: "ET"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="text-white font-semibold">{testimonial.name}</div>
                          <div className="text-white/60">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border-white/20">
                <div className="p-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Build Your
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {" "}Portfolio?
                    </span>
                  </h2>
                  <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                    Join thousands of creators who have already built amazing portfolios.
                    Start for free, no credit card required.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      size="lg"
                      className="flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 px-8 py-6 text-lg font-semibold group"
                    >
                      Start Building Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      size="lg"
                      variant="outline"
                      className="butn bg-white/10 border-white/20 text-white hover:bg-white/20 px-12 py-6 text-lg backdrop-blur-sm"
                    >
                      View Live Examples
                    </button>
                  </div>
                  <p className="text-white/60 text-sm mt-6">Free forever plan available • No credit card required</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">PortfolioForge</span>
                </div>
                <div className="flex space-x-8 text-white/60">
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
                  <a href="#" className="hover:text-white transition-colors">Support</a>
                  <a href="#" className="hover:text-white transition-colors">Blog</a>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
                <p>&copy; 2024 PortfolioForge. All rights reserved. Built with ❤️ for creators.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style>{`
        .butn {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(108px);
        }
        
        .hamburger {
          cursor: pointer;
          z-index: 10;
        }
        
        /* Mobile menu transitions */
        .header {
          position: relative;
        }
      `}</style>

    </>
  )
}

export default Home