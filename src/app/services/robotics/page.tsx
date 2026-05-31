import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cpu, PackageCheck, ShieldCheck, Factory, Box, PenTool } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Robotics Solutions | Nandini Enterprises',
  description: 'Advanced industrial robotics integration including material handling, arc welding, and palletizing robots for smart factories.',
};

export default function RoboticsPage() {
  return (
    <div className="bg-[#F7F9FC] min-h-screen pt-24 font-sans text-[var(--color-ne-blue-corp)]">
      
      {/* Hero Section */}
      <section className="relative bg-[var(--color-ne-blue-corp)] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80" 
            alt="Industrial Robotics" 
            fill 
            className="object-cover mix-blend-multiply"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-outfit leading-tight mb-6">
              Industrial <span className="text-blue-400">Robotics</span> Integration
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-mono">
              Accelerate your manufacturing throughput with high-speed, high-payload robotic systems engineered for material handling, arc welding, and automated palletizing.
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
                The Era of Smart, Autonomous Manufacturing
              </h2>
              
              <p>
                In the modern manufacturing landscape, relying strictly on human labor for repetitive, hazardous, or ultra-high-precision tasks severely limits production capacity and introduces unacceptable margins of error. Industrial robotics represents the pinnacle of factory automation, offering tireless performance, sub-millimeter repeatability, and the flexibility to adapt to shifting production lines. Nandini Enterprises delivers end-to-end robotics integration services, transforming conventional assembly lines into fully autonomous, highly intelligent manufacturing cells.
              </p>

              <p>
                As authorized partners with leading global automation giants like Yaskawa Motoman, we bring unparalleled expertise in sizing, procuring, and programming industrial articulated arms, SCARA, and Delta robots. We do not just sell hardware; we architect complete robotic workstations. This includes the design of custom End-of-Arm Tooling (EOAT), the integration of machine vision systems for dynamic object recognition, and the synchronization of the robotic controller with the master plant PLC over high-speed industrial ethernet protocols.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-ne-blue-corp)] font-outfit mt-12 mb-6">
                Material Handling & Palletizing Robots
              </h3>
              
              <p>
                Logistics and material handling are often the primary bottlenecks in production environments. Our robotic material handling solutions are engineered to lift, transfer, and orient heavy payloads with exceptional speed and precision. Whether it is transferring hot forgings from a press or precisely placing delicate semiconductor wafers, we design the kinematics and gripping mechanisms required to handle the task safely.
              </p>

              <p>
                At the end of the line, our automated robotic palletizing systems take over. We program multi-axis robots capable of handling various box dimensions and weights, stacking them in optimized patterns on pallets for shipping. By integrating 3D vision systems, our palletizing cells can dynamically adjust to mixed-SKU (Stock Keeping Unit) lines, drastically reducing the physical strain on human workers and increasing warehouse throughput by magnitudes.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-ne-blue-corp)] font-outfit mt-12 mb-6">
                Arc Welding & Precision Assembly
              </h3>

              <p>
                Manual arc welding is highly dependent on operator skill, often leading to inconsistent weld penetration and structural defects. We deploy robotic arc welding cells equipped with advanced seam-tracking sensors and synchronized rotary positioners. By maintaining an absolutely consistent travel speed and torch angle, our welding robots lay down flawless, slag-free welds, cycle after cycle. This is critical for industries such as automotive manufacturing and heavy machinery fabrication, where structural integrity is non-negotiable.
              </p>

              <p>
                Safety remains our paramount concern when deploying heavy industrial robots. Every robotic cell we integrate is encased in physical perimeter fencing and equipped with SIL-rated (Safety Integrity Level) light curtains, area scanners, and safety interlocks. We strictly adhere to ISO 10218 robotic safety standards, ensuring that any human intrusion into the active workspace instantly triggers a safe, controlled stop, protecting both your personnel and your capital investment.
              </p>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Capabilities Box */}
              <div className="bg-[#F7F9FC] p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold text-[var(--color-ne-blue-corp)] font-outfit mb-6 border-b border-slate-200 pb-4">
                  Robotics Expertise
                </h4>
                <ul className="space-y-4 font-mono text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <Box className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Heavy Material Handling & Transfer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <PenTool className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Automated Arc & Spot Welding Cells</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <PackageCheck className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>End-of-Line Robotic Palletizing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Factory className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Custom End-of-Arm Tooling (EOAT)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Machine Vision Integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>ISO 10218 Compliant Safety Systems</span>
                  </li>
                </ul>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-[var(--color-ne-blue-corp)] to-[var(--color-ne-blue-steel)] p-8 rounded-2xl text-white shadow-xl">
                <h4 className="text-2xl font-bold font-outfit mb-4">Automate Your Line</h4>
                <p className="text-slate-300 font-mono text-sm mb-8 leading-relaxed">
                  Ready to eliminate production bottlenecks? Contact our robotics integration team to schedule a site survey and feasibility study.
                </p>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--color-ne-blue-steel)] hover:bg-blue-500 rounded-lg font-bold transition-colors">
                  Consult Robotics Expert <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
