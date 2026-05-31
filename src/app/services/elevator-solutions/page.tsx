import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ArrowDownRight, ShieldCheck, Factory, Wrench, Settings } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elevator Solutions & Maintenance | Nandini Enterprises',
  description: 'Industrial and commercial elevator solutions including installation, modernization, and AMC maintenance services.',
};

export default function ElevatorSolutionsPage() {
  return (
    <div className="bg-[#E8F0FA] min-h-screen pt-24 font-sans text-[var(--color-ne-blue-corp)]">
      
      {/* Hero Section */}
      <section className="relative bg-[var(--color-ne-blue-corp)] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=2000&q=80" 
            alt="Elevator Solutions" 
            fill 
            className="object-cover mix-blend-multiply"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-outfit leading-tight mb-6">
              Industrial <span className="text-blue-400">Elevator</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-mono">
              Engineered for seamless vertical mobility. Specializing in high-capacity freight elevators, robust industrial lifts, and passenger elevator modernization with uncompromised safety standards.
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ne-blue-corp)] font-outfit">
                Vertical Mobility Built for Heavy Industry
              </h2>
              
              <p>
                In expansive manufacturing plants, multi-level warehouses, and high-rise commercial structures, vertical mobility is not merely a convenience—it is a critical logistical artery. A malfunctioning freight elevator can halt an entire production line, while an unreliable passenger lift compromises building safety and efficiency. Nandini Enterprises delivers robust, enterprise-grade elevator solutions tailored specifically for heavy industrial and high-traffic commercial environments.
              </p>

              <p>
                Our elevator division specializes in the complete lifecycle management of vertical transport systems. This encompasses the custom design and installation of new lifts, the technical modernization of obsolete control systems, and rigorous Annual Maintenance Contracts (AMC). Drawing upon our deep expertise in variable frequency drives (VFDs) and PLC automation, we engineer elevator systems that offer exceptionally smooth ride quality, precise floor leveling, and optimized energy consumption.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-ne-blue-corp)] font-outfit mt-12 mb-6">
                Freight & Heavy Industrial Elevators
              </h3>
              
              <p>
                Industrial environments demand elevators capable of withstanding extreme abuse, heavy forklift traffic, and harsh ambient conditions (such as high dust or corrosive atmospheres). We supply and install heavy-duty freight elevators featuring reinforced cabins, industrial-grade traction machines, and heavy-gauge steel structural framing. Whether you require a 2-ton goods lift for a textile mill or a massive 10-ton hydraulic freight elevator for an automotive plant, our engineering team ensures the structural integrity and lifting capacity perfectly match your operational demands.
              </p>

              <p>
                Furthermore, we recognize the critical importance of safety in industrial lifting. All our freight and passenger elevators are equipped with redundant safety mechanisms, including overspeed governors, progressive safety catches, infrared door curtains, and automatic rescue devices (ARD) that safely evacuate passengers to the nearest floor during a power failure. We strictly adhere to the IS 14665 standards for elevator safety and installation in India.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-ne-blue-corp)] font-outfit mt-12 mb-6">
                Modernization & Preventative Maintenance (AMC)
              </h3>

              <p>
                Aging elevator systems suffer from frequent breakdowns, high energy costs, and obsolete replacement parts. Our elevator modernization services breathe new life into older installations. By retrofitting outdated relay-logic controllers with state-of-the-art microprocessor-based control panels and integrating modern closed-loop Yaskawa VFDs, we dramatically improve ride comfort, reduce waiting times, and cut power consumption by up to 40%. Often, modernization provides the benefits of a brand-new elevator at a fraction of the cost and downtime of a full replacement.
              </p>

              <p>
                Beyond installation and upgrades, the true reliability of an elevator lies in its maintenance. Nandini Enterprises offers comprehensive Annual Maintenance Contracts (AMC) designed to proactively identify and rectify mechanical wear before it results in a breakdown. Our dedicated elevator service teams conduct rigorous monthly inspections, lubricating guide rails, checking rope tension, testing safety circuits, and analyzing motor performance. With our 24/7 emergency response capability, you are assured of maximum uptime and complete peace of mind.
              </p>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Capabilities Box */}
              <div className="bg-[#E8F0FA] p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold text-[var(--color-ne-blue-corp)] font-outfit mb-6 border-b border-slate-200 pb-4">
                  Elevator Services
                </h4>
                <ul className="space-y-4 font-mono text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <Factory className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Heavy-Duty Freight Elevators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowUpRight className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Passenger & Commercial Lifts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowDownRight className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Hydraulic & Traction Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Microprocessor & VFD Modernization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Comprehensive AMC Maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>IS 14665 Safety Compliance</span>
                  </li>
                </ul>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-[var(--color-ne-blue-corp)] to-[var(--color-ne-blue-steel)] p-8 rounded-2xl text-white shadow-xl">
                <h4 className="text-2xl font-bold font-outfit mb-4">Upgrade Your Mobility</h4>
                <p className="text-slate-300 font-mono text-sm mb-8 leading-relaxed">
                  Experiencing frequent elevator breakdowns? Contact us for a comprehensive site audit, modernization quote, or AMC partnership.
                </p>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--color-ne-blue-steel)] hover:bg-blue-500 rounded-lg font-bold transition-colors">
                  Request an Inspection <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
