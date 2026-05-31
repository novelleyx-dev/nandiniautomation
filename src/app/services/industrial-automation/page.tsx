import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Factory, Cpu, Network, PenTool } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Automation Services | Nandini Enterprises',
  description: 'Enterprise-grade industrial automation solutions including PLC programming, SCADA development, RTU integration, and plant automation by Nandini Enterprises.',
};

export default function IndustrialAutomationPage() {
  return (
    <div className="bg-[#F7F9FC] min-h-screen pt-24 font-sans text-[var(--color-ne-blue-corp)]">
      
      {/* Hero Section */}
      <section className="relative bg-[var(--color-ne-blue-corp)] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80" 
            alt="Industrial Automation" 
            fill 
            className="object-cover mix-blend-multiply"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-outfit leading-tight mb-6">
              Advanced <span className="text-blue-400">Industrial Automation</span> Engineering
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-mono">
              Empowering smart manufacturing with state-of-the-art PLC programming, seamless SCADA integration, and turnkey plant automation solutions designed for high reliability and maximum throughput.
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
                Transforming Legacy Factories into Smart Ecosystems
              </h2>
              
              <p>
                In today’s fiercely competitive industrial landscape, relying on outdated manual processes or obsolete legacy control systems severely bottlenecks production scalability. Nandini Enterprises delivers enterprise-grade industrial automation services designed to orchestrate complex manufacturing workflows seamlessly. With over 18 years of deeply rooted experience across the automation spectrum, our engineering solutions bridge the gap between heavy machinery and intelligent data processing, driving operational excellence and mitigating unplanned downtime.
              </p>

              <p>
                Our core competency lies in architecting robust automation topologies that span from the shop floor to the executive dashboard. By integrating cutting-edge Programmable Logic Controllers (PLCs), Remote Terminal Units (RTUs), and sophisticated Supervisory Control and Data Acquisition (SCADA) systems, we empower plant operators with real-time visibility and highly granular control over their manufacturing processes. Whether you are operating a high-temperature steel rolling mill, a continuous-process cement plant, or a precision pharmaceutical facility, our tailored automation architectures are engineered for strict compliance, uncompromising safety, and unparalleled efficiency.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-ne-blue-corp)] font-outfit mt-12 mb-6">
                Comprehensive PLC & SCADA Development
              </h3>
              
              <p>
                The brain of any modern industrial facility is its PLC network. At Nandini Enterprises, our certified automation engineers possess extensive expertise in programming and commissioning industry-leading PLC platforms, including those from Yaskawa, Siemens, Allen-Bradley (Rockwell Automation), Mitsubishi, and ABB. We do not merely write logic; we develop highly optimized, fail-safe control algorithms that respond instantly to critical process deviations.
              </p>

              <p>
                Coupled with our PLC programming is our advanced SCADA development capability. We design intuitive, high-performance Human-Machine Interfaces (HMIs) and SCADA dashboards that translate massive volumes of raw sensor data into actionable operational intelligence. From historical trending and predictive alarm management to comprehensive batch reporting, our SCADA systems provide the situational awareness necessary to drive continuous improvement. We utilize open-architecture protocols (such as OPC UA, Modbus TCP/IP, and Profinet) to ensure seamless industrial networking, breaking down data silos and enabling true IT/OT convergence.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-ne-blue-corp)] font-outfit mt-12 mb-6">
                Drive Integration & Plant Automation
              </h3>

              <p>
                Precise motor control is critical to energy efficiency and mechanical longevity. As an authorized system integrator and service partner for global giants like Yaskawa, we specialize in the seamless integration of Variable Frequency Drives (VFDs) and servo systems into larger automation ecosystems. By closely synchronizing drives with master PLCs, we achieve exact tension control, precise positioning, and optimized torque curves, dramatically reducing energy consumption and mechanical wear on heavy rotating equipment.
              </p>

              <p>
                Our turnkey plant automation services encompass the entire project lifecycle. From initial site surveys, loop checking, and control system engineering to panel manufacturing, software simulation, and final site commissioning, we handle it all. We ensure that every limit switch, proportional valve, and variable speed drive operates in perfect harmony, culminating in a highly reliable, fully automated manufacturing environment that yields maximum Return on Investment (ROI).
              </p>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Capabilities Box */}
              <div className="bg-[#F7F9FC] p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold text-[var(--color-ne-blue-corp)] font-outfit mb-6 border-b border-slate-200 pb-4">
                  Core Capabilities
                </h4>
                <ul className="space-y-4 font-mono text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Advanced PLC Programming (Yaskawa, Siemens, ABB)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Factory className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>SCADA & HMI Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Network className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Industrial Networking & Telemetry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <PenTool className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Control System Engineering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>VFD & Servo Drive Integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>On-site Testing & Commissioning</span>
                  </li>
                </ul>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-[var(--color-ne-blue-corp)] to-[var(--color-ne-blue-steel)] p-8 rounded-2xl text-white shadow-xl">
                <h4 className="text-2xl font-bold font-outfit mb-4">Ready to Automate?</h4>
                <p className="text-slate-300 font-mono text-sm mb-8 leading-relaxed">
                  Speak directly with our senior engineering team to discuss your specific plant automation requirements and request a technical consultation.
                </p>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--color-ne-blue-steel)] hover:bg-blue-500 rounded-lg font-bold transition-colors">
                  Contact Our Engineers <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
