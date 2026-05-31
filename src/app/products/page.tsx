'use client';

import { useState } from 'react';

interface BrandSpec {
  parameter: string;
  value: string;
}

interface BrandProduct {
  name: string;
  desc: string;
  specs: BrandSpec[];
  applications: string[];
  advantage: string;
}

interface Brand {
  name: string;
  tagline: string;
  desc: string;
  partnership: string;
  products: BrandProduct[];
  brands_note?: string;
}

const brands: Brand[] = [
  {
    name: "NE Manufacturing",
    tagline: "In-House Engineered Control Panel Systems",
    desc: "Nandini Enterprises' own line of custom-engineered electrical control panels and automation skids, manufactured at our Cherlapally facility. Every assembly is built to customer-specific drawings, CPRI-tested, and backed by our 25+ years of field engineering experience. Our panels are designed for robustness, ease of maintenance, and long operational life in harsh industrial environments.",
    partnership: "OEM Manufacturer — Internal Brand",
    products: [
      {
        name: "Power Control Centers (PCC)",
        desc: "Centralized power distribution switchgear assemblies for main incoming and outgoing feeder management.",
        specs: [
          { parameter: "Busbar Rating", value: "400A to 6300A (copper or aluminum)" },
          { parameter: "Short-Circuit Rating", value: "Up to 65kA / 1 second (CPRI certified)" },
          { parameter: "Incomer Type", value: "ACB with electronic trip unit (LSI/LSIG)" },
          { parameter: "Form Segregation", value: "Form 4b — full internal isolation" },
          { parameter: "Enclosure Protection", value: "IP41 standard, IP55/65 optional" },
          { parameter: "Design Standard", value: "IEC/IS 61439-1 & 2" },
        ],
        applications: ["Steel rolling mills", "Cement plants", "Chemical facilities", "Commercial complexes", "Power plant auxiliaries"],
        advantage: "CPRI-tested architecture ensures bus fault containment; active ventilation maintains internal temperatures 18°C below industry average."
      },
      {
        name: "Motor Control Centers (MCC)",
        desc: "Centralized motor starting, protection, and monitoring systems with optional smart bus integration.",
        specs: [
          { parameter: "Configuration", value: "Fixed or drawout modular drawers" },
          { parameter: "Starter Type", value: "DOL, Star-Delta, Soft Starter, VFD" },
          { parameter: "Protection Class", value: "Type-1 or Type-2 coordination" },
          { parameter: "Communication", value: "Profibus-DP, Modbus RTU/TCP" },
          { parameter: "Monitoring", value: "Integrated multifunction relays" },
          { parameter: "Enclosure", value: "IP54 standard; IP65 outdoor version" },
        ],
        applications: ["Pumping stations", "Process plants with 10–200 motors", "HVAC distribution centers", "Conveyor motor groups"],
        advantage: "Intelligent MCC with per-drawer motor diagnostics — running hours, start count, earth fault status — accessible via SCADA over Modbus."
      },
      {
        name: "VFD Drive Panels",
        desc: "Custom-built enclosures housing variable frequency drives with integrated protection, filtration, and communication systems.",
        specs: [
          { parameter: "Drive Range", value: "0.75kW to 1000kW (LV); up to 10MW (MV)" },
          { parameter: "Input Filtering", value: "AC line reactor + harmonic filter" },
          { parameter: "Braking", value: "Dynamic braking resistors available" },
          { parameter: "Bypass", value: "Manual or automatic DOL bypass" },
          { parameter: "Communication", value: "Profinet, Modbus TCP, EtherNet-IP" },
          { parameter: "Cooling", value: "Forced ventilation with thermostat control" },
        ],
        applications: ["Pumps and fans", "Crane/hoist systems", "Elevators", "Conveyors", "Centrifuges"],
        advantage: "Integrated bypass switchgear allows motor to continue operating on DOL if drive trips — critical for continuous process plants."
      },
      {
        name: "Elevator Controller Panels",
        desc: "Microprocessor-based lift controller assemblies for passenger, goods, and service elevator applications.",
        specs: [
          { parameter: "Controller Type", value: "32-bit microprocessor with dual redundancy" },
          { parameter: "Drive Integration", value: "Yaskawa L1000A vector drive" },
          { parameter: "Speed Range", value: "0.5 m/s to 2.5 m/s" },
          { parameter: "Rescue Device", value: "ARD battery backup, auto-level to floor" },
          { parameter: "Leveling Accuracy", value: "±3mm with magnetic/optical sensors" },
          { parameter: "Standards", value: "IS 14665, EN 81-20, ASME A17.1" },
        ],
        applications: ["High-rise residential buildings", "Hospitals and healthcare", "Industrial goods elevators", "Commercial complexes"],
        advantage: "ARD (Automatic Rescue Device) included as standard — moves cabin to nearest floor and opens doors within 15 seconds of power failure."
      }
    ]
  },
  {
    name: "YASKAWA",
    tagline: "World's Largest Motion Control Manufacturer",
    desc: "Yaskawa Electric Corporation (Japan, founded 1915) is the global leader in variable frequency drives, servo systems, and industrial robotics. Nandini Enterprises is an Authorized Service Center and System Integrator for Yaskawa India, providing drive commissioning, repair, parameter optimization, and warranty-backed spare parts across Telangana and Andhra Pradesh. We stock Yaskawa drives from 0.4kW to 630kW at our Cherlapally facility with same-day dispatch capability.",
    partnership: "Authorized Service Center & System Integrator — Yaskawa India Ltd.",
    products: [
      {
        name: "GA700 / A1000 General Purpose VFDs",
        desc: "High-performance vector control drives for demanding industrial applications requiring precision torque and speed control.",
        specs: [
          { parameter: "Power Range", value: "0.4kW to 630kW (200V/400V class)" },
          { parameter: "Control Mode", value: "V/f, Open-loop vector, Closed-loop vector" },
          { parameter: "Torque at 0Hz", value: "150% (open-loop), 200% (closed-loop)" },
          { parameter: "Speed Accuracy", value: "±0.2% (open-loop), ±0.02% (closed-loop)" },
          { parameter: "Protection", value: "IP20 standard, IP55 option" },
          { parameter: "Communication", value: "Profinet, EtherNet-IP, Modbus TCP" },
        ],
        applications: ["Pumps and fans", "Compressors", "Conveyors", "Machine tools", "Mixers and agitators"],
        advantage: "Auto-tuning wizard configures motor parameters in 5 minutes without load — eliminating manual parameter entry errors that cause 60% of VFD commissioning issues."
      },
      {
        name: "L1000A Elevator Drive",
        desc: "Dedicated elevator drive with integral passenger comfort features, safety functions, and rescue operation capability.",
        specs: [
          { parameter: "Power Range", value: "5.5kW to 110kW" },
          { parameter: "S-Curve Profiles", value: "5-parameter jerk control" },
          { parameter: "Leveling Speed", value: "Configurable 0.01–0.5 m/s" },
          { parameter: "Safety Functions", value: "STO (Safe Torque Off), SS1, SS2" },
          { parameter: "Rescue Operation", value: "ARD battery input standard" },
          { parameter: "Standards", value: "EN 81-20/50, IEC 61800-5-2" },
        ],
        applications: ["Passenger elevators", "Goods elevators", "Hospital lifts", "Escalators"],
        advantage: "Dedicated elevator firmware with pre-programmed leveling, brake control, and rescue sequences — reduces commissioning time by 40% vs. general-purpose drives."
      },
      {
        name: "Motoman Industrial Robots",
        desc: "High-speed, high-accuracy articulated arm robots for welding, assembly, pick-and-place, and palletizing applications.",
        specs: [
          { parameter: "Payload Range", value: "3kg (GP4) to 600kg (MH600)" },
          { parameter: "Reach", value: "550mm to 3159mm depending on model" },
          { parameter: "Repeatability", value: "±0.02mm to ±0.07mm" },
          { parameter: "Axes", value: "4, 6, or 7 axes depending on model" },
          { parameter: "Controller", value: "YRC1000 — EtherCAT, Profinet ready" },
          { parameter: "IP Rating", value: "IP67 standard (washdown versions)" },
        ],
        applications: ["Pick-and-place assembly", "Arc/spot welding", "Palletizing", "Machine tending", "Quality inspection"],
        advantage: "YRC1000 controller runs EtherCAT at 250μs cycle time — enabling real-time force control for precision assembly and polishing applications."
      }
    ]
  },
  {
    name: "ABB",
    tagline: "Technology Leader in Electrification & Automation",
    desc: "ABB Ltd. (Switzerland, founded 1988 from ASEA/BBC merger) is a world-leading power and automation technology company. We supply and integrate ABB products across medium voltage drives, high-efficiency motors, and process control products. ABB's ACS880 and ACS8000 medium voltage drive series are benchmarks for demanding process industry applications.",
    partnership: "Authorized Supplier & Integrator — ABB India Ltd.",
    products: [
      {
        name: "ACS880 Industrial Drives",
        desc: "Direct torque control (DTC) drives for the most demanding process industry motor control requirements.",
        specs: [
          { parameter: "Power Range", value: "0.37kW to 5600kW (modular frames)" },
          { parameter: "Control Algorithm", value: "Direct Torque Control (DTC)" },
          { parameter: "Torque Response", value: "<2ms full torque step response" },
          { parameter: "Speed Accuracy", value: "±0.1% without encoder" },
          { parameter: "Energy Optimizer", value: "Automatic flux optimization" },
          { parameter: "Communication", value: "PROFINET, EtherNet/IP, Modbus TCP" },
        ],
        applications: ["Pumps and fans (energy optimizer)", "Compressors and blowers", "Cranes and hoists", "Centrifuges", "Marine propulsion"],
        advantage: "Direct Torque Control delivers 2ms torque response — 10× faster than standard V/f control — critical for crane anti-sway and steel rolling mill tension control."
      },
      {
        name: "HXR / AMI High-Efficiency Motors",
        desc: "Premium efficiency IE3/IE4 motors designed for continuous heavy industrial operation.",
        specs: [
          { parameter: "Power Range", value: "75kW to 1400kW (HXR cast iron frame)" },
          { parameter: "Efficiency Class", value: "IE3 (Premium), IE4 (Super Premium)" },
          { parameter: "Insulation Class", value: "Class F (155°C) rated, Class B rise" },
          { parameter: "Bearing Type", value: "Anti-friction, grease/oil lubricated" },
          { parameter: "Frame Material", value: "Cast iron (HXR), aluminum (AMI)" },
          { parameter: "Standards", value: "IEC 60034-1, ATEX Zone 2 versions" },
        ],
        applications: ["Compressors", "Pumps above 90kW", "Fans and blowers", "Mixers", "Mill drives"],
        advantage: "IE4 Super Premium motors reduce energy consumption 2–4% vs IE3 — on a 200kW motor running 6000 hours/year, this saves ₹2.8 lakhs annually at ₹8/kWh."
      }
    ]
  },
  {
    name: "YOKOGAWA",
    tagline: "Precision Measurement & Process Control Excellence",
    desc: "Yokogawa Electric Corporation (Japan, founded 1915) specializes in industrial automation, control instrumentation, and test & measurement. Their DCS (Centum VP), recorders, transmitters, and flow meters are gold standards in process industries. We supply and commission Yokogawa instruments with full HART loop configuration and NABL-traceable calibration services.",
    partnership: "Authorized Supplier & Service Partner — Yokogawa India Ltd.",
    products: [
      {
        name: "EJA/EJX Transmitters",
        desc: "Differential pressure, gauge pressure, and absolute pressure transmitters for flow, level, and pressure measurement.",
        specs: [
          { parameter: "Accuracy", value: "±0.04% (EJX890A flagship model)" },
          { parameter: "Turndown Ratio", value: "Up to 200:1 (EJX series)" },
          { parameter: "Response Time", value: "90ms (standard), 10ms (fast response)" },
          { parameter: "Communication", value: "HART 7, FOUNDATION Fieldbus, PROFIBUS-PA" },
          { parameter: "Wetted Material", value: "316SS, Hastelloy C276, Tantalum" },
          { parameter: "Approvals", value: "ATEX Zone 1/2, IECEx, SIL-2 capable" },
        ],
        applications: ["Flow measurement via orifice/venturi", "Tank level monitoring", "Boiler drum level", "Filter differential pressure monitoring"],
        advantage: "EJX890A multi-sensing transmitter measures both differential and static pressure simultaneously — replacing two transmitters and saving installation cost."
      },
      {
        name: "AXF Electromagnetic Flow Meters",
        desc: "Magnetic flow meters for conductive liquid flow measurement from small process lines to large municipal mains.",
        specs: [
          { parameter: "Line Size", value: "DN10 to DN2400" },
          { parameter: "Accuracy", value: "±0.35% of reading" },
          { parameter: "Liner Material", value: "PTFE, Hard Rubber, PFA" },
          { parameter: "Electrode Material", value: "316SS, Hastelloy, Platinum" },
          { parameter: "Communication", value: "HART, PROFIBUS-PA, Modbus" },
          { parameter: "Standards", value: "MID certified, OIML R49" },
        ],
        applications: ["Water distribution mains", "Wastewater treatment", "Chemical dosing", "Pulp and paper", "Food and beverage lines"],
        advantage: "Dual-frequency excitation (AXF models) eliminates measurement noise in slurry and low-conductivity applications where standard mag meters fail."
      },
      {
        name: "CENTUM VP Distributed Control System",
        desc: "Enterprise DCS platform integrating process control, safety, HMI, and plant information management.",
        specs: [
          { parameter: "I/O Capacity", value: "Up to 100,000 I/O points" },
          { parameter: "Control Network", value: "Vnet/IP (1Gbps, redundant)" },
          { parameter: "Scan Cycle", value: "100ms to 1000ms per control station" },
          { parameter: "Redundancy", value: "Dual-redundant controllers, networks, and HMIs" },
          { parameter: "Integration", value: "OPC DA/UA, Modbus, PROFIBUS" },
          { parameter: "History", value: "Exaquantum plant historian" },
        ],
        applications: ["Oil refineries", "Chemical plants", "Power generation", "LNG terminals", "Pharmaceutical manufacturing"],
        advantage: "FCS (Field Control Station) self-diagnosing capability detects I/O card faults automatically, reducing mean time to diagnose from 2 hours to under 5 minutes."
      }
    ]
  },
  {
    name: "BAUMER",
    tagline: "Innovative Sensor Technology & Precision Encoders",
    desc: "Baumer Group (Switzerland, founded 1952) develops and manufactures innovative sensor solutions for industrial automation and process monitoring. Their encoders, proximity sensors, vision sensors, and process instruments are used where precision, reliability, and harsh-environment performance are non-negotiable. We stock and integrate Baumer products across automation and instrumentation projects throughout India.",
    partnership: "Authorized Distributor & Application Partner — Baumer India Pvt. Ltd.",
    products: [
      {
        name: "Heavy Duty Industrial Encoders",
        desc: "Rotary encoders for speed, position, and angle measurement in heavy industrial drive applications.",
        specs: [
          { parameter: "Type", value: "Incremental & Absolute (single/multi-turn)" },
          { parameter: "Resolution", value: "Up to 65,536 steps/revolution (16-bit)" },
          { parameter: "Max Speed", value: "6000 RPM continuous" },
          { parameter: "Shaft Loading", value: "Up to 400N radial, 200N axial" },
          { parameter: "Protection", value: "IP67, IP69K (washdown)" },
          { parameter: "Interface", value: "HTL, TTL, SSI, PROFIBUS, EtherCAT" },
        ],
        applications: ["Crane rope drum position", "Conveyor belt speed", "Robot joint angles", "Wind turbine rotor position", "Printing press registration"],
        advantage: "Magnetic encoder technology operates without optical components — immune to dust, condensation, and mechanical shock that damage optical encoders in steel and cement plants."
      },
      {
        name: "OADM Radar & Ultrasonic Level Sensors",
        desc: "Non-contact level measurement for liquids, pastes, and bulk solids in storage vessels and process tanks.",
        specs: [
          { parameter: "Technology", value: "80GHz FMCW radar or 40kHz ultrasonic" },
          { parameter: "Range", value: "Radar: 0.05m to 70m; Ultrasonic: 0.3m to 15m" },
          { parameter: "Accuracy", value: "±3mm (radar at full range)" },
          { parameter: "Process Temp", value: "Up to 200°C (high-temp radar)" },
          { parameter: "Output", value: "4–20mA + HART, IO-Link, Profibus" },
          { parameter: "Approvals", value: "ATEX Zone 0/1, FDA compliant" },
        ],
        applications: ["Chemical storage tanks", "Water reservoirs", "Silo level (bulk solids)", "Pharmaceutical mixing vessels", "Wastewater sumps"],
        advantage: "80GHz radar beam angle of 3° (vs 10–15° for older 26GHz technology) — eliminates false echoes from internal tank fixtures that plagued older sensors."
      }
    ]
  },
  {
    name: "HONEYWELL",
    tagline: "Advanced Industrial Process Control & Safety Systems",
    desc: "Honeywell Process Solutions (USA, fortune 100 company) provides DCS, safety systems, advanced control software, and process analyzers to the world's most demanding industries. Our expertise covers Honeywell Experion PKS DCS integration, HC900 hybrid controller programming, and Safety Manager SIL-3 safety system design and commissioning.",
    partnership: "Authorized Partner — Honeywell India",
    products: [
      {
        name: "Experion PKS / C300 DCS",
        desc: "Enterprise-grade DCS platform for large continuous process facilities with integrated safety and advanced control.",
        specs: [
          { parameter: "Controller", value: "C300 with dual-redundant CPUs" },
          { parameter: "I/O Capacity", value: "Up to 60,000 I/O points per system" },
          { parameter: "Control Network", value: "Fault-Tolerant Ethernet (FTE) — 1Gbps" },
          { parameter: "Scan Rate", value: "50ms to 500ms configurable" },
          { parameter: "History", value: "Uniformance Plant Historian (SQL)" },
          { parameter: "Certifications", value: "ISA-99, IEC 62443 cybersecurity" },
        ],
        applications: ["Oil refineries", "Gas processing plants", "Chemical complexes", "Pharmaceutical batch plants"],
        advantage: "Experion Advanced Process Control (APC) integration reduces process variability by 30–50% and increases throughput by 2–5% without capital investment."
      },
      {
        name: "HC900 Hybrid Controller",
        desc: "Mid-range process controller combining PLC discrete logic with DCS-quality analog loop control in a single compact system.",
        specs: [
          { parameter: "I/O Capacity", value: "Up to 256 mixed I/O points" },
          { parameter: "Control Loops", value: "Up to 64 PID loops" },
          { parameter: "Redundancy", value: "Dual CPU hot-standby available" },
          { parameter: "HMI", value: "Built-in web server + Honeywell Vista HMI" },
          { parameter: "Communication", value: "Modbus TCP/RTU, EtherNet/IP" },
          { parameter: "Approvals", value: "UL listed, CE, FM" },
        ],
        applications: ["Standalone process units", "HVAC building controls", "Batch reactors <20 vessels", "Test bench automation"],
        advantage: "Web server-based remote monitoring without VPN infrastructure — ideal for multi-site monitoring from a central control room over standard corporate network."
      }
    ]
  },
  {
    name: "WIKA",
    tagline: "Global Standard in Pressure & Temperature Measurement",
    desc: "WIKA Alexander Wiegand SE & Co. KG (Germany, founded 1946) is the world market leader in pressure and temperature measurement technology, with over 14,000 products and 9,000 employees globally. WIKA instruments are the reference standard for process plant instrumentation, deployed across oil & gas, power generation, pharmaceutical, and industrial applications worldwide. We supply and calibrate WIKA instruments with NABL traceable certificates.",
    partnership: "Authorized Distributor — WIKA Instruments India Pvt. Ltd.",
    products: [
      {
        name: "S-10 / A-10 Pressure Transmitters",
        desc: "Industrial pressure transmitters for demanding process applications requiring high accuracy and long-term stability.",
        specs: [
          { parameter: "Accuracy", value: "±0.5% (standard), ±0.1% (precision)" },
          { parameter: "Pressure Ranges", value: "-1 Bar vacuum to 1600 Bar" },
          { parameter: "Output Signal", value: "4–20mA + HART; 0–10V; IO-Link" },
          { parameter: "Process Connection", value: "G1/4 to G1, NPT, flanged" },
          { parameter: "Wetted Material", value: "316L SS, Hastelloy, titanium" },
          { parameter: "Approvals", value: "ATEX Zone 1/2, IECEx, SIL-2 capable" },
        ],
        applications: ["Hydraulic systems", "Compressed air monitoring", "Process piping pressure", "Pump differential monitoring"],
        advantage: "Flush diaphragm versions eliminate clogging risk in viscous, crystallizing, or particle-laden media — a common failure mode of conventional diaphragm instruments."
      },
      {
        name: "Pressure Gauges (Bourdon Type)",
        desc: "Mechanical pressure gauges for local indication without power supply requirement.",
        specs: [
          { parameter: "Accuracy Class", value: "0.1%, 0.25%, 0.5%, 1.0%" },
          { parameter: "Dial Size", value: "63mm, 100mm, 160mm standard" },
          { parameter: "Pressure Range", value: "-1 Bar to 1000 Bar" },
          { parameter: "Case Material", value: "Stainless steel or phenol resin" },
          { parameter: "Fill Liquid", value: "Glycerin or silicone for vibration" },
          { parameter: "Standards", value: "EN 837-1, DIN 16001, ASME B40.100" },
        ],
        applications: ["Process plant field indication", "Pump suction/discharge monitoring", "Compressor pressure", "Test & calibration references"],
        advantage: "Glycerin-filled gauges dampen needle oscillation in pulsating systems — extending pointer and movement life 3–5× compared to dry gauges in the same service."
      }
    ]
  }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBrand, setActiveBrand] = useState<number | null>(null);
  const [activeProduct, setActiveProduct] = useState<number>(0);

  const filteredBrands = searchTerm === '' ? brands : brands.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.products.some(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.applications.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

  const selectedBrand = activeBrand !== null ? brands[activeBrand] : null;

  return (
    <div className="bg-[#f7f9fc] min-h-screen text-slate-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#0f4c81] font-mono font-bold block">
                B2B TECHNICAL PRODUCT CATALOGUE
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit leading-tight">
                Partner Products & Engineered Systems
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                We supply, program, integrate, and commission world-class industrial equipment from globally certified manufacturers. Every product we supply is backed by our in-house engineering expertise, on-site commissioning capability, and 24/7 AMC support.
              </p>
              <div className="flex gap-6 pt-2 font-mono text-xs">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f4c81]">7</div>
                  <div className="text-slate-500 uppercase tracking-wider">OEM Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f4c81]">500+</div>
                  <div className="text-slate-500 uppercase tracking-wider">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f4c81]">In Stock</div>
                  <div className="text-slate-500 uppercase tracking-wider">Fast Delivery</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0f4c81] to-[#2b6cb0] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <img 
                src="https://picsum.photos/seed/nandini/800/600" 
                alt="Industrial Automation Components and Control Systems" 
                className="relative rounded-lg shadow-xl object-cover w-full h-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Value Propositions */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
            {[
              { icon: "🏭", title: "In-House Manufacturing", desc: "NE panels built at our Cherlapally factory to client specifications, CPRI tested before dispatch." },
              { icon: "🔧", title: "OEM Authorized Service", desc: "Yaskawa Authorized Service Center — genuine parts, warranty-backed repairs, factory support." },
              { icon: "📐", title: "Engineering Integration", desc: "We don't just supply equipment — we commission, tune, and integrate every product we sell." },
              { icon: "🕐", title: "24/7 AMC Support", desc: "After-sales service contracts ensuring 4-hour response for critical system failures in Hyderabad." },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#f7f9fc] border border-slate-200 rounded-lg p-5 flex flex-col gap-2">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-[#0f4c81] font-bold text-sm">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Search Filter Bar */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Search Products:</h2>
          <div className="flex items-center bg-white border border-slate-200 p-3 rounded-lg shadow-sm max-w-lg gap-2">
            <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search by brand, product, or application..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm focus:outline-none font-sans"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="text-slate-400 hover:text-slate-600 text-sm font-mono shrink-0">✕</button>
            )}
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBrands.map((brand, idx) => {
            const brandIdx = brands.findIndex(b => b.name === brand.name);
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-[#2b6cb0] hover:shadow-md shadow-sm transition-all flex flex-col"
              >
                {/* Brand Header */}
                <div className="p-7 border-b border-slate-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="text-[#0f4c81] font-extrabold text-2xl font-outfit mb-1">{brand.name}</h2>
                      <p className="text-xs text-[#2b6cb0] font-mono font-semibold">{brand.tagline}</p>
                    </div>
                    <span className="text-[9px] font-mono bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded uppercase shrink-0 mt-1">
                      Authorized
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{brand.desc}</p>
                </div>

                {/* Product List Summary */}
                <div className="p-6 flex-1">
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-3">Key Products & Systems:</h4>
                  <ul className="space-y-2 font-mono text-xs text-slate-700 mb-5">
                    {brand.products.map((prod, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2">
                        <span className="text-[#3b82f6] font-bold shrink-0 mt-0.5">▸</span>
                        <span className="leading-relaxed font-sans">{prod.name} — {prod.desc.split('.')[0]}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <button
                      onClick={() => { setActiveBrand(brandIdx); setActiveProduct(0); }}
                      className="text-xs font-mono text-[#0f4c81] border border-[#0f4c81] px-4 py-2 rounded hover:bg-[#0f4c81] hover:text-white transition-colors cursor-pointer"
                    >
                      View Full Specs →
                    </button>
                    <a
                      href="/contact?type=quote"
                      className="text-xs font-mono text-slate-600 border border-slate-200 px-4 py-2 rounded hover:border-slate-400 transition-colors"
                    >
                      Request RFQ
                    </a>
                  </div>
                </div>

                <div className="px-6 py-3 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono text-slate-400">
                  <span>OEM CERTIFIED INVENTORY</span>
                  <span className="text-emerald-600 font-semibold">IN STOCK / FAST DELIVERY</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredBrands.length === 0 && (
          <div className="text-center py-16 text-slate-400 font-mono">
            <p>No products match your search. Try different keywords.</p>
          </div>
        )}
      </section>

      {/* Full Spec Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-lg max-w-4xl w-full shadow-2xl relative my-8">
            
            {/* Modal Header */}
            <div className="bg-[#0f4c81] p-7 rounded-t-lg relative">
              <button
                className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl cursor-pointer font-light leading-none"
                onClick={() => setActiveBrand(null)}
              >
                ×
              </button>
              <span className="text-[9px] font-mono text-[#93c5fd] uppercase tracking-widest block mb-1">
                {selectedBrand.partnership}
              </span>
              <h2 className="text-2xl font-bold text-white font-outfit">{selectedBrand.name}</h2>
              <p className="text-[#93c5fd] text-sm mt-1">{selectedBrand.tagline}</p>
            </div>

            {/* Product Tabs */}
            <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50">
              {selectedBrand.products.map((prod, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => setActiveProduct(pIdx)}
                  className={`px-5 py-3.5 font-mono text-[10px] uppercase tracking-wider font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeProduct === pIdx
                      ? 'border-[#0f4c81] text-[#0f4c81] bg-white'
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {prod.name.split('(')[0].trim()}
                </button>
              ))}
            </div>

            {/* Product Detail */}
            {selectedBrand.products[activeProduct] && (
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-outfit mb-2">
                    {selectedBrand.products[activeProduct].name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedBrand.products[activeProduct].desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Specs Table */}
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#0f4c81] font-semibold mb-3">
                      Technical Specifications
                    </h4>
                    <div className="bg-[#f7f9fc] border border-slate-200 rounded overflow-hidden">
                      {selectedBrand.products[activeProduct].specs.map((spec, sIdx) => (
                        <div key={sIdx} className={`flex justify-between items-center px-4 py-2.5 text-xs font-mono ${sIdx % 2 === 0 ? 'bg-white' : 'bg-[#f7f9fc]'}`}>
                          <span className="text-slate-500">{spec.parameter}:</span>
                          <span className="text-slate-900 font-bold text-right max-w-[55%]">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#0f4c81] font-semibold mb-3">
                        Typical Industrial Applications
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {selectedBrand.products[activeProduct].applications.map((app, aIdx) => (
                          <li key={aIdx} className="flex items-center gap-2">
                            <span className="text-emerald-600 font-bold shrink-0">✓</span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Advantage */}
                    <div className="bg-[#0f4c81]/5 border border-[#0f4c81]/20 rounded p-4">
                      <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#0f4c81] font-semibold mb-2">
                        NE Engineering Advantage
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {selectedBrand.products[activeProduct].advantage}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-5 flex gap-3 flex-wrap">
                  <a href="/contact?type=quote" className="bg-[#0f4c81] text-white px-5 py-2.5 rounded font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#2b6cb0] transition-colors">
                    Request Technical RFQ →
                  </a>
                  <button
                    onClick={() => setActiveBrand(null)}
                    className="border border-slate-200 text-slate-600 px-5 py-2.5 rounded font-mono text-xs uppercase tracking-wider hover:border-slate-400 transition-colors cursor-pointer"
                  >
                    Back to Products
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
