'use client';

import { useState } from 'react';

export default function KnowledgeAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<'home' | 'services' | 'contact' | 'quote'>('home');
  const [quoteForm, setQuoteForm] = useState({ name: '', email: '', details: '' });

  const toggleAssistant = () => setIsOpen(!isOpen);
  const resetAssistant = () => {
    setCurrentStep('home');
    setQuoteForm({ name: '', email: '', details: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${quoteForm.name}. Your quotation request for: "${quoteForm.details}" has been logged. Our engineering team will contact you at ${quoteForm.email} within 12 hours.`);
    resetAssistant();
    setIsOpen(false);
  };

  const renderContent = () => {
    switch (currentStep) {
      case 'home':
        return (
          <div className="space-y-3">
            <p className="text-sm text-slate-655 mb-4 leading-relaxed font-sans">
              Hello, I am the Nandini Enterprises Industrial Guide. How can I direct your inquiry?
            </p>
            <button
              onClick={() => setCurrentStep('services')}
              className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 text-[#0f4c81] hover:text-blue-800 rounded border border-slate-200 transition-all text-sm font-semibold"
            >
              Navigate Engineering Services &rarr;
            </button>
            <button
              onClick={() => setCurrentStep('contact')}
              className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 text-[#0f4c81] hover:text-blue-800 rounded border border-slate-200 transition-all text-sm font-semibold"
            >
              Contact Support Desk &rarr;
            </button>
            <button
              onClick={() => setCurrentStep('quote')}
              className="w-full text-left px-4 py-3 bg-gradient-to-r from-blue-50 to-[#eef2f7] hover:from-blue-100 hover:to-slate-200 text-[#0f4c81] hover:text-blue-800 rounded border border-blue-200 transition-all text-sm font-bold"
            >
              Request Technical Quotation &rarr;
            </button>
          </div>
        );
      case 'services':
        return (
          <div className="space-y-3">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-bold font-mono">
              Select Engineering Discipline:
            </p>
            {[
              { label: 'Industrial Automation', href: '/services/industrial-automation' },
              { label: 'Electrical solutions', href: '/services/electrical-solutions' },
              { label: 'PLC Programming', href: '/services/plc-programming' },
              { label: 'VFD & Drive Systems', href: '/services/vfd-solutions' },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  window.location.href = item.href;
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0f4c81] rounded border border-slate-200 transition-all text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              className="w-full text-center py-2 text-xs text-slate-500 hover:text-blue-700 mt-2 font-bold font-mono"
              onClick={() => setCurrentStep('home')}
            >
              &larr; Back to Main Options
            </button>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-3">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-bold font-mono">
              Connect Channels:
            </p>
            <a
              href="mailto:info@nandiniautomation.com"
              className="block w-full text-left px-4 py-3 bg-white hover:bg-slate-50 text-slate-750 hover:text-[#0f4c81] rounded border border-slate-200 text-sm font-semibold transition-colors"
            >
              Email Engineering Team
              <span className="block text-[10px] text-slate-400 font-mono font-medium">info@nandiniautomation.com</span>
            </a>
            <a
              href="tel:+914023190131"
              className="block w-full text-left px-4 py-3 bg-white hover:bg-slate-50 text-slate-755 hover:text-[#0f4c81] rounded border border-slate-200 text-sm font-semibold transition-colors"
            >
              Direct Support Hotline
              <span className="block text-[10px] text-slate-400 font-mono font-medium">+91-40-23190131</span>
            </a>
            <button
              className="w-full text-center py-2 text-xs text-slate-500 hover:text-blue-700 mt-2 font-bold font-mono"
              onClick={() => setCurrentStep('home')}
            >
              &larr; Back to Main Options
            </button>
          </div>
        );
      case 'quote':
        return (
          <form onSubmit={handleSubmit} className="space-y-3">
            <p className="text-xs text-slate-500 mb-2 leading-relaxed font-sans">
              Submit your RFQ / requirements detail for instant engineering assessment.
            </p>
            <input
              type="text"
              placeholder="Your Name / Organization"
              required
              value={quoteForm.name}
              onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={quoteForm.email}
              onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Describe panel, VFD or automation project scope..."
              required
              rows={3}
              value={quoteForm.details}
              onChange={(e) => setQuoteForm({ ...quoteForm, details: e.target.value })}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2.5 bg-gradient-to-r from-[#0f4c81] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded text-xs uppercase tracking-wider transition-all"
            >
              Submit Requirements
            </button>
            <button
              type="button"
              className="w-full text-center py-1.5 text-xs text-slate-500 hover:text-blue-700 font-bold font-mono"
              onClick={() => setCurrentStep('home')}
            >
              &larr; Cancel Request
            </button>
          </form>
        );
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-55 font-sans">
      {isOpen && (
        <div className="w-80 bg-white border border-slate-200 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0f4c81] to-[#2b6cb0] px-4 py-3 border-b border-slate-200 flex justify-between items-center text-white">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white font-bold font-mono">
                Knowledge Assistant
              </h4>
              <span className="text-[9px] text-blue-100">Nandini Automation Portal</span>
            </div>
            <button
              className="text-white hover:text-blue-100 transition-colors text-lg focus:outline-none"
              onClick={toggleAssistant}
            >
              &times;
            </button>
          </div>
          
          {/* Body */}
          <div className="p-4 bg-white max-h-[360px] overflow-y-auto">
            {renderContent()}
          </div>
        </div>
      )}

      {/* FAB Button */}
      {!isOpen && (
        <button
          onClick={toggleAssistant}
          className="bg-white hover:bg-slate-50 text-[#0f4c81] border border-slate-200 p-4 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300 relative group"
        >
          <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="absolute right-full mr-3 bg-white border border-slate-200 text-[10px] text-slate-800 px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity font-mono tracking-wider whitespace-nowrap">
            Support Agent
          </span>
        </button>
      )}
    </div>
  );
}
