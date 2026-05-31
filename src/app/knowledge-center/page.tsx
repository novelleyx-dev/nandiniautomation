'use client';

import { useState } from 'react';

interface Article {
  category: string;
  title: string;
  desc: string;
  readTime: string;
  slug: string;
  author: string;
  date: string;
  tags: string[];
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
    keyPoints: string[];
    conclusion: string;
  };
}

const articles: Article[] = [
  {
    category: "Technical Guide",
    title: "What Is SCADA? A Complete Industrial Overview",
    desc: "A comprehensive look at SCADA architecture, components, communication protocols, and implementation methodology for heavy industrial and infrastructure applications.",
    readTime: "12 min read",
    slug: "what-is-scada",
    author: "Nandini Enterprises Technical Team",
    date: "March 2025",
    tags: ["SCADA", "PLC", "HMI", "OPC UA", "Industrial Automation"],
    content: {
      intro: "SCADA (Supervisory Control and Data Acquisition) is the foundational technology platform that enables real-time monitoring, control, and optimization of industrial processes across large geographic areas. From municipal water networks spanning hundreds of kilometers to tightly integrated chemical plant operations, SCADA systems form the intelligent nervous system connecting field instrumentation to management decisions.",
      sections: [
        {
          heading: "Three-Tier Automation Architecture",
          body: "Modern SCADA implementations follow a three-level hierarchy. At the field level (Level 0/1), physical sensors, actuators, transmitters, and motor drives measure and influence the process. At the control level (Level 2), PLCs and RTUs execute real-time logic programs — reading sensor inputs, running PID loops, enforcing safety interlocks, and driving output actuators. At the supervisory level (Level 3), SCADA servers collect data from all controllers, present it on operator workstations, generate alarms, store historical trends, and produce management reports. This hierarchical structure enables scalability from a single-machine cell to enterprise-wide process management."
        },
        {
          heading: "SCADA Communication Protocols",
          body: "The communication backbone of a SCADA system determines its performance and reliability. At the field level, protocols like Modbus RTU (RS485 serial), PROFIBUS-DP, and Foundation Fieldbus connect PLCs to field instruments. At the control-to-supervision level, Modbus TCP/IP, Profinet, and EtherNet/IP operate over standard industrial Ethernet networks. The OPC UA (Unified Architecture) standard has emerged as the preferred protocol for plant-to-enterprise data exchange — providing a vendor-neutral, encrypted, and object-oriented data model that integrates with ERP systems, cloud platforms, and data analytics engines. Security is built into OPC UA through certificate-based authentication and encrypted data transfer."
        },
        {
          heading: "Alarm Management and ISA-101 HMI Design",
          body: "Poorly designed SCADA systems generate thousands of nuisance alarms, leading to operator fatigue and missed genuine fault signals. The ISA-101 standard provides guidelines for alarm rationalization, prioritization, and HMI color coding. Under ISA-18.2 alarm management methodology, alarms are categorized by priority: Emergency (immediate plant safety threat), High (significant process impact), Medium (operator investigation required), and Low (informational). Modern SCADA platforms implement alarm suppression during startup/shutdown transitions, alarm shelving for known equipment faults, and first-out sequence displays to identify root causes quickly."
        },
        {
          heading: "Historical Data Logging and Reporting",
          body: "One of the most valuable functions of a SCADA system is its ability to log process data at high resolution — typically 1 to 100 millisecond intervals — and store it in structured databases for later analysis. SQL Server and OSIsoft PI databases are commonly used in industrial installations. Historical trend analysis enables engineers to identify gradual process degradation, seasonal performance variations, and correlation between equipment behavior and environmental factors. Automated shift reports, key performance indicator dashboards, and energy consumption analyses are all derived from this historical dataset."
        }
      ],
      keyPoints: [
        "SCADA systems operate across three tiers: field sensors, PLC controllers, and supervisory servers",
        "OPC UA is the modern standard for secure, cross-vendor data exchange in industrial networks",
        "ISA-101 HMI design rules and ISA-18.2 alarm management reduce operator errors significantly",
        "Historical data logging at 100ms resolution enables trend analysis and predictive maintenance",
        "Redundant servers and fiber ring networks ensure >99.9% SCADA availability for critical infrastructure"
      ],
      conclusion: "A well-engineered SCADA system is not just a monitoring tool — it is a comprehensive operational intelligence platform. When designed according to ISA standards, backed by redundant hardware, and populated with properly rationalized alarm structures, SCADA enables operators to make informed decisions faster, reduces mean time to repair from hours to minutes, and provides the audit trail data required for regulatory compliance."
    }
  },
  {
    category: "White Paper",
    title: "PLC vs DCS: Choosing the Right Control System",
    desc: "An in-depth engineering comparison of Programmable Logic Controllers and Distributed Control Systems — analyzing architecture differences, application suitability, cost factors, and migration strategies for large-scale manufacturing.",
    readTime: "15 min read",
    slug: "plc-vs-dcs",
    author: "Nandini Enterprises Technical Team",
    date: "February 2025",
    tags: ["PLC", "DCS", "Control Systems", "Process Automation", "SCADA"],
    content: {
      intro: "The choice between a Programmable Logic Controller (PLC) system and a Distributed Control System (DCS) is one of the most consequential engineering decisions in any industrial automation project. Both systems can technically control most processes, but their architectural philosophies, programming models, and operational characteristics make each one more naturally suited to specific application types. Understanding these differences deeply is essential for making the right choice.",
      sections: [
        {
          heading: "Architectural Philosophy: Sequential vs. Continuous",
          body: "PLCs were originally designed for machine-level discrete control — reading binary input states (sensors, switches, pushbuttons) and switching binary outputs (motors, solenoids, lights) according to ladder logic programs. A PLC executes a scan cycle: reading all inputs, executing all logic rungs, then writing all outputs — typically within 1–10ms. This deterministic, fast-scan model is ideal for machine interlocking, conveyor sequencing, and safety systems. DCS systems, by contrast, evolved from process control philosophy — managing continuous analog variables (temperature, pressure, flow, level) through PID control loops distributed across multiple controller nodes. Each DCS controller manages a defined process section, and all controllers are tightly integrated through a proprietary high-speed control bus."
        },
        {
          heading: "When to Choose a PLC System",
          body: "PLC systems are the right choice when your application involves discrete machine control, sequence interlocking, motor management, and safety systems with high-speed response requirements. Manufacturing lines, material handling systems, packaging machines, crane controls, and energy management applications are natural PLC domains. Modern PLCs from Siemens (S7-1500 series), Allen-Bradley (ControlLogix), and Honeywell (Safety Manager) offer integrated safety CPU options, high-density I/O, and communication cards for Profinet, EtherNet/IP, and Modbus TCP. SCADA software complements PLC systems at the supervisory level."
        },
        {
          heading: "When to Choose a DCS",
          body: "A DCS is the correct choice for continuous process plants — oil refineries, petrochemical complexes, power generation, large chemical plants, and pharmaceutical API manufacturing. In these environments, thousands of analog instruments must be managed in tight feedback loops, batch recipes must be executed with precise sequence and timing, and process historians must capture every parameter change for regulatory compliance. DCS systems from Yokogawa (Centum VP), Honeywell (Experion), ABB (800xA), and Siemens (PCS 7) provide tightly integrated engineering environments where control strategy, HMI graphics, alarm management, and historian configuration are all handled within a single unified platform."
        },
        {
          heading: "Hybrid Approaches and Modern Convergence",
          body: "Today, the line between PLC and DCS is blurring. Modern PLCs offer batch control libraries, analog process I/O, and integrated SCADA. Modern DCS platforms include safety controllers, discrete machine logic, and open OPC-UA connectivity. Many large greenfield plants now use hybrid architectures — DCS for the continuous process core (reactors, distillation, heat exchangers) and PLC/Safety Systems for associated utilities, material handling, and emergency shutdown. Understanding this continuum is essential when evaluating total lifecycle cost, engineering flexibility, and vendor support quality."
        }
      ],
      keyPoints: [
        "PLCs excel at discrete machine control with fast scan cycles (1–10ms) and sequential logic",
        "DCS systems are optimized for continuous process control with tight analog feedback loops",
        "Modern PLC + SCADA solutions can effectively replace DCS in mid-size process plants",
        "Large continuous process plants (refineries, power plants) still benefit from integrated DCS platforms",
        "OPC UA bridges PLC and DCS systems, enabling unified data integration at the enterprise level"
      ],
      conclusion: "There is no universal answer to the PLC vs DCS question. The correct choice depends on your process type (discrete vs. continuous), plant scale, I/O count, regulatory environment, operator skill set, and total cost of ownership over the equipment lifetime. A qualified automation engineering partner should conduct a formal control system selection study, evaluating your specific requirements against both PLC/SCADA and DCS architectures before specifying equipment."
    }
  },
  {
    category: "Technical Guide",
    title: "Understanding VFD Harmonics & IEEE 519 Compliance",
    desc: "How Variable Frequency Drives introduce electrical harmonics into power networks, methods to measure harmonic levels, and engineering solutions including active filters, passive filters, and AFE converters.",
    readTime: "11 min read",
    slug: "vfd-harmonics",
    author: "Nandini Enterprises Technical Team",
    date: "January 2025",
    tags: ["VFD", "Harmonics", "IEEE 519", "Power Quality", "Filters"],
    content: {
      intro: "Variable Frequency Drives are essential tools for energy conservation and motor speed control in industrial plants. However, their switching power electronics generate harmonic currents that pollute the plant power grid — causing transformer overheating, motor insulation stress, interference with sensitive instruments, and utility penalty charges. Understanding the physics of VFD harmonics and the available mitigation strategies is essential for every electrical engineer specifying drive systems.",
      sections: [
        {
          heading: "How VFDs Generate Harmonic Currents",
          body: "A standard VFD converts AC power to DC (through a diode rectifier bridge), smooths the DC with capacitors, and then inverts it back to variable-frequency AC using IGBT switching transistors. The input diode rectifier draws current in short, sharp pulses rather than a smooth sinusoid — creating harmonic currents at 5th, 7th, 11th, 13th, and higher odd harmonics of the fundamental frequency. In a 50Hz system, this means significant current flow at 250Hz, 350Hz, 550Hz, and 650Hz. These currents cause voltage distortion on the shared bus, affecting all other equipment connected to the same power source."
        },
        {
          heading: "IEEE 519 Harmonic Standard Limits",
          body: "IEEE 519 (Recommended Practices for Harmonic Control in Electrical Power Systems) specifies maximum harmonic current injection limits at the Point of Common Coupling (PCC) — the connection point between the utility supply and the plant distribution system. For industrial systems with short-circuit ratios typical of manufacturing facilities, the Total Demand Distortion (TDD) limit is typically 5–8% at the PCC. Individual harmonic current limits are specified for each harmonic order. Utility companies increasingly penalize plants for exceeding these limits and may disconnect supply to chronically non-compliant sites."
        },
        {
          heading: "Harmonic Mitigation Solutions",
          body: "Multiple solutions exist with varying cost and effectiveness. AC line reactors (3–5% impedance) reduce harmonic distortion by 30–40% and protect the drive input rectifier — they are the minimum recommended protection for any VFD installation. 12-pulse drive configurations use dual input rectifiers phase-shifted by 30°, canceling most 5th and 7th harmonics — effective for larger drives (>75kW). Passive LC harmonic filters are tuned to trap specific harmonic frequencies (typically 5th and 7th) at the source. Active harmonic filters (AHF) inject compensating currents equal and opposite to the harmonic currents, achieving >95% harmonic reduction — the most effective solution for existing plants with multiple drives. Active Front End (AFE) drives eliminate input harmonics entirely by using a sinusoidal PWM front-end converter — achieving near-unity power factor and enabling regenerative energy return to the grid during motor braking."
        }
      ],
      keyPoints: [
        "Standard diode-bridge VFDs generate 5th, 7th, 11th, and 13th harmonic currents",
        "IEEE 519 limits Total Demand Distortion (TDD) to 5–8% at the utility connection point",
        "AC line reactors (minimum recommendation) reduce harmonics by 30–40%",
        "Active harmonic filters achieve >95% reduction and work for existing mixed drive installations",
        "Active Front End (AFE) drives eliminate input harmonics and allow energy regeneration"
      ],
      conclusion: "Harmonic management is not optional — it is a regulatory requirement and a practical engineering necessity. The investment in line reactors or active filters is typically recovered within 12–24 months through reduced transformer losses, extended motor bearing life, elimination of utility penalties, and prevention of interference with sensitive control instruments. Nandini Enterprises performs harmonic audits and designs complete mitigation packages for new and retrofit drive installations."
    }
  },
  {
    category: "Engineering Insight",
    title: "Electrical Panel Design: Form 4b Segregation Explained",
    desc: "A technical explanation of Form 4b internal segregation in LV switchgear assemblies — how it limits fault propagation and why it is specified for critical industrial installations.",
    readTime: "9 min read",
    slug: "form-4b-segregation",
    author: "Nandini Enterprises Technical Team",
    date: "April 2025",
    tags: ["Panels", "IEC 61439", "Switchgear", "CPRI", "Form 4b"],
    content: {
      intro: "When specifying or evaluating an electrical switchgear assembly, the internal form of segregation is a critical design parameter that directly affects fault containment, operational safety, and maintenance capability. IEC 61439-1 defines four main forms of internal separation (Forms 1 through 4) with sub-types that specify how busbars, functional units, and terminals are isolated from each other within the same enclosure.",
      sections: [
        {
          heading: "Understanding the Four Segregation Forms",
          body: "Form 1 provides no internal separation — all components share a common open air space. This is acceptable only for small, simple boards in low-risk environments. Form 2 separates the busbar from the functional units using metallic or insulated barriers, reducing the risk of busbar contact during maintenance. Form 3 separates busbars from functional units AND all functional units from each other — significantly limiting fault propagation. Form 4 achieves the highest level: busbars, functional units, AND terminal connections are all segregated from each other. Form 4b (the most common specification for critical industrial panels) adds the requirement that the terminals for external conductors are in a separate, access-controlled compartment from the functional unit, with metallic separation between them."
        },
        {
          heading: "Why Form 4b Matters for Industrial Installations",
          body: "In a Form 4b panel, if a fault develops in one functional unit (for example, a short-circuit that burns out a motor starter), the metallic barriers confine the arc energy and thermal damage to that single drawer or compartment. The busbar system continues to operate normally, and adjacent functional units are unaffected. This allows the plant to continue operating (with the affected circuit isolated) while repairs are made — a critical advantage in continuous process industries where complete panel outages are extremely costly. For steel mills, power plants, and chemical facilities operating 24/7, Form 4b segregation can be the difference between a 2-hour single-circuit outage and a 12-hour complete line shutdown."
        },
        {
          heading: "CPRI Testing Requirements for Form 4b Panels",
          body: "CPRI (Central Power Research Institute) type tests validate that a panel design can withstand extreme fault conditions without catastrophic failure. The short-circuit withstand test applies a fault current (typically 50–65kA) for one second to verify that busbars, connections, and enclosure structures maintain integrity. The temperature rise test applies 100% rated continuous current to verify that internal temperatures stay within safe limits for all materials. Arc fault containment testing verifies that internal arcing does not breach the enclosure and injure operators outside. A CPRI test certificate referencing IEC 61439-1&2 is the gold standard of quality assurance for industrial switchgear assemblies in India."
        }
      ],
      keyPoints: [
        "IEC 61439-1 defines Forms 1–4 of internal segregation in LV switchgear assemblies",
        "Form 4b separates busbars, functional units, AND external terminal compartments with metallic barriers",
        "Fault containment in Form 4b limits damage to a single drawer, allowing continued plant operation",
        "CPRI type testing validates short-circuit withstand, temperature rise, and arc containment performance",
        "Specifying Form 4b adds 15–25% to panel cost but significantly reduces total downtime risk"
      ],
      conclusion: "For any industrial installation where continuity of production is critical — and the cost of an unplanned shutdown exceeds several lakhs of rupees per hour — specifying Form 4b segregation with CPRI certification is the correct engineering decision. The modest additional cost is justified many times over by the operational resilience and safety assurance it provides."
    }
  },
  {
    category: "Maintenance Guide",
    title: "Industrial Motor Bearing Failure: Early Detection & Prevention",
    desc: "A comprehensive guide to identifying early bearing failure signatures using vibration analysis, thermography, and acoustic emission monitoring — and the maintenance strategies that extend motor life.",
    readTime: "10 min read",
    slug: "motor-bearing-failure",
    author: "Nandini Enterprises Technical Team",
    date: "March 2025",
    tags: ["Motors", "Predictive Maintenance", "Vibration Analysis", "AMC", "Thermography"],
    content: {
      intro: "Bearing failure is responsible for approximately 40–50% of all motor failures in industrial applications. Early detection of bearing degradation allows maintenance teams to plan interventions during scheduled downtime windows — avoiding the catastrophic failure mode where a bearing seizes, a shaft breaks, or a winding burns out due to rotor rubbing. This guide explains the four stages of bearing failure and the monitoring technologies that detect each stage.",
      sections: [
        {
          heading: "Four Stages of Rolling Element Bearing Failure",
          body: "Bearing failure follows a predictable four-stage progression. Stage 1 (10–20% of remaining life remaining): High-frequency ultrasonic emissions appear — detectable only with specialized ultrasonic instruments. Stage 2 (5–20% remaining life): Vibration at bearing defect frequencies appears — detectable with spectrum analyzers identifying characteristic defect frequencies (BPFO: ball pass frequency outer race, BPFI: ball pass frequency inner race, BSF: ball spin frequency). Stage 3 (1–5% remaining life): Vibration levels increase significantly across multiple frequency bands; bearing temperature rises 5–15°C above baseline. Stage 4 (catastrophic): Broadband vibration, severe temperature rise, audible grinding — imminent failure. Monitoring technologies differ in their ability to detect each stage."
        },
        {
          heading: "Vibration Analysis: The Primary Predictive Tool",
          body: "Vibration spectrum analysis is the most informative method for bearing condition monitoring. An accelerometer measures vibration in three axes (axial, radial vertical, radial horizontal), and a spectrum analyzer converts the time-domain signal to the frequency domain using Fast Fourier Transform (FFT). Bearing fault frequencies are calculated from bearing geometry data (number of balls, ball diameter, pitch diameter, contact angle) and rotational speed. When energy appears at these calculated frequencies — and especially when sidebands appear around them — a bearing defect has been identified. Overall vibration level in mm/s RMS is benchmarked against ISO 10816 guidelines, where values >7.1mm/s for large machines indicate alarm conditions requiring immediate attention."
        },
        {
          heading: "Thermography and Oil Analysis",
          body: "Infrared thermography provides a fast, non-contact method for identifying bearing overheating. A hand-held thermal camera can survey an entire motor and drive train in minutes, identifying hot spots that may indicate lubrication failure, overloading, or bearing defects. Baseline thermal images should be taken on all motors during normal operating conditions for comparison. For critical large motors (>200kW), oil or grease analysis provides chemical information about the condition of the lubricant and the presence of metallic wear particles — a direct indicator of bearing surface degradation. Particle count, iron content, and viscosity measurements are compared against established limits to determine remaining service life."
        }
      ],
      keyPoints: [
        "Bearing failure causes 40–50% of industrial motor failures and is almost always preventable with monitoring",
        "Four failure stages — ultrasonic, spectrum, elevated vibration, catastrophic — have different detection technologies",
        "ISO 10816 vibration limits provide actionable alarm thresholds for motors by size and mounting type",
        "Bearing defect frequencies (BPFO, BPFI, BSF) are calculated from geometry data and rotation speed",
        "AMC programs combining thermal scanning and vibration analysis every 3 months prevent >80% of catastrophic failures"
      ],
      conclusion: "The investment in a predictive maintenance program — combining periodic vibration analysis, thermography, and oil analysis — typically generates a 3–5× return on investment through reduced emergency repair costs, avoided production losses, and extended equipment life. Nandini Enterprises AMC contracts include quarterly thermal scanning and annual vibration analysis for all major motors under contract."
    }
  },
  {
    category: "White Paper",
    title: "Industrial Cybersecurity for OT Networks: IEC 62443 Framework",
    desc: "Protecting operational technology networks from cyber threats — understanding the IEC 62443 standard, network segmentation strategies, and practical security controls for industrial automation systems.",
    readTime: "14 min read",
    slug: "ot-cybersecurity",
    author: "Nandini Enterprises Technical Team",
    date: "May 2025",
    tags: ["Cybersecurity", "OT Security", "IEC 62443", "SCADA Security", "Network"],
    content: {
      intro: "Operational Technology (OT) networks — the PLCs, SCADA servers, HMI stations, and field instruments that control physical processes — were historically isolated from IT networks and the internet, making cybersecurity a secondary concern. This is no longer the case. Digital transformation, remote monitoring requirements, and enterprise data integration have dramatically increased the attack surface of industrial control systems. The consequences of a successful cyberattack on industrial OT systems can include physical equipment damage, environmental incidents, and threats to human safety.",
      sections: [
        {
          heading: "IEC 62443: The OT Security Standard",
          body: "IEC 62443 (Security for Industrial Automation and Control Systems) provides a comprehensive framework for securing OT systems throughout their lifecycle. The standard is organized into four series: general concepts (Part 1), policies and procedures for asset owners (Part 2), system security requirements (Part 3), and component security requirements for product developers (Part 4). Security Level (SL) categories 1–4 define increasing protection requirements from basic protection (SL1) to protection against state-sponsored attacks (SL4). Most industrial facilities should target SL2 — protection against intentional attacks using simple means. The Zones and Conduits model divides the control system into security zones with defined trust levels, with all communication between zones passing through secure conduits (firewalls, data diodes, DMZ servers)."
        },
        {
          heading: "Network Segmentation: The Purdue Model",
          body: "The Purdue Enterprise Reference Architecture defines hierarchical network levels for industrial systems: Level 0 (field devices), Level 1 (control — PLCs, DCS), Level 2 (supervisory — SCADA, HMI), Level 3 (operations — historians, engineering stations), and Level 4 (business network — ERP, MES). Security best practice mandates strict segmentation between these levels. Firewalls with industrial-protocol-aware deep packet inspection (DPI) are positioned at Level 3/4 and 2/3 boundaries. Data historians in demilitarized zones (DMZ) allow OPC-UA data flow from the control network to the business network without direct connectivity. Wireless access to Level 2 and below should be through authenticated, encrypted access points with separate SSIDs and VLAN assignment."
        },
        {
          heading: "Practical Security Controls for Industrial Sites",
          body: "Beyond network architecture, operational security controls are essential. USB ports on SCADA workstations should be disabled or whitelisted — USB-borne malware is one of the most common OT attack vectors. Patch management for SCADA software and HMI OS must be tested against the control system before deployment — vendor validation is required. Remote access for vendor support should use dedicated, logged VPN connections with multi-factor authentication and time-limited sessions. Application whitelisting on SCADA servers prevents unauthorized software execution. Regular vulnerability assessments and penetration testing by OT-specialized security firms identify weaknesses before attackers do."
        }
      ],
      keyPoints: [
        "IEC 62443 defines Security Levels 1–4 and the Zones/Conduits model for OT network security",
        "The Purdue Model provides a hierarchical reference architecture for segmenting OT from IT networks",
        "DMZ data historians are the correct pattern for passing OPC-UA data to business networks securely",
        "USB port control and application whitelisting address the most common OT malware attack vectors",
        "Remote access must use MFA, time-limited VPN sessions, and complete audit logging"
      ],
      conclusion: "Industrial cybersecurity is not an IT problem to be solved by enterprise IT teams — it requires OT-domain expertise, deep understanding of control system architecture, and sensitivity to operational constraints that IT security tools often violate. Nandini Enterprises can assess your current OT network architecture against IEC 62443 requirements and develop a practical, phased security improvement roadmap appropriate for your facility."
    }
  },
  {
    category: "Technical Guide",
    title: "HART Protocol: Smart Instrument Diagnostics for Field Loops",
    desc: "How the HART protocol superimposes digital communication on 4–20mA analog loops, enabling remote configuration, multi-variable measurement, and predictive diagnostics without rewiring.",
    readTime: "8 min read",
    slug: "hart-protocol-guide",
    author: "Nandini Enterprises Technical Team",
    date: "January 2025",
    tags: ["HART", "Instrumentation", "4-20mA", "Field Devices", "Smart Sensors"],
    content: {
      intro: "The 4–20mA analog current loop has been the workhorse of process instrumentation for over 60 years — reliable, noise-immune, and intrinsically safe. HART (Highway Addressable Remote Transducer) protocol was developed by Rosemount (now Emerson) in the 1980s to add digital intelligence to this proven analog infrastructure without replacing it. Today, over 40 million HART-enabled instruments are installed worldwide, and the HART 7 standard continues to evolve with wireless variants and increased multi-drop capability.",
      sections: [
        {
          heading: "How HART Superimposes Digital on Analog",
          body: "HART uses Frequency Shift Keying (FSK) modulation to superimpose a low-level digital signal (±0.5mA AC) on top of the existing 4–20mA DC current loop. The two frequencies — 1200Hz representing binary '1' and 2200Hz representing binary '0' — average to zero and therefore do not affect the 4–20mA measurement signal being transmitted simultaneously. The DC component (4–20mA) is read by the PLC/DCS analog input card as usual; the AC component is decoded by a HART modem connected to the same wires. This coexistence means HART can be retrofitted to any existing analog installation without any wiring changes — simply connect a HART communicator or modem anywhere on the 2-wire loop."
        },
        {
          heading: "Information Available via HART",
          body: "Beyond the primary measurement variable transmitted as 4–20mA, HART devices can provide up to four process variables simultaneously in digital form (for example, a Coriolis flow meter can transmit mass flow, volumetric flow, density, and temperature all from the same device). HART also provides access to device configuration parameters (engineering units, range, damping, signal conditioning), diagnostic data (loop current deviation, process value out-of-specification alerts, valve position feedback, plug/jam detection), and device identification (tag number, device type, serial number, firmware version). This rich diagnostic dataset enables remote troubleshooting, predictive maintenance alerts, and automated loop documentation."
        },
        {
          heading: "HART Multiplexers and Asset Management Systems",
          body: "For plants with hundreds or thousands of HART instruments, manual point-to-point HART communication is impractical. HART multiplexers scan multiple loop pairs in sequence, collecting digital HART data from all connected instruments and aggregating it to an Asset Management System (AMS) such as Emerson AMS Suite, Honeywell SNAP-ON, or Yokogawa Fieldeye. These platforms store all instrument configuration parameters, generate predictive maintenance alerts based on device diagnostics, provide calibration records, and flag instruments requiring attention — transforming field instrumentation from passive measurement elements into active, communicating assets that proactively report their own health status."
        }
      ],
      keyPoints: [
        "HART superimposes 1200/2200Hz FSK digital on 4–20mA analog loops without disrupting measurement",
        "Up to 4 process variables can be transmitted digitally from a single HART device simultaneously",
        "HART diagnostics include valve position, plug/jam detection, loop integrity, and process deviation alerts",
        "HART multiplexers + AMS software enable fleet-wide instrument health monitoring and calibration management",
        "HART 7 supports wireless variants (WirelessHART, IEC 62591) for locations without existing wiring"
      ],
      conclusion: "HART protocol represents the most cost-effective path to smart instrumentation for plants with large installed bases of 4–20mA field devices. The zero-wiring-change upgrade path, combined with rich diagnostic capability and mature Asset Management System software, delivers significant operational value at low implementation cost. Nandini Enterprises provides complete HART loop commissioning, multiplexer installation, and AMS software setup as part of our instrumentation service portfolio."
    }
  },
  {
    category: "Maintenance Guide",
    title: "Transformer Condition Monitoring: Oil Analysis & Dissolved Gas",
    desc: "How dissolved gas analysis (DGA), dielectric strength testing, and moisture measurement are used to assess the health of power transformers and predict failure before it occurs.",
    readTime: "11 min read",
    slug: "transformer-oil-analysis",
    author: "Nandini Enterprises Technical Team",
    date: "February 2025",
    tags: ["Transformers", "DGA", "Oil Analysis", "Predictive Maintenance", "HT Electrical"],
    content: {
      intro: "Power transformers are among the most capital-intensive and operationally critical assets in any industrial electrical system. A 10 MVA transformer may represent ₹80–150 lakhs in capital value, and its failure can trigger days-long production outages worth many times that in lost revenue. Fortunately, transformer failures are rarely sudden — they develop through progressive insulation degradation that leaves chemical and physical signatures in the insulating oil that are detectable weeks or months before catastrophic failure.",
      sections: [
        {
          heading: "Dissolved Gas Analysis (DGA): The Primary Diagnostic Tool",
          body: "As electrical and thermal stresses break down the transformer's internal insulation (paper and oil), characteristic gases are generated. Hydrogen (H2) and methane (CH4) indicate low-temperature oil decomposition. Acetylene (C2H2) — the most critical indicator — is only generated during electrical arcing above 1000°C. Ethylene (C2H4) indicates severe overheating (>700°C). Carbon oxides (CO and CO2) indicate cellulose paper insulation degradation. The Duval Triangle and Rogers Ratio methods interpret the relative proportions of these gases to diagnose fault type: partial discharge, thermal faults, or arcing. IEC 60599 provides the reference standard for DGA interpretation and action levels. Modern online DGA monitors provide continuous gas measurement, enabling early detection without shutdown-dependent oil sampling."
        },
        {
          heading: "Dielectric Strength and Moisture Testing",
          body: "Transformer oil's dielectric strength (its ability to withstand electric field without breakdown) degrades with moisture, contamination, and aging. The breakdown voltage test (IEC 60156) applies a ramping voltage across two electrodes immersed in the oil sample until breakdown occurs. New transformer oil typically breaks down at >70kV; oil requiring attention at <30kV; oil requiring immediate filtration below 20kV. Moisture content (Karl Fischer titration or capacitive sensor methods) is critical — water dramatically reduces dielectric strength and accelerates cellulose insulation aging. IEC 60422 specifies maintenance limits: typically <15 ppm moisture for transformer oil at 90°C service temperature. Online moisture sensors integrated into transformer monitoring systems provide continuous measurement without the need for oil sampling."
        },
        {
          heading: "Comprehensive Condition Assessment Program",
          body: "A complete transformer health program combines annual oil sampling and DGA analysis; regular bushing thermography and partial discharge testing; infrared scanning of all external connections, bushings, and conservator systems; annual winding resistance and turns ratio measurements; and 5-yearly insulation power factor (tan δ) testing. The combination of these techniques provides early warning of thermal overloading, insulation aging, bushing degradation, tap changer contact wear, and contamination events. When DGA trending shows a doubling time for key gases shorter than 30 days, operational restrictions and urgent remedial maintenance are warranted regardless of the apparent visual condition of the transformer."
        }
      ],
      keyPoints: [
        "Acetylene (C2H2) is the definitive indicator of internal electrical arcing — immediate investigation warranted",
        "Dielectric breakdown voltage below 30kV indicates oil requiring filtration; below 20kV requires immediate action",
        "Karl Fischer moisture testing and capacitive sensors monitor oil moisture content continuously",
        "Duval Triangle and Rogers Ratio interpret DGA gas profiles to classify fault type",
        "Annual oil sampling + quarterly thermography + winding tests form a complete condition monitoring program"
      ],
      conclusion: "Power transformer condition monitoring is not an optional luxury — it is the engineering insurance policy that protects a multi-crore asset from preventable catastrophic failure. A comprehensive monitoring program including online DGA, annual oil analysis, and regular thermography typically costs 0.5–1.5% of transformer replacement value per year, while catching faults early enough to execute planned repairs at a fraction of the cost of emergency replacement."
    }
  },
  {
    category: "Engineering Insight",
    title: "Motor Soft Starters vs VFDs: When to Use Each",
    desc: "A practical engineering comparison of electronic soft starters and variable frequency drives — analyzing starting performance, cost-effectiveness, and the application scenarios where each technology is the correct choice.",
    readTime: "9 min read",
    slug: "soft-starter-vs-vfd",
    author: "Nandini Enterprises Technical Team",
    date: "April 2025",
    tags: ["Soft Starters", "VFD", "Motor Control", "Energy Efficiency", "Panel Design"],
    content: {
      intro: "When a project calls for controlled motor starting, two electronic technologies are available: soft starters and variable frequency drives. Both reduce starting current below the 6–8× full load amps of a direct-on-line (DOL) starter, but their operating principles, cost points, and application suitability differ significantly. Selecting the wrong technology results in either unnecessary capital cost (using a VFD where a soft starter suffices) or functional inadequacy (using a soft starter where speed control is actually required).",
      sections: [
        {
          heading: "How Soft Starters Work",
          body: "A soft starter uses anti-parallel thyristors (SCRs) connected in series with each motor phase to control the voltage applied to the motor during starting and stopping. By gradually increasing the firing angle of the thyristors from 0% to 100%, the voltage applied to the motor ramps up smoothly — reducing the starting current surge and the mechanical torque shock on couplings, gearboxes, and driven equipment. A typical soft starter limits peak starting current to 2–4× FLA, compared to 6–8× for DOL starting. Once the motor reaches full speed, the soft starter's bypass contactor closes, connecting the motor directly to the supply — the soft starter is completely bypassed and generates no losses during running. This is the key economic advantage of soft starters over VFDs for fixed-speed applications."
        },
        {
          heading: "When Soft Starters Are the Right Choice",
          body: "Soft starters are cost-effective for motors that run at a single fixed speed most of the time, but need gentle starting characteristics — pumps with long pipelines sensitive to water hammer, conveyors with fragile products, compressors requiring controlled pressure buildup, and fans with belt drives prone to slip during hard starts. For these applications, a soft starter provides smooth starting at 30–50% of the cost of a comparable VFD, with no harmonic generation during normal running (since it is bypassed). Typical applications: water pumps above 37kW on long pipe runs, conveyor drives with full loads at start, compressors with fixed-speed capacity control valves."
        },
        {
          heading: "When VFDs Are the Correct Choice",
          body: "A VFD continuously controls motor speed throughout the operating cycle — not just during starting. This enables energy savings proportional to the cube of the speed reduction (at 80% speed, power consumption drops to 51% of full-speed consumption), dynamic flow/pressure/tension control without throttling or valve losses, and precise process variable control using PID feedback loops. VFDs are essential when the process requires variable speed for energy efficiency (pumps and fans operating at partial capacity), precision tension or position control (winding/unwinding machines, printing presses), load sharing between multiple drives, or frequent start-stop cycles that would overheat a soft starter. The payback period for a VFD on a centrifugal pump operating at 75% of full capacity is typically 12–18 months through energy savings alone."
        }
      ],
      keyPoints: [
        "Soft starters control starting voltage via thyristors and are bypassed after reaching full speed",
        "VFDs continuously control motor frequency and voltage throughout the entire operating cycle",
        "Soft starters are 30–50% less expensive than VFDs for fixed-speed applications",
        "VFDs save energy proportional to speed³ — at 80% speed, only 51% of full-speed power is consumed",
        "Choose soft starters for infrequent fixed-speed starts; choose VFDs whenever variable speed is beneficial"
      ],
      conclusion: "The decision tree is straightforward: if the motor needs variable speed for process control or energy savings, specify a VFD — the additional cost is justified by operational benefits. If the motor always runs at full speed and only needs controlled starting, a soft starter is the correct, more cost-effective solution. For borderline cases — centrifugal pumps with moderate part-load operation — an energy audit comparing VFD energy savings against the price premium will determine the correct choice."
    }
  },
  {
    category: "Case Study",
    title: "120 MLD Water Pump Station: Automation Design Deep Dive",
    desc: "An engineering walkthrough of the Amberpet Pumping Station automation project for HMWSSB — detailing the control system architecture, network design, energy optimization approach, and lessons learned.",
    readTime: "13 min read",
    slug: "hmwssb-case-study",
    author: "Nandini Enterprises Technical Team",
    date: "December 2024",
    tags: ["Case Study", "Water Treatment", "HMWSSB", "PLC", "SCADA", "VFD"],
    content: {
      intro: "The Amberpet Pumping Station serves as the primary booster station for water distribution across six zones of Hyderabad, processing up to 120 million liters per day (MLD) through six 450kW centrifugal pump sets. When HMWSSB identified that the station's aging direct-on-line (DOL) starter systems were causing excessive energy consumption, water hammer incidents, and limited remote visibility, Nandini Enterprises was contracted to deliver a complete electrical and automation upgrade — one of the largest single-station automation contracts in Telangana's water sector.",
      sections: [
        {
          heading: "Engineering Challenges Specific to This Project",
          body: "Several challenges made this project particularly complex. The station operates continuously — a planned shutdown of even 6 hours affects water supply to over 400,000 households. The existing switchgear had to be replaced panel by panel, with each pump kept operational until its replacement panel was ready. Six pumps with outputs feeding into a common 1200mm diameter header required coordinated pressure management — aggressive pump starting would cause pressure spikes and head losses at the header junction. The existing control room SCADA was running on Windows XP with a proprietary protocol connecting to legacy PLCs — integrating the new system required protocol gateway design before full cutover was possible."
        },
        {
          heading: "Control System Architecture Selected",
          body: "The selected architecture used ABB AC800M redundant PLC controllers (dual-CPU hot-standby, <5ms switchover) as the main sequencing and protection logic platform. Six Yaskawa A1000 VFD panels (450kW each) provided pump speed control, with PID pressure control loops maintaining the header pressure setpoint by trimming individual pump speeds. A new WinCC SCADA system was installed on redundant servers in a dedicated operations room. An OPC-UA gateway translated the new system data to the existing citywide SCADA platform, ensuring the central dispatch center maintained visibility throughout the transition. A Profinet ring topology on fiber optic cable provided the communication backbone, with 99.99% network availability."
        },
        {
          heading: "Energy Savings Achieved and Verified",
          body: "Pre-installation energy audit established a baseline of 38,500 kWh per day across all six pumps operating on DOL starters with throttle valves for flow control. Post-VFD installation measurement over 90 operating days showed average daily consumption of 30,420 kWh — a 21% reduction. The primary savings mechanisms were: elimination of throttle valve pressure losses (VFDs match pump speed to flow demand instead of wasting energy across a valve restriction), softer starting eliminating inrush heating losses, and the ability to run pumps at their Best Efficiency Point (BEP) by adjusting speed rather than operating on inefficient points of the pump curve. Annual energy savings quantified at ₹82 lakhs at prevailing utility tariffs."
        }
      ],
      keyPoints: [
        "Six 450kW VFD panels with PID header pressure control replaced DOL+throttle valve control",
        "ABB AC800M hot-standby redundant PLC with <5ms failover time ensures no control system downtime",
        "Profinet fiber ring provides 99.99% communication availability for critical infrastructure application",
        "21% energy reduction verified over 90-day measurement period — ₹82 lakhs annual savings",
        "Panel-by-panel replacement methodology maintained continuous pump station operation throughout"
      ],
      conclusion: "The Amberpet Pumping Station project demonstrates the engineering rigor required for major automation upgrades on continuously operating critical infrastructure. The combination of redundant control architecture, carefully staged cutover methodology, and VFD energy optimization delivered a project that exceeded the client's energy reduction targets while maintaining uninterrupted water supply throughout the 18-month upgrade program."
    }
  },
  {
    category: "Technical Guide",
    title: "IEC 61508 & SIL: Functional Safety for Industrial Control Systems",
    desc: "Understanding Safety Integrity Levels (SIL), the IEC 61508 functional safety standard, and how to implement Safety Instrumented Systems (SIS) for process plant hazard reduction.",
    readTime: "12 min read",
    slug: "iec-61508-sil-guide",
    author: "Nandini Enterprises Technical Team",
    date: "May 2025",
    tags: ["Functional Safety", "SIL", "IEC 61508", "IEC 61511", "Safety Systems"],
    content: {
      intro: "Functional safety — the part of overall safety that depends on a system responding correctly to its inputs — is a critical engineering discipline for any process plant where equipment failure could result in injury, death, or significant environmental damage. IEC 61508 (Functional Safety of E/E/PE Safety-related Systems) and its process industry derivative IEC 61511 provide the engineering framework for systematically identifying hazards, quantifying risk reduction requirements, designing Safety Instrumented Systems (SIS) to achieve the required risk reduction, and verifying that those systems will perform as designed when called upon.",
      sections: [
        {
          heading: "Safety Integrity Level (SIL) Explained",
          body: "A Safety Integrity Level is a discrete measure of the risk reduction provided by a Safety Instrumented Function (SIF). Four SIL levels are defined: SIL 1 requires a probability of failure on demand (PFD) between 10⁻² and 10⁻¹ — one failure per 10 to 100 demands. SIL 2 requires PFD between 10⁻³ and 10⁻², meaning the safety function must fail less than 1 time in 1000 demands. SIL 3 (10⁻⁴ to 10⁻³) and SIL 4 (10⁻⁵ to 10⁻⁴) represent progressively more demanding requirements. The SIL target for any given safety function is determined by a Hazard and Risk Assessment — identifying the tolerable risk level for a specific hazardous scenario and calculating the risk reduction needed from the SIS given the risk reduction already provided by other protective layers."
        },
        {
          heading: "Safety Instrumented System Architecture",
          body: "An SIS consists of three elements: Sensor (detecting the hazardous condition), Logic Solver (processing the sensor signal and deciding whether to activate protection), and Final Element (actuating protection — typically shutting valves or stopping equipment). Component redundancy and voting architectures are used to achieve the required PFD. A 1oo2 (one-out-of-two) sensor voting architecture — where either of two sensors can trigger shutdown — reduces the probability of missing a hazard but increases nuisance trip rate. A 2oo3 (two-out-of-three) architecture requires two of three sensors to agree before triggering, balancing spurious trip protection against safety integrity. IEC 61508 certified safety PLCs (TÜV-rated SIL-2 or SIL-3) are required for the logic solver function — standard PLCs do not qualify regardless of how they are programmed."
        },
        {
          heading: "Proof Testing and Maintenance Requirements",
          body: "SIS components require periodic proof testing to reveal dangerous undetected failures (failures where the safety function has failed but the plant process continues normally until a demand occurs). Proof test intervals affect PFD significantly — extending from 1-year to 2-year proof testing may increase PFD by 60–80%. The proof test procedure must exercise the complete SIS loop: verifying that each sensor correctly detects the hazardous condition, that the logic solver correctly processes the signal, and that the final element (valve) moves to its safe position within the required response time. Incomplete proof tests — checking only that the sensor transmits correctly but not that the valve actually closes — are a major compliance gap in many plant maintenance programs."
        }
      ],
      keyPoints: [
        "SIL 1–4 define probability of failure on demand (PFD) targets: 10⁻¹ to 10⁻⁵ respectively",
        "Hazard and Risk Assessment determines the SIL target — not engineering preference or rule of thumb",
        "1oo2 voting maximizes safety integrity; 2oo3 voting balances safety against spurious trips",
        "TÜV-certified SIL-rated logic solvers are mandatory — standard PLCs cannot fulfill this role",
        "Annual proof tests must exercise the complete SIS loop including final element movement to safe position"
      ],
      conclusion: "Functional safety engineering is a specialist discipline that sits at the intersection of process safety, control systems engineering, and reliability engineering. IEC 61511 requires that all persons responsible for SIS design, implementation, operation, and maintenance are competent in functional safety. Nandini Enterprises provides SIS design review, TÜV SIL-rated component selection, logic solver programming, and proof test procedure documentation as part of comprehensive safety instrumented system services."
    }
  },
  {
    category: "Engineering Insight",
    title: "Cable Sizing for Industrial Motor Feeders: A Practical Guide",
    desc: "Step-by-step methodology for sizing power cables for industrial motor feeders — considering current rating, voltage drop, short-circuit thermal withstand, and derating factors for grouped installation.",
    readTime: "10 min read",
    slug: "cable-sizing-guide",
    author: "Nandini Enterprises Technical Team",
    date: "March 2025",
    tags: ["Cable Sizing", "Motor Feeders", "Electrical Design", "Voltage Drop", "IS 1554"],
    content: {
      intro: "Cable sizing for industrial motor feeders is one of the most fundamental electrical engineering calculations — yet it is frequently performed incorrectly in practice, leading to overheated cables, voltage drop problems, and nuisance overload trips. A correctly sized motor feeder cable must satisfy four independent criteria simultaneously: continuous current rating (must carry the motor full load current with appropriate derating), voltage drop (must keep terminal voltage within ±10% of nominal under starting and running conditions), short-circuit thermal withstand (must survive without damage if a fault occurs before the protective device operates), and mechanical requirements (bend radius, minimum size for termination hardware, and armoring for mechanical protection).",
      sections: [
        {
          heading: "Step 1: Continuous Current Rating",
          body: "The continuous current rating of the cable must exceed the motor full load current (FLA) multiplied by a service factor (typically 1.0–1.15 depending on motor duty class). Cable current ratings per IS 1554 and IEC 60364 assume the cable is laid in free air at 40°C ambient. If cables are grouped in conduits, trays, or ducts — common in industrial installations — derating factors apply. IS 1554 Table 4B provides derating factors for grouping: 6 cables in a tray derate to 0.67× the single-cable rating. Thermal environment matters: cables in areas with ambient above 40°C require further derating. Choose the cable size such that the derated current rating exceeds the motor FLA × service factor."
        },
        {
          heading: "Step 2: Voltage Drop Calculation",
          body: "Voltage drop in a three-phase circuit is calculated as: ΔV = √3 × I × L × (R.cosφ + X.sinφ) / 1000, where I is the current in amps, L is the one-way cable length in meters, R is the conductor resistance in mΩ/m (from cable manufacturer data), X is the cable reactance in mΩ/m, and cosφ is the load power factor. For motor starting conditions, the starting current (5–7× FLA) combined with a starting power factor of 0.3–0.4 must be used to calculate the voltage drop at the motor terminals during acceleration. Voltage at motor terminals below 90% of nominal during starting causes failure to accelerate; below 85% nominal causes motor overheating. The IEE Wiring Regulations allow a maximum of 5% voltage drop from the supply point to the load terminal under normal operating conditions."
        },
        {
          heading: "Step 3: Short-Circuit Thermal Withstand",
          body: "The cable must withstand the thermal energy generated if a short-circuit fault occurs and persists until the protective device (circuit breaker or fuse) operates. The minimum conductor cross-section for thermal withstand is calculated from: A = (I_sc × √t) / k, where A is the cross-sectional area in mm², I_sc is the prospective short-circuit current in amps, t is the clearance time of the protective device in seconds, and k is a material constant (115 for PVC-insulated copper conductors at 70°C). For a 11kA fault cleared in 0.1 seconds, the minimum copper conductor required is (11000 × √0.1) / 115 = 30.2mm². If the continuous current rating calculation selected 25mm² but the thermal withstand requires 35mm², the larger size must be used."
        }
      ],
      keyPoints: [
        "Four criteria must all be satisfied: current rating, voltage drop, short-circuit withstand, and mechanical",
        "Grouping derating factors from IS 1554 can reduce cable capacity by 30–40% in dense tray installations",
        "Voltage drop during motor starting (using I_start at 0.3–0.4 power factor) often governs cable size on long runs",
        "Thermal withstand area A = (I_sc × √t) / 115 for copper PVC cables (IS 1554 method)",
        "Document all calculation assumptions including ambient temperature, grouping arrangement, and fault level"
      ],
      conclusion: "A comprehensive cable sizing calculation that simultaneously verifies all four criteria — current rating with derating factors, voltage drop under both running and starting conditions, short-circuit thermal withstand, and mechanical protection requirements — is essential for any industrial motor feeder. Nandini Enterprises performs complete cable sizing studies as part of our electrical engineering design service, providing calculation sheets that document every assumption for client review and future maintenance reference."
    }
  }
];

