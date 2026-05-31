'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PROJECTS, Project } from '@/lib/data';

const INDUSTRY_ICONS: Record<string, string> = {
  'Water Treatment': '💧',
  'Steel': '🏭',
  'Oil & Gas': '⛽',
  'Railways': '🚄',
  'Pharma': '⚗️',
  'Cement': '🏗️',
  'Power Plants': '⚡',
  'Food Processing': '🥗',
  'Mining': '⛏️',
  'Defense': '🛡️',
  'Sugar': '🌾',
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['ALL', ...Array.from(new Set(PROJECTS.map(p => p.industry.toUpperCase())))];

  const filteredProjects = activeFilter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.industry.toUpperCase() === activeFilter);

  return (
    <div className="bg-[#f7f9fc] min-h-screen text-slate-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#0f4c81] font-mono font-bold block">
                B2B EXECUTION LOG — VERIFIED DELIVERIES
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit leading-tight">
                Industrial Case Studies & EPC Projects
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                A record of our completed turnkey engineering deliveries across heavy industry sectors. Each case study documents the client requirement, engineering challenge, technology deployed, and verified operational outcome.
              </p>
              <div className="flex gap-6 pt-2 font-mono text-xs">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f4c81]">15+</div>
                  <div className="text-slate-500 uppercase tracking-wider">Case Studies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f4c81]">₹38 Cr+</div>
                  <div className="text-slate-500 uppercase tracking-wider">Project Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f4c81]">9</div>
                  <div className="text-slate-500 uppercase tracking-wider">Industry Sectors</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0f4c81] to-[#2b6cb0] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <img 
                src="https://picsum.photos/seed/nandini/800/600" 
                alt="Industrial Engineering Project Site" 
                className="relative rounded-lg shadow-xl object-cover w-full h-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Listing */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Filters */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Filter by Sector:</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 font-mono text-xs uppercase border rounded cursor-pointer transition-all ${
                  activeFilter === cat
                    ? 'bg-[#0f4c81] border-[#0f4c81] text-white shadow-xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-800'
                }`}
              >
                {cat === 'ALL' ? 'ALL SECTORS' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm flex flex-wrap gap-6 font-mono text-xs">
          <div>
            <span className="text-slate-400 uppercase block">Showing</span>
            <span className="text-slate-900 font-bold">{filteredProjects.length} Case Studies</span>
          </div>
          <div>
            <span className="text-slate-400 uppercase block">Total Commission Status</span>
            <span className="text-emerald-700 font-bold">100% DELIVERED</span>
          </div>
          <div>
            <span className="text-slate-400 uppercase block">Avg. Team Size</span>
            <span className="text-slate-900 font-bold">11 Field Engineers</span>
          </div>
          <div>
            <span className="text-slate-400 uppercase block">Avg. Project Duration</span>
            <span className="text-slate-900 font-bold">12–15 Months</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="bg-white hover:bg-slate-50/50 border border-slate-200 hover:border-[#2b6cb0] rounded-lg p-7 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              {/* Industry Tag */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#0f4c81] uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <span>{INDUSTRY_ICONS[project.industry] || '🔧'}</span>
                  {project.industry} · {project.location}
                </span>
                {project.value && (
                  <span className="text-[9px] font-mono bg-slate-50 border border-slate-200 text-slate-500 px-2 py-0.5 rounded">
                    {project.value}
                  </span>
                )}
              </div>
              
              <h3 className="text-slate-900 font-bold text-lg mb-3 font-outfit group-hover:text-[#0f4c81] transition-colors leading-snug">
                {project.title}
              </h3>
              
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                {project.scope}
              </p>

              {/* Tech snippet */}
              <div className="text-[10px] font-mono text-[#0f4c81] bg-slate-50 border border-slate-100 rounded px-2 py-1 mb-4 line-clamp-1">
                {project.tech.split(',')[0].trim()}{project.tech.split(',').length > 1 ? ` + ${project.tech.split(',').length - 1} more...` : ''}
              </div>
              
              {/* Outcome teaser */}
              <div className="text-[10px] font-mono text-emerald-700 leading-relaxed line-clamp-1 mb-5">
                ✓ {project.outcome}
              </div>

              <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-[10px] font-mono">
                <span className="text-slate-400 uppercase">Client: {project.client.length > 30 ? project.client.substring(0, 30) + '...' : project.client}</span>
                <span className="text-[#0f4c81] font-bold group-hover:underline">OPEN CASE STUDY →</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm text-center space-y-4">
          <h3 className="text-[#0f4c81] font-bold text-xl font-outfit">Have a Similar Project Requirement?</h3>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our engineering team is available to review your project specifications, prepare technical proposals, and conduct site visits. We have executed projects from ₹30 Lakhs to ₹10 Crore in scope across Andhra Pradesh and Telangana.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact?type=project" className="bg-[#0f4c81] text-white px-6 py-3 rounded font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#2b6cb0] transition-colors">
              Submit Project RFQ →
            </Link>
            <Link href="/services" className="border border-[#0f4c81] text-[#0f4c81] px-6 py-3 rounded font-mono text-xs uppercase tracking-wider font-bold hover:bg-slate-50 transition-colors">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-lg max-w-3xl w-full shadow-2xl relative my-8">
            
            {/* Header */}
            <div className="bg-[#0f4c81] p-6 rounded-t-lg relative">
              <button 
                className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl cursor-pointer font-light leading-none"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <span className="text-[10px] font-mono text-[#93c5fd] uppercase tracking-widest block mb-1 font-bold">
                {INDUSTRY_ICONS[selectedProject.industry] || '🔧'} EPC PROJECT CASE STUDY REPORT — 100% COMMISSIONED
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-outfit leading-snug">
                {selectedProject.title}
              </h3>
            </div>

            {/* Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-b border-slate-200">
              {[
                { label: 'CLIENT', value: selectedProject.client },
                { label: 'SECTOR', value: selectedProject.industry },
                { label: 'LOCATION', value: selectedProject.location },
                { label: 'PROJECT VALUE', value: selectedProject.value || 'On Request' },
              ].map((meta, idx) => (
                <div key={idx} className="p-4 border-r border-slate-100 last:border-r-0">
                  <span className="text-[9px] text-slate-400 font-mono uppercase tracking-widest block">{meta.label}</span>
                  <span className="text-xs text-slate-800 font-semibold leading-snug">{meta.value}</span>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="p-8 space-y-6 text-sm text-slate-700">
              
              {/* Scope */}
              <div className="bg-[#f7f9fc] border border-slate-200 rounded p-5">
                <h4 className="text-xs uppercase text-[#0f4c81] font-mono tracking-wider font-semibold mb-2">1. Project Scope & Deliverables</h4>
                <p className="leading-relaxed text-slate-655">{selectedProject.scope}</p>
                {selectedProject.deliverables && (
                  <ul className="mt-3 space-y-1.5 font-mono text-xs text-slate-600">
                    {selectedProject.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#0f4c81] font-bold shrink-0">▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* Tech */}
              <div>
                <h4 className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold mb-2">2. Hardware & Technologies Deployed</h4>
                <p className="text-xs font-mono text-[#0f4c81] bg-slate-50 border border-slate-200 rounded p-3 leading-relaxed">{selectedProject.tech}</p>
              </div>

              {/* Challenges */}
              {selectedProject.challenges && (
                <div>
                  <h4 className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold mb-2">3. Key Engineering Challenges</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{selectedProject.challenges}</p>
                </div>
              )}

              {/* Outcome */}
              <div className="bg-emerald-50 border border-emerald-200 rounded p-5">
                <h4 className="text-xs uppercase text-emerald-700 font-mono tracking-wider font-semibold mb-2">4. Verified Outcome & Performance Gains</h4>
                <p className="text-sm text-emerald-800 font-semibold leading-relaxed">{selectedProject.outcome}</p>
                {selectedProject.team && (
                  <div className="mt-3 flex gap-6 text-[10px] font-mono text-emerald-700">
                    <span>TEAM: {selectedProject.team}</span>
                    {selectedProject.duration && <span>DURATION: {selectedProject.duration}</span>}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="pt-2 flex gap-3 flex-wrap">
                <a 
                  href="/contact?type=quote"
                  className="bg-[#0f4c81] text-white px-5 py-2.5 rounded font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#2b6cb0] transition-colors"
                >
                  Request Similar Project →
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="border border-slate-200 text-slate-600 px-5 py-2.5 rounded font-mono text-xs uppercase tracking-wider hover:border-slate-400 transition-colors cursor-pointer"
                >
                  Back to Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
