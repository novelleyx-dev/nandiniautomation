'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  const initialType = (typeParam === 'quote' || typeParam === 'consult' || typeParam === 'support') ? typeParam : 'quote';
  const [inquiryType, setInquiryType] = useState(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', type: 'panel', requirement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', type: 'panel', requirement: '' });
    }, 5000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8">
      
      {/* Contact Details & Channels */}
      <div className="lg:col-span-5 space-y-8 font-sans">
        <div className="space-y-4">
          <h2 className="text-[#0f4c81] font-extrabold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3">
            Operational Headquarters
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Connect directly with our Hyderabad switches and VFD division. Form submissions are logged instantly into our B2B procurement CRM system.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-lg space-y-4 font-mono text-xs shadow-sm">
          <h4 className="text-[#0f4c81] font-bold border-b border-slate-100 pb-2">CONTACT DIRECTORY</h4>
          
          <div className="space-y-3">
            <div>
              <span className="text-slate-400 block text-[9px]">PRIMARY EMAIL</span>
              <a href="mailto:info@nandiniautomation.com" className="text-[#0f4c81] hover:text-[#2b6cb0] font-semibold text-sm">
                info@nandiniautomation.com
              </a>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px]">SUPPORT TELEPHONE</span>
              <a href="tel:+914023190131" className="text-[#0f4c81] hover:text-[#2b6cb0] font-semibold text-sm">
                +91-40-23190131
              </a>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px]">IDA PLANT LOCATION</span>
              <span className="text-slate-700 leading-relaxed block mt-0.5 text-xs font-sans">
                Plot No. 49, Phase-III, IDA Cherlapally, Hyderabad, Telangana - 500051
              </span>
            </div>
          </div>
        </div>

        {/* WhatsApp direct block */}
        <div className="bg-gradient-to-r from-emerald-50 to-slate-50 border border-emerald-200 p-6 rounded-lg flex items-center justify-between shadow-xs">
          <div className="space-y-1">
            <h4 className="text-emerald-950 font-bold text-sm">Need quick estimation?</h4>
            <p className="text-[11px] text-slate-600">Connect with an application engineer over WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/914023190131"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Smart Form Integration */}
      <div className="lg:col-span-7 bg-white border border-slate-200 p-8 rounded-lg shadow-sm">
        
        {/* Toggle Form tab */}
        <div className="flex border-b border-slate-100 mb-8 gap-2">
          {[
            { id: 'quote', label: 'Submit RFQ' },
            { id: 'consult', label: 'Request Consultation' },
            { id: 'support', label: 'Support Request' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setInquiryType(tab.id)}
              className={`px-4 py-2 font-mono text-xs uppercase border-b-2 tracking-wider cursor-pointer transition-all ${
                inquiryType === tab.id
                  ? 'border-[#0f4c81] text-[#0f4c81] font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="text-center py-16 space-y-4">
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-250 rounded-full flex items-center justify-center mx-auto text-emerald-700 font-bold text-lg">
              &check;
            </div>
            <h4 className="text-slate-900 font-bold text-lg font-outfit">Inquiry Received</h4>
            <p className="text-slate-600 text-xs max-w-sm mx-auto leading-relaxed">
              Your inquiry has been compiled into our pipeline system. A design specialist will review your schematics and contact you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-slate-500 uppercase block font-semibold">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#f7f9fc] border border-slate-200 rounded px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0f4c81] focus:bg-white font-sans transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-slate-500 uppercase block font-semibold">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@company.com"
                  className="w-full bg-[#f7f9fc] border border-slate-200 rounded px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0f4c81] focus:bg-white font-sans transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-slate-500 uppercase block font-semibold">Telephone / Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 99999-99999"
                  className="w-full bg-[#f7f9fc] border border-slate-200 rounded px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0f4c81] focus:bg-white font-sans transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-slate-500 uppercase block font-semibold">Organization Name</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Cement Works Pvt Ltd"
                  className="w-full bg-[#f7f9fc] border border-slate-200 rounded px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0f4c81] focus:bg-white font-sans transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-slate-500 uppercase block font-semibold">Core Solution Category</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-[#f7f9fc] border border-slate-200 rounded px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#0f4c81] focus:bg-white font-sans transition-all"
              >
                <option value="panel">Electrical Panels (PCC, MCC, VFD)</option>
                <option value="automation">PLC SCADA System Integration</option>
                <option value="vfd-repair">Yaskawa VFD Repair & Drive checks</option>
                <option value="instrumentation">Field Sensors / Baumer levels</option>
                <option value="other">Other B2B Project query</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-slate-500 uppercase block font-semibold">Project Scope / Requirements Detail</label>
              <textarea
                required
                value={formData.requirement}
                onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                placeholder="Describe structural specifications, busbar short circuit capacity rating, motor HP size, PLC processor family, or breakdown telemetry details..."
                rows={5}
                className="w-full bg-[#f7f9fc] border border-slate-200 rounded px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0f4c81] focus:bg-white font-sans transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0f4c81] hover:bg-[#2b6cb0] text-white font-bold rounded text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Log technical request &rarr;
            </button>
          </form>
        )}
      </div>
      
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#f7f9fc] min-h-screen text-slate-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#0f4c81] font-mono font-bold block">
                SUPPORT HOTLINE
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit leading-tight">
                Connect With Our Engineering Team
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-655">
                Submit your RFQ technical schedules, register drive fault ticket values, or schedule factory audits.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0f4c81] to-[#2b6cb0] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <img 
                src="https://picsum.photos/seed/nandini/800/600" 
                alt="Engineering Customer Office" 
                className="relative rounded-lg shadow-xl object-cover w-full h-[280px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<div className="text-center py-20 text-slate-500 font-mono text-xs">LOADING FORM...</div>}>
          <ContactFormContent />
        </Suspense>
      </section>

    </div>
  );
}