const CATEGORY_COLORS: Record<string, string> = {
  'Technical Guide': 'text-blue-700 bg-blue-50 border-blue-200',
  'White Paper': 'text-purple-700 bg-purple-50 border-purple-200',
  'Maintenance Guide': 'text-amber-700 bg-amber-50 border-amber-200',
  'Engineering Insight': 'text-emerald-700 bg-emerald-50 border-emerald-200',
  'Case Study': 'text-[#0f4c81] bg-slate-50 border-slate-200',
};

export default function KnowledgeCenterPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = articles.filter(a => {
    const matchesCat = activeFilter === 'ALL' || a.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      a.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#f7f9fc] min-h-screen text-slate-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#0f4c81] font-mono font-bold block">
                ENGINEERING KNOWLEDGE BASE
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit leading-tight">
                Knowledge Center & Technical Resources
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                In-depth technical guides, white papers, engineering case studies, and maintenance references authored by our specialist electrical and automation engineering team. Written for procurement engineers, plant managers, and technical specifiers.
              </p>
              <div className="flex gap-6 pt-2 font-mono text-xs">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f4c81]">{articles.length}</div>
                  <div className="text-slate-500 uppercase tracking-wider">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f4c81]">5</div>
                  <div className="text-slate-500 uppercase tracking-wider">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0f4c81]">Free</div>
                  <div className="text-slate-500 uppercase tracking-wider">Access</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0f4c81] to-[#2b6cb0] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <img 
                src="https://picsum.photos/seed/nandini/800/600" 
                alt="Engineering Documentation and Technical Resources" 
                className="relative rounded-lg shadow-xl object-cover w-full h-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Filters + Search */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase border rounded cursor-pointer transition-all ${
                  activeFilter === cat
                    ? 'bg-[#0f4c81] border-[#0f4c81] text-white'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded px-3 py-2 min-w-[220px]">
            <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search topics, tags..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="text-xs text-slate-700 bg-transparent focus:outline-none w-full placeholder-slate-400"
            />
          </div>
        </div>

        <div className="text-xs text-slate-500 font-mono">
          Showing {filteredArticles.length} of {articles.length} articles
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((art, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 rounded-lg p-7 flex flex-col justify-between hover:border-[#2b6cb0] hover:shadow-md transition-all group shadow-sm cursor-pointer"
              onClick={() => setSelectedArticle(art)}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`border font-bold text-[9px] font-mono px-2 py-0.5 rounded uppercase ${CATEGORY_COLORS[art.category] || 'text-slate-600 bg-slate-50 border-slate-200'}`}>
                    {art.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {art.readTime}
                  </span>
                </div>
                <h3 className="text-slate-900 font-bold text-lg font-outfit mb-3 group-hover:text-[#0f4c81] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {art.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {art.tags.slice(0, 4).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-mono bg-slate-50 border border-slate-200 text-slate-500 px-1.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-[10px] font-mono">
                <div>
                  <span className="text-slate-400 block">{art.author}</span>
                  <span className="text-slate-500">{art.date}</span>
                </div>
                <span className="text-[#0f4c81] font-bold group-hover:underline">
                  READ FULL ARTICLE →
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 text-slate-400 font-mono">
            <div className="text-4xl mb-4">📚</div>
            <p>No articles match your search. Try different keywords or reset filters.</p>
          </div>
        )}

        {/* CTA */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm text-center space-y-4">
          <h3 className="text-[#0f4c81] font-bold text-xl font-outfit">Need a Specific Technical Reference?</h3>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our engineering team publishes new technical guides, white papers, and case studies monthly. If you need documentation on a specific topic — system sizing, compliance standards, or industry-specific automation — contact us and we will provide direct technical guidance.
          </p>
          <a href="/contact?type=inquiry" className="inline-block bg-[#0f4c81] text-white px-6 py-3 rounded font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#2b6cb0] transition-colors">
            Request Technical Consultation →
          </a>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-lg max-w-3xl w-full shadow-2xl relative my-8">
            
            {/* Header */}
            <div className="bg-[#0f4c81] p-7 rounded-t-lg relative">
              <button 
                className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl cursor-pointer font-light leading-none"
                onClick={() => setSelectedArticle(null)}
              >
                ×
              </button>
              <div className="flex gap-2 items-center mb-3">
                <span className={`border font-bold text-[9px] font-mono px-2 py-0.5 rounded uppercase ${CATEGORY_COLORS[selectedArticle.category] || 'text-white bg-white/20 border-white/30'}`}>
                  {selectedArticle.category}
                </span>
                <span className="text-[10px] font-mono text-[#93c5fd]">{selectedArticle.readTime}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-outfit leading-snug mb-2">
                {selectedArticle.title}
              </h2>
              <div className="text-[10px] font-mono text-[#93c5fd] flex gap-4">
                <span>{selectedArticle.author}</span>
                <span>{selectedArticle.date}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 px-7 py-4 border-b border-slate-100">
              {selectedArticle.tags.map((tag, i) => (
                <span key={i} className="text-[9px] font-mono bg-slate-50 border border-slate-200 text-slate-500 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="p-7 space-y-6 text-sm text-slate-700">
              
              {/* Intro */}
              <div className="bg-[#f7f9fc] border-l-4 border-[#0f4c81] px-5 py-4 rounded-r">
                <p className="leading-relaxed text-slate-700">{selectedArticle.content.intro}</p>
              </div>

              {/* Sections */}
              {selectedArticle.content.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <h3 className="text-[#0f4c81] font-bold text-base font-outfit border-b border-slate-100 pb-2">
                    {sIdx + 1}. {section.heading}
                  </h3>
                  <p className="text-slate-650 leading-relaxed text-sm">{section.body}</p>
                </div>
              ))}

              {/* Key Points */}
              <div className="bg-slate-50 border border-slate-200 rounded p-5 space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#0f4c81] font-semibold">
                  Key Engineering Takeaways
                </h3>
                <ul className="space-y-2">
                  {selectedArticle.content.keyPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs">
                      <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                      <span className="text-slate-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conclusion */}
              <div className="space-y-2">
                <h3 className="text-[#0f4c81] font-bold text-sm font-outfit">Conclusion</h3>
                <p className="text-slate-650 leading-relaxed text-sm">{selectedArticle.content.conclusion}</p>
              </div>

              {/* Footer CTA */}
              <div className="border-t border-slate-100 pt-5 flex gap-3 flex-wrap">
                <a href="/contact?type=inquiry" className="bg-[#0f4c81] text-white px-5 py-2.5 rounded font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#2b6cb0] transition-colors">
                  Discuss This Topic with Our Engineers →
                </a>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="border border-slate-200 text-slate-600 px-5 py-2.5 rounded font-mono text-xs uppercase tracking-wider hover:border-slate-400 transition-colors cursor-pointer"
                >
                  Back to Knowledge Center
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
