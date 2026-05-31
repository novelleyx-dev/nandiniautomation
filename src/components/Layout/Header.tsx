'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    { name: "Industrial Automation", href: "/services/industrial-automation" },
    { name: "Electrical Solutions", href: "/services/electrical-solutions" },
    { name: "SCADA Systems", href: "/services/scada-systems" },
    { name: "PLC Programming", href: "/services/plc-programming" },
    { name: "Robotics", href: "/services/robotics" },
    { name: "Instrumentation", href: "/services/instrumentation" },
    { name: "VFD Solutions", href: "/services/vfd-solutions" },
    { name: "AMC Services", href: "/services/amc-services" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_15px_rgba(0,0,0,0.05)] py-3' 
        : 'bg-white/60 backdrop-blur-sm border-b border-slate-100 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col group">
              <span className="text-xl sm:text-2xl font-bold tracking-wider text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                NANDINI ENTERPRISES
              </span>
              <span className="text-[10px] uppercase tracking-widest text-blue-700 font-semibold font-mono">
                Industrial Automation Ecosystem
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            <Link href="/" className="text-slate-650 hover:text-blue-700 text-sm font-semibold transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-slate-650 hover:text-blue-700 text-sm font-semibold transition-colors duration-300">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center text-slate-650 hover:text-blue-700 text-sm font-semibold transition-colors duration-300 focus:outline-none py-2">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-md shadow-xl py-2 mt-0 z-50">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent pointer-events-none rounded-md" />
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-all duration-200 border-l-2 border-transparent hover:border-blue-700 font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/products" className="text-slate-650 hover:text-blue-700 text-sm font-semibold transition-colors duration-300">
              Products
            </Link>
            <Link href="/projects" className="text-slate-650 hover:text-blue-700 text-sm font-semibold transition-colors duration-300">
              Projects
            </Link>
            <Link href="/industries" className="text-slate-650 hover:text-blue-700 text-sm font-semibold transition-colors duration-300">
              Industries
            </Link>
            <Link href="/gallery" className="text-slate-650 hover:text-blue-700 text-sm font-semibold transition-colors duration-300">
              Gallery
            </Link>
            <Link href="/knowledge-center" className="text-slate-650 hover:text-blue-700 text-sm font-semibold transition-colors duration-300">
              Resources
            </Link>
            <Link href="/contact" className="text-slate-650 hover:text-blue-700 text-sm font-semibold transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* CTA & Trust Badges */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex flex-col text-right font-mono text-[10px] text-slate-500 border-r border-slate-200 pr-4">
              <span className="text-blue-700 font-bold">ISO 9001:2015</span>
              <span className="font-semibold">CPRI CERTIFIED</span>
            </div>
            <Link 
              href="/contact?type=quote" 
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white rounded bg-[#0f4c81] hover:bg-blue-700 shadow-sm transition-colors duration-350"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none"
            >
              <svg className="h-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            {/* Services for Mobile */}
            <div className="px-3 py-2 text-base font-bold text-slate-400">
              Services
            </div>
            <div className="pl-6 space-y-1">
              {servicesList.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block px-3 py-1.5 rounded-md text-sm font-semibold text-slate-600 hover:text-blue-700 hover:bg-slate-50"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link 
              href="/products" 
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/projects" 
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/industries" 
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </Link>
            <Link 
              href="/gallery" 
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/knowledge-center" 
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 pb-2 border-t border-slate-100">
              <Link
                href="/contact?type=quote"
                className="w-full flex items-center justify-center px-4 py-2.5 bg-[#0f4c81] rounded text-sm font-bold text-white hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
