import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F3A] text-slate-300 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Company Brief */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-2xl font-bold tracking-wider text-white font-heading">
                NANDINI ENTERPRISES
              </span>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#3b82f6] font-mono font-bold">
                Industrial Engineering Partner
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              India&apos;s premium high-end industrial automation and electrical systems integrator. 
              Delivering CPRI-certified electrical panels, PLC/SCADA configurations, VFD repairs, 
              and large-scale turnkey B2B engineering projects.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1565C0] hover:text-white transition-colors duration-300 font-mono text-xs font-bold text-slate-400">
                IN
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1565C0] hover:text-white transition-colors duration-300 font-mono text-xs font-bold text-slate-400">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1565C0] hover:text-white transition-colors duration-300 font-mono text-xs font-bold text-slate-400">
                TW
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1565C0] hover:text-white transition-colors duration-300 font-mono text-xs font-bold text-slate-400">
                IG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 font-heading">
              Company
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors block">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors block">Case Studies</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors block">Gallery</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors block">Careers</Link></li>
              <li><Link href="/certifications" className="hover:text-white transition-colors block">Certifications</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 font-heading">
              Engineering Services
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li><Link href="/services/industrial-automation" className="hover:text-[#3b82f6] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Industrial Automation</Link></li>
              <li><Link href="/services/instrumentation" className="hover:text-[#3b82f6] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Instrumentation</Link></li>
              <li><Link href="/services/electrical-systems" className="hover:text-[#3b82f6] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Electrical Systems</Link></li>
              <li><Link href="/services/robotics" className="hover:text-[#3b82f6] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Robotics Solutions</Link></li>
              <li><Link href="/services/elevator-solutions" className="hover:text-[#3b82f6] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Elevator Solutions</Link></li>
              <li><Link href="/services/control-panels" className="hover:text-[#3b82f6] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Control Panels</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 font-heading">
              Corporate Office
            </h4>
            <div className="space-y-5 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" />
                <span>
                  Plot No. 49, Phase-III, IDA Cherlapally, Hyderabad, Telangana - 500051, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#3b82f6] shrink-0" />
                <a href="tel:+914023190131" className="hover:text-white transition-colors">
                  +91-40-23190131
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#3b82f6] shrink-0" />
                <a href="mailto:info@nandiniautomation.com" className="hover:text-white transition-colors">
                  info@nandiniautomation.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#061224] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-500">
          <p>© {currentYear} Nandini Enterprises. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
