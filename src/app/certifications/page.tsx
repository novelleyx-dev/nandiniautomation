'use client';

import { useState } from 'react';
import { CERTIFICATIONS, Certification } from '@/lib/data';

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div className="bg-[#f7f9fc] min-h-screen text-slate-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#0f4c81] font-mono font-bold block">
                REGULATORY CLEARANCES
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit leading-tight">
                Certifications, Compliance & Audits
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-655">
                Nandini Enterprises maintains absolute compliance with state and central regulatory frameworks. Click any certificate card below to view verification details.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0f4c81] to-[#2b6cb0] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <img 
                src="https://images.unsplash.com/photo-1581092162384-8987c17d4e26?auto=format&fit=crop&w=800&q=80" 
                alt="Regulatory Compliance and Industrial Testing" 
                className="relative rounded-lg shadow-xl object-cover w-full h-[280px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certs Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="bg-white border border-slate-200 hover:border-[#2b6cb0] rounded-lg p-8 cursor-pointer shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-8 h-8 rounded bg-[#f7f9fc] border border-slate-200 flex items-center justify-center text-[#0f4c81] font-bold mb-4 font-mono text-xs shadow-xs">
                  0{index + 1}
                </div>
                <h3 className="text-slate-900 font-bold text-sm mb-2 font-outfit group-hover:text-[#0f4c81] transition-colors">
                  {cert.name}
                </h3>
                <p className="text-slate-400 text-[10px] font-mono mb-4">
                  Doc Ref: {cert.number}
                </p>
              </div>
              <span className="text-[10px] text-[#0f4c81] font-bold font-mono tracking-wider">
                VIEW COMPLIANCE &rarr;
              </span>
            </div>
          ))}
        </div>

        {/* Supplementary table listing */}
        <div className="mt-16 bg-white border border-slate-200 rounded-lg overflow-hidden max-w-4xl mx-auto shadow-sm">
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
            <h3 className="text-[#0f4c81] font-bold text-sm uppercase tracking-wider font-mono">
              Statutory Registrations Directory
            </h3>
          </div>
          <div className="divide-y divide-slate-100 text-xs font-mono">
            {[
              { type: 'GSTIN', desc: 'Goods and Services Tax Registration Certificate (Government of India)', status: 'ACTIVE / COMPLIANT' },
              { type: 'IEC CODE', desc: 'Import Export Code License for global component procurement', status: 'ACTIVE / COMPLIANT' },
              { type: 'EPF REG', desc: 'Employees Provident Fund Registration for field personnel safety assurance', status: 'COMPLIANT' },
              { type: 'ESI REG', desc: 'Employees State Insurance Registration compliance', status: 'COMPLIANT' },
              { type: 'UDYAM', desc: 'MSME Registration Number UDYAM-TS-02-XXXXXX', status: 'REGISTERED' }
            ].map((stat, idx) => (
              <div key={idx} className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-slate-700">
                <span className="text-[#0f4c81] font-bold w-28 shrink-0">{stat.type}</span>
                <span className="text-slate-600">{stat.desc}</span>
                <span className="text-emerald-700 font-bold shrink-0 text-[10px] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">{stat.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification details Dialog */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white border border-slate-200 rounded-lg max-w-md w-full p-8 shadow-2xl relative">
            <button 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-xl cursor-pointer"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
            <span className="text-[10px] font-mono text-[#0f4c81] uppercase tracking-widest block mb-2 font-bold">
              Registration Certificate
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-6 font-outfit">
              {selectedCert.name}
            </h3>
            
            <div className="space-y-6 text-sm text-slate-700">
              <div className="bg-[#f7f9fc] border border-slate-200 p-6 rounded text-center font-mono">
                <span className="block text-slate-400 text-[10px] mb-2 font-bold">CERTIFICATE ID NUMBER</span>
                <span className="text-slate-800 font-bold tracking-wider">{selectedCert.number}</span>
                
                <div className="w-16 h-16 border-2 border-[#0f4c81]/25 border-dashed rounded-full flex items-center justify-center mx-auto mt-6 text-[#0f4c81] font-bold text-lg">
                  ISO
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold mb-1">Approved Audit Scope:</h4>
                <p className="text-xs leading-relaxed text-slate-600">{selectedCert.scope}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">Status: ACTIVE</span>
                <button 
                  className="px-4 py-2 bg-[#0f4c81] hover:bg-[#2b6cb0] text-white font-bold rounded transition-colors cursor-pointer"
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
