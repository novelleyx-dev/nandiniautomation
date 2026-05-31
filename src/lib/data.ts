export interface Industry {
  name: string;
  slug: string;
  desc: string;
  projects: string;
  tech: string;
  outcome: string;
  challenges: string[];
  solutions: string[];
  standards: string[];
  keyEquipment: string[];
}

export interface Product {
  name: string;
  specs: string[];
  principle: string;
  useCase: string;
  standards: string;
}

export interface ProductCategory {
  title: string;
  items: Product[];
}

export interface Project {
  title: string;
  client: string;
  industry: string;
  scope: string;
  tech: string;
  location: string;
  outcome: string;
  value?: string;
  duration?: string;
  team?: string;
  challenges?: string;
  deliverables?: string[];
}

export interface Partner {
  name: string;
  role: string;
  details: string;
}

export interface Certification {
  name: string;
  number: string;
  scope: string;
}

export const INDUSTRIES: Industry[] = [
  {
    name: "Steel Plants",
    slug: "steel",
    desc: "Steel manufacturing requires precise, continuous electrical control across blast furnaces, sinter plants, rolling mills, and material handling systems. Our engineering team delivers robust drive systems, PLC-based sequence controllers, and SCADA monitoring loops that withstand the extreme thermal, vibrational, and electromagnetic environments of integrated steel facilities. We supply systems rated for arc furnace harmonics, ladle crane hoisting torque management, and rolling mill speed synchronization.",
    projects: "Sinter Plant Conveyor Sequencing, Blast Furnace Cooling System Automation, Gantry Crane Dual Hoist Synchronization",
    tech: "ABB AC800M Redundant PLC, Yaskawa A1000 Heavy Duty VFD, SCADA systems, CPRI-tested MCC panels",
    outcome: "Reduced process downtime by 14% and optimized raw material flow controls with zero sequence trip occurrences across 18 months.",
    challenges: [
      "Extreme harmonic current distortion from arc furnaces degrading control system integrity",
      "Heavy vibrational stress on panel enclosures causing terminal loosening over time",
      "High particulate and metallic dust ingress causing insulation failures inside MCC cabinets",
      "Synchronization accuracy requirements for multi-drive rolling mill stand speed matching"
    ],
    solutions: [
      "Active harmonic filter installations at PCC incomer level with IEEE 519 compliance validation",
      "IP65 welded-sealed enclosures with anti-vibration mounting hardware",
      "Quarterly preventive cleaning with thermal imaging diagnostics on all connection points",
      "Closed-loop vector drive control with encoder feedback cards for speed synchronization accuracy"
    ],
    standards: ["IS/IEC 61439-1&2", "IEEE 519", "IEC 61800-3", "ISO 10218-2 (Robotics)"],
    keyEquipment: ["Yaskawa A1000 Crane Drives", "ABB ACS880 Drives", "Siemens S7-1500 PLC", "CPRI IP65 Panels", "Active Harmonic Filters"]
  },
  {
    name: "Railways",
    slug: "railways",
    desc: "Railway infrastructure demands fail-safe automation, precise traction power management, and uninterrupted signal power supply systems. Nandini Enterprises has delivered substation automation panels, auxiliary power modules, and traction control systems compliant with RDSO and RITES engineering specifications. Our panels meet stringent railway electrical standards and have been deployed across station power systems, track-side relay rooms, and traction substation control buildings.",
    projects: "Substation Control Panels for HMRDA stations, Auxiliary Power Automation modules, Traction Relay Protection Panels",
    tech: "Siemens S7-1500 PLC, CPRI-certified double-door panels, RTU telemetry, Redundant fiber optic ring networks",
    outcome: "Achieved RDSO/RITES compliance standards with 100% fail-safe operation verified across 24-month service logs.",
    challenges: [
      "Meeting RDSO Type Approval requirements for electrical panels and control equipment",
      "Ensuring fail-safe interlock logic with dual-redundant CPU configurations for traction power control",
      "Designing panels for outdoor-rated environments including humidity, temperature swings, and vibration",
      "Integrating with legacy signal relay systems while introducing modern microprocessor logic"
    ],
    solutions: [
      "Comprehensive type test reports including CPRI short circuit, temperature rise, and insulation tests",
      "Dual-CPU hot-standby PLC architectures with bumpless transfer and sub-10ms switchover",
      "IP54/IP65 enclosures with tropicalized conformal coating on PCBs and stainless steel hardware",
      "Gateway modules translating legacy relay contacts into modern Profibus/Modbus digital protocols"
    ],
    standards: ["RDSO/SPN/SP/TI/0018", "IEC 60255 (Protection Relays)", "IS 8623", "CEA Regulations 2010"],
    keyEquipment: ["Siemens S7-1500H Redundant PLC", "CPRI Certified Panels", "RTU Systems", "Protection Relays", "Isolation Transformers"]
  },
  {
    name: "Cement",
    slug: "cement",
    desc: "Cement manufacturing integrates raw material crushing, kiln pyroprocessing, grinding, and packing operations — all requiring highly coordinated drive and control systems. We deliver complete electrical and automation packages for raw mills, vertical roller mills, rotary kilns, bag house filter automation, and packing plant conveyors. Our VFD solutions for kiln and mill drives are optimized for the extreme starting loads, abrasive dust exposure, and high ambient temperature conditions of cement facilities.",
    projects: "Raw Mill Feed System VFD Retrofit, Kiln Shell Temperature Scanner Integration, Bag House Filter Automation, Packing Plant Conveyor Control",
    tech: "Yaskawa MV1000 Medium Voltage Drive, Allen-Bradley ControlLogix PLC, Siemens WinCC SCADA",
    outcome: "Power consumption lowered by 18% with precise kiln speed adjustment curves and elimination of DOL starter current surges on 1.2MW mill motors.",
    challenges: [
      "Massive starting current demands (up to 7x FLA) on ball mill and roller mill motors causing grid voltage dips",
      "Abrasive cement dust causing rapid wear on fan blades, motor bearings, and sensor optical windows",
      "Kiln shell temperature gradient monitoring requiring 128-point continuous infrared scanning",
      "Process inter-dependency requiring precise sequence interlock logic to prevent material blockage cascades"
    ],
    solutions: [
      "Soft starter and VFD installations reducing peak starting currents to 1.5x FLA with S-curve ramp profiles",
      "IP55/IP65 sealed enclosures with positive pressure purging on control rooms",
      "Yokogawa Kiln Shell Scanner with real-time SCADA trend logging and early warning alarms",
      "Siemens S7-1500 sequence interlock logic with material level sensor inputs and auto-restart logic"
    ],
    standards: ["IEC 61439-1&2", "CPRI", "IEC 61800-3", "IEEE 519", "IS 3043"],
    keyEquipment: ["Yaskawa MV1000 Drives", "Allen-Bradley PLC", "Kiln Shell Scanner", "Bag Filter Controllers", "IP65 MCC Panels"]
  },
  {
    name: "Power Plants",
    slug: "power",
    desc: "Power generation facilities demand the highest levels of electrical engineering expertise, from high-voltage switchyard design to boiler burner management systems and turbine governor control. We deliver comprehensive automation packages for thermal, gas, and captive power plants including DCS-based boiler controls, BOP (Balance of Plant) automation, water treatment systems, and coal/fuel handling telemetry. Our A-Grade 33KV license authorizes us to design and commission entire substation infrastructure.",
    projects: "Boiler Feed Pump VFD Speed Regulation, CEP & CW Pump MCC Panels, Coal Crusher Sequence Controller, Ash Handling Automation",
    tech: "Yokogawa Centum VP DCS, Wika high-pressure instrumentation, ABB ACH580 Drives, 33KV Vacuum Circuit Breakers",
    outcome: "Stabilized steam header pressure variations to within ±0.5 Bar with real-time speed feedback control, reducing turbine trip incidents by 76%.",
    challenges: [
      "Maintaining steam header pressure stability during rapid load changes and turbine run-backs",
      "High-pressure and high-temperature sensor installations requiring specialized thermowell and manifold engineering",
      "Coal dust explosion risk in fuel handling areas requiring ATEX-rated electrical equipment",
      "Integrating BOP automation with existing DCS systems without plant shutdown windows"
    ],
    solutions: [
      "Cascade PID control loops on boiler feed pumps with feedforward compensation from steam flow signals",
      "Forged steel thermowells and high-pressure manifold assemblies rated to 300 Bar / 550°C",
      "ATEX Zone 21 flameproof MCC panels with dust-proof junction boxes throughout coal handling",
      "Hot-patching programming capability on DCS with offline simulation validation before cutover"
    ],
    standards: ["CEA Regulations", "IBR (Indian Boiler Regulations)", "ATEX Zone 21", "IEC 60079", "IS 2026"],
    keyEquipment: ["Yokogawa DCS", "ABB Drives", "33KV VCBs", "ATEX Panels", "High-Pressure Transmitters"]
  },
  {
    name: "Oil & Gas",
    slug: "oil-gas",
    desc: "Hazardous hydrocarbon processing environments demand specialized engineering for electrical and automation systems that operate safely in flammable gas atmospheres. We design and deliver ATEX/IECEx-certified field junction boxes, intrinsically safe instrument loops, SIL-rated shutdown systems, and SCADA telemetry for oil terminals, gas compressor stations, and pipeline metering facilities. All our OGI (Oil & Gas Industry) work is submitted to PESO approval and includes detailed hazardous area classification drawings.",
    projects: "Zone 1 Gas Metering Skid Automation, Crude Oil Tank Farm Level Telemetry, Pipeline SCADA Integration, Compressor Station Control Panels",
    tech: "Honeywell Experion DCS, Flameproof junction boxes, SIL-2 logic solvers, Zener barrier isolators",
    outcome: "Certified SIL-2 execution with PESO approval for hazardous fluid terminal distribution control systems.",
    challenges: [
      "Designing certified intrinsically safe (Ex-ia) field instrument loops in Zone 0 and Zone 1 classified areas",
      "Ensuring SIL-2 functional safety integrity for Emergency Shutdown System (ESD) logic",
      "Corrosion resistance requirements for coastal terminal environments with high humidity and salt exposure",
      "Pipeline SCADA communication over long-distance microwave and cellular VPN networks"
    ],
    solutions: [
      "Zener diode barrier isolators and galvanically isolated signal conditioners on all field loops",
      "IEC 61508 compliant SIL-2 logic solver programming with annual proof test documentation",
      "316L stainless steel enclosures with NEMA 4X rating and epoxy-sealed cable glands",
      "Redundant VSAT and cellular 4G VPN data links with store-and-forward buffer RTUs"
    ],
    standards: ["IEC 60079 (ATEX)", "IEC 61508 (SIL)", "OISD-GDN-106", "PESO Certification", "API RP 505"],
    keyEquipment: ["SIL-2 Logic Solvers", "Flameproof Panels", "Zener Barriers", "Ex-ia Transmitters", "Gas Detectors"]
  },
  {
    name: "Water Treatment",
    slug: "water-treatment",
    desc: "Municipal and industrial water treatment automation requires robust, fail-safe systems for raw water intake, pumping, filtration, chemical dosing, and distribution. Our water sector expertise covers everything from 120 MLD mega pumping stations to compact RO plant control panels. We have delivered full SCADA telemetry systems for HMWSSB, GWSSB, and HMDA across Telangana, monitoring thousands of remote pump nodes over fiber optic and cellular networks.",
    projects: "120 MLD HMWSSB Pump Automation, Reservoir Level SCADA Telemetry, Chemical Dosing System Automation, RO Plant Controllers",
    tech: "L&T PLC, Baumer level sensors, Modbus TCP/IP fiber ring networks, Yaskawa VFD pump panels",
    outcome: "Automated distribution loops across 12 sectors with leak detection telemetry; reduced water loss by 14% over 18 months.",
    challenges: [
      "Protecting against water hammer in large diameter mains (1200–2000mm dia) during pump startups",
      "Managing large geographic spread of remote pumping nodes with varying communication reliability",
      "Chemical dosing accuracy control requiring ±2% precision across variable flow conditions",
      "Flood risk to electrical panels in underground pump rooms requiring elevated IP ratings"
    ],
    solutions: [
      "Soft-start VFD ramp profiles limiting pressure rise rate to <0.3 Bar/second during startup sequences",
      "RTU-based store-and-forward data buffering with dual SIM 4G fallback communication links",
      "Coriolis mass flow meter feedback to dosing pump variable speed drives for ratio control",
      "IP66 rated stainless enclosures on raised mounting platforms with sump level alarms"
    ],
    standards: ["IS 1172", "WHO Water Quality Standards", "BIS standards", "MOEF Guidelines", "CEA Regulations"],
    keyEquipment: ["VFD Pump Panels", "SCADA Systems", "RTUs", "Dosing Controllers", "Electromagnetic Flow Meters"]
  },
  {
    name: "Pharma",
    slug: "pharma",
    desc: "Pharmaceutical manufacturing operates under the world's strictest regulatory frameworks. Our FDA 21 CFR Part 11 compliant SCADA systems, batch reactor automation, and cleanroom environmental control loops are designed and validated following GAMP 5 guidelines. Every parameter modification, alarm acknowledgment, and recipe execution is captured in unalterable audit trail databases. We deliver complete IQ/OQ/PQ validation documentation packages alongside every system.",
    projects: "Batch Reactor Automation with Audit Trail, Cleanroom HVAC Control, WFI System Monitoring, CIP/SIP Automation",
    tech: "Siemens WinCC SCADA, S7-1500 PLC, Honeywell sanitized transmitters, stainless sensor housings",
    outcome: "Achieved complete GMP validation compliance with FDA 21 CFR Part 11 electronic records and passed inspection audits without observations.",
    challenges: [
      "Ensuring 21 CFR Part 11 compliance for electronic records including immutable audit trail and e-signatures",
      "Clean-in-place (CIP) and Steam-in-place (SIP) cycles requiring sensors rated for hot steam and caustic chemicals",
      "Batch recipe management with version control, deviation logging, and master/production recipe separation",
      "Validation documentation (IQ/OQ/PQ protocols) required before system go-live approval"
    ],
    solutions: [
      "SQL Server database with cryptographic hash validation on every record change; role-based access with MFA",
      "Hygienic stainless-steel sensors with Tri-Clamp fittings, IP69K rating, and FDA-compliant wetted materials",
      "Phase Logic recipe engine with master recipe library, batch journal logging, and exception handling workflows",
      "Complete validation dossier including DQ, IQ, OQ, PQ protocols per GAMP 5 guidelines"
    ],
    standards: ["FDA 21 CFR Part 11", "GMP EU Annex 11", "GAMP 5", "WHO GMP", "ISO 14644 (Cleanroom)"],
    keyEquipment: ["Siemens S7-1500 PLC", "WinCC SCADA", "Sanitized Transmitters", "CIP Controllers", "HVAC DDC Panels"]
  },
  {
    name: "Food Processing",
    slug: "food-processing",
    desc: "Modern food and beverage processing relies on hygienic automation systems that maintain strict temperature profiles, recipe traceability, and allergen segregation protocols. We install stainless steel MCC panels, hygienic sensor systems, and recipe-driven HMI systems across dairy, biscuit, edible oil, and beverage manufacturing. Our food industry installations prioritize wash-down rated enclosures, fast temperature control loops, and energy-efficient motor management.",
    projects: "Dairy Pasteurization Loop Automation, Biscuit Tunnel Oven Temperature Control, Edible Oil Filling Line Control, Beverage CIP System",
    tech: "Schneider Modicon PLC, stainless steel panels, IP69K sensors, HMI recipe manager",
    outcome: "Achieved perfect thermal profiles (±0.5°C accuracy) with automated compliance logs per batch; reduced batch rejection rate by 92%.",
    challenges: [
      "Maintaining product temperature within tight tolerances during pasteurization (72°C for 15 seconds minimum)",
      "Allergen cross-contamination risks requiring automated clean-in-place validation between product runs",
      "High-pressure washdown cleaning (up to 80 bar hot water) requiring fully sealed electrical equipment",
      "Energy cost reduction targets requiring motor optimization across multiple processing lines simultaneously"
    ],
    solutions: [
      "Cascade temperature PID control with steam valve modulation and predictive feedforward correction",
      "Automated CIP recipe execution with conductivity and temperature validation before product release",
      "IP69K washdown-rated stainless steel MCC panels with sloped tops and hygienic cable routing",
      "VFD installations on all significant motor loads with load profile analysis and savings reporting"
    ],
    standards: ["FSSAI Standards", "BRC Food Safety", "ISO 22000", "HACCP", "IEC 60529 IP69K"],
    keyEquipment: ["IP69K Stainless Panels", "Hygienic Transmitters", "Recipe HMI", "CIP Controllers", "Checkweighers"]
  },
  {
    name: "Mining",
    slug: "mining",
    desc: "Underground and open-cast mining operations demand ruggedized automation systems capable of operating under heavy mechanical shock, methane gas risks, and water ingress conditions. We supply heavy-duty conveyor control systems, mine ventilation automation, crushing plant sequence controllers, and methane gas monitoring panels. Our mining sector installations meet the Chief Inspector of Mines safety requirements with certified ATEX equipment for underground environments.",
    projects: "Underground Ventilation Auto-Control, Overland Conveyor Sequence Controller, Crusher Plant Drive Retrofit, Dragline Monitoring System",
    tech: "Yaskawa V1000 micro-drives, fiber optic ring networks, methane sensors, heavy-duty IP66 panels",
    outcome: "Guaranteed automatic high-speed ventilation fan trigger within 8 seconds of gas level alert detection; eliminated manual monitoring errors.",
    challenges: [
      "Methane gas explosion risk in underground workings requiring certified ATEX Zone 1 electrical systems",
      "Overland conveyor systems spanning 3–12 km with multi-drive synchronization requirements",
      "Heavy particulate dust (coal, ore) causing rapid filter clogging in panel ventilation systems",
      "Unreliable communication in underground tunnels requiring local autonomous control capability"
    ],
    solutions: [
      "Flameproof Ex-d distribution boards and Ex-e terminal boxes throughout underground electrical installation",
      "Master-follower VFD drive synchronization with tension control feedback across conveyor take-up pulleys",
      "Sealed positive-pressure ventilated panels with automatic filter replacement alarms",
      "Local PLC autonomy mode with pre-programmed safe-state sequences activated during communication failure"
    ],
    standards: ["Mines Act 1952", "DGMS Circular", "IEC 60079 (ATEX)", "IS 8961", "IEC 61241 (Dust Ex)"],
    keyEquipment: ["ATEX Drives", "Flameproof Panels", "Gas Detection Systems", "Fiber Ring Networks", "Conveyor Controllers"]
  },
  {
    name: "Defense",
    slug: "defense",
    desc: "Defense and aerospace applications demand the highest engineering rigor with military-grade ruggedized panels, precise test and measurement systems, and sub-millisecond response automation. Nandini Enterprises has delivered custom instrumentation test rigs, simulator control interfaces, and ruggedized electrical panels for ECIL, NFC, DRDO, and defense contractors. All defense work is executed under strict confidentiality protocols with zero-tolerance quality management.",
    projects: "ECIL Simulator Control Interface, NFC Testing Rig Automation, Radar System Power Supply Panels, Defense Lab Instrumentation Controllers",
    tech: "National Instruments LabVIEW RT, hardened mechanical panels, mil-spec connectors, isolated power supplies",
    outcome: "Executed precision millisecond-response logging under severe vibrational test conditions; achieved 100% audit compliance on all deliverables.",
    challenges: [
      "Sub-millisecond timing accuracy requirements for test and measurement data acquisition systems",
      "MIL-STD-810 environmental testing requirements including shock, vibration, temperature extremes",
      "Classified project requirements imposing strict data security and personnel access restrictions",
      "Long-duration reliability requirements — systems expected to operate 20+ years with minimal maintenance"
    ],
    solutions: [
      "FPGA-based real-time data acquisition with NI-9265 deterministic execution and <1μs timing accuracy",
      "Mil-spec aluminum enclosures with shock-mounted PCBs, conformal coating, and hermetic connector sealing",
      "Air-gapped development environments, signed NDAs, and government security clearance protocols",
      "High-MTBF component selection, detailed life prediction analysis, and built-in redundancy design"
    ],
    standards: ["MIL-STD-810", "MIL-STD-461", "DEF STAN", "IEC 61000 (EMC)", "DO-160"],
    keyEquipment: ["NI LabVIEW RT Systems", "Hardened Enclosures", "Mil-Spec Connectors", "Isolated Instruments", "EMI Filters"]
  },
  {
    name: "Elevators",
    slug: "elevators",
    desc: "Modern vertical transportation systems require precise microprocessor control, smooth vector drive performance, and fail-safe rescue systems. We supply complete elevator control packages including Yaskawa L1000A drives, microprocessor-based lift controllers, automatic rescue devices (ARD), and group controller dispatch algorithms. Our elevator systems are installed in high-rise residential towers, commercial complexes, hospitals, and industrial goods lift applications across Telangana and Andhra Pradesh.",
    projects: "High-Rise Commercial Tower Elevator Modernization, Hospital Goods Lift Controller, Residential Group Dispatch System, Escalator Drive Retrofit",
    tech: "Yaskawa L1000A Elevator VFD, microprocessor controller boards, ARD backup units, magnetic leveling sensors",
    outcome: "Leveling accuracy improved to within ±3mm; starting jerks eliminated; energy consumption reduced 25% via regenerative drive systems.",
    challenges: [
      "Passenger comfort requirements demanding jerk-free acceleration profiles with sub-0.5 m/s³ jerk limits",
      "Safety requirements mandating automatic rescue to nearest floor within 15 seconds of power failure",
      "Variable counterweight imbalance requiring adaptive drive torque control during different load conditions",
      "Modernization of existing elevator shafts with minimal civil modification work"
    ],
    solutions: [
      "S-curve velocity profiles with 5-parameter jerk control tuning via Yaskawa L1000A parameter sets",
      "Automatic Rescue Device (ARD) with maintenance-free VRLA batteries, tested monthly by onboard self-diagnostics",
      "Closed-loop vector control with load cell feedback for adaptive torque compensation",
      "Controller replacement using existing machine room space, preserving all safety switches and interlocks"
    ],
    standards: ["IS 14665 (Parts 1-6)", "EN 81-20/50", "NBC 2016", "ASME A17.1", "IEC 60947"],
    keyEquipment: ["Yaskawa L1000A", "ARD Units", "Microprocessor Controllers", "Door Operators", "Leveling Sensors"]
  },
  {
    name: "Chemical",
    slug: "chemical",
    desc: "Chemical processing plants handle corrosive, toxic, and flammable materials requiring specialized instrumentation, corrosion-resistant enclosures, and precise dosing control systems. We supply Hastelloy and PTFE-wetted sensors, acid-resistant GRP enclosures, and multi-component batch dosing automation. Safety interlocks designed to prevent over-dosing, pressure buildup, and gas leaks are integrated into every system with hardwired emergency shutdown provisions.",
    projects: "Acid Dosing Automation Skid, Polymer Batch Reactor Controller, Chlorine Gas Detection System, Cooling Tower Chemical Treatment Control",
    tech: "Wika pressure/temp sensors, Baumer ultrasonic probes, Hastelloy wetted instruments, SIL-2 safety PLC",
    outcome: "Zero acid leakage incidents recorded across all dosing systems over 36 months of continuous operation.",
    challenges: [
      "Corrosive media attacking sensor diaphragms, transmitter casings, and cable insulation over time",
      "Precise pH and conductivity dosing control to within ±0.1 pH units in variable process streams",
      "ATEX Zone 2 classification across most chemical handling areas requiring certified field equipment",
      "Emergency shutdown system requirements with SIL-2 rated safety instrumented functions"
    ],
    solutions: [
      "Hastelloy C276 diaphragm seals and PTFE-coated radar probes isolating electronics from process media",
      "Dual-input pH controller with temperature compensation and automatic electrode cleaning cycles",
      "IECEx Zone 2 certified transmitters with Ex-e terminal boxes throughout classified areas",
      "TÜV SIL-2 certified safety PLC with proof test procedures documented per IEC 61511"
    ],
    standards: ["OISD-STD-144", "IEC 60079", "IEC 61511 (SIL)", "IS 5572", "CPCB Guidelines"],
    keyEquipment: ["SIL-2 Safety PLC", "Hastelloy Sensors", "ATEX Instruments", "pH Controllers", "GRP Enclosures"]
  },
  {
    name: "Sugar",
    slug: "sugar",
    desc: "Sugar processing integrates cane preparation, milling, juice clarification, evaporation, crystallization, centrifugal separation, and drying — all requiring coordinated speed control and temperature management. We supply VFD systems for centrifugal machines, mill drives, and boiler fans, along with SCADA monitoring for batch crystallization cycles. Our sugar mill experience spans seasons of continuous 24/7 operations at facilities across Maharashtra, Karnataka, and Andhra Pradesh.",
    projects: "Centrifugal Machine Auto-Cycle Control, Mill Drive VFD Installation, Boiler Fan Speed Control, Process SCADA Dashboard",
    tech: "Yaskawa A1000 Drives, dual-drive control system, touchscreen HMI, CPRI panels",
    outcome: "Centrifugal cycle throughput increased by 22% with regenerated energy from deceleration phases returned to plant bus.",
    challenges: [
      "Centrifugal machine starting requires very high torque at zero speed followed by rapid acceleration to 1500 RPM",
      "Sugar crystallization monitoring requiring precise temperature and density tracking through multiple pan stages",
      "High vibration and shock from crushers and milling equipment affecting panel components and wiring",
      "Seasonal operation requiring rapid recommissioning after 4–5 months of shutdown"
    ],
    solutions: [
      "Yaskawa drives with vector control providing 200% starting torque capability with precision speed ramp control",
      "Yokogawa recorders with Brix and temperature sensors for continuous crystallization batch monitoring",
      "Vibration-isolated panel mounting hardware with flexible conduit connections at cabinet entries",
      "Annual preventive maintenance contract covering pre-season inspection, firmware updates, and recommissioning"
    ],
    standards: ["IS 14742", "BIS Standards", "IEEE 519", "IEC 61800-3", "Factory Act Regulations"],
    keyEquipment: ["Yaskawa Drives", "HMI Systems", "Yokogawa Recorders", "Vibration-Isolated Panels", "Brix Sensors"]
  },
  {
    name: "Material Handling",
    slug: "material-handling",
    desc: "Industrial material handling — from overhead cranes to automated conveyor systems and stacker-reclaimers — requires precision drive control, anti-sway algorithms, and synchronized multi-motor speed management. We supply complete crane drive panels with Yaskawa's advanced anti-sway software, brake control logic, and overload protection relays. Our conveyor automation systems include belt weigher integration, speed synchronization, and spillage detection to optimize throughput and prevent equipment damage.",
    projects: "Gantry Crane Dual Hoist Drive Panel, Stacker-Reclaimer Drive System, Coal Conveyor Sequence Controller, Automated Storage Retrieval System",
    tech: "CPRI heavy panels, Yaskawa A1000 crane drives, anti-sway software, L&T switchgear, encoder feedback",
    outcome: "Eliminated hook load sway using active anti-sway algorithm; mechanical gear wear reduced 35% in the first year of operation.",
    challenges: [
      "Crane hook pendulum sway effect causing load swing risks and restricting operator precision in narrow bays",
      "Multi-motor conveyor synchronization requiring ±0.5% speed match across 400m belt lengths",
      "Overload protection on crane hoists to prevent catastrophic mechanical failure during heavy lift operations",
      "ATEX requirements for coal and ore handling environments with combustible dust classification"
    ],
    solutions: [
      "Yaskawa DriveWizard anti-sway algorithm using observer control theory to damp pendulum oscillations",
      "Encoder-based master-follower drive synchronization with load cell tension feedback on conveyor take-up frames",
      "Electronic overload monitoring with hardwired emergency brake engage on torque limit exceedance",
      "ATEX Zone 22 certified drives with enclosed IP65 panels and sealed conduit systems in dust zones"
    ],
    standards: ["IS 807 (EOT Cranes)", "IS 3177", "IEC 60034-1", "ATEX Zone 22", "IEEE 519"],
    keyEquipment: ["Crane Drive Panels", "Anti-Sway Systems", "Belt Weighers", "Encoder Systems", "Safety PLCs"]
  }
];

