'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    { name: 'Industrial Automation', href: '/services/industrial-automation' },
    { name: 'Electrical Solutions', href: '/services/electrical-solutions' },
    { name: 'SCADA Systems', href: '/services/scada-systems' },
    { name: 'PLC Programming', href: '/services/plc-programming' },
    { name: 'Robotics', href: '/services/robotics' },
    { name: 'Instrumentation', href: '/services/instrumentation' },
    { name: 'VFD Solutions', href: '/services/vfd-solutions' },
    { name: 'AMC Services', href: '/services/amc-services' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm py-1.5' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/20 shadow-sm py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <Link href="/" className="flex flex-col group relative z-50">
              <span className="text-xl sm:text-2xl font-bold tracking-wider text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                NANDINI ENTERPRISES
              </span>
              <span className="text-[10px] uppercase tracking-widest text-blue-700 font-semibold font-mono">
                Industrial Automation Ecosystem
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            <Link href="/" className="text-slate-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Services Dropdown (Framer Motion) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-slate-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-300 py-2 group focus:outline-none">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-white border border-slate-200/50 rounded-2xl shadow-xl overflow-hidden mt-2 p-2 z-50 grid grid-cols-2 gap-1"
                  >
                    {servicesList.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex flex-col px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors duration-200 group/item"
                      >
                        <span className="text-sm font-semibold text-slate-700 group-hover/item:text-blue-700">{service.name}</span>
                        <span className="text-xs text-slate-400 mt-0.5">Explore solutions</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/products" className="text-slate-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-300 relative group">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/projects" className="text-slate-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-300 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/industries" className="text-slate-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-300 relative group">
              Industries
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right CTA */}
          <div className="hidden xl:flex items-center gap-6">
            <Link href="/knowledge-center" className="text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors">
              Resources
            </Link>
            <Link 
              href="/contact?type=quote" 
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Request Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="xl:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 pb-6 px-6 xl:hidden overflow-y-auto h-screen"
          >
            <div className="flex flex-col gap-6">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Projects', href: '/projects' },
                { name: 'Industries', href: '/industries' },
                { name: 'Gallery', href: '/gallery' },
              ].map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  key={item.name}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-semibold text-slate-800 tracking-tight hover:text-blue-700 transition-colors block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 pt-6 border-t border-slate-200"
              >
                <div className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Services</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-slate-600 hover:text-blue-700 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col gap-4"
              >
                <Link 
                  href="/contact?type=quote" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-semibold text-lg text-center flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-slate-100 text-slate-900 rounded-xl font-semibold text-lg text-center hover:bg-slate-200 transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
