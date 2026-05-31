'use client';

import { useState } from 'react';
import { INDUSTRIES, Industry } from '@/lib/data';

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'challenges' | 'solutions' | 'equipment'>('overview');

  return (
    <div className="bg-[#f7f9fc] min-h-screen text-slate-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#0f4c81] font-mono font-bold block">
                SECTOR ENGINEERING CONVENTIONS
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit leading-tight">
                Industries We Serve
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                We design specialized automation loops, CPRI control boards, process instrumentation, and turnkey electrical systems matching the specific regulatory, operational, and engineering requirements of 14 heavy industrial sectors.
              </p>
              <div className="flex gap-6 pt-2 font-mono text-xs">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f4c81]">14</div>
                  <div className="text-slate-500 uppercase tracking-wider">Sectors Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f4c81]">200+</div>
                  <div className="text-slate-500 uppercase tracking-wider">Active Sites</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f4c81]">25+</div>
                  <div className="text-slate-500 uppercase tracking-wider">Yrs Experience</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0f4c81] to-[#2b6cb0] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <img 
                src="https://picsum.photos/seed/nandini/800/600" 
                alt="Industrial Automation Control Systems" 
                className="relative rounded-lg shadow-xl object-cover w-full h-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="bg-[#f7f9fc] border border-slate-200 rounded-lg p-6 space-y-2">
              <h3 className="text-[#0f4c81] font-bold font-outfit">Process Industry Expertise</h3>
              <p className="text-slate-600 leading-relaxed text-xs">Our automation engineers carry deep domain knowledge across continuous process industries including power plants, chemicals, oil & gas, and water treatment — understanding the unique control logic, safety requirements, and regulatory compliance frameworks of each sector.</p>
            </div>
            <div className="bg-[#f7f9fc] border border-slate-200 rounded-lg p-6 space-y-2">
              <h3 className="text-[#0f4c81] font-bold font-outfit">Manufacturing Sector Solutions</h3>
              <p className="text-slate-600 leading-relaxed text-xs">From cement kiln speed control to sugar centrifugal cycle automation, we deliver sector-specific drive systems and control panels that address the precise engineering challenges of heavy discrete manufacturing, including high inertia loads, thermal stress, and dust contamination.</p>
            </div>
            <div className="bg-[#f7f9fc] border border-slate-200 rounded-lg p-6 space-y-2">
              <h3 className="text-[#0f4c81] font-bold font-outfit">Government & Infrastructure</h3>
              <p className="text-slate-600 leading-relaxed text-xs">HMWSSB, HMRL, NTPC, RDSO-compliant panels, PESO-approved hazardous area systems — our government project experience spans municipal water boards, railway traction infrastructure, and national energy corporations with zero-tolerance audit requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid listing */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3 mb-2">
            Industrial Sector Portfolio
          </h2>
          <p className="text-sm text-slate-600 pl-4">Click any sector card to view detailed engineering challenges, solutions, standards, and key equipment deployed.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <div 
              key={ind.slug}
              onClick={() => { setSelectedIndustry(ind); setActiveTab('overview'); }}
              className="bg-white border border-slate-200 hover:border-[#2b6cb0] hover:shadow-md rounded-lg p-7 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[#0f4c81] font-bold text-xl font-outfit group-hover:text-[#2b6cb0] transition-colors">
                    {ind.name}
                  </h3>
                  <span className="shrink-0 text-[9px] font-mono bg-slate-50 border border-slate-200 text-slate-400 px-2 py-0.5 rounded uppercase ml-2">
                    {ind.slug.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {ind.desc.substring(0, 180)}...
                </p>
                <div className="text-[10px] font-mono text-[#0f4c81] bg-slate-50 border border-slate-100 rounded px-2 py-1 inline-block mb-2">
                  KEY: {ind.tech.split(',')[0].trim()}
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span className="text-emerald-700 font-semibold">{ind.outcome.substring(0, 50)}...</span>
                <span className="text-[#0f4c81] font-bold group-hover:underline shrink-0 ml-2">Details →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Detail Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-lg max-w-3xl w-full shadow-2xl relative my-8">
            
            {/* Modal Header */}
            <div className="bg-[#0f4c81] text-white p-6 rounded-t-lg relative">
              <button 
                className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl cursor-pointer leading-none font-light"
                onClick={() => setSelectedIndustry(null)}
              >
                ×
              </button>
              <span className="text-[10px] font-mono text-[#93c5fd] uppercase tracking-widest block mb-1 font-bold">
                EPC SECTOR ENGINEERING SPECIFICATION
              </span>
              <h3 className="text-2xl font-bold font-outfit">
                {selectedIndustry.name}
              </h3>
            </div>

            {/* Tab Bar */}
            <div className="flex border-b border-slate-200 bg-slate-50 rounded-none overflow-x-auto">
              {(['overview', 'challenges', 'solutions', 'equipment'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 font-mono text-[10px] uppercase tracking-wider font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-[#0f4c81] text-[#0f4c81] bg-white'
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab === 'overview' ? 'Overview & Projects' : 
                   tab === 'challenges' ? 'Engineering Challenges' :
                   tab === 'solutions' ? 'NE Solutions' : 'Key Equipment'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8 space-y-6 text-sm text-slate-700">
              
              {activeTab === 'overview' && (
                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold mb-3">
                      1. Industrial Process & Scope Description
                    </h4>
                    <p className="leading-relaxed text-slate-655 text-sm">{selectedIndustry.desc}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="bg-[#f7f9fc] border border-slate-200 rounded p-4">
                      <h4 className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold mb-2">
                        2. Technical Systems Implemented
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-mono">{selectedIndustry.tech}</p>
                    </div>
                    <div className="bg-[#f7f9fc] border border-slate-200 rounded p-4">
                      <h4 className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold mb-2">
                        3. Primary Project Examples
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{selectedIndustry.projects}</p>
                    </div>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded p-4">
                    <h4 className="text-xs uppercase text-emerald-700 font-mono tracking-wider font-semibold mb-2">
                      4. Verified Operational Outcome
                    </h4>
                    <p className="text-xs text-emerald-800 font-mono font-bold leading-relaxed">{selectedIndustry.outcome}</p>
                  </div>
                </div>
              )}

              {activeTab === 'challenges' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500 italic mb-4">The following engineering challenges are commonly faced in {selectedIndustry.name} automation projects and require specialized domain expertise to resolve correctly.</p>
                  {selectedIndustry.challenges?.map((challenge, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-rose-50 border border-rose-100 rounded p-4">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-mono text-[10px] font-bold flex items-center justify-center mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed">{challenge}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'solutions' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500 italic mb-4">Nandini Enterprises engineering methodology to resolve the sector-specific challenges listed above:</p>
                  {selectedIndustry.solutions?.map((solution, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-emerald-50 border border-emerald-100 rounded p-4">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-mono text-[10px] font-bold flex items-center justify-center mt-0.5">
                        ✓
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed">{solution}</p>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold mb-3">
                      Applicable Standards & Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedIndustry.standards?.map((std, idx) => (
                        <span key={idx} className="text-[10px] font-mono bg-[#0f4c81]/5 border border-[#0f4c81]/20 text-[#0f4c81] px-2 py-1 rounded font-semibold">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'equipment' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500 italic mb-4">Key equipment and technology brands typically deployed in {selectedIndustry.name} automation projects:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedIndustry.keyEquipment?.map((equip, idx) => (
                      <div key={idx} className="flex items-center space-x-3 bg-white border border-slate-200 rounded p-3 shadow-xs">
                        <span className="text-[#0f4c81] font-bold text-lg shrink-0">▸</span>
                        <span className="text-sm text-slate-700 font-semibold">{equip}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <a 
                      href="/contact?type=inquiry"
                      className="inline-block bg-[#0f4c81] text-white px-6 py-3 rounded font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#2b6cb0] transition-colors"
                    >
                      Request Technical Consultation →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
