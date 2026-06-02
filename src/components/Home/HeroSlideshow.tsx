'use client';

import { useState, useEffect } from 'react';

const slides = [
  '/images/slide1.png',
  '/images/slide2.png',
  '/images/slide3.png',
  '/images/slide4.png',
  '/images/slide5.png',
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden border-b border-slate-200/60 bg-[#E8F0FA]">
      {/* Slideshow Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide})` }}
          />
          {/* Light Blue Gray Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-slate-500/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/30 to-[#0A3D91]/70" />
        </div>
      ))}

      {/* Subtle engineering blueprint matrix grid over the images */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />

      {/* Right Aligned Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-right flex flex-col items-end justify-center h-full">
        
        <div className="inline-flex items-center justify-end space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-mono font-bold text-white shadow-lg mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
          <span className="tracking-widest">ISO 9001:2015 CERTIFIED ASSEMBLY PLANT</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white font-outfit leading-[1.15] mb-6 drop-shadow-lg">
          Engineering Intelligent <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 drop-shadow-none">
            Industrial Automation
          </span>
        </h1>
        
        <p className="text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed mb-10 drop-shadow-md">
          Trusted Industrial Automation, Electrical & Instrumentation Partner for Large-Scale Industries Across India. Authorised system integrations with 25+ years of operational excellence.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-wrap justify-end gap-4 w-full">
          <a href="#products" className="px-8 py-4 bg-[var(--color-ne-blue-corp)] hover:bg-[var(--color-ne-blue-steel)] text-white font-bold rounded shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-widest border border-blue-400/30">
            Explore Solutions
          </a>
          <a href="#rfq-section" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded border border-white/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-widest">
            Request Consultation
          </a>
        </div>
        </div>

      </div>
    </section>
  );
}
