'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  INDUSTRIES, 
  PRODUCTS, 
  PROJECTS, 
  CERTIFICATIONS, 
  WORKFLOW, 
  Industry, 
  Product, 
  Project, 
  Certification 
} from '@/lib/data';

// Helper component for rendering SVGs to avoid duplicate definitions
function FileIcon() {
  return (
    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

export default function Home() {
  // Navigation & UI States
  const [activeProductTab, setActiveProductTab] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  
  // Interactive Counters
  const [stats, setStats] = useState({ years: 0, projects: 0, industries: 0, licenses: 0 });
  useEffect(() => {
    const duration = 1500;
    const steps = 50;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setStats({
        years: Math.min(Math.round((25 / steps) * currentStep), 25),
        projects: Math.min(Math.round((500 / steps) * currentStep), 500),
        industries: Math.min(Math.round((14 / steps) * currentStep), 14),
        licenses: Math.min(Math.round((8 / steps) * currentStep), 8)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Form submission state
  const [inquiryType, setInquiryType] = useState('quote');
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '', email: '', phone: '', company: '', requirement: ''
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqSubmitted(true);
    setTimeout(() => {
      setRfqSubmitted(false);
      setContactForm({ name: '', email: '', phone: '', company: '', requirement: '' });
    }, 5000);
  };

  // Industry-specific curated high-res Unsplash links for B2B trust
  const getIndustryImage = (slug: string) => {
    const images: Record<string, string> = {
      'steel': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      'railways': 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80',
      'cement': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
      'power': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
      'oil-gas': 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=600&q=80',
      'water-treatment': 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80',
      'pharma': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
      'food-processing': 'https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?auto=format&fit=crop&w=600&q=80',
      'default': 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=600&q=80'
    };
    return images[slug] || images['default'];
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-[#f7f9fc] to-white">
        {/* Subtle engineering blueprint matrix grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded text-xs font-mono font-bold text-[var(--color-ne-blue-corp)] shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span>ISO 9001:2015 CERTIFIED ASSEMBLY PLANT</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-outfit leading-[1.15]">
                Engineering Intelligent <br />
                <span className="bg-gradient-to-r from-[var(--color-ne-blue-corp)] via-[var(--color-ne-blue-steel)] to-blue-400 bg-clip-text text-transparent">
                  Industrial Automation
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Trusted Industrial Automation, Electrical & Instrumentation Partner for Large-Scale Industries Across India. Authorised system integrations with 25+ years of operational excellence.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#products" className="px-6 py-3 bg-[var(--color-ne-blue-corp)] hover:bg-[var(--color-ne-blue-steel)] text-white font-bold rounded shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm uppercase tracking-wider">
                  Explore Solutions
                </a>
                <a href="#rfq-section" className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-sm uppercase tracking-wider">
                  Request Consultation
                </a>
              </div>
              
              {/* Floating industrial badging indicators */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div className="group">
                  <span className="block text-[var(--color-ne-blue-corp)] font-bold group-hover:text-[var(--color-ne-blue-steel)] transition-colors">CPRI TESTED</span>
                  <span className="text-slate-500 text-[10px]">Busbars certified</span>
                </div>
                <div className="group">
                  <span className="block text-[var(--color-ne-blue-corp)] font-bold group-hover:text-[var(--color-ne-blue-steel)] transition-colors">33KV ELECTRICAL LICENSE</span>
                  <span className="text-slate-500 text-[10px]">Government approved</span>
                </div>
                <div className="group">
                  <span className="block text-[var(--color-ne-blue-corp)] font-bold group-hover:text-[var(--color-ne-blue-steel)] transition-colors">YASKAWA Authorized</span>
                  <span className="text-slate-500 text-[10px]">Warranty center</span>
                </div>
                <div className="group">
                  <span className="block text-[var(--color-ne-blue-corp)] font-bold group-hover:text-[var(--color-ne-blue-steel)] transition-colors">ABB CHANNEL PARTNER</span>
                  <span className="text-slate-500 text-[10px]">Authorized integration</span>
                </div>
              </div>
            </div>

            {/* Right Side Visual (Real engineering visual replacement instead of dark dashboard dominance) */}
            <div className="lg:col-span-5 relative group">
              <div className="relative mx-auto w-full max-w-[420px] aspect-[4/5] bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/10 group-hover:shadow-blue-900/20 group-hover:-translate-y-2 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="Industrial Automation Engineer at Control Center"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Micro tech card overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur border border-slate-200/80 rounded p-4 shadow-lg font-mono text-[10px] space-y-1">
                  <div className="flex justify-between items-center text-[var(--color-ne-blue-corp)] font-bold">
                    <span>IDA CHERLAPALLY FACILITY</span>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <p className="text-slate-500 leading-normal text-[9px] font-sans">
                    Electrical switchyard panels, PLC setups, and Yaskawa load checks active.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & SCALE SECTION */}
      <section className="bg-white py-16 relative border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit mb-2 tracking-tight">
                {stats.years}+
              </p>
              <p className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-bold font-mono">
                Years of Excellence
              </p>
              <p className="text-xs text-slate-500 mt-2 font-sans">Operational stability since inception</p>
            </div>
            
            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit mb-2 tracking-tight">
                {stats.projects}+
              </p>
              <p className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-bold font-mono">
                B2B Projects Executed
              </p>
              <p className="text-xs text-slate-500 mt-2 font-sans">Across steel, cement, power, and pumping</p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit mb-2 tracking-tight">
                {stats.industries}+
              </p>
              <p className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-bold font-mono">
                Sectors Serviced
              </p>
              <p className="text-xs text-slate-500 mt-2 font-sans">From defense rigs to municipal networks</p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit mb-2 tracking-tight">
                {stats.licenses}+
              </p>
              <p className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-bold font-mono">
                Govt Registrations
              </p>
              <p className="text-xs text-slate-500 mt-2 font-sans">Including A-Grade electrical license</p>
            </div>
          </div>

          {/* Credentials Info Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-100 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-ne-blue-corp)] to-[var(--color-ne-blue-steel)] transform scale-x-100 transition-transform origin-left" />
              <h3 className="text-[var(--color-ne-text-dark)] font-bold text-lg mb-4 font-outfit mt-2 group-hover:text-[var(--color-ne-blue-corp)] transition-colors">ISO 9001:2015 Registered</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our design processes, panel integration, wiring methodologies, and quality audits fully conform to global Quality Management System (QMS) norms, ensuring high reliability in field service deployment.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-ne-blue-corp)] to-[var(--color-ne-blue-steel)] transform scale-x-100 transition-transform origin-left" />
              <h3 className="text-[var(--color-ne-text-dark)] font-bold text-lg mb-4 font-outfit mt-2 group-hover:text-[var(--color-ne-blue-corp)] transition-colors">CPRI Busbar Certification</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Central Power Research Institute (CPRI) certified configuration audits verify that our panel structures withstand heavy power loads up to 65kA short circuit bursts under emergency trips.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-ne-blue-corp)] to-[var(--color-ne-blue-steel)] transform scale-x-100 transition-transform origin-left" />
              <h3 className="text-[var(--color-ne-text-dark)] font-bold text-lg mb-4 font-outfit mt-2 group-hover:text-[var(--color-ne-blue-corp)] transition-colors">A-Grade 33KV Gov Electrical License</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Authorized to execute, test, and commission HT electrical switchyards, double pole structures, substations, and cable works up to 33,000 Volts rating with dedicated engineers on site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES SERVED SECTION */}
      <section id="industries" className="py-20 relative bg-[#f7f9fc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-mono font-bold mb-3">
              EPC Sectors & Markets
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 font-outfit">
              Custom Automation Solutions Across Diverse Industrial Landscapes
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Click any industry card below to drill down into our functional process designs, technical architectures, and real-world execution case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.slice(0, 8).map((industry) => (
              <div 
                key={industry.slug}
                onClick={() => setSelectedIndustry(industry)}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Real industrial imagery integration with soft color-graded overlay */}
                <div className="h-40 relative bg-slate-100 overflow-hidden">
                  <img 
                    src={getIndustryImage(industry.slug)} 
                    alt={industry.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ne-text-dark)]/90 via-[var(--color-ne-text-dark)]/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-bold text-base font-outfit drop-shadow">
                    {industry.name}
                  </span>
                </div>
                
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <p className="text-xs text-slate-500 line-clamp-3 mb-6 leading-relaxed">
                    {industry.desc}
                  </p>
                  
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 pt-3 border-t border-slate-100">
                    <span>SYSTEM SCENARIO</span>
                    <span className="text-[var(--color-ne-blue-corp)] font-bold group-hover:text-[var(--color-ne-blue-steel)] transition-colors">CASE DATA &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS & SOLUTIONS ECOSYSTEM */}
      <section id="products" className="py-20 relative bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-mono font-bold mb-3">
              Production Portfolio
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 font-outfit">
              Advanced Electrical Panels, Automation Systems & Instrumentation
            </p>
            <p className="text-slate-550 text-sm mt-4">
              Select category to review technical build sheets, working logic, and compliance standards. Click card to review engineering specs.
            </p>
          </div>

          {/* Product Tabs */}
          <div className="flex flex-wrap justify-center border-b border-slate-200 mb-12 gap-2">
            {PRODUCTS.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveProductTab(index)}
                className={`px-6 py-3.5 font-bold text-xs tracking-wider uppercase font-mono border-b-2 transition-all ${
                  activeProductTab === index
                    ? 'border-[var(--color-ne-blue-corp)] text-[var(--color-ne-blue-corp)] bg-slate-50'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS[activeProductTab].items.map((product, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedProduct(product)}
                className="bg-[#f7f9fc] hover:bg-white border border-slate-200 hover:border-blue-400 rounded-lg p-8 cursor-pointer shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Technical grid blueprint lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-slate-900 font-bold text-lg font-outfit group-hover:text-blue-700 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-[9px] uppercase font-mono text-[var(--color-ne-blue-corp)] bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60 font-bold">
                      SPECS SHEET
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {product.principle}
                  </p>
                  
                  {/* Highlights preview */}
                  <ul className="space-y-2 mb-6 font-mono text-[10px] text-slate-550">
                    {product.specs.slice(0, 3).map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-[var(--color-ne-blue-corp)] rounded-full" />
                        <span className="truncate">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-200 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-400 relative z-10">
                  <span>STANDARD CONFORMITY</span>
                  <span className="text-[var(--color-ne-blue-corp)] font-bold group-hover:underline">Open Data sheet &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MAJOR PROJECTS SHOWCASE */}
      <section id="projects" className="py-20 relative bg-[#f7f9fc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-mono font-bold mb-3">
              Project Execution Log
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 font-outfit">
              500+ Large-Scale Turnkey EPC Projects Commissioned Nationwide
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Review our industrial project execution reports. Click card to load engineering strategy and operational outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 4).map((project, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="bg-white border border-slate-200 rounded-lg p-8 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 w-[4px] h-full bg-[#cbd5e1] group-hover:bg-[var(--color-ne-blue-corp)] transition-colors" />
                
                <div>
                  <span className="text-[10px] font-mono text-blue-700 uppercase tracking-widest block mb-2 font-bold">
                    {project.industry} &bull; {project.location}
                  </span>
                  <h3 className="text-slate-900 font-bold text-xl mb-4 font-outfit group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-6">
                    <strong>Scope:</strong> {project.scope}
                  </p>
                </div>
                
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-450 uppercase font-bold">Client: {project.client}</span>
                  <span className="text-[var(--color-ne-blue-corp)] font-bold group-hover:underline">CASE REPORT &rarr;</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/projects" 
              className="inline-block px-8 py-4 bg-[var(--color-ne-blue-corp)] hover:bg-[var(--color-ne-blue-steel)] text-white font-bold rounded-lg shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-widest"
            >
              View All 500+ Projects & Proof of Execution &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING WORKFLOW (PIPELINE UI) */}
      <section className="py-20 bg-white border-b border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-mono font-bold mb-3">
              Standard Operating Workflow
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 font-outfit">
              From Schematic Blueprints to Lifetime Technical Support
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Click the pipeline phases below to trace our quality-assured project lifecycle methodology.
            </p>
          </div>

          {/* Workflow Pipeline Progress Bar */}
          <div className="relative border border-slate-200 rounded-lg p-6 bg-slate-50 mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block" />
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-[var(--color-ne-blue-corp)] -translate-y-1/2 transition-all duration-500 hidden md:block" 
              style={{ width: `${(activeWorkflow / (WORKFLOW.length - 1)) * 100}%` }}
            />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
              {WORKFLOW.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflow(idx)}
                  className={`flex flex-col items-center text-center p-3 rounded transition-all focus:outline-none ${
                    activeWorkflow === idx
                      ? 'bg-white border border-[var(--color-ne-blue-corp)]/30 shadow-sm'
                      : 'bg-transparent border border-transparent hover:border-slate-200'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold mb-2 transition-colors ${
                    activeWorkflow === idx
                      ? 'bg-[var(--color-ne-blue-corp)] text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-[10px] uppercase font-mono tracking-wider font-bold ${
                    activeWorkflow === idx ? 'text-[var(--color-ne-blue-corp)]' : 'text-slate-400'
                  }`}>
                    {item.step}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Workflow Detail Display Card */}
          <div className="bg-[#f7f9fc] border border-slate-200 p-8 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-[10px] font-mono text-[var(--color-ne-blue-corp)] uppercase tracking-widest border border-blue-200 bg-blue-50 px-2.5 py-0.5 rounded font-bold">
                PHASE 0{activeWorkflow + 1} METRIC
              </span>
              <h3 className="text-slate-900 font-extrabold text-2xl font-outfit">
                {WORKFLOW[activeWorkflow].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {WORKFLOW[activeWorkflow].desc}
              </p>
            </div>
            <div className="flex-shrink-0">
              <svg className="w-32 h-32 text-blue-700/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="20" y="20" width="60" height="60" rx="4" />
                <path d="M20,40 H80 M20,60 H80 M40,20 V80 M60,20 V80" strokeDasharray="1,2" />
                <circle cx="50" cy="50" r="8" className="fill-[var(--color-ne-blue-corp)] stroke-blue-400" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SERVICE SUPPORT ECOSYSTEM */}
      <section className="py-20 relative bg-[#f7f9fc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block bg-blue-50 border border-blue-200 px-3 py-1 rounded font-mono text-xs text-[var(--color-ne-blue-corp)] uppercase tracking-wider font-bold">
                Support Infrastructure
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 font-outfit">
                24/7 Field Service Engineering & Authorized VFD Repair Center
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Nandini Enterprises offers a high-performance backup maintenance ecosystem. 
                We are equipped with advanced testing devices and custom diagnostic equipment 
                to analyze, tune, and test heavy industrial hardware.
              </p>

              <div className="space-y-4">
                {[
                  { title: "24-Hour Technical Hotline", desc: "Direct channel connection with service coordinator to mobilize engineers instantly." },
                  { title: "Authorized Yaskawa Repair Base", desc: "OEM component repairs, drive load testing rigs, and immediate spare replacements." },
                  { title: "Comprehensive AMCs", desc: "Preventive calendar health evaluations, parameter diagnostic profiling, and calibration." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 bg-[var(--color-ne-blue-corp)] rounded-full mt-1.5 shrink-0" />
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm font-sans">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Center Visual Infographic Card */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-6 font-mono text-xs shadow-md">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <span className="text-[var(--color-ne-blue-corp)] font-bold uppercase tracking-wider">EMERGENCY RESPONSE PROTOCOL</span>
                  <span className="text-slate-400 text-[10px]">VER - 4.1</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-[#f7f9fc] p-3 rounded border border-slate-100">
                    <span className="block text-slate-450 text-[9px] font-bold">STEP 01: FAULT REPORT</span>
                    <span className="text-slate-700 font-sans">Client log call &rarr; Diagnostic ticket issued in under 15 mins.</span>
                  </div>
                  <div className="bg-[#f7f9fc] p-3 rounded border border-slate-100">
                    <span className="block text-slate-450 text-[9px] font-bold">STEP 02: TELE-ASSESSMENT</span>
                    <span className="text-slate-700 font-sans">Drive expert attempts remote parameter correction over line.</span>
                  </div>
                  <div className="bg-[#f7f9fc] p-3 rounded border border-slate-100">
                    <span className="block text-slate-455 text-[9px] font-bold">STEP 03: ENGINEER DISPATCH</span>
                    <span className="text-slate-700 font-sans">On-site deployment of service team with standard diagnostic tools.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-slate-100 gap-4 text-center">
                  <div>
                    <span className="block text-slate-400 text-[9px]">RESPONSE WINDOW</span>
                    <span className="text-slate-800 font-bold text-sm"> हैदराबाद: &lt; 4 Hrs &bull; India: &lt; 24 Hrs</span>
                  </div>
                  <a
                    href="tel:+914023190131"
                    className="w-full sm:w-auto px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded text-center transition-colors uppercase text-[10px]"
                  >
                    Call Support Hotline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PARTNERS & ASSOCIATIONS */}
      <section className="py-16 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-mono font-bold mb-10">
            AUTHORIZED ASSOCIATIONS & OEM CHANNELS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'YASKAWA', desc: 'Authorized Service Center for Variable Frequency Drives (VFDs)', url: 'https://www.yaskawaindia.in/' },
              { name: 'ABB', desc: 'Authorized Channel Partner for Drives & Automation panels', url: 'https://new.abb.com/indian-subcontinent' },
              { name: 'BAUMER', desc: 'Authorized System Integrator for Process Sensors', url: 'https://www.baumer.com/' },
              { name: 'SIEMENS', desc: 'Industrial System Partner for PLC, SCADA, & Switchgears', url: 'https://www.siemens.com/' },
              { name: 'YOKOGAWA', desc: 'Process Control Integration & Instrument Config partner', url: 'https://www.yokogawa.com/' }
            ].map((partner, idx) => (
              <a 
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f7f9fc] border border-slate-200 p-6 rounded flex flex-col justify-between hover:border-blue-300 shadow-sm transition-all cursor-pointer group"
              >
                <span className="text-[var(--color-ne-blue-corp)] font-extrabold text-lg tracking-widest font-mono group-hover:text-blue-700 transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-4 leading-normal font-sans font-medium">
                  {partner.desc}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CERTIFICATIONS & COMPLIANCE SECTION */}
      <section id="certifications" className="py-20 relative bg-[#f7f9fc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-mono font-bold mb-3">
              Standard Compliance
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 font-outfit">
              Statutory Registration, Compliance & Quality Licenses
            </p>
            <p className="text-slate-500 text-sm mt-4">
              We maintain absolute compliance with state and central regulatory frameworks. Click any certificate card below to view verification details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCert(cert)}
                className="bg-white border border-slate-200 hover:border-blue-300 rounded shadow-sm hover:shadow-md p-6 cursor-pointer transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-8 h-8 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-[var(--color-ne-blue-corp)] font-bold mb-4 font-mono text-xs">
                    0{index + 1}
                  </div>
                  <h3 className="text-slate-900 font-bold text-sm mb-2 font-outfit group-hover:text-blue-700 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-slate-450 text-[10px] font-mono mb-4">
                    Doc Ref: {cert.number}
                  </p>
                </div>
                <span className="text-[10px] text-[var(--color-ne-blue-corp)] font-bold font-mono tracking-wider">
                  VIEW COMPLIANCE &rarr;
                </span>
              </div>
            ))}
          </div>

          {/* Detailed supplementary listing */}
          <div className="mt-12 bg-white border border-slate-200 p-6 rounded text-center max-w-4xl mx-auto shadow-sm">
            <p className="text-xs text-slate-500 leading-relaxed font-mono font-medium">
              Additional Registrations: GST Certificate &bull; Import Export Code (IEC) &bull; Provident Fund (EPF) Registration &bull; Employee State Insurance (ESI) &bull; UDYAM MSME Registration. 
              <br />
              <span className="text-[10px] text-slate-400 block mt-2">All credential verification documents can be requested from info@nandiniautomation.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* 10. ABOUT COMPANY SECTION */}
      <section id="about" className="py-20 relative bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Manufacturing capabilities */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-mono font-bold">
                Company Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit">
                India&apos;s Reliable Automation & Heavy Electrical Switchgear Assembler
              </h2>
              <p className="text-sm text-slate-655 leading-relaxed font-sans">
                Nandini Enterprises has operated as an industrial integration leader since 2000. 
                Based out of IDA Cherlapally, Hyderabad&apos;s premier industrial corridor, our facilities 
                span a state-of-the-art sheet metal assembly plant, busbar fabrication machinery, 
                and dedicated test bays.
              </p>
              
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="bg-[#f7f9fc] p-4 rounded border border-slate-200">
                  <span className="block text-[var(--color-ne-blue-corp)] font-bold mb-1">CHERLAPALLY PLANT</span>
                  <span className="text-slate-500 text-[10px] font-sans">Over 12,000 sq.ft custom shop floor for mechanical and wiring work.</span>
                </div>
                <div className="bg-[#f7f9fc] p-4 rounded border border-slate-200">
                  <span className="block text-[var(--color-ne-blue-corp)] font-bold mb-1">ENGINEERING TEAM</span>
                  <span className="text-slate-500 text-[10px] font-sans">Highly certified design engineers and automation experts on-site.</span>
                </div>
              </div>
            </div>

            {/* Vision / Mission / Timelines */}
            <div className="lg:col-span-6">
              <div className="space-y-6 bg-[#f7f9fc] border border-slate-200 rounded-lg p-8 shadow-sm">
                <div>
                  <h3 className="text-[var(--color-ne-blue-corp)] font-bold text-sm uppercase tracking-wider mb-2 font-mono">
                    OUR CORE MISSION
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    To deliver premium, safe, and CPRI-certified industrial power control systems and smart automation workflows that maximize plant runtime, secure worker protection, and cut operational costs across manufacturing hubs.
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-[var(--color-ne-blue-corp)] font-bold text-sm uppercase tracking-wider mb-2 font-mono">
                    OUR VISION
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    To remain India&apos;s premier B2B system integrator, recognized by leading global OEMs as the preferred high-end engineering gateway for heavy switchyards, PLC/SCADA configurations, and drive systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CSR & SEMINARS / EXPOS SECTION */}
      <section className="py-20 bg-[#f7f9fc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-mono font-bold mb-3">
              Corporate Stewardship & Expos
            </h2>
            <p className="text-2xl font-extrabold text-slate-900 font-outfit">
              Nurturing Talent & Driving Industry-Academia Linkages
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-left">
            {[
              { title: "Industrial Training Seminars", desc: "Hosting structured automation programming bootcamps for engineering graduates at our IDA Cherlapally facility to bridge the skill deficit." },
              { title: "Women in Engineering Projects", desc: "Targeted hiring and skill training initiatives enabling female operators in advanced sheet metal processing and CAD schematic designs." },
              { title: "Industrial Expos & Summits", desc: "Regularly participating in Automation Expo India and national electrical switchgear conventions to demonstrate green energy solutions." }
            ].map((activity, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-lg flex flex-col justify-between shadow-sm hover:shadow transition-shadow">
                <div>
                  <h4 className="text-slate-900 font-bold text-base mb-3 font-outfit">{activity.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{activity.desc}</p>
                </div>
                <span className="text-[10px] text-slate-400 font-mono mt-6 font-semibold">COMMUNITY IMPACT PROFILES</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. ADVANCED INTERACTIVE MEDIA CARD PREVIEWS */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-mono font-bold mb-3">
              Interactive Media Logs
            </h2>
            <p className="text-2xl font-extrabold text-slate-900 font-outfit">
              Engineering Media & Visual Documentation Drawer
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Expand visual cards below to browse high-definition diagnostic schematics, assembly operations, and project delivery logs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left font-mono text-xs">
            <div className="bg-[#f7f9fc] border border-slate-200 rounded-lg p-6 hover:border-blue-300 shadow-sm transition-all">
              <span className="text-[9px] text-slate-450 block mb-1">MEDIA ID: V-401</span>
              <h4 className="text-slate-900 font-bold mb-4 font-outfit text-sm">VFD Load Testing Bay Operations</h4>
              <p className="text-xs text-slate-500 font-sans mb-6">
                Demonstrates high-power load runs on a newly assembled Yaskawa VFD control panel before dispatch to JSW Steel.
              </p>
              <span className="text-[var(--color-ne-blue-corp)] font-bold cursor-pointer" onClick={() => alert("Loading mock video stream: Yaskawa A1000 load test (220kW)...")}>
                Watch Video Demonstration &rarr;
              </span>
            </div>

            <div className="bg-[#f7f9fc] border border-slate-200 rounded-lg p-6 hover:border-blue-300 shadow-sm transition-all">
              <span className="text-[9px] text-slate-450 block mb-1">MEDIA ID: S-102</span>
              <h4 className="text-slate-900 font-bold mb-4 font-outfit text-sm">120 MLD PLC Logic Diagrams</h4>
              <p className="text-xs text-slate-500 font-sans mb-6">
                Detailed functional control sequence logic flowchart matching HMWSSB&apos;s main water pumping loops.
              </p>
              <span className="text-[var(--color-ne-blue-corp)] font-bold cursor-pointer" onClick={() => alert("Loading layout schematic schematic_HMWSSB_v1.2.pdf...")}>
                Open Engineering Drawing &rarr;
              </span>
            </div>

            <div className="bg-[#f7f9fc] border border-slate-200 rounded-lg p-6 hover:border-blue-300 shadow-sm transition-all">
              <span className="text-[9px] text-slate-455 block mb-1">MEDIA ID: D-88</span>
              <h4 className="text-slate-900 font-bold mb-4 font-outfit text-sm">Company B2B Product Brochure</h4>
              <p className="text-xs text-slate-500 font-sans mb-6">
                Download the complete executive brochure containing technical specifications for all CPRI panels and drive systems.
              </p>
              <a 
                href="/NE_Profile_2026.pdf" 
                className="text-[var(--color-ne-blue-corp)] font-bold hover:underline block"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Converting the profile profile_2026 to PDF download stream. Completed!");
                }}
              >
                Download PDF Brochure &darr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 13. LEAD GENERATION SYSTEM (SMART FORMS) */}
      <section id="rfq-section" className="py-20 relative bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Quote details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block bg-blue-50 border border-blue-200 px-3 py-1 rounded font-mono text-xs text-[var(--color-ne-blue-corp)] uppercase tracking-wider font-bold">
                Lead Capture Center
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 font-outfit">
                Ready to Optimize Your Plant Operations?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Connect with our Hyderabad-based technical experts. Submit details to launch formal system engineering assessments, request detailed product pricing, or schedule VFD repairs.
              </p>

              <div className="bg-white border border-slate-200 rounded-lg p-6 font-mono text-xs space-y-4 shadow-sm">
                <span className="block text-slate-800 font-bold border-b border-slate-100 pb-2 uppercase tracking-wide">Technical Support Channels</span>
                <div className="flex items-center space-x-3 text-slate-600">
                  <span className="text-[var(--color-ne-blue-corp)] font-bold w-24">Sales RFQ:</span>
                  <span>info@nandiniautomation.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <span className="text-[var(--color-ne-blue-corp)] font-bold w-24">Drive Desk:</span>
                  <span>+91-40-23190131</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <span className="text-[var(--color-ne-blue-corp)] font-bold w-24">Location:</span>
                  <span>Cherlapally, Hyd - 500051</span>
                </div>
              </div>
            </div>

            {/* Interactive smart B2B form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 p-8 rounded-lg shadow-md">
              <div className="flex border-b border-slate-200 mb-6 gap-2">
                {[
                  { id: 'quote', label: 'Request RFQ' },
                  { id: 'consult', label: 'Consultation' },
                  { id: 'support', label: 'Technical Support' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setInquiryType(tab.id)}
                    className={`px-4 py-2 font-mono text-xs uppercase border-b-2 tracking-wider ${
                      inquiryType === tab.id
                        ? 'border-[var(--color-ne-blue-corp)] text-[var(--color-ne-blue-corp)] font-bold'
                        : 'border-transparent text-slate-400'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {rfqSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 bg-green-50 border border-green-500 rounded-full flex items-center justify-center mx-auto text-green-500 font-bold text-lg">
                    &check;
                  </div>
                  <h4 className="text-slate-905 font-bold text-lg font-outfit">RFQ Inquiry Logged Successfully</h4>
                  <p className="text-slate-500 text-xs max-w-md mx-auto">
                    Your details have been registered into our B2B lead portal. A senior service coordinator will contact you shortly with formal drawings.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase">Contact Name</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#f7f9fc] border border-slate-200 rounded px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#f7f9fc] border border-slate-200 rounded px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase">Telephone / Phone</label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="+91-XXXXX-XXXXX"
                        className="w-full bg-[#f7f9fc] border border-slate-200 rounded px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase">Company Name</label>
                      <input
                        type="text"
                        required
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        placeholder="Steel Corp Ltd"
                        className="w-full bg-[#f7f9fc] border border-slate-200 rounded px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase">Technical Scope / Requirements Description</label>
                    <textarea
                      required
                      value={contactForm.requirement}
                      onChange={(e) => setContactForm({ ...contactForm, requirement: e.target.value })}
                      placeholder="Specify required panel capacities, PLC series, VFD frame sizes, or support timeline requirements..."
                      rows={4}
                      className="w-full bg-[#f7f9fc] border border-slate-200 rounded px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>

                  {/* Formspree submission hooks simulated */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[var(--color-ne-blue-corp)] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded text-xs uppercase tracking-wider transition-colors"
                  >
                    Submit Technical Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 14. MODAL POPUPS (DETAILED DATA VIEWER) */}
      {/* ========================================== */}
      
      {/* Industry Detail Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-lg max-w-2xl w-full p-8 shadow-2xl relative text-slate-700 font-sans">
            <button 
              className="absolute top-4 right-4 text-slate-450 hover:text-slate-800 text-xl"
              onClick={() => setSelectedIndustry(null)}
            >
              &times;
            </button>
            <span className="text-[10px] font-mono text-[var(--color-ne-blue-corp)] uppercase tracking-widest block mb-2 font-bold">
              EPC Industry Detail
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-outfit">
              {selectedIndustry.name}
            </h3>

            <div className="space-y-6 text-sm text-slate-600">
              <div>
                <h4 className="text-xs uppercase text-slate-500 font-mono tracking-wider font-bold mb-2">1. Functional Process Description</h4>
                <p className="leading-relaxed">{selectedIndustry.desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs uppercase text-slate-500 font-mono tracking-wider font-bold mb-2">2. Technical Systems Implemented</h4>
                  <p className="text-xs text-slate-550">{selectedIndustry.tech}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase text-slate-500 font-mono tracking-wider font-bold mb-2">3. Primary Project Scenario</h4>
                  <p className="text-xs text-slate-550">{selectedIndustry.projects}</p>
                </div>
              </div>
              <div>
                <h4 className="text-xs uppercase text-slate-500 font-mono tracking-wider font-bold mb-2">4. Operational Case Outcome</h4>
                <p className="text-xs text-green-700 font-mono font-semibold">{selectedIndustry.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Data sheet Drawer */}
      {selectedProduct && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-lg max-w-2xl w-full p-8 shadow-2xl relative text-slate-700 font-sans">
            <button 
              className="absolute top-4 right-4 text-slate-450 hover:text-slate-800 text-xl"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <span className="text-[10px] font-mono text-[var(--color-ne-blue-corp)] uppercase tracking-widest block mb-2 font-bold">
              Specification Datasheet
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-outfit">
              {selectedProduct.name}
            </h3>

            <div className="space-y-6 text-sm text-slate-600">
              <div>
                <h4 className="text-xs uppercase text-slate-500 font-mono tracking-wider font-bold mb-2">1. Technical Specification Details</h4>
                <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-700">
                  {selectedProduct.specs.map((spec, sIdx) => (
                    <li key={sIdx}>{spec}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs uppercase text-slate-500 font-mono tracking-wider font-bold mb-2">2. Operating Principle</h4>
                  <p className="text-xs text-slate-550">{selectedProduct.principle}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase text-slate-500 font-mono tracking-wider font-bold mb-2">3. Primary B2B Use Case</h4>
                  <p className="text-xs text-slate-550">{selectedProduct.useCase}</p>
                </div>
              </div>
              <div>
                <h4 className="text-xs uppercase text-slate-500 font-mono tracking-wider font-bold mb-2">4. Quality Standards & Certifications</h4>
                <p className="text-xs text-[var(--color-ne-blue-corp)] font-mono font-bold">{selectedProduct.standards}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Case Study Report Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-lg max-w-2xl w-full p-8 shadow-2xl relative text-slate-700 font-sans">
            <button 
              className="absolute top-4 right-4 text-slate-450 hover:text-slate-800 text-xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <span className="text-[10px] font-mono text-[var(--color-ne-blue-corp)] uppercase tracking-widest block mb-2 font-bold">
              EPC Project Case study Report
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 font-outfit">
              {selectedProject.title}
            </h3>

            <div className="space-y-6 text-sm text-slate-650">
              <div className="grid grid-cols-2 gap-4 border-b border-slate-100 pb-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block font-semibold">CLIENT ORG:</span>
                  <span className="text-slate-800 font-bold">{selectedProject.client}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">SECTOR:</span>
                  <span className="text-slate-800 font-bold">{selectedProject.industry}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">LOCATION:</span>
                  <span className="text-slate-800 font-bold">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">DELIVERY STATUS:</span>
                  <span className="text-green-600 font-bold">100% COMMISSIONED</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xs uppercase text-slate-500 font-mono tracking-wider font-bold mb-2">1. Functional Project Scope</h4>
                <p className="leading-relaxed">{selectedProject.scope}</p>
              </div>
              
              <div>
                <h4 className="text-xs uppercase text-slate-500 font-mono tracking-wider font-bold mb-2">2. Hardware & Technologies Deployed</h4>
                <p className="text-xs font-mono text-[var(--color-ne-blue-corp)] font-bold">{selectedProject.tech}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase text-slate-500 font-mono tracking-wider font-bold mb-2">3. Verified Process Improvements & Gains</h4>
                <p className="text-xs text-green-700 font-mono font-bold">{selectedProject.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certification zoom dialog */}
      {selectedCert && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-lg max-w-md w-full p-8 shadow-2xl relative text-slate-700 font-sans">
            <button 
              className="absolute top-4 right-4 text-slate-450 hover:text-slate-800 text-xl"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
            <span className="text-[10px] font-mono text-[var(--color-ne-blue-corp)] uppercase tracking-widest block mb-2 font-bold">
              Registration Certificate
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-6 font-outfit">
              {selectedCert.name}
            </h3>
            
            <div className="space-y-6 text-sm text-slate-600">
              <div className="bg-[#f7f9fc] border border-slate-200 p-6 rounded text-center font-mono">
                <span className="block text-slate-450 text-[10px] mb-2 font-bold">CERTIFICATE ID NUMBER</span>
                <span className="text-slate-800 font-bold tracking-wider">{selectedCert.number}</span>
                
                <div className="w-16 h-16 border-2 border-blue-200 border-dashed rounded-full flex items-center justify-center mx-auto mt-6 text-[var(--color-ne-blue-corp)] text-lg font-bold">
                  ISO
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase text-slate-500 font-mono tracking-wider font-bold mb-1">Approved Audit Scope:</h4>
                <p className="text-xs leading-relaxed">{selectedCert.scope}</p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xs">
                <span className="text-slate-500 font-semibold">Status: ACTIVE</span>
                <button 
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-[var(--color-ne-blue-corp)] rounded font-bold transition-colors text-xs"
                  onClick={() => alert(`Certificate ${selectedCert.name} has been queued for PDF download.`)}
                >
                  Download PDF &darr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
