import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, UtilityPole, Cable, ShieldAlert, Cpu, PowerOff } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrical Systems Engineering | Nandini Enterprises',
  description: 'Comprehensive HT/LT electrical installations, power distribution, panel manufacturing, and energy management solutions.',
};

export default function ElectricalSystemsPage() {
  return (
    <div className="bg-[#F7F9FC] min-h-screen pt-24 font-sans text-[#0B1F3A]">
      
      {/* Hero Section */}
      <section className="relative bg-[#0B1F3A] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80" 
            alt="Electrical Systems" 
            fill 
            className="object-cover mix-blend-multiply"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-6">
              Industrial <span className="text-blue-400">Electrical</span> Systems
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-mono">
              End-to-end electrical engineering—from high-tension substations to low-tension distribution, delivering safe, scalable, and CPRI-certified power architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 font-mono text-slate-700 leading-loose space-y-8">
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] font-heading">
                Powering the Core of Heavy Industry
              </h2>
              
              <p>
                Electricity is the lifeblood of any manufacturing facility. A poorly designed power distribution system not only leads to catastrophic equipment failure but also poses severe safety hazards to plant personnel. Nandini Enterprises holds a highly coveted 33KV Electrical License, uniquely positioning us to handle complex High Tension (HT) and Low Tension (LT) electrical turnkey projects for massive industrial complexes, infrastructure developments, and government facilities. 
              </p>

              <p>
                Our electrical engineering division is structured to deliver end-to-end solutions. We begin with comprehensive load flow analysis, short circuit studies, and relay coordination to architect a resilient power network. Whether it involves setting up a greenfield 33KV/11KV outdoor substation or upgrading an aging indoor distribution network without disrupting ongoing production, our licensed engineers ensure meticulous execution in strict compliance with the Indian Electricity Rules (IE Rules) and global IEEE standards.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] font-heading mt-12 mb-6">
                HT & LT Installations and Cable Routing
              </h3>
              
              <p>
                A reliable electrical system requires flawless physical infrastructure. We specialize in the precise installation of heavy-duty power transformers, Ring Main Units (RMUs), and Vacuum Circuit Breakers (VCBs). For low-tension distribution, we deploy Air Circuit Breakers (ACBs) and intelligently designed bus-duct systems to handle massive current loads with minimal voltage drop. 
              </p>

              <p>
                Furthermore, proper cable sizing and routing are critical to preventing thermal overload. We utilize advanced 3D modeling to design overhead cable trays and underground trenches that segregate power, control, and instrumentation cables, effectively eliminating electromagnetic interference. We utilize XLPE/PVC armored cables and employ meticulous glanding and termination techniques, tested rigorously using high-voltage Meggers prior to energization.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] font-heading mt-12 mb-6">
                Testing, Commissioning & Energy Management
              </h3>

              <p>
                Before a single switch is thrown, our quality assurance team conducts exhaustive testing protocols. We perform primary and secondary injection testing on protection relays, Contact Resistance (CRM) tests on circuit breakers, and comprehensive earth grid resistance mapping. Only when the entire system passes these stringent safety checks do we proceed with live commissioning.
              </p>

              <p>
                Beyond installation, we empower our clients with advanced Energy Management Systems (EMS). By integrating smart digital energy meters across all major distribution boards and linking them to a central SCADA network, we provide real-time visibility into power consumption, peak demand, and Power Factor (PF). This data-driven approach allows factories to identify energy leaks, optimize load shedding, and implement Automatic Power Factor Correction (APFC) strategies, resulting in significant reductions in utility tariffs.
              </p>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Capabilities Box */}
              <div className="bg-[#F7F9FC] p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold text-[#0B1F3A] font-heading mb-6 border-b border-slate-200 pb-4">
                  Electrical Expertise
                </h4>
                <ul className="space-y-4 font-mono text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <UtilityPole className="w-5 h-5 text-[#1565C0] shrink-0" />
                    <span>33KV / 11KV Substation Setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cable className="w-5 h-5 text-[#1565C0] shrink-0" />
                    <span>HT & LT Cable Routing & Termination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <PowerOff className="w-5 h-5 text-[#1565C0] shrink-0" />
                    <span>Power Transformers & Switchgears</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-[#1565C0] shrink-0" />
                    <span>Protection Relay Testing (Primary/Secondary)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[#1565C0] shrink-0" />
                    <span>Plant Earthing & Lightning Protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-[#1565C0] shrink-0" />
                    <span>SCADA-based Energy Management</span>
                  </li>
                </ul>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-[#0B1F3A] to-[#0A3D91] p-8 rounded-2xl text-white shadow-xl">
                <h4 className="text-2xl font-bold font-heading mb-4">Secure Your Power Supply</h4>
                <p className="text-slate-300 font-mono text-sm mb-8 leading-relaxed">
                  Avoid costly downtimes with robust, professionally engineered electrical systems. Connect with our licensed electrical engineers today.
                </p>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-[#1565C0] hover:bg-blue-500 rounded-lg font-bold transition-colors">
                  Request an Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