export const PRODUCTS: ProductCategory[] = [
  {
    title: "Electrical Panels",
    items: [
      {
        name: "PCC (Power Control Center) Panels",
        specs: [
          "Main busbar rating up to 6300A (electrolytic copper)",
          "CPRI certified short-circuit test up to 65kA / 1 second",
          "Incomer: Air Circuit Breakers (ACB) with electronic trip units",
          "Form 4b segregation — busbar, cable, and switchgear zones isolated",
          "IP55 / IP65 ingress protection available",
          "Active ventilation with thermostat-controlled forced cooling fans"
        ],
        principle: "Centralized power distribution system that receives high-voltage utility supply and distributes to all sub-distribution boards and motor control centers with coordinated fault protection.",
        useCase: "Steel mills, cement industries, large manufacturing complexes, commercial buildings, substations, chemical plants, power generation auxiliary distribution.",
        standards: "IS/IEC 61439-1&2 certified, CPRI tested, IP55/65 enclosure standard."
      },
      {
        name: "MCC (Motor Control Center) Panels",
        specs: [
          "Drawout or fixed type configuration for service flexibility",
          "Fully compartmentalized modular drawers with mechanical interlocks",
          "Intelligent MCC options with Profibus/Modbus/EtherNet-IP connectivity",
          "Type-2 coordination starter combinations (contactor + MPCB)",
          "Integrated multi-function protection relays (overload, phase loss, EF)",
          "HMI integration for motor running status and fault logging"
        ],
        principle: "Controls, protects, and monitors electric motors from a single central location with coordinated protection and communication capability.",
        useCase: "Process plants with multiple motors, pumping stations, fan control matrices, HVAC systems, conveyor groups.",
        standards: "CPRI tested, IEC 60947-4-1 coordination, IS 8623."
      },
      {
        name: "VFD (Variable Frequency Drive) Panels",
        specs: [
          "Drive range: 0.75 kW to 1000 kW in LV; up to 10MW in MV",
          "Integrated AC line reactors and passive harmonic filters",
          "Forced ventilation design with thermal sensors and alarms",
          "Bypass arrangements: Automatic or Manual with motor DOL fallback",
          "Profinet/Modbus TCP communication cards standard",
          "Dynamic braking resistors for high-inertia load applications"
        ],
        principle: "Varies motor supply frequency and voltage to control motor speed, torque, and acceleration profiles — enabling energy savings and smooth process control.",
        useCase: "Pumping stations, conveyor systems, kiln drives, industrial fans, elevators, compressors, cranes.",
        standards: "Yaskawa Authorized assembly protocols, IEEE 519, IEC 61800-3 EMC standard."
      },
      {
        name: "PLC & SCADA Control Panels",
        specs: [
          "Redundant CPU layouts with hot-standby failover (<10ms switchover)",
          "Galvanically isolated I/O modules (analog and digital)",
          "Integrated 24VDC UPS power backup — minimum 4-hour runtime",
          "Managed Ethernet switches with fiber optic SFP connectivity",
          "Alarm annunciator modules with first-out indication",
          "Built-in EMI filters on all power supply rails"
        ],
        principle: "Main control hub executing PLC logic programs and communicating with field instruments while providing SCADA connectivity to supervisory workstations.",
        useCase: "Plant-wide automation, process chemical plants, power plant monitoring, machine tools, batch processes.",
        standards: "CE certified assembly, IPC-A-610 wiring standard, IEC 61131-3."
      },
      {
        name: "APFC (Automatic Power Factor Correction) Panels",
        specs: [
          "Power factor correction range: 0.6 to 0.99 lagging",
          "Capacitor bank ratings: 5 KVAR to 500 KVAR steps",
          "Intelligent relay controller with 12-step switching capability",
          "Thyristor-based fast switching for flicker-sensitive loads",
          "Harmonic detuning reactors on each capacitor stage",
          "Digital power quality display with PF, kVAR, and kWh metering"
        ],
        principle: "Automatically switches capacitor banks in and out of service based on measured reactive load, maintaining grid power factor close to unity and avoiding utility penalties.",
        useCase: "Industrial factories with large motor loads, commercial complexes, municipal infrastructure, data centers.",
        standards: "IS 13340, IEC 60831, IEEE 1459."
      }
    ]
  },
  {
    title: "Automation & Drive Systems",
    items: [
      {
        name: "PLC (Programmable Logic Controller) Systems",
        specs: [
          "High-speed CPU scan cycle: <1ms for 1000 logic rungs",
          "Modbus RTU/TCP, Profinet, EtherCAT, PROFIBUS-DP standard interfaces",
          "Hot-swappable dual redundant I/O modules and power supplies",
          "Analog signal conditioning: ±0.1% accuracy on 4–20mA loops",
          "Safety CPU extensions (SIL-2/SIL-3) available",
          "Integrated motion control for up to 128 servo axes synchronization"
        ],
        principle: "Digital computing system that monitors real-time inputs from sensors and switches, executes control logic programs at deterministic scan rates, and drives outputs to actuators, motors, and valves.",
        useCase: "Machinery speed control, sequence interlocking, safety shutdown systems, batch recipe management, crane/hoist coordination.",
        standards: "IEC 61131-3 programming, CE/UL certified, IEC 61508 SIL."
      },
      {
        name: "SCADA (Supervisory Control and Data Acquisition)",
        specs: [
          "Real-time trending with 100ms data logging resolution",
          "SQL Server integration for unlimited historical data storage",
          "FDA 21 CFR Part 11 electronic records and audit trail module",
          "Dynamic SVG vector graphics mimic flow diagrams",
          "OPC UA secure server interface for ERP integration",
          "Mobile access via encrypted web client (HTML5)"
        ],
        principle: "Software platform gathering real-time data from PLCs and RTUs, providing supervisory visualization, alarm management, historical trending, and reporting.",
        useCase: "Water treatment plants, power generation monitoring, pharmaceutical batch tracking, chemical plant process control.",
        standards: "ISA-101 HMI design, IEC 62443 cybersecurity, FDA 21 CFR Part 11."
      },
      {
        name: "Servo & Motion Control Systems",
        specs: [
          "Ultra-high resolution absolute encoders (24-bit, 16 million counts/rev)",
          "Multi-axis synchronized motion with <5μs interpolation cycle",
          "Jerk-limiting S-curve profile generation",
          "Built-in STO (Safe Torque Off) — SIL-3 certified",
          "EtherCAT real-time communication at 1Gbps",
          "Auto-tuning wizard for fast axis commissioning"
        ],
        principle: "High-precision closed-loop control of angular position, velocity, and torque for highly dynamic, repeatable movements.",
        useCase: "Robotics loaders, CNC machining centers, steel slitting lines, packaging servo axes, printing presses.",
        standards: "TÜV certified SIL-3, IEC 61800-5-2, ISO 13849 PLe."
      },
      {
        name: "Yaskawa Variable Frequency Drives",
        specs: [
          "Standard range: 0.4 kW to 1000 kW (GA700/A1000 series)",
          "Medium voltage: 3.3kV to 11kV (FSDrive-MV range, up to 10MW)",
          "High torque at zero speed: 150% nominal torque at 0 Hz",
          "Dynamic braking capability for crane and elevator loads",
          "Built-in EMC filter, DC link choke, and PG card options",
          "Conformally coated boards as standard for industrial environments"
        ],
        principle: "Vector control algorithm precisely calculates and controls the magnetic flux and torque of the motor using current and voltage feedback at microsecond resolution.",
        useCase: "Pumps, fans, compressors, conveyors, cranes, elevators, centrifuges, extruders.",
        standards: "IEEE 519, IEC 61800-3 (Category C3), UL508, CE, RoHS."
      }
    ]
  },
  {
    title: "Process Instrumentation",
    items: [
      {
        name: "Pressure & Temperature Transmitters",
        specs: [
          "Pressure accuracy: ±0.075% of calibrated span",
          "Pressure ranges: vacuum to 1000 Bar",
          "HART 7 and Foundation Fieldbus communication protocols",
          "ATEX/IECEx Zone 1 certified (Ex ia/ib)",
          "Dual-chamber electrical compartment (process and terminal box separated)",
          "316L stainless steel or Hastelloy C276 wetted parts"
        ],
        principle: "Converts physical pressure or temperature of process fluid into standard 4–20mA (+ HART digital) electrical signal for PLC/DCS input cards.",
        useCase: "Steam pipelines, gas flow measurement, autoclave reactors, boiler drums, compressed air systems.",
        standards: "ATEX Zone 1, IECEx, SIL-2 certified, NABL traceable calibration."
      },
      {
        name: "Baumer Sensors & Level Controllers",
        specs: [
          "Measurement technologies: ultrasonic, radar 80GHz FMCW, hydrostatic",
          "IO-Link and 4-20mA/Profibus/EtherNet-IP interface options",
          "Stainless steel hygienic 316L housings with FDA-approved seals",
          "Measurement range: 0.2m to 70m (radar), 0.3m to 15m (ultrasonic)",
          "Process temperature: up to 200°C (high-temp radar versions)",
          "Measurement accuracy: ±3mm typical at full range"
        ],
        principle: "Transmits radar or ultrasonic pulses toward the product surface; calculates level from time-of-flight of echo return adjusted for temperature compensation.",
        useCase: "Water reservoirs, chemical storage tanks, cement powder silos, slurry pits, pharmaceutical mixing vessels.",
        standards: "IP69K washdown rated, ATEX Zone 0/1 versions, FDA 21 CFR 177 compliant contacts."
      },
      {
        name: "Electromagnetic & Vortex Flow Meters",
        specs: [
          "Electromagnetic: DN15 to DN2400, accuracy ±0.3% of reading",
          "Vortex: DN25 to DN300, for steam and gas measurement",
          "Empty pipe detection with self-diagnostic alarms",
          "Bidirectional measurement capability",
          "HART, Profibus-PA, Foundation Fieldbus communication",
          "Liner materials: hard rubber, PTFE, ceramic options"
        ],
        principle: "Electromagnetic: Faraday's law — magnetic field applied across pipe; conductive fluid induces EMF proportional to velocity. Vortex: measures frequency of vortex shedding from a bluff body.",
        useCase: "Water distribution, wastewater, chemical dosing, slurry pipelines, steam and compressed air measurement.",
        standards: "MID certified, OIML R49, IS 6940, NABL traceable."
      },
      {
        name: "WIKA Pressure Gauges & Instruments",
        specs: [
          "Accuracy class: 0.1%, 0.25%, 0.5%, 1.0% options",
          "Pressure ranges: -1 to 0 Bar vacuum up to 1600 Bar",
          "Liquid-filled versions for high vibration and pulsating service",
          "Diaphragm seals for viscous, crystallizing, or corrosive media",
          "Temperature compensation: -40°C to +250°C",
          "Stainless steel, brass, or Monel wetted materials"
        ],
        principle: "Bourdon tube or diaphragm element deflects proportionally to applied pressure; deflection is amplified via movement mechanism to drive pointer or electronic transmitter.",
        useCase: "Process plants, hydraulic systems, gas cylinders, compressor stations, medical and laboratory equipment.",
        standards: "EN 837 (Bourdon gauges), EN 13443, PED 2014/68/EU, ASME B40.100."
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "120 MLD Municipal Water Pump Automation",
    client: "HMWSSB (Hyderabad Metro Water Supply & Sewerage Board)",
    industry: "Water Treatment",
    scope: "Turnkey design, assembly, PLC automation, SCADA programming, fiber network layout, and on-site commissioning of the 120 MLD Amberpet Pumping Station. Included 6-panel MCC, 3-panel VFD, and SCADA control room.",
    tech: "ABB AC800M Redundant PLC, 450kW Yaskawa A1000 Drive panels, Ethernet Ring topology, WinCC SCADA, fiber optic backbone",
    location: "Amberpet, Hyderabad, Telangana",
    outcome: "Reduced daily energy consumption by 21% and enabled fully remote pump station supervision from the HMWSSB central control room.",
    value: "₹3.8 Crore",
    duration: "18 months",
    team: "12 engineers",
    challenges: "Replacing existing DOL starters without halting water supply; integrating with existing SCADA system running on legacy protocol.",
    deliverables: ["6-way LT MCC Panel", "3 VFD Panels (450kW each)", "PLC Panel with Redundant CPU", "SCADA Operator Workstation", "Fiber Ring Network Installation", "FAT/SAT Documentation", "Operator Training Program"]
  },
  {
    title: "Gantry Crane Hoist Synchronization Panel",
    client: "Vizag Steel Plant (Rashtriya Ispat Nigam Limited)",
    industry: "Steel",
    scope: "Design and retrofitting of a CPRI-certified double hoisting system control panel with precise crane speed-match software and anti-sway algorithm integration.",
    tech: "Yaskawa A1000 Heavy Duty VFD panels, dual PLC communication, anti-sway software, encoder feedback systems",
    location: "Visakhapatnam, Andhra Pradesh",
    outcome: "Eliminated load misalignment; reduced mechanical gear strain by 35% during continuous heavy operation cycles and achieved zero load sway incidents.",
    value: "₹1.6 Crore",
    duration: "9 months",
    team: "8 engineers",
    challenges: "Working within the active plant environment with strict crane downtime windows; calibrating anti-sway algorithm for specific boom length and load combinations.",
    deliverables: ["Dual 200kW VFD Drive Panels", "Safety PLC with SIL-2 Logic", "Anti-Sway Software Configuration", "CPRI Test Certificate", "Commissioning Report", "Operator Training"]
  },
  {
    title: "Zone 1 Hazardous Gas Metering Skid Panel",
    client: "HPCL Terminal, Ghatkesar",
    industry: "Oil & Gas",
    scope: "Engineering of flameproof field junction boxes and SIL-2 certified main logic panels with SCADA telemetry integration for gas metering at a petroleum terminal classified as Zone 1.",
    tech: "Honeywell DCS, ATEX flameproof barriers, armored fiber interfaces, Ex-d junction boxes",
    location: "Ghatkesar Depot, Telangana",
    outcome: "Approved by Chief Controller of Explosives (PESO) and commissioned without a single safety incident.",
    value: "₹2.1 Crore",
    duration: "12 months",
    team: "10 engineers",
    challenges: "Obtaining PESO CCE approval requires extensive documentation; designing panels for Zone 1 area where ATEX Ex-d enclosures are mandatory throughout.",
    deliverables: ["ATEX Zone 1 MCC Panel", "SIL-2 Logic Solver Panel", "Flameproof Field JBs (x12)", "Gas Detector Integration", "PESO Approval Package", "Hazardous Area Classification Drawing"]
  },
  {
    title: "Sinter Plant Conveyor Sequence Controller",
    client: "JSW Steel Limited",
    industry: "Steel",
    scope: "Design, programming, and commissioning of a complex sequence interlock controller for 28 conveyors in the raw material handling system at the Sinter Plant.",
    tech: "Siemens S7-1500 PLC, HMI panel, CPRI-tested heavy enclosures, Profinet network ring",
    location: "Bellary, Karnataka",
    outcome: "Zero conveyor sequence error incidents in 18 months of continuous high-load operations; reduced material spillage by 64%.",
    value: "₹1.9 Crore",
    duration: "10 months",
    team: "7 engineers",
    challenges: "Sequence logic must account for 28 individually controlled conveyors with complex cause-and-effect interlock matrices; commissioning under active plant schedule.",
    deliverables: ["PLC Panel with S7-1500", "HMI Mimic Display", "Conveyor Control Logic Software", "Belt Weigher Integration", "SAT Test Records", "Operator Manual"]
  },
  {
    title: "Hyderabad Metro Rail Substation Control Panels",
    client: "Hyderabad Metro Rail Ltd. (HMRL / MEIL)",
    industry: "Railways",
    scope: "Supply and commissioning of 14 SCADA-integrated auxiliary power control panels for metro rail traction substations across the Blue Line corridor.",
    tech: "Siemens S7-1500 PLC, CPRI double-door panels, RTU telemetry, fiber ring communication",
    location: "Hyderabad Metro Blue Line, Telangana",
    outcome: "Achieved RDSO compliance with 99.98% uptime logged across all substation panels during the first year of commercial metro operations.",
    value: "₹4.7 Crore",
    duration: "24 months",
    team: "18 engineers",
    challenges: "Stringent RDSO type test requirements; simultaneous commissioning across 14 substations in live city environment with restricted access windows.",
    deliverables: ["14 Auxiliary Power Panels", "RTU Telemetry Units", "SCADA Integration", "RDSO Compliance Documentation", "Substation Earthing Design", "Training for HMRL O&M Team"]
  },
  {
    title: "Pharmaceutical Batch Reactor Automation",
    client: "Aurobindo Pharma Limited",
    industry: "Pharma",
    scope: "Complete FDA 21 CFR Part 11 compliant SCADA and PLC batch reactor automation system with electronic batch record, audit trail, and 12-step recipe management.",
    tech: "Siemens S7-1500 PLC, WinCC SCADA, HART transmitters, stainless steel hygienic panels",
    location: "Pashamylaram, Telangana",
    outcome: "Passed USFDA inspection with zero 483 observations on automation systems; batch cycle time reduced by 18% through optimized recipe sequences.",
    value: "₹2.8 Crore",
    duration: "14 months",
    team: "11 engineers",
    challenges: "IQ/OQ/PQ validation documentation; all equipment change control through formal procedures; integration with existing ERP system via OPC-UA.",
    deliverables: ["FDA-Compliant SCADA System", "Batch Recipe Manager", "Electronic Batch Records", "IQ/OQ/PQ Protocol Packages", "Audit Trail Database", "User Access Management System"]
  },
  {
    title: "Cement Raw Mill VFD Retrofit & SCADA Integration",
    client: "Penna Cement Industries",
    industry: "Cement",
    scope: "Replacement of 5 direct-on-line (DOL) starters on 600kW to 1200kW raw mill and separator motors with Yaskawa medium voltage drive panels and integration into existing SCADA.",
    tech: "Yaskawa MV1000 Medium Voltage Drives, Allen-Bradley ControlLogix PLC, WinCC SCADA integration",
    location: "Boyareddypalle, Andhra Pradesh",
    outcome: "Power consumption reduced 22% on raw mill section; DOL starting current surges (7x FLA) eliminated; mill availability improved by 11%.",
    value: "₹5.2 Crore",
    duration: "16 months",
    team: "14 engineers",
    challenges: "Medium voltage (6.6kV) drive installation with 72-hour plant shutdown window; motor cable replacement for drive-rated insulation.",
    deliverables: ["5 MV VFD Panels (6.6kV)", "Harmonic Analysis Report", "SCADA Integration", "Energy Savings Verification Report", "Motor Parameter Sheets", "Cable Thermal Studies"]
  },
  {
    title: "Coal Handling Plant Automation — NTPC Ramagundam",
    client: "NTPC (National Thermal Power Corporation)",
    industry: "Power Plants",
    scope: "Design and commissioning of complete coal handling plant (CHP) automation including 23 conveyor sequence controllers, wagon tippler controls, and crusher plant automation.",
    tech: "Yokogawa Centum VP DCS, Siemens S7-400 PLC, ATEX Zone 21 MCC panels, belt weighers",
    location: "Ramagundam, Telangana",
    outcome: "Coal handling throughput achieved at 2500 TPH design capacity; zero conveyor sequence failure incidents logged over 24-month operational period.",
    value: "₹7.4 Crore",
    duration: "28 months",
    team: "22 engineers",
    challenges: "ATEX Zone 21 (combustible dust) certification requirements across all electrical panels; integration with existing DCS without shutdown.",
    deliverables: ["ATEX Zone 21 MCC Panels", "DCS Integration Modules", "23 Conveyor Controllers", "Belt Weigher Integration", "Emergency Stop Matrix Panel", "Safety Case Document"]
  },
  {
    title: "Boiler Feed Pump VFD Speed Control System",
    client: "GVK Power Plant, Jegurupadu",
    industry: "Power Plants",
    scope: "Replacement of throttle valve control system on 4 × 800kW boiler feed pumps with variable speed drives, providing energy savings and precise steam flow control.",
    tech: "ABB ACS880 MV Drives, Yokogawa flow transmitters, Wika pressure instrumentation, DCS integration",
    location: "Jegurupadu, Andhra Pradesh",
    outcome: "Reduced pump power consumption by 31%; eliminated throttle valve pressure drop losses; steam header pressure stability improved to ±0.3 Bar.",
    value: "₹3.1 Crore",
    duration: "11 months",
    team: "9 engineers",
    challenges: "Shutdown window limited to 72 hours per pump; tight DCS PID tuning required for stable steam pressure under dynamic load changes.",
    deliverables: ["4 × ABB MV VFD Panels", "Instrumentation Upgrade", "DCS Integration & Tuning", "Energy Audit Report", "FAT/SAT Certificates"]
  },
  {
    title: "Oil Refinery Tank Farm SCADA Telemetry",
    client: "BPCL (Bharat Petroleum Corporation Ltd.)",
    industry: "Oil & Gas",
    scope: "Design and commissioning of a complete tank farm SCADA monitoring system for 48 crude oil and product storage tanks including level, temperature, and pressure telemetry.",
    tech: "Honeywell Experion C300, ATEX radar level gauges, Ex-ia transmitters, OPC gateway server",
    location: "Navi Mumbai, Maharashtra",
    outcome: "Real-time inventory tracking accuracy improved to 0.1% volume measurement; overfill prevention interlock response time <2 seconds.",
    value: "₹6.3 Crore",
    duration: "20 months",
    team: "16 engineers",
    challenges: "Integrating with 48 tanks across a 12km² terminal with multiple classified zones; OPC gateway integration with existing SAP inventory system.",
    deliverables: ["Tank Gauging SCADA System", "48 Radar Level Gauges (ATEX)", "Overfill Protection System", "Fire & Gas Panel Integration", "API 2350 Compliance Report", "OPC-SAP Gateway Configuration"]
  },
  {
    title: "Water Treatment Plant Automation — 60 MLD RO",
    client: "Telangana Industrial Infrastructure Corporation (TSIIC)",
    industry: "Water Treatment",
    scope: "Automation of a 60 MLD reverse osmosis water treatment plant including pre-treatment, high-pressure pump control, permeate/reject management, and CIP systems.",
    tech: "Siemens S7-300 PLC, Baumer level sensors, Modbus fiber network, stainless steel panels",
    location: "Zaheerabad Industrial Area, Telangana",
    outcome: "Plant recovery ratio improved to 78% (from 68%); chemical consumption reduced 23% through automated dosing optimization.",
    value: "₹2.4 Crore",
    duration: "13 months",
    team: "9 engineers",
    challenges: "High-pressure pump (60 Bar) startup sequences requiring precise ramp control; RO membrane protection interlocks against high silt density index.",
    deliverables: ["PLC Control Panel", "High-Pressure Pump VFD Panels", "Online Water Quality Monitoring", "CIP Automation System", "SCADA Dashboard", "O&M Training Manual"]
  },
  {
    title: "Sugar Mill Centrifugal Machine Drive System",
    client: "NSL Sugar Limited",
    industry: "Sugar",
    scope: "Supply and commissioning of VFD-based automatic cycle control system for 12 batch centrifugal machines with PLC sequence control and energy regeneration.",
    tech: "Yaskawa A1000 drives, dual-drive configuration, regenerative braking, touchscreen HMI, CPRI panels",
    location: "Kovvur, Andhra Pradesh",
    outcome: "Centrifugal cycle throughput increased 22%; regenerated energy from deceleration estimated at 18% of motor input energy per cycle.",
    value: "₹1.8 Crore",
    duration: "7 months",
    team: "6 engineers",
    challenges: "Centrifugal machines require 200% torque at zero speed; existing motor wiring needed upgrading for drive-rated insulation; commissioning during active crushing season.",
    deliverables: ["12 VFD Drive Panels", "PLC Sequence Controllers", "HMI Operator Stations", "Regenerative Braking Units", "FAT Documentation", "Season-end AMC Plan"]
  },
  {
    title: "Robotic Palletizing Cell — Packaging Plant",
    client: "ITC Limited (Foods Division)",
    industry: "Food Processing",
    scope: "Integration of a Yaskawa Motoman 4-axis palletizing robot cell for end-of-line carton palletizing, including conveyor sequencing, vision-guided pick, and pallet wrapping station.",
    tech: "Yaskawa Motoman MH180 robot, YRC1000 controller, Cognex vision system, safety PLC",
    location: "Medchal, Telangana",
    outcome: "Line throughput increased from 18 pallets/hour (manual) to 35 pallets/hour; zero product damage incidents since commissioning.",
    value: "₹2.2 Crore",
    duration: "8 months",
    team: "8 engineers",
    challenges: "Coordinating robot pick cycles with variable upstream packaging speeds; hygienic design requirements for food zone installation.",
    deliverables: ["Robot Cell with Safety Fencing", "Conveyor Interface System", "Vision Guided Pick Program", "Safety Risk Assessment", "SAT Report", "Operator Training (Theory + Practical)"]
  },
  {
    title: "ECIL Defense Testing Rig Automation Interface",
    client: "Electronics Corporation of India Limited (ECIL)",
    industry: "Defense",
    scope: "Custom automation interface for a high-precision component testing rig requiring sub-millisecond response data acquisition and deterministic control.",
    tech: "National Instruments LabVIEW RT, NI CompactRIO chassis, mil-spec connectors, isolated power supplies",
    location: "Hyderabad, Telangana",
    outcome: "Achieved 250μs data acquisition timing accuracy; test throughput improved 3× compared to manual operation; zero measurement errors in acceptance testing.",
    value: "Confidential",
    duration: "10 months",
    team: "5 engineers",
    challenges: "Sub-millisecond timing requirements; MIL-STD environmental compliance; classified project protocols restricting system documentation handling.",
    deliverables: ["LabVIEW RT Application", "Hardened NI CompactRIO System", "Test Sequence Software", "Calibration Documentation", "Acceptance Test Protocol", "Operator Manual"]
  },
  {
    title: "Underground Mine Ventilation Automation",
    client: "Singareni Collieries Company Ltd. (SCCL)",
    industry: "Mining",
    scope: "Complete automation of underground mine ventilation including auxiliary fan speed control, methane sensor integration, and emergency high-speed fan trigger logic for 3 shafts.",
    tech: "Yaskawa V1000 drives, ATEX Zone 1 panels, methane gas detectors, fiber network, safety PLC",
    location: "Kothagudem, Telangana",
    outcome: "Emergency fan trigger response time reduced from >2 minutes (manual) to <8 seconds (automated); achieved DGMS statutory compliance.",
    value: "₹1.3 Crore",
    duration: "9 months",
    team: "7 engineers",
    challenges: "ATEX Zone 1 requirements throughout underground workings; reliable communication in shaft environments; DGMS (Directorate General of Mines Safety) regulatory approval.",
    deliverables: ["ATEX VFD Drive Panels (x3)", "Methane Detection Network", "Safety PLC with Interlocks", "Emergency Override Panel", "DGMS Compliance Documentation", "Maintenance Training"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "ISO 9001:2015", number: "QMS-0521-820", scope: "Quality Management System for design, manufacture, and servicing of Electrical and Automation Panels." },
  { name: "CPRI Short-Circuit Certificate", number: "CPRI-SC-1025", scope: "Busbar verification test up to 65kA for power control panel structures." },
  { name: "A-Grade Electrical License (33KV)", number: "TS-A-33KV-91", scope: "Authorized by Government of Telangana for high voltage electrical installation and maintenance works." },
  { name: "Yaskawa Authorized Service Center", number: "YAS-ASC-2026", scope: "Authorized service center for Yaskawa AC drives (VFD) repair, maintenance, and warranty support." },
  { name: "PESO Safety Certificate", number: "PESO-TS-0892", scope: "Petroleum and Explosives Safety Organisation approval for hazardous area electrical panel designs." },
  { name: "RDSO Approved Vendor", number: "RDSO-MP-0.4200.87", scope: "Indian Railways Research Designs and Standards Organisation approved vendor for signaling and traction auxiliary panels." }
];

export const WORKFLOW = [
  { step: "Design Engineering", title: "Technical Blueprint & Simulation", desc: "Our engineering division designs AutoCAD Electrical schematic wiring diagrams, selects component brands and ratings, and runs load and thermal simulations before any fabrication begins." },
  { step: "Panel Manufacturing", title: "CPRI Compliant Assembly", desc: "Enclosures are fabricated and powder-coated. Copper busbars are hydraulically punched, bent, and heat-shrink wrapped. Internal wiring follows strict color coding, loop numbering, and IPC wiring standards." },
  { step: "FAT Testing", title: "Factory Acceptance Tests", desc: "Every board undergoes insulation resistance tests (1000V Megger), hi-pot dielectric test (2.5kV/1min), control logic injection checks, and thermal infrared scanning under simulated load conditions." },
  { step: "Site Deployment", title: "Erection & Field Cabling", desc: "Panels are positioned, leveled, and anchored at the client facility. Field instrument cables are correctly terminated, earthing continuity values are verified, and cable schedules signed off." },
  { step: "Commissioning", title: "System Startup & Tuning", desc: "No-load dry runs are initiated, motor parameter auto-tuning is executed, SCADA scaling and alarm limits are configured, and all safety interlock loops are verified and documented." },
  { step: "Lifecycle Service", title: "24/7 AMC Support", desc: "Preventive health checks, drive component renewal, relay calibration updates, firmware security patching, and emergency on-site diagnostic support within 4 hours in Hyderabad." }
];
