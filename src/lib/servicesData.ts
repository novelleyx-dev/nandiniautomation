export interface ServiceChallenge {
  before: string;
  after: string;
  scenario: string;
}

export interface ServiceWorkflowStep {
  name: string;
  activity: string;
  tools: string;
  safety: string;
  deliverable: string;
}

export interface ServiceUseCase {
  client: string;
  requirement: string;
  problem: string;
  solution: string;
  products: string;
  outcome: string;
  improvement: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetails {
  slug: string;
  title: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  overviewParagraphs: string[];
  challenges: ServiceChallenge;
  workflow: ServiceWorkflowStep[];
  architectureDesc: string;
  architectureDetails: string[];
  industries: { name: string; need: string; challenge: string; advantage: string }[];
  caseStudy: ServiceUseCase;
  techEcosystem: { name: string; use: string; logic: string }[];
  qualityAssurance: string[];
  safetyCompliance: { standard: string; description: string }[];
  maintenanceAMC: string[];
  docs: { name: string; size: string; type: string }[];
  faqs: ServiceFAQ[];
}

export const SERVICES_DATA: Record<string, ServiceDetails> = {
  "panel-manufacturing": {
    slug: "panel-manufacturing",
    title: "CPRI-Certified Electrical Control Panels",
    subtitle: "Custom Engineered Power Control Centers (PCC), Motor Control Centers (MCC), VFD & PLC Panels Built to IS/IEC 61439 Standards.",
    stats: [
      { label: "Short-Circuit Protection", value: "65kA / 1 Sec" },
      { label: "Busbar Rating", value: "Up to 6300A" },
      { label: "Compliance Standard", value: "IEC 61439-1&2" },
      { label: "Enclosure Protection", value: "IP55/IP65 Certified" }
    ],
    overviewParagraphs: [
      "Power distribution and motor management represent the core electrical heart of any heavy process facility. At Nandini Enterprises, we engineer and manufacture custom low-voltage (LV) power switchgear assemblies that act as the reliable nervous system of your factory. Our panel manufacturing process is built on strict compliance with the latest IEC 61439-1 & 2 design standards, assuring safe, reliable, and thermally optimized performance under continuous maximum loads.",
      "Every single panel board starts its life in our state-of-the-art AutoCAD mechanical design suite. We perform extensive 2D layout planning and 3D thermal simulations to model heat dissipation patterns inside the cabinet enclosure. This design planning guarantees that internal switchgears, contactors, and variable speed drives remain within their nominal operating temperatures, directly preventing premature component failures and subsequent assembly downtime.",
      "Our fabrication plant utilizes top-tier, high-conductivity electrolytic grade copper and aluminum busbars. The busbars are processed using hydraulic punching, bending, and cutting machinery to achieve precise millimetric alignment. This precision prevents local mechanical tensions or hot-spots that could trigger short-circuits. Busbars are then sleeved using heavy-duty flame-retardant heat-shrinkable wraps, labeled with color-coded safety identifiers, and secured with epoxy support insulators.",
      "Quality assurance is integrated into every stage of fabrication. Our testing laboratory executes high-voltage insulation tests, continuity checks, control logic functional loop simulation, and dynamic current load checks. Nandini Enterprises panels are CPRI (Central Power Research Institute) certified for up to 65kA short circuit withstand ratings, giving procurement managers, factory directors, and EPC contractors absolute confidence in our installations."
    ],
    challenges: {
      before: "A major cement packaging plant suffered from random electrical panel trips, overheating busbar joints, and high current leakages due to poor enclosure ventilation and loose internal connections.",
      after: "Nandini Enterprises engineered a modular, double-busbar PCC panel with active exhaust ventilation grids, custom copper terminal jumpers, and integrated micro-controller circuit breakers.",
      scenario: "Eliminated random load trips, lowered cabinet internal temperatures by 18°C, and secured fail-safe power supply continuity to five milling silos."
    },
    workflow: [
      {
        name: "Load Study & Design",
        activity: "Analyze client electrical schematic requirements, compute total active load factors, design copper busbar sizing profiles, and simulate thermal heat dissipation curves.",
        tools: "AutoCAD Electrical, SolidWorks Electrical Thermal Solver",
        safety: "Double check insulation clearances against safety guidelines.",
        deliverable: "Approved electrical single line diagrams (SLD) and general arrangement (GA) layout drawing sheets."
      },
      {
        name: "Busbar Fabrication",
        activity: "Hydraulic cutting, bending, and punching of electrolytic copper bars. Apply high-voltage heat-shrinkable color-coded sleeves.",
        tools: "Hydraulic Busbar processing machines, torque wrench setups",
        safety: "Mandatory safety boots, face protection, and mechanical barrier guardrails during punching.",
        deliverable: "Completed high-conductivity busbar system with torque-marked hardware fittings."
      },
      {
        name: "Wiring & Component Fitment",
        activity: "Mount switchgears, install control PLC/HMI modules, run internal wire loops, and crimp heavy-duty lugs with ferrules.",
        tools: "Pneumatic crimping tools, digital multi-meters",
        safety: "Organize wiring channels to avoid proximity to heat sources.",
        deliverable: "Fully wired, compartmentalized Form-4b switchgear assembly ready for diagnostic checks."
      },
      {
        name: "FAT Testing & Dispatch",
        activity: "Conduct insulation resistance checks, high-voltage breakdown test (2.5kV/1 min), logic injection checks, and thermal checkups.",
        tools: "Megger insulation tester, primary current injection kit",
        safety: "Establish high-voltage exclusion barricades with warning beacons.",
        deliverable: "Signed Factory Acceptance Test (FAT) report sheet and secure transport packing dispatch logs."
      }
    ],
    architectureDesc: "Our electrical panels utilize compartmentalized Form 4b segregation. The busbar chamber, cable alley, and breaker modules are isolated using metal sheets, restricting faults to individual drawers.",
    architectureDetails: [
      "Busbar Chambers: Run horizontally and vertically, wrapped in heat-shrink sleeves and isolated from breaker compartments.",
      "Switchgear Modules: Integrated with Air Circuit Breakers (ACB) or Molded Case Circuit Breakers (MCCB) matching coordination curves.",
      "Thermal Ventilation: Active twin fan cooling systems running on automatic digital temperature triggers.",
      "Earthing: Dedicated internal copper ground running the entire panel length with external earth pit connectivity hooks."
    ],
    industries: [
      { name: "Steel", need: "Heavy-duty power distribution to withstand arc furnaces and mechanical vibrations.", challenge: "Severe dust ingress and massive harmonic current distortion.", advantage: "IP65 dust-sealed, reactor-filtered panels with custom busbar configurations." },
      { name: "Cement", need: "High power starter feeders for heavy vertical roller mill motors.", challenge: "Heavy mechanical stress and low voltage starts.", advantage: "PCC/MCC drawers with smooth soft starter integration." },
      { name: "Water", need: "Pumping station distribution control with dual redundant grid incomers.", challenge: "Outdoor environment humidity and high power surge risks.", advantage: "CPRI double-door outdoor kiosk panels with surge protection devices." }
    ],
    caseStudy: {
      client: "Vizag Steel Rolling Mill Phase II",
      requirement: "Replace outdated, overheating MCC panel feeding auxiliary cooling fans and water pumps.",
      problem: "Copper busbars were deteriorating, causing localized terminal hotspots, causing regular outages.",
      solution: "Assembled a 4000A, Form-4b segregated copper busbar MCC panel with smart electronic relay modules and Modbus gateway integration.",
      products: "Electrolytic Copper Busbars, ABB Tmax MCCBs, Schneider Smart relays.",
      outcome: "Completely eliminated hotspot trips and enabled early warning alarm signals over SCADA before outages happened.",
      improvement: "Zero downtime occurrences in 12 months with real-time temperature tracking."
    },
    techEcosystem: [
      { name: "Air Circuit Breakers (ACB)", use: "Main incoming power isolation and heavy overload protections.", logic: "Integrated trip unit monitors fault curves and trips breaker mechanism within milliseconds." },
      { name: "Automatic Power Factor Regulators (APFC)", use: "Maintains grid power factor close to unity to save energy.", logic: "Measures reactive current load and switches capacitor banks automatically." },
      { name: "Smart Protection Relays", use: "Monitors earth leaks, phase imbalance, and dry-run faults.", logic: "Communicates diagnostic alarm telemetry back to central PLC via RS485 loop." }
    ],
    qualityAssurance: [
      "Insulation resistance check using 1000V Megger (minimum 100MΩ threshold).",
      "High Voltage dielectric checkup at 2.5kV applied for 60 seconds with zero leakage.",
      "Control wiring continuity validation using computer-aided testing setups.",
      "Thermal camera scan of all busbar connections under artificial load tests."
    ],
    safetyCompliance: [
      { standard: "IEC 61439-1 & 2", description: "Design standards for low-voltage switchgear assemblies." },
      { standard: "IS 8623", description: "Indian standard rules for factory-built assemblies of switchgear." },
      { standard: "IP55 / IP65", description: "Ingress Protection rating matching dust and water jets resistance rules." }
    ],
    maintenanceAMC: [
      "Preventive quarterly cleaning, busbar joint torque checks, and insulator checking.",
      "Thermal profiling of all cables and contactors using infrared sensors.",
      "Relay logic recalibration and dynamic trip testing using injection kits.",
      "Modernization of legacy panels: retrofitting contactors with energy efficient starter kits."
    ],
    docs: [
      { name: "CPRI Panel Test Certificate.pdf", size: "2.4 MB", type: "PDF Document" },
      { name: "Standard MCC Panels Brochure.pdf", size: "4.1 MB", type: "PDF Brochure" },
      { name: "Maintenance & Sizing Chart.pdf", size: "1.8 MB", type: "Technical Chart" }
    ],
    faqs: [
      { q: "What does a Form-4b panel layout mean?", a: "It refers to the internal separation type defined by IEC 61439-1. In Form-4b, busbars are separated from switchgear functional units with metallic barriers, all individual switchgear drawers are isolated from each other, and the external terminal connection compartment is also segregated. This means a fault in one drawer does not propagate to adjacent units or busbars — critically limiting the scope of damage and allowing continued plant operation during single-feeder repair." },
      { q: "Do you supply panels to outdoor areas?", a: "Yes. We construct outdoor double-door kiosks with protective canopies, dust-proof neoprene gaskets, and IP65 ingress protection seals. These outdoor assemblies include dehumidification heaters to prevent condensation on live components, and are built on an elevated base frame to prevent water ingress during heavy rainfall." },
      { q: "What is the CPRI short-circuit certification and why does it matter?", a: "CPRI (Central Power Research Institute) independently tests and certifies that a panel design can withstand a specified fault current (e.g. 65kA) for one second without catastrophic failure. This type test validates the structural integrity, busbar design, and component coordination under extreme fault conditions. Without CPRI certification, a panel's actual fault withstand performance is unknown and relies solely on manufacturer calculations — which may not account for manufacturing variations. Government projects, PSUs, and responsible EPCs always specify CPRI-certified assemblies." },
      { q: "What copper busbar grades do you use in panel fabrication?", a: "We use electrolytic grade copper busbars (99.9% purity, IS 191 compliant) with a conductivity of minimum 100% IACS (International Annealed Copper Standard). Higher-purity copper reduces resistive heating at rated current, enabling better thermal performance at the same cross-section compared to lower-grade materials. All busbars are hydraulically punched and bent, then wrapped in heat-shrinkable flame-retardant insulation sleeves color-coded per standard (Red, Yellow, Blue for phases; Black for neutral)." },
      { q: "Can your panels accommodate future capacity expansion?", a: "Yes — we design panels with 20–30% spare busbar capacity and pre-drilled spare mounting positions as standard. For MCC panels, we include spare drawout chassis positions with bus stabs and wiring already run. This allows future feeders or starters to be added without modifying the busbar system or major internal rework, protecting the client's capital investment over a longer operational horizon." },
      { q: "What testing do you perform before dispatching a panel?", a: "Every panel undergoes our standard FAT (Factory Acceptance Test) protocol: insulation resistance check (1000V Megger, minimum 100MΩ), high-voltage dielectric test (2.5kV AC for 60 seconds), control wiring continuity check (point-to-point against schematic), functional logic simulation (if PLC/relay logic is included), thermal infrared scan of all busbar joints under simulated load current, and a physical inspection against the approved GA drawing. A signed FAT report is issued before dispatch." },
      { q: "How long does custom panel manufacturing typically take?", a: "Standard panels (MCC, PCC without complex controls) typically take 6–10 weeks from drawing approval to dispatch. Panels with integrated PLCs, SCADA HMIs, or complex wiring schemes require 10–16 weeks. For urgent requirements, we can expedite select designs to 4 weeks with advance material procurement. Lead times are always confirmed in writing after design finalization." },
      { q: "Do you offer AMC support for panels supplied by other manufacturers?", a: "Yes — we offer comprehensive AMC support for electrical panels from any manufacturer, including legacy systems from closed or restructured companies. Our standard AMC covers quarterly preventive maintenance (cleaning, connection torque checks, insulation tests), thermal scanning, relay calibration, and 24/7 emergency response. We issue a health assessment report after the first site visit documenting existing condition and recommending any corrective actions." }
    ]
  },
  "plc-scada": {
    slug: "plc-scada",
    title: "Industrial PLC & SCADA System Integration",
    subtitle: "Turnkey Logic Programming, Real-Time SCADA Dashboard Setup, and Data Logging Telemetry for Process Optimization.",
    stats: [
      { label: "Data Logging Cycle", value: "100 ms Real-Time" },
      { label: "Supported Nodes", value: "Up to 50,000 tags" },
      { label: "Compliance Standard", value: "FDA 21 CFR Part 11" },
      { label: "Redundancy Speed", value: "<10 ms Auto-switch" }
    ],
    overviewParagraphs: [
      "Process optimization in modern heavy manufacturing demands precise, instantaneous, and automated control logic. Nandini Enterprises delivers enterprise-grade PLC (Programmable Logic Controller) and SCADA (Supervisory Control and Data Acquisition) system integration. We bridge the gap between heavy field machinery and corporate database management, enabling factory managers to execute real-time recipe profiles, monitor alarms, and log key performance indicators.",
      "Our automation division develops structured, fail-safe logic code utilizing international standard IEC 61131-3 programming languages, including ladder logic, structured text, and sequential function charts. We program and configure high-performance CPU architectures from leading global brands, implementing dual-CPU hot standby redundancy. This ensure that if a main controller fails, the backup unit assumes control in under 10 milliseconds without process interruption.",
      "At the supervision level, we design rich, high-fidelity SCADA interfaces. Our screen layout designs follow the ISA-101 HMI standard, using color-coded profiles to prioritize active alerts over static variables. Our SCADA databases are equipped with SQL server engines, enabling historical trends logging, automated PDF reporting, and FDA 21 CFR Part 11 compliant electronic signature logging for pharmaceuticals and water treatment grids.",
      "System integration includes commissioning high-speed communication backbones. We design and install redundant industrial Ethernet networks, Modbus TCP/IP loops, Profinet rings, and fiber optic telemetry channels. This ensures absolute signal integrity, protecting critical feedback loops from electro-magnetic noises generated by heavy VFDs and switchgears."
    ],
    challenges: {
      before: "A large pharmaceutical manufacturer faced audit issues due to lack of batch data traceability, manual temperature logging errors, and recipe sequence imbalances.",
      after: "Nandini Enterprises engineered a centralized Siemens S7-1500 PLC automation cluster with redundant WinCC SCADA dashboards and 21 CFR Part 11 compliant audit databases.",
      scenario: "Automated the entire batch reactor cycle, achieved complete data logging traceability, and secured GMP certification compliance audit approval."
    },
    workflow: [
      {
        name: "Logic Architecture",
        activity: "Define process flowcharts, draft cause-and-effect matrix logs, define input/output address configurations, and plan network loops.",
        tools: "TIA Portal, RSLogix, Modbus Configurator",
        safety: "Include software emergency trip loops and hardwired manual overrides.",
        deliverable: "Approved Functional Design Specification (FDS) document and network layout drawings."
      },
      {
        name: "PLC Logic Programming",
        activity: "Develop control logic, PID feedback loops, interlocks, alarm limits, and recipe handling modules in ladder logic and structured text.",
        tools: "IEC 61131-3 development tools, logic compilers",
        safety: "Simulate logic faults to verify that the program goes into safe state on error.",
        deliverable: "Compiled PLC program backup codes and simulation diagnostic logs."
      },
      {
        name: "SCADA Screen Design",
        activity: "Design visual mimic diagrams, establish database tags communication, define warning trigger thresholds, and configure historical logs.",
        tools: "Wonderware InTouch, Siemens WinCC SCADA",
        safety: "Maintain ISA-101 alarm priorities to prevent operator alarm fatigue.",
        deliverable: "Completed SCADA visual project mimic layout and database tags sheet."
      },
      {
        name: "Commissioning & Loop Tuning",
        activity: "Run dry logic loop tests, execute hot water runs, calibrate analog transmitters, and tune PID controller parameters.",
        tools: "Loop calibrators, PID tuning software, network analyzers",
        safety: "Enforce strict LOTO (Lockout/Tagout) procedures for all field assets during loop checks.",
        deliverable: "Site Acceptance Test (SAT) reports and operational loop signature files."
      }
    ],
    architectureDesc: "Our SCADA integration features a three-tier automation architecture: Field Device instrumentation, Control Level (redundant PLCs), and Supervision Level (SCADA servers with SQL historical databases).",
    architectureDetails: [
      "Control Network: Configured on a redundant fiber optic ring running Profinet protocol for rapid data exchange.",
      "Redundant CPU Hot Standby: CPU tracking modules share variables at 1Gbps, executing bumpless switchovers on hardware trip.",
      "Audit Database: Integrated database tables capturing timestamped user logins, alarm acknowledges, and parameter modifications.",
      "OPC UA Servers: Provide secure links to ERP systems for inventory forecasting."
    ],
    industries: [
      { name: "Pharma", need: "Strict FDA 21 CFR Part 11 validation and batch process security.", challenge: "Ensuring unalterable system logs and batch trace documentation.", advantage: "Unalterable SQL databases with digital signature approvals and audit trail screens." },
      { name: "Water", need: "Telemetry monitoring across large municipal reservoir areas.", challenge: "Unreliable wireless networks and distant remote stations.", advantage: "RTUs with store-and-forward buffers communicating over secure cellular VPN tunnels." },
      { name: "Chemical", need: "Intelligent dosing control with dynamic feedback.", challenge: "Highly corrosive fluids requiring chemical reaction containment safety protocols.", advantage: "SIL-2 PLC logic integration with redundant analog inputs and auto-shutdown loops." }
    ],
    caseStudy: {
      client: "Hyderabad Water Supply Metro Pumping Phase I",
      requirement: "Automate raw water intake pumping station with remote monitoring.",
      problem: "Operators had to manually start pump starters, leading to high flow surge risks and pump dry-run damages.",
      solution: "Installed a redundant PLC automation rack with fiber network, Baumer flow sensors, and custom SCADA monitor desk.",
      products: "Siemens S7-400H Redundant PLC, WinCC Professional SCADA, Baumer Sensors.",
      outcome: "Completely automated pump scheduling based on reservoir levels, eliminated flow surges via active speed control, and prevented dry-runs.",
      improvement: "Water loss reduced by 14% and pump lifetime increased by 22% through automated runtime rotation."
    },
    techEcosystem: [
      { name: "Siemens S7-1500 Series", use: "Heavy plant sequencing and diagnostic monitoring.", logic: "Runs loop code cycles inside micro-seconds and manages high-density network communication." },
      { name: "OPC UA Interface", use: "Standardized cross-brand platform communication.", logic: "Provides object-oriented secure data structures compatible with diverse systems." },
      { name: "SQL Historical Logger", use: "Capturing process data parameters for years.", logic: "Compresses values using delta change logic and writes transactions securely." }
    ],
    qualityAssurance: [
      "Simulated logic validation checks under multi-fault scenario injections.",
      "CPU failsafe switchover check (verifying backup takes over under 10ms).",
      "Network storm stress verification on communication rings.",
      "Data logging accuracy comparison between physical analog meters and database values."
    ],
    safetyCompliance: [
      { standard: "ISA-101", description: "Human-Machine Interface design rules for process control systems." },
      { standard: "IEC 61131-3", description: "Standard programming language formats for PLCs." },
      { standard: "FDA 21 CFR Part 11", description: "FDA criteria for electronic records and signatures." }
    ],
    maintenanceAMC: [
      "Annual software backups, backup battery updates, and firmware version security patching.",
      "Database cleaning, archive file creation, and query speed tuning.",
      "AMC support: 24/7 remote diagnostic login to resolve logic blocks.",
      "Modernization: converting old legacy code scripts (e.g. S5 PLCs) to S7 structures."
    ],
    docs: [
      { name: "FDS Reference Guide.pdf", size: "3.2 MB", type: "PDF Document" },
      { name: "PLC SCADA Integration Layout.pdf", size: "2.8 MB", type: "Drawing Layout" },
      { name: "Standard FAT-SAT Checklist.xlsx", size: "1.4 MB", type: "Excel format" }
    ],
    faqs: [
      { q: "Can you connect old machinery to a new SCADA system?", a: "Yes. We integrate industrial protocol gateway converters to translate legacy protocols (Modbus RTU, DF1, Profibus-DP) to modern standards (OPC UA, Profinet, EtherNet/IP). Devices as old as Allen-Bradley PLC-5 with DH+ networks can be connected to modern SCADA platforms using protocol bridges. This approach protects the investment in existing working machinery while gaining the benefits of modern visualization, alarm management, and data logging." },
      { q: "What security measures do you take for remote SCADA access?", a: "We implement layered OT security: dedicated hardware VPN routers (not software VPNs) with certificate-based authentication for all remote connections; network segmentation separating the OT network from the IT/internet network; application whitelisting on SCADA workstations; USB port lockdown; and complete audit logging of all remote access sessions including commands issued. Multi-factor authentication is enforced for all user accounts with admin privilege levels." },
      { q: "What is OPC UA and why is it preferred over older protocols?", a: "OPC UA (Unified Architecture) is an open, vendor-neutral communication standard that provides encrypted, certificate-authenticated data exchange between PLCs, SCADA systems, historian databases, and enterprise ERP systems. Unlike older proprietary protocols, OPC UA uses a standardized information model that allows any compliant software to discover, subscribe, and access data without vendor-specific drivers. It also supports HTTPS transport with TLS encryption — making it the preferred protocol for IEC 62443 compliant industrial cybersecurity architectures." },
      { q: "How do you ensure SCADA system availability for 24/7 critical operations?", a: "We design SCADA systems with redundant servers in hot-standby configuration — if the primary server fails, the secondary assumes operation automatically in under 30 seconds without operator intervention. The communication network uses redundant fiber ring topology, so a single cable cut does not interrupt communication. Uninterruptible power supplies (UPS) protect servers from short power outages. In critical applications like water pumping and power generation, we specify N+1 redundancy at every system layer." },
      { q: "Can SCADA data be accessed on mobile devices or tablets?", a: "Yes. Modern SCADA platforms (WinCC, Wonderware, Ignition) include secure HTML5 web clients that provide read access to trends, alarms, and KPI dashboards on any web browser — including tablets and mobile phones. Access is protected by HTTPS encryption, role-based authentication, and is typically restricted to read-only mode for mobile clients, with write operations requiring logged authentication on dedicated operator stations." },
      { q: "How long does a typical PLC/SCADA project take from contract to commissioning?", a: "Project duration depends on scope. A standalone machine PLC system with HMI typically takes 8–12 weeks. A complete plant automation system with multiple PLC racks, SCADA installation, fiber network, and field instrument integration typically takes 16–28 weeks. Complex projects with FDA validation requirements or RDSO compliance add 4–8 additional weeks for documentation and formal acceptance testing. We provide a project schedule with milestones at the contract stage." },
      { q: "What PLCs do you typically specify and program?", a: "Our primary platforms are Siemens (S7-1200, S7-1500, S7-400H redundant), Allen-Bradley (CompactLogix, ControlLogix), and Honeywell (HC900, Safety Manager). Platform selection depends on the application: Siemens S7-1500 for complex process systems with Profinet integration; Allen-Bradley ControlLogix for manufacturing lines with EtherNet/IP devices; Honeywell Safety Manager for SIL-2/3 certified safety systems. We also support Schneider (Modicon), Mitsubishi, and L&T PLCs per client preference." },
      { q: "Can you perform SCADA upgrades without shutting down plant operations?", a: "Yes — with careful planning. We phase the SCADA upgrade: first installing parallel new servers while the old system continues operating; then migrating tag databases, graphics, and alarm configurations; then cutting over communication loops one section at a time during low-production windows; and finally decommissioning the old servers. This approach is more complex than a clean-shutdown replacement, but allows continuous plant operation throughout the migration. We have successfully executed this approach on pharmaceutical batch systems, water pumping stations, and conveyor automation systems." }
    ]
  },
  "vfd-solutions": {
    slug: "vfd-solutions",
    title: "YASKAWA VFD & Drive System Solutions",
    subtitle: "Authorized Service Center & Integrator for Variable Frequency Drives. Energy Audit, Dynamic Torque Control, and Harmonic Mitigation.",
    stats: [
      { label: "Energy Saving Capacity", value: "Up to 35% Typical" },
      { label: "VFD Range Serviced", value: "0.4 kW to 1000 kW" },
      { label: "Repair Turnaround", value: "Under 24 Hours" },
      { label: "Authorized status", value: "OEM Partner Center" }
    ],
    overviewParagraphs: [
      "Variable Frequency Drives (VFDs) are the core speed regulators of the industrial landscape, matching motor outputs directly to load profiles. Nandini Enterprises is the Authorized Service Center and System Integrator for Yaskawa India. We deliver complete drive system engineering, including motor parameter auto-tuning, torque profile configuration, harmonic mitigation filter setups, and rapid component-level repairs.",
      "Our drive specialists analyze motor loads to optimize acceleration/deceleration S-curve speed paths. This is particularly crucial for cranes, hoists, and material handling systems where precise brake control logic and load slip protection are required. We program Yaskawa's advanced vector control algorithms to achieve maximum motor torque at zero speed, eliminating slips and minimizing mechanical gear wear.",
      "Harmonic current distortions from heavy VFD switches can pollute your plant power grid, causing other electronic equipment to malfunction and triggering utility penalties. We resolve this by performing electrical system harmonic audits, designing and installing input/output AC reactors, passive filters, and active harmonic filters that limit harmonic levels within IEEE 519 compliance standards.",
      "As an Authorized Yaskawa Service Center, our Cherlapally base features advanced drive test benches, load testing rigs, and a vast stock of genuine spares, including IGBT modules, driver boards, cooling fans, and capacitors. Our highly trained service engineers offer round-the-clock emergency support, performing repair works, load validation checks, and diagnostic evaluations to restore operations quickly."
    ],
    challenges: {
      before: "A large steel plant experienced regular VFD tripping faults, crane load slippage risks, and utility penalties due to high electrical harmonics.",
      after: "Nandini Enterprises installed Yaskawa A1000 crane drives with dynamic braking resistors, active anti-slip logic, and input harmonic filters.",
      scenario: "Eliminated load slips, reduced utility harmonics within compliance rules, and stopped drive trip occurrences under heavy hoisting cycles."
    },
    workflow: [
      {
        name: "Motor Torque Assessment",
        activity: "Evaluate motor specifications, measure load inertia curves, check operating speed limits, and determine braking power needs.",
        tools: "Power clamp meters, thermal cameras, load analyzers",
        safety: "Verify motor grounding resistance before starting rotation.",
        deliverable: "Approved drive load assessment sheet and drive dimension layout plans."
      },
      {
        name: "Drive Assembly & Programming",
        activity: "Mount drives in custom CPRI cabinets, configure cooling channels, install input/output filters, and program speed parameters.",
        tools: "Yaskawa DriveWizard, thermal calculators, torque wrenches",
        safety: "Enforce safety clearance spaces around the drive heatsinks.",
        deliverable: "Programmed drive cabinet assembly and parameter setup checklist sheets."
      },
      {
        name: "Parameter Auto-Tuning",
        activity: "Execute rotational or rotational-less motor auto-tuning, configure S-curve limits, and test digital/analog I/O logic.",
        tools: "Yaskawa operator panels, tachometers",
        safety: "Erect barricades around rotating shaft couplers before starting auto-tuning.",
        deliverable: "Fine-tuned motor speed parameters and loop response curves."
      },
      {
        name: "Load Run & Harmonic Audit",
        activity: "Perform full load tests, log current waveforms under loads, measure power harmonic levels, and issue compliance reports.",
        tools: "Power quality analyzer, thermal imager",
        safety: "Do not touch power components until DC bus capacitors are completely discharged.",
        deliverable: "Verified load run reports and IEEE 519 harmonic compliance certificate sheets."
      }
    ],
    architectureDesc: "Our VFD integrations include custom cabinet layouts with line reactors, active cooling channels, dynamic braking resistors, and communication links to central PLC racks.",
    architectureDetails: [
      "AC Line Reactors: Mounted on VFD input terminals to suppress voltage surges and reduce harmonic currents.",
      "Braking Resistors: Absorb regenerative energy from high-inertia deceleration loads to prevent overvoltage faults.",
      "Ventilation System: Cabinet internal air pathways designed to maintain heatsink temperature below 45°C.",
      "Profinet Cards: Provide real-time speed, current, and error diagnostic logs to supervisory control systems."
    ],
    industries: [
      { name: "Cement", need: "Speed control on high-volume kilns and exhaust fans.", challenge: "High starting loads and abrasive particulate dust.", advantage: "Yaskawa heavy-duty IP55 drives with conformally coated electronic boards." },
      { name: "Elevators", need: "Smooth, jerk-free passenger vertical acceleration paths.", challenge: "Ensuring safety under power trips and maintaining brake torque.", advantage: "Elevator-specific L1000A drives with integrated battery rescue operations." },
      { name: "Steel", need: "Precise speed synchronization for continuous casting machines.", challenge: "Extreme heat and high torque at low speeds.", advantage: "Closed-loop vector control drives with encoder feedback cards." }
    ],
    caseStudy: {
      client: "Hyderabad Pumping Station Retrofit",
      requirement: "Upgrade direct-on-line (DOL) starters on 250HP pumps to adjust water flow rates dynamically.",
      problem: "Constant starting current surges damaged water mains, and running pumps at full speed wasted power.",
      solution: "Installed 3 Yaskawa A1000 VFD control panels with integrated bypass switchgear and PID pressure control.",
      products: "Yaskawa A1000 Drives, Siemens switchgears, Wika pressure sensors.",
      outcome: "Eliminated water hammer pipe bursts, stabilized pipe pressure automatically, and cut monthly electricity bills.",
      improvement: "Reduced energy consumption by 28% and cut water hammer pipe failures to zero."
    },
    techEcosystem: [
      { name: "Yaskawa A1000 series", use: "High-performance vector control for heavy industries.", logic: "Calculates current vectors inside micro-seconds to control magnetic flux dynamically." },
      { name: "Active Front End (AFE) unit", use: "Eliminating harmonics and regenerating energy.", logic: "Switches input currents sinusoidally, feeding energy back to the grid during braking." },
      { name: "Harmonic Mitigation Filters", use: "Cleans power lines from noise frequencies.", logic: "Tuned LC circuit traps 5th, 7th, and 11th harmonic frequencies." }
    ],
    qualityAssurance: [
      "Motor parameter auto-tuning checks and speed-accuracy audits.",
      "Load run testing for 4 hours at maximum motor current ratings.",
      "Harmonic current measurement checks against IEEE 519 guidelines.",
      "IGBT gate driver pulse diagnostic check using digital oscilloscopes."
    ],
    safetyCompliance: [
      { standard: "IEEE 519", description: "Recommended practices for control of harmonics in electrical power systems." },
      { standard: "IEC 61800-3", description: "EMC standards for variable speed electrical power drive systems." },
      { standard: "IEC 61508 SIL-3", description: "Functional safety compliance for drive safe torque off circuits." }
    ],
    maintenanceAMC: [
      "Preventive cleaning, busbar connections checks, capacitor health audits, and fan replacements.",
      "Drive param values backup creation and parameter fine-tuning adjustments.",
      "24/7 on-site emergency troubleshooting support within 4 hours in Hyderabad.",
      "Modernization: retrofitting obsolete VFD units with modern Yaskawa GA700 modules."
    ],
    docs: [
      { name: "Yaskawa Partner Certificate.pdf", size: "1.9 MB", type: "PDF Document" },
      { name: "Drive Harmonics Sizing Sheet.pdf", size: "2.1 MB", type: "Sizing Sheet" },
      { name: "GA700 Technical Manual.pdf", size: "5.4 MB", type: "Manual" }
    ],
    faqs: [
      { q: "What is the benefit of using AC Line Reactors on VFD inputs?", a: "Line reactors (typically 3–5% impedance) serve multiple functions: they reduce the peak current drawn by the VFD's diode rectifier, lowering Total Harmonic Distortion (THD) at the input by 30–40%; they suppress voltage spikes from switching transients that can damage the VFD's DC bus capacitors; they limit inrush current during VFD power-up; and they protect the upstream transformer from harmonic heating. Line reactors are minimum recommended protection for every VFD installation and should always be specified, especially for drives above 11kW." },
      { q: "How fast can you repair a faulted Yaskawa drive?", a: "As an Authorized Yaskawa Service Center, we stock IGBT modules, gate driver boards, control cards, cooling fans, and capacitor banks for the most common Yaskawa series (A1000, V1000, GA700, L1000A, MV1000) at our Cherlapally service center. For common fault modes (IGBT failure, fan replacement, capacitor bank swap), we typically complete the repair and load-test within 4–8 hours. Complex failures (control board damage, burn damage to multiple components) may require 12–24 hours for full component replacement and testing." },
      { q: "What causes VFD nuisance tripping and how can it be resolved?", a: "Nuisance VFD trips (faults that clear on reset without apparent cause) typically arise from: unstable grid voltage causing DC bus overvoltage faults; excessive ambient temperature causing heatsink overtemperature faults; load-side cable insulation degradation causing ground fault trips; motor parameter mismatch causing overcurrent during acceleration; and communication errors causing communications loss faults. Systematic diagnosis using the VFD fault log (which stores the last 10 faults with timestamps and measured values) usually identifies the root cause within 30 minutes. We provide remote diagnostic support and on-site fault analysis as part of our AMC service." },
      { q: "What is the difference between V/f control and vector control in a VFD?", a: "V/f (Volts-per-Hertz) control is the simplest VFD control mode — it maintains a constant ratio between output voltage and frequency. This provides adequate speed control for simple pump and fan loads but poor low-speed torque performance and no actual torque regulation. Open-loop vector control (sensorless vector) uses a mathematical motor model to estimate flux and torque, providing much better low-speed torque (100–150% at 0Hz) without an encoder. Closed-loop vector control adds a shaft encoder for precise feedback, achieving maximum torque at zero speed, speed regulation of ±0.02%, and position control capability — required for cranes, elevators, and precision conveyors." },
      { q: "Can VFDs operate in high ambient temperature environments like cement or steel plants?", a: "Standard VFDs are rated for 40°C ambient without derating. Above 40°C, derating is required — typically 2% per degree above 40°C for the A1000/GA700 series. For steel plants with 50–55°C machine room temperatures, we specify drives with enhanced heatsink designs, additional cooling provisions, and conformal coating on PCBs to prevent condensation damage during temperature swings. Yaskawa's A1000 series with optional IP55 enclosure rating and fan guard filters is our standard specification for dusty high-temperature environments." },
      { q: "What is dynamic braking and when is it required?", a: "When a VFD decelerates a high-inertia load (crane, centrifuge, large fan), the motor acts as a generator, returning energy to the VFD's DC bus. Without a way to dissipate this energy, the DC bus voltage rises until the VFD trips on overvoltage fault. Dynamic braking uses an IGBT (braking transistor) to switch a resistor across the DC bus when voltage exceeds a threshold, converting regenerative energy to heat. Dynamic braking is required for all crane/hoist applications, centrifuge drives, and any load where the deceleration time must be controlled faster than natural coast-down. For high-duty regenerative loads (elevators, test stands), an Active Front End (AFE) unit returns energy to the grid instead of dissipating it as heat." },
      { q: "Do you provide energy savings verification after VFD installation?", a: "Yes. We perform a formal energy audit before installation, logging existing energy consumption at representative operating points using a calibrated power analyzer. After VFD commissioning and one month of normal operation, we conduct a post-installation measurement using the same power analyzer methodology. The energy savings report compares pre- and post-VFD power consumption, normalized for production volume, and calculates the verified payback period. This documentation supports capital justification and sustainability reporting requirements." },
      { q: "What warranty does Yaskawa provide and what does your AMC cover beyond warranty?", a: "Yaskawa standard warranty is 18 months from date of supply or 12 months from date of installation (whichever comes first), covering manufacturing defects. As an Authorized Service Center, we handle warranty claims directly with Yaskawa India, minimizing administrative delay for customers. After warranty expiry, our AMC covers quarterly preventive maintenance (cleaning, capacitor health check, fan inspection, connection torque check, parameter backup), annual thermal imaging of all cable connections, drive parameter optimization, and 24/7 emergency on-site support within 4 hours in Hyderabad." }
    ]
  },
  "robotics": {
    slug: "robotics",
    title: "Industrial Robotics Integration & Motion Control",
    subtitle: "Custom robotic pick-and-place systems, automated palletizing, welding arm integration, and multi-axis motion synchronization.",
    stats: [
      { label: "Cycle Speed", value: "Up to 120 picks/min" },
      { label: "Payload Capacity", value: "3 kg to 600 kg" },
      { label: "Accuracy", value: "+/- 0.02 mm Repeatable" },
      { label: "Axes Synced", value: "Up to 32 Axes Simultaneous" }
    ],
    overviewParagraphs: [
      "Modern B2B production throughput requires speed, repeatability, and precision beyond manual limits. Nandini Enterprises designs and integrates industrial robotic workstations and multi-axis motion control systems, focusing on pick-and-place lines, automatic palletizers, and robotic welding stations.",
      "We partner with leading global robotics brands, focusing on Yaskawa Motoman arms, to build turnkey automation cells. Our engineering team handles the complete system layout, including selecting the arm kinematic reach, designing custom mechanical end-of-arm tooling (EOAT) like vacuum grippers, and installing surrounding protective safety fencing with interlocks.",
      "To sync robot movements with feed lines, we develop high-speed motion control algorithms. We configure hardware interfaces to track conveyor speeds dynamically, ensuring robots pick objects on the move. We install safety systems, including laser area scanners and light curtains, designed to slow or stop the robot if a worker enters the cell.",
      "We support our clients through the entire validation cycle, performing reachability analysis and offline collision checking. Our service contracts include mechanical inspection, gearbox oil analysis, battery updates, and program optimization to maintain peak performance over long production run times."
    ],
    challenges: {
      before: "A major packaging facility faced bottleneck issues, inconsistent pallet configurations, and high labor costs on their manual wrapping lines.",
      after: "Nandini Enterprises engineered a Yaskawa Motoman 4-axis palletizing robot cell with custom grippers and conveyor sequence control.",
      scenario: "Automated the entire line output, increased packing speed to 24 units per minute, and achieved perfect stack configurations."
    },
    workflow: [
      {
        name: "Robot Kinematic Simulation",
        activity: "Define workstation dimensions, calculate payloads, simulate robot arm movements, check reach limits, and verify cycle speed profiles.",
        tools: "Yaskawa MotoSim, AutoCAD 3D",
        safety: "Confirm safety zone coordinates inside simulation.",
        deliverable: "Simulation video logs and robot reach validation report sheets."
      },
      {
        name: "EOAT Gripper Fabrication",
        activity: "Design and build custom vacuum, magnetic, or mechanical grippers, mount solenoid valves, and wire terminal boxes.",
        tools: "CNC cutters, 3D printers, pneumatic test benches",
        safety: "Calculate vacuum safety factors to prevent drop faults on pressure loss.",
        deliverable: "Finished mechanical gripper assembly with mounting accessories."
      },
      {
        name: "Programming & Teaching",
        activity: "Program tool center points (TCP), define path coordinates, configure speed limits, and set up HMI interfaces.",
        tools: "Motoman Teach Pendant, Ladder interface tools",
        safety: "Verify speed limits are active before teaching coordinates.",
        deliverable: "Program backups containing path trajectories and speed profiles."
      },
      {
        name: "SAT & Production Trial",
        activity: "Install safety guards, check interlocking gates, run full-speed cycle tests, verify sensor limits, and start production runs.",
        tools: "Laser scanner testers, cycle clocks",
        safety: "Verify that entering safety zones triggers Emergency Stops.",
        deliverable: "Completed Site Acceptance Test (SAT) reports and cycle validation logs."
      }
    ],
    architectureDesc: "Our robotic workstations use a unified control architecture: Robot Controller (e.g. Yaskawa YRC1000), Main PLC manager, safety logic controller, and conveyor tracking network sensors.",
    architectureDetails: [
      "Robot Controller: Yaskawa YRC1000 managing servo motors and trajectory paths.",
      "Safety PLC: Monitors gate switches, light curtains, and emergency stops.",
      "EtherCAT Network: Links sensors, encoders, and motor starters.",
      "Operator HMI: Touch screen display showing speed, cycles, and diagnostics."
    ],
    industries: [
      { name: "Pharma", need: "Clean, contamination-free packaging and sorting.", challenge: "Avoiding particulate shedding and chemical washdown issues.", advantage: "Hygienic robot arms with chemical-resistant finishes." },
      { name: "Cement", need: "High-payload bag palletizing and truck load systems.", challenge: "Heavy dust, weight changes, and heavy physical strains.", advantage: "Dust-proof heavy robots with robust bag grippers." },
      { name: "Steel", need: "Automated rod marking, bundle wrapping, and sorting.", challenge: "Extreme heat, sparks, and high physical weight loads.", advantage: "Hardened robots with thermal protective sleeves and custom tools." }
    ],
    caseStudy: {
      client: "Hyderabad Packaging Plant",
      requirement: "Automate secondary packaging line to pack bottles into boxes.",
      problem: "Manual packing was slow, irregular, and prone to sorting errors.",
      solution: "Integrated a Yaskawa Motoman 6-axis pick-and-place robot cell with vacuum grippers and visual camera tracking.",
      products: "Yaskawa Motoman GP8 Robot, YRC1000 Controller, Cognex Vision.",
      outcome: "Automated the entire sorting and packing line, eliminating packing errors completely.",
      improvement: "Increased pick rate by 45% and reduced manual labor reliance on packaging line."
    },
    techEcosystem: [
      { name: "Yaskawa Motoman Arm", use: "High-speed repeatable mechanical movements.", logic: "Translates joint coordinates to Cartesian space inside micro-seconds." },
      { name: "Cognex Vision Sensor", use: "Detecting part position and rotation dynamically.", logic: "Identifies object profiles and sends coordinates to the controller." },
      { name: "Safety Light Curtain", use: "Worker protection around the robot cell.", logic: "Optical light beam breaks trigger safe stops." }
    ],
    qualityAssurance: [
      "Path repeat accuracy check (+/- 0.02mm limit verified).",
      "E-stop response time validation (verifying motion stops in milliseconds).",
      "Continuous cycle run testing for 8 hours under maximum payloads.",
      "EOAT vacuum pressure holding check under emergency power cuts."
    ],
    safetyCompliance: [
      { standard: "ISO 10218-1&2", description: "Safety requirements for industrial robots and robot systems." },
      { standard: "ISO 13849-1", description: "Performance level verification for safety-related control parts." },
      { standard: "ANSI/RIA R15.06", description: "Industrial robots safety standards compliance." }
    ],
    maintenanceAMC: [
      "Annual gearbox oil testing, backup battery changes, and cable harness checks.",
      "Program path tweaks to optimize cycle times.",
      "On-site repair support within 24 hours of notification.",
      "Modernization: rebuilding and reprograming old robot cells for new tasks."
    ],
    docs: [
      { name: "GP8 Tech Specifications.pdf", size: "2.1 MB", type: "PDF Specification" },
      { name: "Robotic Cell Safety Layout.pdf", size: "3.4 MB", type: "Safety Layout" },
      { name: "Robotic Maintenance Guide.pdf", size: "2.7 MB", type: "Technical Guide" }
    ],
    faqs: [
      { q: "What payload capacity robots do you integrate?", a: "We integrate robotic arms with payloads ranging from 3 kg (Yaskawa GP4 for small parts assembly and inspection) up to 600 kg (MH600 for steel plate and heavy coil handling). The correct robot selection depends on payload weight, reach requirement (operating envelope), cycle speed requirement, and application type (pick-and-place vs. welding vs. machining). We perform a detailed application analysis — including inertia calculation for irregular parts — before specifying the robot model." },
      { q: "How does the robot synchronize with a moving conveyor belt?", a: "We install a rotary encoder on the conveyor drive roller, wired to the robot controller's high-speed counter input. The controller reads encoder pulse counts corresponding to conveyor belt movement in real time, and continuously updates the robot's target pick coordinates using a conveyor tracking algorithm. This allows the robot to pick parts from a belt moving at up to 1 meter/second without stopping the conveyor — maintaining maximum line throughput. Tracking window limits are programmed to prevent the robot from reaching outside its safe working envelope." },
      { q: "What safety systems are mandatory around industrial robot cells?", a: "Robot safety systems per ISO 10218-1&2 include: perimeter guarding (safety fencing with interlocked access doors that trigger E-stop when opened during automatic mode), safety light curtains or area scanners at entry points where hard guarding is impractical, a Safety PLC or safety controller (separate from the robot motion controller) monitoring all safety devices independently, hardwired Emergency Stop buttons at multiple accessible positions, and speed/torque limitation in collaborative zones where human-robot proximity is required. We conduct a formal risk assessment per ISO 10218-2 as part of every robot cell project." },
      { q: "Can industrial robots be reprogrammed for new product variants?", a: "Yes — this is one of the key advantages of robotic automation over fixed automation. When a new product variant is introduced, the robot program is modified (or a new program is loaded from memory) with updated path coordinates, gripper parameters, and cycle sequences. For frequently changing products, we implement HMI-based product selection menus where operators select the current product and the robot loads the corresponding program automatically. Teaching new positions with the teach pendant typically takes 1–3 hours for an operator trained to our standard." },
      { q: "What is the typical ROI period for industrial robot installation?", a: "Payback period varies with application, but typical ranges are: palletizing applications 12–24 months (replacing 2–3 manual operators per shift); welding applications 18–30 months (quality improvement, 24/7 operation, no idle time); pick-and-place 12–20 months. The calculation includes: direct labor savings (salary, benefits, shift premium, annual increments), indirect quality savings (rejection reduction, rework elimination), productivity gains (robot works 24 hours at constant speed vs. human fatigue factors), and safety benefits (reduced workplace injury claims). We prepare detailed ROI analyses for clients during the project proposal stage." },
      { q: "Do robots require special power supply infrastructure?", a: "The YRC1000 robot controller requires 3-phase 400V AC supply — the same as standard industrial equipment. Power requirements range from 5kVA for small GP4 robots to 30kVA for large heavy-payload models. The controller includes its own UPS function for brief power dips. For very high-power robots (>15kA supply current), we design a dedicated feeder from the MCC panel with a short-circuit rating matching the supply prospective fault current. Compressed air (5–7 bar) is also required for pneumatic EOAT (end-of-arm tooling) grippers." },
      { q: "How long does robot cell installation and commissioning take?", a: "A single robot pick-and-place or palletizing cell with standard product range typically takes 12–18 weeks from order to production start: 2–3 weeks for detailed engineering and EOAT design; 4–6 weeks for EOAT fabrication, safety guarding fabrication, and electrical panel assembly; 2–3 weeks for factory simulation and preliminary programming; 2–3 weeks for site installation and commissioning; 1–2 weeks for production trials and operator training. Complex multi-robot cells with vision systems and extensive product variants take 20–30 weeks." },
      { q: "What operator training do you provide after robot installation?", a: "We provide a two-part training program: a theoretical session covering robot safety principles, coordinate systems, motion types, program structure, and fault diagnosis (typically 4–8 hours in classroom format); followed by a hands-on practical session on the installed robot covering teach pendant operation, coordinate teaching, program editing, I/O monitoring, and safe mode switching procedures (typically 8–16 hours on the actual cell). Training is conducted for both operators (who run and monitor the robot) and maintenance technicians (who perform first-level fault diagnosis). Training completion certificates are issued." }
    ]
  },
  "instrumentation": {
    slug: "instrumentation",
    title: "Process Instrumentation & Sensor Calibration",
    subtitle: "Turnkey Field Sensor Installation, Pressure/Temperature Transmitters, HART Loop Checks, and Wet/Dry Calibration Services.",
    stats: [
      { label: "Calibration range", value: "-0.95 to 1000 Bar" },
      { label: "Sensor accuracy", value: "+/- 0.05% of span" },
      { label: "Protocols supported", value: "HART, Modbus, Profibus" },
      { label: "Certification focus", value: "Traceable to NABL" }
    ],
    overviewParagraphs: [
      "Control systems depend on the accuracy of field instrumentation. Nandini Enterprises delivers comprehensive process instrumentation and sensor calibration, specializing in flow meters, pressure transmitters, level controllers, temperature sensors, and gas analyzers.",
      "We design field wiring loops using high-quality shielded cables and barrier isolators to protect signals from electrical noises. We configure field networks using HART, Modbus, and Profibus protocol suites, enabling smart diagnostics and remote configuration.",
      "Calibration is key to maintaining process safety. We perform wet and dry calibration at client sites or in our Hyderabad laboratory, utilizing reference standards traceable to NABL. We issue calibration certificate formats detailing measurement errors and span configurations.",
      "We provide analytical systems, including continuous emission monitoring (CEMS), water quality analyzers, and steam and water analysis systems (SWAS) for power generation, cement, and chemical facilities, ensuring strict environmental compliance."
    ],
    challenges: {
      before: "A large chemical dosing facility faced batch inconsistency and regular safety alarms due to drifting level sensors and uncalibrated flow meters.",
      after: "Nandini Enterprises installed Baumer radar level sensors and Wika mass flow meters, calibrated on-site using portable NABL reference gear.",
      scenario: "Achieved dosage consistency, stabilized chemical reaction profiles, and avoided safety alarms caused by false sensor readings."
    },
    workflow: [
      {
        name: "Sensor Selection",
        activity: "Evaluate pipe pressure, chemical compatibility, temperature limits, flow velocity, and hazardous area classifications.",
        tools: "Chemical compatibility database, instrument sizing calculators",
        safety: "Confirm ATEX flameproof classifications match safety guidelines.",
        deliverable: "Approved Instrument datasheets and hook-up installation drawings."
      },
      {
        name: "Field Installation",
        activity: "Position sensor manifolds, weld thermowells, run shielded instrumentation cables, and wire transmitter terminal boxes.",
        tools: "Manifold alignment tools, wire strippers, torque wrenches",
        safety: "Verify line isolation and execute pressure test before installing process taps.",
        deliverable: "Mounted field instruments ready for loop diagnostic checks."
      },
      {
        name: "HART Loop Calibration",
        activity: "Configure transmitter parameters, perform zero-and-span calibration, test loop outputs (4-20mA), and check diagnostics.",
        tools: "HART Communicators, dry block temp calibrators",
        safety: "Use loop protection modules to prevent current surges.",
        deliverable: "Completed calibration certificate sheets and HART configuration files."
      },
      {
        name: "Process Loop SAT",
        activity: "Execute dynamic process loop runs, compare sensor values with reference meters, and configure SCADA telemetry scaling.",
        tools: "HART interface tools, loop simulators",
        safety: "Perform pressure testing on connections before start of loop.",
        deliverable: "Signed loop check sheets and process integration reports."
      }
    ],
    architectureDesc: "Our instrumentation loops are configured on a redundant control network layout, utilizing isolated analog loops, HART digital communication, and PLC data acquisition blocks.",
    architectureDetails: [
      "Analog Signal Isolation: Galvanic isolator modules isolate control loops from field ground loop disturbances.",
      "HART Communication: Digital data superimposed on 4-20mA loops for remote diagnostics.",
      "Manifold Valves: Dual block and bleed configurations for safe instrument removal under line pressure.",
      "Junction Boxes: IP66 rated, flameproof enclosures matching hazardous area zone requirements."
    ],
    industries: [
      { name: "Pharma", need: "Highly accurate sanitary level and temperature control loops.", challenge: "Withstanding clean-in-place (CIP) hot steam sterilization.", advantage: "Hygienic stainless steel sensors with FDA-compliant materials." },
      { name: "Power", need: "High-pressure steam flow and boiler feed level monitoring.", challenge: "Extreme temperature and pressure limits (up to 300 Bar, 550°C).", advantage: "Heavy forged thermowells and high-pressure transmitter lines." },
      { name: "Chemical", need: "Continuous monitoring of corrosive solvent storage levels.", challenge: "Acid vapors damaging standard transmitter casings.", advantage: "Hastelloy diaphragms and PTFE-coated radar level probes." }
    ],
    caseStudy: {
      client: "Telangana Pumping Grid System",
      requirement: "Calibrate electromagnetic flow meters on major city distribution mains.",
      problem: "Flow meters were drifting, causing differences between pump logs and consumer meters.",
      solution: "Performed in-situ calibration of 6 flow meters using portable ultrasonic transit-time meters, adjusting span factors.",
      products: "Wika pressure gauges, Baumer ultrasonic level probes, HART configurator.",
      outcome: "Resolved measurement differences, bringing accuracy back to nominal tolerances.",
      improvement: "Reduced measurement errors from 4.5% to under 0.25%."
    },
    techEcosystem: [
      { name: "HART Communicator", use: "Configuring and diagnostics of smart field sensors.", logic: "Superimposes FSK digital signaling on top of analog loops." },
      { name: "Dry Block Calibrator", use: "Generating precise reference temperatures.", logic: "Micro-heaters maintain block temperature stable within 0.01°C." },
      { name: "Galvanic Signal Barrier", use: "Intrinsically safe loops in explosive zones.", logic: "Zener diodes restrict current energy into hazardous areas." }
    ],
    qualityAssurance: [
      "Zero-point verify checks and span accuracy tests.",
      "NABL traceable calibration validation logs creation.",
      "Overpressure leak testing for 15 minutes at 1.5x nominal pressure rating.",
      "Analog output verification checks at 4mA, 8mA, 12mA, 16mA, and 20mA states."
    ],
    safetyCompliance: [
      { standard: "IEC 60079", description: "Explosive atmospheres standards compliance for electrical installations." },
      { standard: "SIL-2/3 Certified", description: "Safety Integrity Level rating matching safety standards." },
      { standard: "NABL Traceability", description: "Calibration measurements traceable to national standards." }
    ],
    maintenanceAMC: [
      "Preventive sensor cleaning, check connection seals, and inspect cable insulation.",
      "Recalibrate sensors every 6 or 12 months.",
      "On-site repair support within 24 hours of notification.",
      "Modernization: replacing old analog gauges with smart transmitters."
    ],
    docs: [
      { name: "Calibration Guide sheet.pdf", size: "1.4 MB", type: "PDF Specification" },
      { name: "Standard Calibration Format.docx", size: "1.1 MB", type: "Word Document" },
      { name: "Baumer Sensor Catalog.pdf", size: "4.8 MB", type: "Sensor Catalog" }
    ],
    faqs: [
      { q: "What is HART communication protocol?", a: "Highway Addressable Remote Transducer (HART) superimposes FSK (Frequency Shift Keying) digital signals at 1200Hz and 2200Hz on top of the standard 4–20mA analog loop. This allows simultaneous analog measurement transmission AND digital configuration/diagnostic access — without any wiring changes. Via HART, engineers can remotely read device tag, range, process variable, diagnostic alerts, and sensor health status using a handheld HART communicator or AMS software. HART 7 supports wireless variants (WirelessHART per IEC 62591) for installations without existing wiring infrastructure." },
      { q: "How often should process sensors be calibrated?", a: "Calibration frequency depends on sensor criticality and application: Safety instrumented function transmitters should be calibrated every 6 months with calibration documentation as proof testing evidence. Process control transmitters in continuous service should be calibrated annually. Mechanical pressure gauges in utility services can typically be calibrated every 2 years. Sensors in aggressive service (high-temperature, corrosive media, frequent CIP cycles) may need 6-month or quarterly calibration. All calibrations should be performed with reference standards traceable to NABL (National Accreditation Board for Testing and Calibration Laboratories)." },
      { q: "What is the difference between a pressure gauge and a pressure transmitter?", a: "A pressure gauge is a mechanical device (Bourdon tube or diaphragm) that provides local visual indication only — no electrical signal output. It requires no power and provides indication at the measurement point. A pressure transmitter converts the physical pressure into a standard 4–20mA electrical signal that can be wired back to a PLC or DCS input card for remote monitoring, alarming, and control. Modern smart transmitters (with HART or Foundation Fieldbus) also provide self-diagnostic information. Most process plants use both: gauges for local field verification and transmitters for remote monitoring and control." },
      { q: "How do you select the right flow meter technology for an application?", a: "Flow meter selection depends on: fluid type (liquid, gas, steam, slurry — each has different technology suitability); conductivity (electromagnetic meters require conductive fluid minimum 5 μS/cm); pipe size; flow velocity range; required accuracy; and process conditions (pressure, temperature, viscosity). We follow a structured selection process: electromagnetic meters for conductive liquids (water, chemicals); Coriolis meters for mass flow, density, and custody transfer; vortex meters for steam, gas, and clean liquids; ultrasonic meters for large-diameter pipes and non-invasive retrofit; differential pressure with orifice or venturi for high-pressure steam and gas where direct contact sensors are problematic." },
      { q: "Can you perform field calibration or does equipment need to come to your lab?", a: "We offer both. Field calibration is our preferred approach for installed instruments — we bring portable reference standards (NABL traceable pressure calibrators, dry block temperature calibrators, HART communicators, and multifunction calibrators) to the client site and calibrate instruments in-situ, avoiding the disruption of instrument removal. For precision instruments requiring laboratory conditions, or for sensors that cannot be removed from service, we maintain a spare instrument pool for exchange calibration — swapping the installed sensor with a pre-calibrated spare while the original is returned to our lab. Field calibration certificates are issued on the same day." },
      { q: "What are intrinsically safe instruments and when are they required?", a: "Intrinsically safe (Ex-ia) instruments are designed and certified to limit the electrical energy in their field loops to levels below the ignition energy of the surrounding flammable atmosphere. They are required in classified hazardous areas (Zone 0, Zone 1) where the presence of flammable gas or vapor is continuous or likely. Zener diode barriers or galvanic isolators are installed between the intrinsically safe field loop and the non-safe PLC input card. ATEX or IECEx certification documentation must be verified before installing instruments in classified areas — using non-certified equipment in classified areas is illegal and creates serious safety risks." },
      { q: "What documentation do you provide with calibrated instruments?", a: "Each calibration produces a formal certificate showing: instrument identification (tag number, serial number, model), calibration equipment used (with NABL certificate reference numbers), as-found readings (before adjustment), adjustment actions taken, as-left readings (after adjustment), calculated measurement error at each test point, pass/fail determination against acceptance criteria, calibration date, next due date, and signature of the calibrating engineer. These certificates form part of the site instrument maintenance records and may be required for regulatory compliance audits (pharma, oil & gas, water utility)." }
    ]
  },
  "elevator-systems": {
    slug: "elevator-systems",
    title: "Elevator Control Systems & VFD Operations",
    subtitle: "High-Speed Microprocessor Lift Controllers, Smooth S-Curve VFD Configuration, and Automatic Rescue Device (ARD) Integrations.",
    stats: [
      { label: "Acceleration Profile", value: "S-Curve Jerk-Free" },
      { label: "Rescue Battery Switch", value: "< 15 Sec Auto-Run" },
      { label: "Axes Accuracy", value: "+/- 3 mm Leveling" },
      { label: "Speed Capacities", value: "0.5 to 2.5 m/s" }
    ],
    overviewParagraphs: [
      "In vertical transport systems, passenger safety, travel comfort, and energy efficiency depend on controller logic and drive performance. Nandini Enterprises delivers elevator control systems, integrating Yaskawa elevator drives, microprocessor controllers, and automatic rescue devices (ARD) to ensure reliable operation.",
      "Our engineering team designs complete control panels for passenger and goods lifts. We configure Yaskawa L1000A drives with auto-tuning routines to adapt to motor parameters, ensuring smooth torque delivery at low speeds and eliminating cabin start jerks.",
      "Passenger safety is our highest priority. We integrate automatic rescue devices (ARD) that automatically move the cabin to the nearest floor and open doors during utility power failures, protecting passengers from entrapment.",
      "Our control systems implement energy optimization strategies, including regenerative drive systems that feed braking energy back to the building grid. Our service division offers regular inspections, rope checks, leveling calibration, and control upgrades."
    ],
    challenges: {
      before: "A high-rise commercial complex suffered from constant elevator leveling mismatch errors, cabin starting jerks, and long rescue times during power cuts.",
      after: "Nandini Enterprises installed Yaskawa L1000A elevator drives with smart leveling sensors, microprocessor control cards, and ARD backup units.",
      scenario: "Eliminated cabin starting jerks, achieved precise leveling within 3mm, and secured passenger automatic rescue loops during power cuts."
    },
    workflow: [
      {
        name: "Motor Parameter Audit",
        activity: "Analyze elevator motor specifications, measure cabin weight, determine hoisting gear ratios, and assess electrical lines.",
        tools: "Multi-meters, gear calculators, thermal probes",
        safety: "Confirm brake release safety loops are active before starting checks.",
        deliverable: "Approved elevator motor sizing reports and schematic drafts."
      },
      {
        name: "Controller Assembly",
        activity: "Assemble microprocessor lift controller boards, mount Yaskawa drives, wire door operator connections, and integrate ARD units.",
        tools: "Panel assembly tables, wire strippers, torque screwdrivers",
        safety: "Double check insulation clearances between line voltage parts.",
        deliverable: "Completed elevator control panel ready for diagnostic tests."
      },
      {
        name: "Leveling Sensor Setup",
        activity: "Install cabin leveling sensors, set up landing door safety switches, program speed curves, and check passenger indicator displays.",
        tools: "Tachometers, leveling tools, calibration boards",
        safety: "Erect landing door warning barriers before running tests in the shaft.",
        deliverable: "Programmed cabin leveling parameters and speed profiles."
      },
      {
        name: "ARD Load Test",
        activity: "Simulate utility power failures, check automatic battery switches, verify rescue run speeds, and test auto-opening door routines.",
        tools: "Battery testers, load simulation rigs",
        safety: "Verify emergency communication systems are active before starting rescue runs.",
        deliverable: "Completed ARD test report sheets and safety compliance certificates."
      }
    ],
    architectureDesc: "Our elevator control systems utilize modular microprocessor controller layouts with isolated door logic, Yaskawa L1000A lift drives, and automatic rescue battery circuits.",
    architectureDetails: [
      "Microprocessor Board: Core controller managing call buttons, landing indicators, and door interlocks.",
      "Yaskawa L1000A: Lift drive configured for smooth S-curve travel profiles.",
      "Automatic Rescue Device (ARD): Battery backup system powering rescue moves during utility power trips.",
      "Leveling Sensors: Photoelectric and magnetic sensors ensuring precise cabin alignment."
    ],
    industries: [
      { name: "Pharma", need: "Dust-sealed goods lifts for sterile cleanroom access.", challenge: "Avoiding particulate contamination in the shaft.", advantage: "Stainless steel panels with cleanroom-certified door seals." },
      { name: "Cement", need: "Heavy-duty goods elevators for vertical mill structures.", challenge: "Heavy dust accumulation and high weight loads.", advantage: "Dust-proof enclosures with high-capacity lift drives." },
      { name: "Steel", need: "Rugged cargo elevators with high payload reliability.", challenge: "Extreme vibrations and structural movements.", advantage: "Hardened controllers with vibration-resistant mounts." }
    ],
    caseStudy: {
      client: "Hyderabad Commercial Hub",
      requirement: "Upgrade passenger lift controls to eliminate starting jerks and improve safety.",
      problem: "The old analog control system caused bumpy starts and leveling issues.",
      solution: "Installed a Yaskawa L1000A elevator drive system with ARD backup and smart leveling sensors.",
      products: "Yaskawa L1000A Drives, microprocessor control boards, ARD backup.",
      outcome: "Eliminated starting jerks, stabilized cabin leveling, and secured automatic passenger rescue.",
      improvement: "Leveling errors reduced by 90% and energy consumption cut by 25%."
    },
    techEcosystem: [
      { name: "Yaskawa L1000A Drive", use: "Smooth vector control for vertical transport.", logic: "Adjusts motor frequency dynamically to follow S-curve paths." },
      { name: "Microprocessor Controller", use: "Managing lift calls and door security.", logic: "Process safety logic loops to coordinate cabin moves." },
      { name: "Automatic Rescue Device", use: "Emergency power backup for passenger safety.", logic: "Switches to battery power during power cuts to move the cabin." }
    ],
    qualityAssurance: [
      "Leveling accuracy validation check (+/- 3mm threshold verified).",
      "Door interlock safety switch check under travel states.",
      "Continuous run testing for 6 hours under full load conditions.",
      "ARD battery health and charge logic checks."
    ],
    safetyCompliance: [
      { standard: "EN 81-20/50", description: "European safety rules for construction and installation of lifts." },
      { standard: "IS 14665", description: "Indian standard guidelines for electric passenger and goods lifts." },
      { standard: "ASME A17.1", description: "Safety code for elevators and escalators compliance." }
    ],
    maintenanceAMC: [
      "Preventive rope checks, terminal joint torque audits, and safety switch tests.",
      "Speed curve parameter tuning and leveling sensor cleaning.",
      "24/7 on-site emergency troubleshooting support within 4 hours in Hyderabad.",
      "Modernization: replacing obsolete analog relays with microprocessor panels."
    ],
    docs: [
      { name: "Elevator Control Layout.pdf", size: "2.3 MB", type: "PDF Specification" },
      { name: "L1000A Tech Brochure.pdf", size: "3.1 MB", type: "Technical Brochure" },
      { name: "ARD Maintenance Guide.pdf", size: "1.7 MB", type: "User Guide" }
    ],
    faqs: [
      { q: "What is an Automatic Rescue Device (ARD) and how does it work?", a: "An ARD (Automatic Rescue Device) is a battery-backed emergency power system specifically designed for elevators. When utility power fails, the ARD detects the loss, switches to its VRLA (Valve Regulated Lead Acid) battery bank within 0.5 seconds, and drives the elevator motor at a low rescue speed to move the cabin to the nearest floor. Upon reaching the floor, the doors open automatically, allowing passengers to exit safely. The entire rescue sequence typically completes within 15 seconds of power failure. The ARD's battery bank is trickle-charged continuously and undergoes self-test routines monthly. Battery replacement is recommended every 3–4 years." },
      { q: "What leveling accuracy do your elevator control systems achieve?", a: "We install both magnetic vane sensors (coarse landing detection) and optical/magnetic high-precision sensors for final leveling, achieving cabin floor-to-floor leveling accuracy within ±3mm under all load conditions from empty to full rated load. Leveling accuracy is critical for passenger safety — uneven leveling creates trip hazards — and for goods elevators where forklift or trolley access requires flush floor alignment. Leveling accuracy is verified during commissioning at both empty and full load conditions and is documented in the SAT report." },
      { q: "What causes elevator cabin starting jerks and how do your systems eliminate them?", a: "Starting jerks occur when the drive applies torque abruptly while the mechanical brake releases simultaneously — if torque is insufficient when the brake releases, the cabin sags under load; if torque is excessive, it lurches upward. The Yaskawa L1000A eliminates this with load compensation control: a load cell or current feedback measures the cabin weight, and the drive pre-loads the correct amount of torque before the brake releases. The brake then opens against a stationary, fully torque-loaded motor — allowing smooth, jerk-free start regardless of passenger count. S-curve speed profiles then control acceleration smoothly throughout travel." },
      { q: "What safety standards govern elevator control systems in India?", a: "IS 14665 (Parts 1–6) is the primary Indian standard for electric passenger and goods lifts. Key requirements include: landing door interlocks (elevator cannot move with any door open), governor-operated safety gear (arrests free-fall), pit buffers (energy-absorbing devices at shaft bottom), overload detection, and emergency communication. For hospitals and public buildings, NBC 2016 (National Building Code) specifies additional requirements including minimum elevator numbers per floor area, fire recall service, and accessibility compliance. European EN 81-20/50 is often additionally specified for premium projects. We provide full compliance documentation for all applicable standards." },
      { q: "How does the elevator group dispatch controller optimize waiting times?", a: "Group controller software manages a bank of elevators by assigning each hall call to the elevator predicted to have the minimum passenger waiting time, using algorithms that consider current cabin positions, direction of travel, number of registered car calls, and historical traffic patterns. Advanced systems use AI-based adaptive dispatching that learns peak traffic patterns (morning up-peak, evening down-peak, lunch inter-floor) and pre-positions elevators proactively. Well-tuned group controllers reduce average passenger waiting time by 25–35% compared to simple up-collective dispatch systems in multi-elevator buildings." },
      { q: "Can old elevator control systems be modernized without replacing the entire elevator?", a: "Yes — controller modernization is one of our specialty services. We replace only the control panel, motor drive, and sensors while retaining the existing shaft, cabin, doors, and guide system — at approximately 30–40% of the cost of a complete elevator replacement. The existing motor can usually be retained if its insulation condition is satisfactory (tested by Megger and winding resistance measurement). New wiring from the controller to field components is run through the existing conduit wherever possible. Modernization typically takes 3–5 days per elevator and dramatically improves ride comfort, energy efficiency, and reliability." },
      { q: "What energy savings can regenerative elevator drives provide?", a: "Regenerative elevator drives (with Active Front End units) recover electrical energy during counterweighted descent — when the cabin descends with full load (or ascends empty), the heavy counterweight side drives the motor as a generator. This energy is returned to the building power grid rather than wasted in resistors. Energy savings from regeneration typically range from 20–30% of total elevator energy consumption, depending on traffic pattern and counterbalancing efficiency. For high-traffic elevators operating 18+ hours per day, the additional cost of regenerative drives over standard drives typically pays back within 2–3 years." },
      { q: "How frequently should elevator control systems be serviced?", a: "Our recommended elevator AMC schedule: monthly visual inspection (door operation, safety switches, indicator displays, emergency lighting); quarterly full inspection (brake adjustment check, motor thermal imaging, contact cleaning, speed governor test, overload test, leveling accuracy check, ARD battery test, lubrication of guide rails and rope sheaves); annual comprehensive test (governor trip test, buffer compression test, safety gear test, insulation resistance measurement, full load test to 110% rated capacity). All tests are documented in the site maintenance log and our AMC service report is submitted to the client after each visit." }
    ]
  },
  "electrical-solutions": {
    slug: "electrical-solutions",
    title: "HT & LT Electrical Infrastructure Engineering",
    subtitle: "High Voltage (33KV) Substation Design, Cable Tray Engineering, Switchgear Protection Coordination, and Turnkey Erection.",
    stats: [
      { label: "Voltage Capacity", value: "Up to 33,000 Volts" },
      { label: "License Grade", value: "A-Grade Telangana" },
      { label: "Fault Limit", value: "40kA / 3 Sec Rating" },
      { label: "Transformer Size", value: "Up to 10 MVA" }
    ],
    overviewParagraphs: [
      "High voltage substations and industrial electrical distributions form the primary backbone of heavy manufacturing. Nandini Enterprises delivers complete High Tension (HT) and Low Tension (LT) electrical engineering services. We hold an A-Grade 33KV electrical contractor license, authorizing us to design, erect, test, and commission switchyards, transformer networks, distribution loops, and switchgear cabinets.",
      "Our switchyard division designs substation layouts, substation earthing mats, and overhead cable entries. We perform fault level calculations and protection coordination audits, configuring relay trip curves (overcurrent, earth fault, differential protection) to isolate faults quickly and prevent damage to expensive equipment like transformers and generators.",
      "We design and install cable tray systems, high-power copper and aluminum busducts, and armored underground cables. Our electrical engineering team calculates cable thermal ratings and voltage drops under load conditions, choosing proper conductor sizes to minimize transmission losses.",
      "We handle the entire commissioning cycle, performing insulation testing (Megger), transformer turns ratio check, winding resistance measurements, switchgear contact resistance checks, and earth pit testing. Our service team offers regular AMC contracts, switchyard cleaning, oil filtration, and relay diagnostic testing."
    ],
    challenges: {
      before: "A large cement manufacturing site faced regular transformer overheating faults, voltage drops, and switchgear damage due to poor relay configuration.",
      after: "Nandini Enterprises redesigned the substation layout, installed custom vacuum circuit breakers (VCB), and adjusted relay trip curves.",
      scenario: "Eliminated voltage drops, stabilized substation operating temperatures, and secured protection coordination across all switchgears."
    },
    workflow: [
      {
        name: "Substation Design",
        activity: "Analyze utility line specs, design grid layouts, calculate transformer sizing requirements, and compute earthing grid sizes.",
        tools: "ETAP, AutoCAD Civil, ground grid solvers",
        safety: "Confirm clearance distances match High Voltage safety codes.",
        deliverable: "Approved electrical single line diagrams (SLD) and earthing layouts."
      },
      {
        name: "Transformer Installation",
        activity: "Erect transformer foundations, position transformer units, connect high-voltage bushings, and run filtration runs.",
        tools: "Heavy cranes, oil filtration plants, winding testers",
        safety: "Ensure proper grounding of transformer frames and neutral lines.",
        deliverable: "Transformer installation completed and oil parameters verified."
      },
      {
        name: "Switchgear Erection",
        activity: "Mount HT/LT switchgear panels, terminate incoming cables, configure control wiring, and mount protection relays.",
        tools: "Torque wrenches, cable terminal cutters, secondary injection kits",
        safety: "Mandatory protective safety boots and insulated mats in panel rooms.",
        deliverable: "Fully mounted and wired switchgear system ready for loop checks."
      },
      {
        name: "System Relay Tests",
        activity: "Conduct relay trip checks, primary/secondary injection tests, winding resistance checks, and verify oil parameter logs.",
        tools: "Relay injection test benches, winding meters, micro-ohmmeters",
        safety: "Verify insulation barriers and discharge residual voltages after tests.",
        deliverable: "Completed commissioning reports and safety clearance certificates."
      }
    ],
    architectureDesc: "Our HT/LT electrical layouts utilize single or double busbar schemes, vacuum circuit breakers (VCB) for HT isolation, and molded switchgear lines for LT distribution grids.",
    architectureDetails: [
      "HT incomer: 33KV/11KV vacuum circuit breakers protecting substation transformers.",
      "Busbar Bridge: High-capacity aluminum or copper busducts linking transformer terminals to LT switchgear chambers.",
      "Relay Protection: Digital relay modules tracking overcurrent, earth faults, and under-voltage limits.",
      "Earthing Network: Grid of copper tape conductors linked to deep earth pits."
    ],
    industries: [
      { name: "Power", need: "High-voltage generator synchronization and network step-up.", challenge: "Very high current thermal loads and dynamic switch stress.", advantage: "CPRI-tested heavy switchgear enclosures with active protection loops." },
      { name: "Steel", need: "Substation design supporting arc furnace loads.", challenge: "Massive load swings, harmonics, and voltage drops.", advantage: "Dynamic reactive power compensators and robust harmonic filters." },
      { name: "Cement", need: "LT motor control distribution loops for quarry conveyers.", challenge: "Distant remote loads and cable thermal limits.", advantage: "Optimized cable tray paths and motor starter protection loops." }
    ],
    caseStudy: {
      client: "Hyderabad Cement Works Phase IV",
      requirement: "Upgrade substation equipment and design custom LT distribution panels.",
      problem: "The old HT breaker unit tripped randomly during vertical roller mill startup, causing plant-wide outages.",
      solution: "Installed a 10MVA transformer and VCB switchgear panel with adjusted protection relay parameters.",
      products: "Vacuum Circuit Breakers, protection relays, high-conductivity busducts.",
      outcome: "Eliminated MILL start trips and stabilized the distribution grid.",
      improvement: "Reduced startup current drops by 40% and improved power factor efficiency."
    },
    techEcosystem: [
      { name: "Vacuum Circuit Breaker (VCB)", use: "High-voltage grid isolation and protection.", logic: "Extinguishes electrical arcs in high-vacuum chambers within milliseconds." },
      { name: "Transformer Oil Filter", use: "Purifying insulation oil to prevent voltage breakdowns.", logic: "Removes moisture, dust, and gas particles under vacuum." },
      { name: "Relay Protection Module", use: "Monitoring current waveforms and voltage levels.", logic: "Compares input values against safety limits and trips VCB units." }
    ],
    qualityAssurance: [
      "Winding insulation resistance test using 5000V Megger (minimum 1000MΩ limit).",
      "Switchgear breaker contact resistance measurement check.",
      "Substation transformer oil breakdown voltage test (minimum 60kV limit).",
      "Relay trip timing validation check using injection test benches."
    ],
    safetyCompliance: [
      { standard: "CEA Regulations", description: "Central Electricity Authority safety regulations compliance." },
      { standard: "IS 3043", description: "Indian standard code of practice for electrical earthing." },
      { standard: "IS 2026", description: "Specifications for power transformers." }
    ],
    maintenanceAMC: [
      "Preventive switchyard cleaning, connection checks, oil filtration runs, and earthing pit tests.",
      "Substation transformer oil parameter audits and gas chromatography tests.",
      "24/7 on-site diagnostic support and emergency VCB troubleshooting.",
      "Modernization: replacing old analog gauges with smart digital relays."
    ],
    docs: [
      { name: "HT-LT Cable tray Layout.pdf", size: "3.1 MB", type: "PDF Specification" },
      { name: "Transformer Test Format.docx", size: "1.2 MB", type: "Word Document" },
      { name: "VCB Technical Catalog.pdf", size: "4.5 MB", type: "VCB Catalog" }
    ],
    faqs: [
      { q: "What does an A-Grade 33KV Electrical Contractor license mean?", a: "The A-Grade Electrical Contractor License (Class I) issued by the Government of Telangana authorizes Nandini Enterprises to design, erect, test, and commission electrical installations operating at voltages up to 33,000 Volts (33kV). This is the highest grade of electrical contractor license in Telangana, covering medium voltage switchyards, substation construction, transformer installation, HT cable laying, and grid interface works. The license is renewed annually and requires demonstration of qualified supervising electrical engineers on the company's rolls." },
      { q: "How often should transformer oil be tested and filtered?", a: "Transformer insulation oil should undergo laboratory testing (breakdown voltage, moisture content, acidity, dielectric dissipation factor) every 12 months. Oil filtration (using vacuum degassing and dehydration equipment) is recommended when the breakdown voltage drops below 50kV or moisture exceeds 15ppm — typically every 2–3 years for transformers in service. For transformers above 1 MVA, we also recommend annual dissolved gas analysis (DGA) to detect internal faults such as partial discharge, overheating, and arcing, which produce characteristic gases detectable in the oil before visible failure occurs." },
      { q: "What is a Vacuum Circuit Breaker (VCB) and how does it differ from oil circuit breakers?", a: "A Vacuum Circuit Breaker (VCB) extinguishes the electrical arc formed when contacts separate by drawing it into a vacuum chamber where the absence of gas molecules quenches the arc within a half-cycle. Compared to older oil-type circuit breakers, VCBs have much longer contact life (minimum 10,000 operations at full rated current), no fire risk from oil, minimal maintenance requirements, faster arc extinction, and smaller physical footprint. VCBs are now the standard for all new 11kV and 33kV switchgear installations. Retrofitting oil CBs with VCBs eliminates fire risk and reduces maintenance cost significantly." },
      { q: "What is protection relay coordination and why is it important?", a: "Protection relay coordination is the process of setting relay pickup currents and time delays so that the relay closest to a fault operates first, isolating only the faulted section while upstream relays remain closed maintaining supply to unaffected areas. Without proper coordination, a fault on a downstream motor feeder could cause the main incomer relay to trip, blacking out the entire plant instead of just the faulted circuit. We perform detailed coordination studies using relay coordination software (SKM Power Tools, ETAP), plotting time-current curves for every relay in the system and verifying that adequate selectivity margins exist between all protection levels." },
      { q: "What testing is done during electrical system commissioning?", a: "Our commissioning test protocol includes: insulation resistance tests (Megger) on all cables, transformer windings, and switchgear buses; Hi-Pot tests on HT cables (DC or AC at specified voltages per cable rating); transformer turns ratio check (verifying tap changer positions); winding resistance measurement (detecting inter-turn shorts and poor connection quality); relay injection testing (verifying each protection relay trips at the correct current and time delay); earth resistance measurement at all earth pits (must be <1Ω for HV substations); and a no-load energization test before connecting any loads." },
      { q: "How do you calculate cable sizing for HT cable installations?", a: "HT cable sizing considers three criteria simultaneously: current-carrying capacity (the cable must carry the maximum demand current continuously within its rated temperature), voltage drop (maximum 1% for HT feeders in most industrial specifications), and short-circuit thermal withstand (the cable must survive without damage for the duration of the protective relay operation time at the maximum prospective fault current). We perform these calculations using BS 7671, IEC 60502, and relevant cable manufacturer ratings, accounting for laying conditions (duct, direct burial, tray), grouping factors, soil thermal resistivity, and ambient temperature." },
      { q: "What is an earthing system and why is it critically important?", a: "The earthing system provides a low-impedance path from all metallic non-current-carrying equipment (panel enclosures, motor bodies, cable trays, structure steel) to the general mass of earth. Its functions include: fault current dissipation (a phase-to-earth fault must flow through the earthing system to operate protection relays quickly); step and touch potential limitation (preventing dangerous voltages across the human body in case of a earth fault); electromagnetic shielding; and lightning protection bonding. A poorly designed earthing system can result in protection relays failing to operate during earth faults, creating a safety hazard. We design earthing systems per IS 3043, verifying earth resistance and step/touch potential calculations before system energization." },
      { q: "Can you provide end-to-end substation engineering including CEA documentation?", a: "Yes — we provide complete substation engineering services from concept design to CEA (Central Electricity Authority) documentation preparation. This includes load flow and short circuit studies, protection relay coordination reports, substation layout drawings, earthing design calculations, HT cable schedules, transformer inspection reports, and commissioning protocols. For new HT connections from the state electricity board, we prepare and submit the complete technical package required for approval, including the Load Dispatch Agreement and synchronization protection documentation for captive generation facilities." }
    ]
  },
  "amc-services": {
    slug: "amc-services",
    title: "Commissioning, Testing & AMC Support",
    subtitle: "Factory Acceptance Testing (FAT), Site Acceptance Testing (SAT), Relay Calibration, and Annual Maintenance Contracts (AMC).",
    stats: [
      { label: "Emergency Response", value: "< 4 Hours Hyd" },
      { label: "Relay Calibrations", value: "Traceable to NABL" },
      { label: "AMC Assets Covered", value: "Over 200 Sites" },
      { label: "Team Strength", value: "30+ Field Engineers" }
    ],
    overviewParagraphs: [
      "Industrial automation and electrical systems require regular maintenance to maintain long-term reliability and safety. Nandini Enterprises delivers commissioning, testing, and Annual Maintenance Contract (AMC) support. We act as a reliable partner for steel, cement, power, and chemical facilities across India.",
      "Our services cover the entire project lifecycle, from initial Factory Acceptance Testing (FAT) at our Hyderabad center to Site Acceptance Testing (SAT), final commissioning, and long-term AMC support. We inspect and verify all safety loops, protection relays, communication protocols, and drive settings.",
      "Our AMC contracts are tailored to each facility's operational needs. We offer preventive maintenance, predictive diagnostics using thermal cameras, and emergency troubleshooting support. Our service team is available 24/7 to resolve drive faults and logic issues.",
      "We provide modernization and retrofitting, upgrading old switchgear, obsolete PLCs, and worn-out motor starters with energy-efficient systems, keeping your plant running safely and efficiently."
    ],
    challenges: {
      before: "A large water treatment facility faced frequent outages, long repair times, and high spare costs due to lack of a structured AMC program.",
      after: "Nandini Enterprises established a comprehensive AMC contract with quarterly health checks, VFD tuning, and 24/7 support.",
      scenario: "Reduced unexpected system failures, lowered spare parts expenditure, and secured rapid on-site troubleshooting within 4 hours."
    },
    workflow: [
      {
        name: "Initial System Audit",
        activity: "Review electrical schematics, inspect panel structures, document drive parameters, and identify safety concerns.",
        tools: "Multi-meters, thermal imagers, log analyzers",
        safety: "Enforce Lockout/Tagout (LOTO) procedures on all equipment before starting audits.",
        deliverable: "Approved system audit report and recommendations checklist."
      },
      {
        name: "Preventive Maintenance",
        activity: "Clean cabinet enclosures, check terminal connection torque, verify fan operation, and inspect cable insulation.",
        tools: "Vacuum cleaners, torque wrenches, contact cleaners",
        safety: "Confirm power is disconnected and components are discharged before cleaning.",
        deliverable: "Completed quarterly maintenance logs and clean panels."
      },
      {
        name: "Relay & VFD Calibration",
        activity: "Test protection relays, calibrate analog outputs, tune motor parameters, and verify communication links.",
        tools: "Relay test blocks, Dry-block temperature calibrators",
        safety: "Set up warning barricades before running drive test runs.",
        deliverable: "Calibration certificates traceable to NABL and drive parameter sheets."
      },
      {
        name: "Emergency Troubleshooting",
        activity: "On-site dispatch of service engineers, diagnostic fault analysis, spare replacements, and system restarts.",
        tools: "Oscilloscopes, digital analyzers, spare parts kit",
        safety: "Perform voltage verification checks before touching any cables.",
        deliverable: "Completed service reports detailing root cause analysis."
      }
    ],
    architectureDesc: "Our commissioning and AMC systems use a structured service workflow: client log, triage, remote assistance, engineer dispatch, spare supply, and final validation reporting.",
    architectureDetails: [
      "Service Desk: Dedicated ticket logging system tracking response times and resolutions.",
      "Field Spares: On-site inventory of critical VFD cards, relays, fuses, and fans.",
      "Diagnostic Tools: Portable oscilloscopes and loop calibrators for rapid troubleshooting.",
      "Commissioning Checklists: Standardized FAT/SAT formats verifying every control loop."
    ],
    industries: [
      { name: "Pharma", need: "Validation of cleanroom HVAC controls and sensor accuracy.", challenge: "Meeting strict regulatory calibration audits.", advantage: "HART loop checks with NABL traceable certificates." },
      { name: "Cement", need: "Regular maintenance on heavy vertical roller mill drives.", challenge: "Abrasive dust causing fan failure and drive overheating.", advantage: "Quarterly filter cleaning and drive diagnostic checks." },
      { name: "Steel", need: "Substation switchgear checkups and relay calibration.", challenge: "High heat and mechanical vibrations causing joint loosening.", advantage: "Thermal scans of all busbar connections and breaker testing." }
    ],
    caseStudy: {
      client: "Hyderabad Pumping Station Network",
      requirement: "Establish an AMC contract to support 12 remote pumping stations.",
      problem: "Lack of regular checks led to motor failures and long downtime periods.",
      solution: "Implemented an AMC program with quarterly health checks, VFD tuning, and 24/7 hotline support.",
      products: "Yaskawa VFD spares, thermal cameras, loop calibrators.",
      outcome: "Prevented motor failures through early detection of overheating components, minimizing downtime.",
      improvement: "Reduced unexpected system failures by 80% and cut average response time to under 3 hours."
    },
    techEcosystem: [
      { name: "Relay Test kit", use: "Testing and calibrating protection relay trip times.", logic: "Injects current/voltage waveforms and measures trip response time." },
      { name: "Thermal Camera", use: "Non-contact scanning of panels for hotspots.", logic: "Converts infrared radiation patterns into temperature mimics." },
      { name: "VFD Diagnostic tools", use: "Analyzing drive parameters and gate pulses.", logic: "Captures output waveforms to evaluate IGBT switching." }
    ],
    qualityAssurance: [
      "Zero-point check and span calibration audits on all transmitters.",
      "Relay trip timing validation checks (verifying compliance with safety curves).",
      "Dynamic motor run tests verifying speed-accuracy.",
      "Substation grounding system earth resistance checks."
    ],
    safetyCompliance: [
      { standard: "ISO 9001:2015", description: "Quality management systems guidelines for B2B engineering support." },
      { standard: "IS 3043", description: "Indian standard code of practice for electrical earthing checks." },
      { standard: "NFPA 70E", description: "Standard for electrical safety in the workplace compliance." }
    ],
    maintenanceAMC: [
      "Preventive quarterly cleaning, busbar torque audits, and safety switch tests.",
      "Relay calibration checks and parameter updates.",
      "24/7 on-site emergency troubleshooting support within 4 hours in Hyderabad.",
      "Modernization: retrofitting obsolete VFD systems with GA700 modules."
    ],
    docs: [
      { name: "FAT-SAT Standard Format.pdf", size: "2.1 MB", type: "PDF Specification" },
      { name: "AMC Agreement Template.docx", size: "1.4 MB", type: "Word Document" },
      { name: "Commissioning Guide.pdf", size: "3.2 MB", type: "Technical Guide" }
    ],
    faqs: [
      { q: "What does a standard Annual Maintenance Contract (AMC) include?", a: "Our standard AMC covers: four quarterly preventive maintenance site visits per year (panel cleaning, connection torque checks, insulation resistance tests, thermal imaging); priority emergency on-site diagnostic support within 4 hours of call in Hyderabad; VFD parameter backup and drive health assessment; relay calibration verification; SCADA database backup and historian archive management; and a written service report after each visit documenting findings, actions taken, and recommendations. Premium AMC tiers include predictive maintenance (vibration analysis, oil sampling) and dedicated spare parts inventory at the client's site." },
      { q: "Do you offer remote troubleshooting assistance for AMC clients?", a: "Yes. For AMC clients with SCADA or PLC systems, we establish a secure dedicated VPN connection from our Hyderabad support center to the plant network, allowing our engineers to login remotely and directly access PLC program online mode, SCADA trend history, alarm logs, and communication diagnostics. This remote capability resolves over 60% of reported faults within 30 minutes without an engineer dispatch, saving clients many hours of production downtime. All remote sessions are logged with timestamps, actions taken, and engineers involved for the client's records." },
      { q: "How do you handle spare parts management for AMC clients?", a: "We maintain a curated spare parts inventory at our Cherlapally facility covering the most critical wear-prone components for systems under our AMC: VFD IGBTs, gate driver boards, cooling fans, capacitor banks; PLC battery modules and I/O cards; relay modules and timer units; contact kits for MCCBs and contactors; and consumables (cable lugs, terminal blocks, heat shrink sleeves). For very large or remote facilities, we recommend client-side consignment inventory of agreed critical spares, with Nandini Enterprises managing the inventory and replacement logistics. This eliminates procurement lead time from emergency repair timelines." },
      { q: "What is the difference between preventive maintenance and predictive maintenance?", a: "Preventive maintenance (PM) performs scheduled tasks at fixed intervals regardless of actual equipment condition — replacing filters every 3 months, checking torque every 6 months, cleaning panels quarterly. It prevents most failures but may replace components that still have useful life remaining (wasteful) or miss developing failures between scheduled visits. Predictive maintenance (PdM) uses condition monitoring technologies — vibration analysis, thermography, oil sampling, ultrasonic acoustic emission — to detect deterioration signatures and intervene only when actual measurements indicate the component is approaching failure. PdM typically reduces maintenance costs 10–25% vs. PM alone while achieving higher availability. Our premium AMC tiers include quarterly thermography and annual vibration analysis as standard PdM elements." },
      { q: "How do you manage commissioning of complex multi-panel systems?", a: "We use a structured commissioning methodology: (1) Mechanical and electrical completion verification against detailed punch lists; (2) Continuity and insulation testing of all cables before power-up; (3) Visual inspection and control wiring verification against final-as-built drawings; (4) Low-voltage no-load power-up with earth fault detector active; (5) Control logic functional testing with simulated inputs (loop simulation); (6) Instrument loop calibration verification; (7) Interlock function testing with documented cause-and-effect matrix verification; (8) Power-on functional testing with motor uncoupled; (9) Coupled load trial runs with monitoring; (10) Performance acceptance test against contracted metrics. Each step produces signed checksheets included in the final commissioning dossier." },
      { q: "What is a Factory Acceptance Test (FAT) and why should the client attend?", a: "A Factory Acceptance Test (FAT) is a formal test of the complete system (panels, PLC program, SCADA graphics) at our factory before dispatch, simulating the field environment as closely as possible. Clients are strongly encouraged to attend because: it is far easier and cheaper to identify and correct deficiencies at the factory than at the installed site; it allows client operations and maintenance engineers to familiarize themselves with the equipment before commissioning; it validates that the delivered system matches the approved design specification; and it provides formal documented evidence of pre-shipment system performance. FAT attendance also typically shortens SAT duration at the client's site by 30–40% since most issues are already resolved." },
      { q: "Do you provide training for operations and maintenance staff?", a: "Yes — operator and maintenance training is included in every commissioning project and is available as a standalone service. We provide: Operator Training covering HMI/SCADA interface operation, normal startup/shutdown procedures, alarm response procedures, and emergency procedures; Maintenance Technician Training covering system architecture, hardware component identification and replacement, fault diagnostics, backup and restore procedures, and safe isolation protocols. Training is delivered at the client's site on the commissioned system (preferred) or in our facility. Training completion certificates are issued. For complex systems, we provide user manuals and quick-reference cards tailored to the specific installed system." },
      { q: "Can you take over AMC support for systems commissioned by other companies?", a: "Yes — we regularly provide AMC support for systems installed by other vendors, particularly for systems where the original integrator no longer has a presence or has wound up operations. Our process: first visit is a comprehensive system audit documenting the system architecture, control program (if accessible), instrument list, panel condition, and existing documentation quality. We then provide a gap report and recommmend any safety or reliability improvements. The standard AMC then commences from the second quarter. We have successfully taken over AMC for Siemens, Allen-Bradley, Yokogawa, and custom-built systems from various integrators across Telangana and Andhra Pradesh." }
    ]
  }
};
