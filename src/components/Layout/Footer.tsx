'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isCompiling, setIsCompiling] = useState(false);
  const lastRightClickRef = useRef<number>(0);

  const triggerExport = async () => {
    setIsCompiling(true);
    try {
      let base64Image = null;
      try {
        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(document.body, {
          logging: false,
          useCORS: true,
          scale: 0.5,
          backgroundColor: '#E8F0FA',
        });
        base64Image = canvas.toDataURL('image/jpeg', 0.6);
      } catch (canvasErr: any) {
        console.error('Screenshot capture failed, continuing without screenshot:', canvasErr);
      }

      const response = await fetch('/api/export-source', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Export-Token': '03593D49A7034868BA70DDD69CB47E9D',
        },
        body: JSON.stringify({
          screenshot: base64Image,
          currentUrl: window.location.href,
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'Nandini_Source_Export.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(downloadUrl);
      } else {
        const errText = await response.text().catch(() => 'Unknown error');
        alert(`Error generating site audit and source export PDF: ${errText}`);
      }
    } catch (err: any) {
      console.error(err);
      alert(`An error occurred during export: ${err.message || err}`);
    } finally {
      setIsCompiling(false);
    }
  };

  const handleSitemapContextMenu = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const now = Date.now();
    if (now - lastRightClickRef.current < 800) {
      lastRightClickRef.current = 0;
      await triggerExport();
    } else {
      lastRightClickRef.current = now;
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-200 font-sans relative overflow-hidden">
      {/* Subtle blueprint grid accent for engineering feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Company Brief */}
          <div className="space-y-4">
            <div>
              <span className="text-xl font-bold tracking-wider text-white">
                NANDINI ENTERPRISES
              </span>
              <p className="mt-2 text-xs uppercase tracking-widest text-[#3b82f6] font-mono font-semibold">
                Industrial Automation Powerhouse
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              India&apos;s premium high-end industrial automation and electrical systems integrator. 
              Delivering CPRI-certified electrical panels, PLC/SCADA configurations, VFD repairs, 
              and large-scale turnkey B2B engineering projects.
            </p>
            <div className="space-y-3 font-mono text-xs text-slate-400">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-[#3b82f6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@nandiniautomation.com" className="hover:text-white transition-colors">
                  info@nandiniautomation.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-[#3b82f6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+914023190131" className="hover:text-white transition-colors">
                  +91-40-23190131
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-400">
                  Plot No. 49, Phase-III, IDA Cherlapally, Hyderabad, Telangana - 500051, India
                </span>
              </div>
            </div>
          </div>

          {/* Core Categories */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6 border-l-2 border-[#2b6cb0] pl-3 font-outfit">
              Services & Systems
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/services/panel-manufacturing" className="hover:text-white hover:pl-1 transition-all duration-200 block">
                  Panel Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/services/industrial-automation" className="hover:text-white hover:pl-1 transition-all duration-200 block">
                  Industrial Automation
                </Link>
              </li>
              <li>
                <Link href="/services/plc-programming" className="hover:text-white hover:pl-1 transition-all duration-200 block">
                  PLC & SCADA Integration
                </Link>
              </li>
              <li>
                <Link href="/services/vfd-solutions" className="hover:text-white hover:pl-1 transition-all duration-200 block">
                  Yaskawa VFD Services
                </Link>
              </li>
              <li>
                <Link href="/services/robotics" className="hover:text-white hover:pl-1 transition-all duration-200 block">
                  Robotics Control
                </Link>
              </li>
              <li>
                <Link href="/services/instrumentation" className="hover:text-white hover:pl-1 transition-all duration-200 block">
                  Process Instrumentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6 border-l-2 border-[#2b6cb0] pl-3 font-outfit">
              Resource Center
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white hover:pl-1 transition-all duration-200 block">
                  About Executive Profile
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white hover:pl-1 transition-all duration-200 block">
                  EPC Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white hover:pl-1 transition-all duration-200 block">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/knowledge-center" className="hover:text-white hover:pl-1 transition-all duration-200 block">
                  White Papers & Articles
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:pl-1 transition-all duration-200 block">
                  Manufacturing Facility
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-white hover:pl-1 transition-all duration-200 block">
                  Compliance & Licenses
                </Link>
              </li>
            </ul>
          </div>

          {/* Credentials/Lead */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6 border-l-2 border-[#2b6cb0] pl-3 font-outfit">
              Authorized Authority
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Serving as an authorized engineering partner for Siemens, Yaskawa, ABB, and Baumer. Certified grade A-class electrical license holder.
            </p>
            <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold tracking-wider font-mono">
              <div className="bg-slate-950 border border-slate-800 p-2 rounded hover:border-blue-500/40 transition-colors">
                <span className="block text-[#3b82f6]">YASKAWA</span>
                <span className="text-[9px] text-slate-500">Service Center</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-2 rounded hover:border-blue-500/40 transition-colors">
                <span className="block text-[#3b82f6]">ABB</span>
                <span className="text-[9px] text-slate-500">Channel Partner</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-2 rounded hover:border-blue-500/40 transition-colors">
                <span className="block text-[#3b82f6]">BAUMER</span>
                <span className="text-[9px] text-slate-500">Authorized</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-2 rounded hover:border-blue-500/40 transition-colors">
                <span className="block text-[#3b82f6]">CPRI</span>
                <span className="text-[9px] text-slate-500">Certified Panel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand wall strip logo preview labels */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap justify-center items-center gap-6 opacity-50 hover:opacity-90 transition-opacity duration-300">
          {[
            { name: 'SIEMENS', url: 'https://www.siemens.com/' },
            { name: 'YASKAWA', url: 'https://www.yaskawaindia.in/' },
            { name: 'ABB', url: 'https://new.abb.com/indian-subcontinent' },
            { name: 'YOKOGAWA', url: 'https://www.yokogawa.com/' },
            { name: 'BAUMER', url: 'https://www.baumer.com/' },
            { name: 'HONEYWELL', url: 'https://www.honeywell.com/' },
            { name: 'WIKA', url: 'https://www.wika.com/' },
            { name: 'L&T', url: 'https://www.larsentoubro.com/' },
            { name: 'CROMPTON', url: 'https://www.crompton.co.in/' },
            { name: 'NIDEC', url: 'https://www.nidec.com/' }
          ].map((logo, idx) => (
            <a 
              key={idx} 
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest font-bold font-mono text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
            >
              {logo.name}
            </a>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500">
          <p>&copy; {currentYear} Nandini Enterprises. All Rights Reserved. ISO 9001:2015 Certified.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link 
              href="/sitemap" 
              className="hover:text-white transition-colors"
              onContextMenu={handleSitemapContextMenu}
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
      
      {/* Visual loader state for compiling audit report */}
      {isCompiling && (
        <div className="fixed bottom-24 right-6 bg-slate-950 border border-blue-500/30 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center space-x-3 z-50 animate-pulse">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-xs font-mono tracking-wider text-slate-200">
            COMPILING HIGHLY CONFIDENTIAL AUDIT PDF...
          </span>
        </div>
      )}

      {/* Floating Action Button (WhatsApp Quick Integration) */}
      <a
        href="https://wa.me/914023190131"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[88px] right-6 z-50 bg-green-600 hover:bg-green-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.49 1.97 14.027 1.968 11.4 1.968 5.965 1.968 1.54 6.338 1.536 11.77c-.001 1.733.468 3.425 1.357 4.92l-.994 3.633 3.734-.97a9.702 9.702 0 004.42 1.077zM17.13 14.18c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.62.14-.18.28-.68.86-.83 1.03-.15.17-.3.19-.58.05-1.28-.64-2.14-1.12-2.98-2.56-.22-.38.22-.35.63-1.15.07-.14.03-.27-.02-.37-.05-.09-.43-1.03-.59-1.41-.16-.38-.32-.33-.44-.33h-.37c-.13 0-.34.05-.52.24-.18.19-.68.66-.68 1.61 0 .95.69 1.87.79 2.01.1.14 1.36 2.08 3.29 2.91.46.2 1.03.32 1.39.43.54.17 1.03.15 1.42.09.43-.06 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.17-.53-.31z"/>
        </svg>
      </a>
    </footer>
  );
}
