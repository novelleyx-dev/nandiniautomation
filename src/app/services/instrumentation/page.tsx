import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Settings2, Gauge, Activity, Waves, Thermometer, PenTool } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Instrumentation Services | Nandini Enterprises',
  description: 'High-precision process instrumentation solutions including pressure, flow, level, and temperature measurement systems with certified calibration.',
};

export default function InstrumentationPage() {
  return (
    <div className="bg-[#F7F9FC] min-h-screen pt-24 font-sans text-[var(--color-ne-blue-corp)]">
      
      {/* Hero Section */}
      <section className="relative bg-[var(--color-ne-blue-corp)] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1581093588401-f3c22d7a1f1b?auto=format&fit=crop&w=2000&q=80" 
            alt="Process Instrumentation" 
            fill 
            className="object-cover mix-blend-multiply"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-outfit leading-tight mb-6">
              Precision <span className="text-blue-400">Process Instrumentation</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-mono">
              Delivering pinpoint accuracy and unquestionable reliability through comprehensive pressure, flow, level, and temperature measurement systems tailored for heavy industries.
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
                The Nervous System of Your Plant
              </h2>
              
              <p>
                In any continuous or batch manufacturing environment, data integrity begins at the field level. Process instrumentation is the nervous system of an automated plant; if field sensors are inaccurate or drift over time, the entire downstream control logic is fundamentally compromised. Nandini Enterprises specializes in the procurement, installation, and rigorous calibration of high-grade process instrumentation, ensuring that your SCADA systems and PLCs receive flawless real-world data under the most extreme industrial conditions.
              </p>

              <p>
                Our engineering teams possess deep domain expertise across various process variables, primarily focusing on Pressure, Flow, Level, and Temperature. Whether deploying differential pressure transmitters across a superheated steam line in a power generation plant, or installing hygienic magnetic flow meters in a pharmaceutical blending facility, we strictly adhere to ISA (International Society of Automation) standards and manufacturer-specific deployment guidelines to guarantee zero-defect operational performance.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-ne-blue-corp)] font-outfit mt-12 mb-6">
                Comprehensive Measurement Solutions
              </h3>
              
              <p>
                <strong>Pressure & Flow Measurement:</strong> From ultra-low draft pressure transmitters utilized in furnace combustion control to extreme high-pressure sensors for hydraulic presses, our solutions cover the entire spectrum. For flow measurement, we deploy advanced Coriolis mass flow meters, ultrasonic, and electromagnetic flow meters capable of handling highly corrosive or viscous fluids without signal degradation. Our installations include proper straight-run piping analysis and vibration isolation to ensure measurement fidelity.
              </p>

              <p>
                <strong>Level & Temperature Systems:</strong> Reliable level measurement is critical to preventing catastrophic vessel overflows or dry-running pumps. We implement non-contact radar, guided wave radar, and ultrasonic level transmitters engineered to bypass false echoes from agitators or heavy vapors. For temperature control, we supply and calibrate high-accuracy RTDs (PT100) and Thermocouples housed in robust thermowells designed to withstand extreme abrasive environments found in cement kilns and steel foundries.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-ne-blue-corp)] font-outfit mt-12 mb-6">
                Field Installation, Calibration & Loop Checking
              </h3>

              <p>
                The value of an expensive field instrument is negated by improper installation. Our mechanical and instrumentation technicians meticulously handle impulse line tubing, manifold installations, and proper cable shielding to prevent electromagnetic interference (EMI) from adjacent VFDs. Once physically installed, our team executes rigorous loop checking—from the sensor head through the marshalling cabinets directly into the DCS/PLC I/O cards—verifying perfect signal continuity (4-20mA, HART, or Foundation Fieldbus).
              </p>

              <p>
                Furthermore, we offer comprehensive NABL-traceable calibration services. Instrument drift is an inevitable reality in harsh industrial environments. By establishing proactive, scheduled calibration routines using certified deadweight testers, dry block calibrators, and high-precision multimeters, we help our clients maintain ISO compliance, ensure consistent product quality, and extend the lifespan of their valuable field assets.
              </p>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Capabilities Box */}
              <div className="bg-[#F7F9FC] p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold text-[var(--color-ne-blue-corp)] font-outfit mb-6 border-b border-slate-200 pb-4">
                  Instrumentation Focus
                </h4>
                <ul className="space-y-4 font-mono text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <Gauge className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Pressure & Differential Transmitters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Waves className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Coriolis & Magnetic Flow Meters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Radar & Ultrasonic Level Sensors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Thermometer className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>High-Accuracy RTDs & Thermocouples</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings2 className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>HART & Fieldbus Integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <PenTool className="w-5 h-5 text-[var(--color-ne-blue-steel)] shrink-0" />
                    <span>Traceable Calibration Services</span>
                  </li>
                </ul>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-[var(--color-ne-blue-corp)] to-[var(--color-ne-blue-steel)] p-8 rounded-2xl text-white shadow-xl">
                <h4 className="text-2xl font-bold font-outfit mb-4">Need Calibration?</h4>
                <p className="text-slate-300 font-mono text-sm mb-8 leading-relaxed">
                  Ensure your plant operations are based on accurate data. Contact us for instrument procurement, loop checking, or routine calibration services.
                </p>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--color-ne-blue-steel)] hover:bg-blue-500 rounded-lg font-bold transition-colors">
                  Speak to an Expert <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
