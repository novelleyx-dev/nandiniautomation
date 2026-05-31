'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ServiceDetails } from '@/lib/servicesData';

interface ClientProps {
  service: ServiceDetails;
}

export default function ServicePageClient({ service }: ClientProps) {
  // State for active tabs, accordion, modals
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [selectedIndCard, setSelectedIndCard] = useState<number | null>(null);

  // Custom Simulator States
  // 1. Panel Manufacturing (ACB trip current)
  const [tripCurrent, setTripCurrent] = useState(1600);
  // 2. PLC/SCADA HMI mimics
  const [pumpRunning, setPumpRunning] = useState(true);
  const [valvePos, setValvePos] = useState(75);
  // 3. VFD energy calc
  const [motorHP, setMotorHP] = useState(50);
  const [dutyHours, setDutyHours] = useState(16);
  // 4. Robotics arm jog axis
  const [robotAxis1, setRobotAxis1] = useState(45);
  const [robotAxis2, setRobotAxis2] = useState(-30);
  // 5. Instrumentation loop tank level target
  const [tankTarget, setTankTarget] = useState(62);
  const [tankCurrent, setTankCurrent] = useState(58);
  // 6. Elevator floor select
  const [liftFloor, setLiftFloor] = useState(3);
  const [liftMoving, setLiftMoving] = useState(false);
  // 7. Electrical grid breaker state
  const [breakerTripped, setBreakerTripped] = useState(false);

  const toggleAccordion = (idx: number) => {
    setActiveAccordion(activeAccordion === idx ? null : idx);
  };

  const handleLiftMove = (floor: number) => {
    if (floor === liftFloor || liftMoving) return;
    setLiftMoving(true);
    setTimeout(() => {
      setLiftFloor(floor);
      setLiftMoving(false);
    }, 1500);
  };

  // Render Service-Specific interactive simulation console
  const renderServiceSimulator = () => {
    switch (service.slug) {
      case 'panel-manufacturing':
        return (
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6 font-mono text-xs shadow-sm">
            <h4 className="text-[#0f4c81] font-bold uppercase tracking-wider border-b border-slate-100 pb-2">
              ACB PROTECTION COORDINATION SIMULATOR
            </h4>
            <div className="space-y-4 text-slate-700">
              <div className="flex justify-between items-center">
                <span>Incomer Frame Limit:</span>
                <span className="text-slate-900 font-bold">3200A max</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-slate-500">
                  <span>Current trip trigger setting (Ir):</span>
                  <span className="text-[#0f4c81] font-semibold">{tripCurrent} Amps</span>
                </div>
                <input 
                  type="range" 
                  min="800" 
                  max="3200" 
                  step="100"
                  value={tripCurrent}
                  onChange={(e) => setTripCurrent(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0f4c81]"
                />
              </div>
              
              <div className="bg-[#E8F0FA] p-4 rounded border border-slate-150 space-y-2">
                <span className="text-slate-400 text-[10px] block">SIMULATED FAULT RESPONSES</span>
                <div className="flex justify-between">
                  <span>Overload trip timing (at 1.5x Ir):</span>
                  <span className="text-emerald-700 font-bold">42 Sec (Thermal memory active)</span>
                </div>
                <div className="flex justify-between">
                  <span>Short circuit instantaneous trip trigger:</span>
                  <span className="text-rose-700 font-bold">{tripCurrent * 10} Amps</span>
                </div>
                <div className="flex justify-between">
                  <span>Enclosure heat output estimation:</span>
                  <span className="text-slate-800">{(tripCurrent * 0.012).toFixed(1)} Watts</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'plc-scada':
        return (
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6 font-mono text-xs shadow-sm">
            <h4 className="text-[#0f4c81] font-bold uppercase tracking-wider border-b border-slate-100 pb-2">
              REAL-TIME SCADA HMI CONSOLE MIMIC
            </h4>
            <div className="space-y-4 text-slate-700">
              <div className="flex justify-between items-center">
                <span>PUMP STATION #2:</span>
                <button
                  onClick={() => setPumpRunning(!pumpRunning)}
                  className={`px-3 py-1 rounded font-bold uppercase tracking-wider text-[10px] transition-colors ${
                    pumpRunning ? 'bg-emerald-50 border border-emerald-300 text-emerald-700' : 'bg-rose-50 border border-rose-300 text-rose-700'
                  }`}
                >
                  {pumpRunning ? 'RUNNING' : 'STOPPED'}
                </button>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-slate-500">
                  <span>Modulating Valve Aperture:</span>
                  <span className="text-[#0f4c81] font-semibold">{valvePos}% Opened</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={valvePos}
                  onChange={(e) => setValvePos(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0f4c81]"
                />
              </div>

              <div className="bg-[#E8F0FA] p-4 rounded border border-slate-150 space-y-2 text-[10px]">
                <div className="flex justify-between">
                  <span>Feedback flow sensor data:</span>
                  <span className="text-[#0f4c81] font-bold">{(pumpRunning ? (valvePos * 12.5) : 0).toFixed(1)} M3/Hr</span>
                </div>
                <div className="flex justify-between">
                  <span>Pressure transducer read value:</span>
                  <span className="text-[#0f4c81] font-bold">{(pumpRunning ? (4.2 - (valvePos * 0.02)) : 0).toFixed(2)} Bar</span>
                </div>
                <div className="flex justify-between">
                  <span>Active telemetry alarms:</span>
                  <span className={pumpRunning ? 'text-emerald-700 font-semibold' : 'text-amber-700 font-semibold animate-pulse'}>
                    {pumpRunning ? '0 Active Warnings' : 'Telemetry fault: Zero Pressure'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'vfd-solutions':
        return (
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6 font-mono text-xs shadow-sm">
            <h4 className="text-[#0f4c81] font-bold uppercase tracking-wider border-b border-slate-100 pb-2">
              VFD ENERGY AUDIT COST CALCULATOR
            </h4>
            <div className="space-y-4 text-slate-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-slate-500 block">Motor Rating (HP):</span>
                  <input
                    type="number"
                    value={motorHP}
                    onChange={(e) => setMotorHP(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-full bg-[#E8F0FA] border border-slate-200 rounded px-2 py-1 text-slate-800 focus:outline-none focus:border-[#0f4c81] font-sans"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 block">Daily Duty Cycle (Hrs):</span>
                  <input
                    type="number"
                    value={dutyHours}
                    onChange={(e) => setDutyHours(Math.max(1, Math.min(24, parseInt(e.target.value) || 0)))}
                    className="w-full bg-[#E8F0FA] border border-slate-200 rounded px-2 py-1 text-slate-800 focus:outline-none focus:border-[#0f4c81] font-sans"
                  />
                </div>
              </div>

              <div className="bg-[#E8F0FA] p-4 rounded border border-slate-150 space-y-2 text-[10px]">
                <div className="flex justify-between">
                  <span>DOL Starter Daily Consumption:</span>
                  <span className="text-slate-500">{(motorHP * 0.746 * dutyHours).toFixed(1)} kWh</span>
                </div>
                <div className="flex justify-between">
                  <span>Yaskawa VFD Daily Consumption:</span>
                  <span className="text-[#0f4c81] font-bold">{(motorHP * 0.746 * dutyHours * 0.72).toFixed(1)} kWh (Save 28%)</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 text-emerald-700 font-bold">
                  <span>Estimated Annual Savings (INR):</span>
                  <span>&nbsp;₹ {((motorHP * 0.746 * dutyHours * 0.28) * 365 * 8.5).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'robotics':
        return (
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6 font-mono text-xs shadow-sm">
            <h4 className="text-[#0f4c81] font-bold uppercase tracking-wider border-b border-slate-100 pb-2">
              MULTI-AXIS ROBOTIC JOG CONTROLLER
            </h4>
            <div className="space-y-4 text-slate-700">
              <div className="space-y-1.5">
                <div className="flex justify-between text-slate-500">
                  <span>Base Swivel Rotation (Axis S):</span>
                  <span className="text-[#0f4c81] font-semibold">{robotAxis1}&deg;</span>
                </div>
                <input 
                  type="range" 
                  min="-170" 
                  max="170" 
                  value={robotAxis1}
                  onChange={(e) => setRobotAxis1(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0f4c81]"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-slate-500">
                  <span>Lower Arm Extension (Axis L):</span>
                  <span className="text-[#0f4c81] font-semibold">{robotAxis2}&deg;</span>
                </div>
                <input 
                  type="range" 
                  min="-90" 
                  max="120" 
                  value={robotAxis2}
                  onChange={(e) => setRobotAxis2(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0f4c81]"
                />
              </div>

              <div className="bg-[#E8F0FA] p-4 rounded border border-slate-150 text-[10px] space-y-1.5">
                <div className="flex justify-between">
                  <span>Wrist Coordinates (Calculated TCP):</span>
                  <span className="text-slate-800">X: {(450 + (robotAxis1 * 1.2)).toFixed(1)} mm &bull; Y: {(robotAxis2 * 2.1).toFixed(1)} mm</span>
                </div>
                <div className="flex justify-between">
                  <span>Singularity boundary warning:</span>
                  <span className="text-emerald-700 font-bold">OPERATIONAL / CLEAR</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'instrumentation':
        return (
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6 font-mono text-xs shadow-sm">
            <h4 className="text-[#0f4c81] font-bold uppercase tracking-wider border-b border-slate-100 pb-2">
              TANK LEVEL LOOP CONTROLLER
            </h4>
            <div className="space-y-4 text-slate-700">
              <div className="space-y-1.5">
                <div className="flex justify-between text-slate-500">
                  <span>Target Liquid Fill Level:</span>
                  <span className="text-[#0f4c81] font-semibold">{tankTarget}% (SP)</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="90" 
                  value={tankTarget}
                  onChange={(e) => {
                    setTankTarget(parseInt(e.target.value));
                    // Simulate PID response
                    const diff = parseInt(e.target.value) - tankCurrent;
                    setTimeout(() => {
                      setTankCurrent(Math.round(tankCurrent + (diff * 0.8)));
                    }, 500);
                  }}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0f4c81]"
                />
              </div>

              <div className="bg-[#E8F0FA] p-4 rounded border border-slate-150 text-[10px] space-y-2">
                <div className="flex justify-between">
                  <span>Process Value Level (PV Sensor):</span>
                  <span className="text-[#0f4c81] font-bold">{tankCurrent}%</span>
                </div>
                <div className="flex justify-between">
                  <span>HART Loop Transmitter Current:</span>
                  <span className="text-[#0f4c81] font-bold">{(4 + (tankCurrent * 0.16)).toFixed(2)} mA</span>
                </div>
                <div className="flex justify-between">
                  <span>Control Valve Output (MV):</span>
                  <span className="text-emerald-700 font-bold">{tankCurrent < tankTarget ? 'FILLING' : 'HOLDING'}</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'elevator-systems':
        return (
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6 font-mono text-xs shadow-sm">
            <h4 className="text-[#0f4c81] font-bold uppercase tracking-wider border-b border-slate-100 pb-2">
              MICROPROCESSOR CABIN CALL CONTROLLER
            </h4>
            <div className="space-y-4 text-slate-700">
              <div className="flex justify-between items-center">
                <span>Active Elevator Location:</span>
                <span className="text-slate-900 font-bold">Floor {liftFloor}</span>
              </div>

              <div className="flex justify-between gap-2">
                {[1, 2, 3, 4, 5].map((floor) => (
                  <button
                    key={floor}
                    onClick={() => handleLiftMove(floor)}
                    className={`flex-1 py-2.5 rounded font-mono text-xs font-bold border transition-all ${
                      liftFloor === floor 
                        ? 'bg-[#0f4c81] border-[#0f4c81] text-white shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
                    }`}
                  >
                    F{floor}
                  </button>
                ))}
              </div>

              <div className="bg-[#E8F0FA] p-4 rounded border border-slate-150 text-[10px] space-y-1.5">
                <div className="flex justify-between">
                  <span>Cabin status indicator:</span>
                  <span className={liftMoving ? 'text-amber-600 font-semibold animate-pulse' : 'text-emerald-700 font-semibold'}>
                    {liftMoving ? 'MOVING...' : 'STATIONARY'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Door lock switch:</span>
                  <span className="text-slate-700">{liftMoving ? 'LOCKED' : 'OPENED'}</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'electrical-solutions':
        return (
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6 font-mono text-xs shadow-sm">
            <h4 className="text-[#0f4c81] font-bold uppercase tracking-wider border-b border-slate-100 pb-2">
              HT BREAKER CONTROL CONSOLE MIMIC
            </h4>
            <div className="space-y-4 text-slate-700">
              <div className="flex justify-between items-center">
                <span>33KV Vacuum Circuit Breaker state:</span>
                <button
                  onClick={() => setBreakerTripped(!breakerTripped)}
                  className={`px-3 py-1 rounded font-bold uppercase tracking-wider text-[10px] transition-colors ${
                    !breakerTripped ? 'bg-emerald-50 border border-emerald-300 text-emerald-700' : 'bg-rose-50 border border-rose-300 text-rose-700 animate-pulse'
                  }`}
                >
                  {!breakerTripped ? 'CLOSED' : 'TRIPPED'}
                </button>
              </div>

              <div className="bg-[#E8F0FA] p-4 rounded border border-slate-150 text-[10px] space-y-2">
                <div className="flex justify-between">
                  <span>Phase currents matching:</span>
                  <span className="text-slate-800">{!breakerTripped ? 'R: 142A | Y: 140A | B: 141A' : '0A (No current flow)'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Active ground earth pit leakage:</span>
                  <span className="text-slate-800">{!breakerTripped ? '0.04 Amps' : '0.00 Amps'}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2">
                  <span>Relay status message:</span>
                  <span className={!breakerTripped ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                    {!breakerTripped ? 'ALL SYSTEM OK' : 'TRIP FAULT: EARTH SHIELD LEAK'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'amc-services':
        return (
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6 font-mono text-xs shadow-sm">
            <h4 className="text-[#0f4c81] font-bold uppercase tracking-wider border-b border-slate-100 pb-2">
              FAT/SAT SYSTEM VALIDATION PROTOCOL
            </h4>
            <div className="space-y-3">
              <p className="text-[10px] text-slate-500 leading-normal mb-2">
                Select validation test type to log simulated results formats:
              </p>
              {[
                { name: 'Insulation test (5kV)', result: 'PASSED (Value: 24,000 Megohms)' },
                { name: 'Primary injection checks', result: 'PASSED (Phase curves matching limits)' },
                { name: 'Redundancy test checks', result: 'PASSED (Switchover timing: 4ms)' }
              ].map((test, idx) => (
                <button
                  key={idx}
                  onClick={() => alert(`Generating reference log format: ${test.name} checks -> ${test.result}`)}
                  className="w-full text-left px-3 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded text-slate-700 flex justify-between items-center text-[10px] cursor-pointer transition-colors"
                >
                  <span>{test.name}</span>
                  <span className="text-[#0f4c81] font-bold">&rarr; Run</span>
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-16">
      
      {/* 2. SERVICE OVERVIEW SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3">
              Divisional Capability & Overview
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-slate-655">
              {service.overviewParagraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4 bg-white border border-slate-200 p-6 rounded-lg space-y-4 shadow-sm">
            <h3 className="text-[#0f4c81] font-bold text-sm uppercase tracking-wider font-mono">
              Technical Division Stats
            </h3>
            <div className="divide-y divide-slate-100 font-mono text-xs">
              {service.stats.map((stat, sIdx) => (
                <div key={sIdx} className="py-3 flex justify-between items-center text-slate-700">
                  <span className="text-slate-500">{stat.label}:</span>
                  <span className="text-slate-900 font-bold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIAL CHALLENGE SECTION */}
      <section className="py-16 bg-[#eef2f7]/50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3">
            Industrial Challenge & Remediation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="bg-white border border-slate-200 p-6 rounded-lg space-y-3 shadow-sm">
              <span className="text-[10px] font-mono text-rose-700 uppercase tracking-widest block font-bold">
                Before: Operational Bottlenecks
              </span>
              <p className="text-slate-600 leading-relaxed text-xs">
                {service.challenges.before}
              </p>
            </div>
            
            <div className="bg-white border border-[#2b6cb0]/30 p-6 rounded-lg space-y-3 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 border-b border-l border-[#2b6cb0]/20 pointer-events-none" />
              <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest block font-bold">
                After: Nandini Engineering Solution
              </span>
              <p className="text-slate-655 leading-relaxed text-xs">
                {service.challenges.after}
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-[#0f4c81]">
                <strong>Outcome:</strong> {service.challenges.scenario}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENGINEERING WORKFLOW SYSTEM */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3">
          Engineering Process Pipeline
        </h2>
        
        {/* Progress Pipeline */}
        <div className="relative border border-slate-200 rounded-lg p-6 bg-white shadow-xs">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block" />
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-[#0f4c81] -translate-y-1/2 transition-all duration-500 hidden md:block" 
            style={{ width: `${(activeWorkflow / (service.workflow.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {service.workflow.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWorkflow(idx)}
                className={`flex flex-col items-center text-center p-3 rounded transition-all cursor-pointer focus:outline-none ${
                  activeWorkflow === idx
                    ? 'bg-slate-50 border border-[#0f4c81]/30 shadow-xs'
                    : 'bg-white border border-transparent hover:border-slate-100'
                }`}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold mb-2 transition-colors ${
                  activeWorkflow === idx
                    ? 'bg-[#0f4c81] text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  0{idx + 1}
                </span>
                <span className={`text-[10px] uppercase font-mono tracking-wider font-semibold ${
                  activeWorkflow === idx ? 'text-[#0f4c81]' : 'text-slate-500'
                }`}>
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Step details */}
        <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-mono text-[#0f4c81] uppercase tracking-widest border border-[#0f4c81]/20 px-2 py-0.5 rounded bg-slate-50">
                STEP 0{activeWorkflow + 1} SPECIFICATIONS
              </span>
              <h3 className="text-slate-900 font-bold text-xl font-outfit">
                {service.workflow[activeWorkflow].name}
              </h3>
              <p className="text-sm text-slate-655 leading-relaxed">
                {service.workflow[activeWorkflow].activity}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block">TOOLS:</span>
                  <span className="text-slate-700 font-sans">{service.workflow[activeWorkflow].tools}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">SAFETY CONTROL:</span>
                  <span className="text-slate-700 font-sans">{service.workflow[activeWorkflow].safety}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">DELIVERABLE:</span>
                  <span className="text-emerald-700 font-bold font-sans">{service.workflow[activeWorkflow].deliverable}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <svg className="w-24 h-24 text-[#0f4c81]/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="25" y="25" width="50" height="50" rx="3" />
                <path d="M25,50 H75 M50,25 V75" strokeDasharray="1,2" />
                <circle cx="50" cy="50" r="5" className="fill-[#0f4c81]/80 stroke-[#2b6cb0]" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL ARCHITECTURE SECTION & SIMULATORS */}
      <section className="py-16 bg-[#eef2f7]/50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Architecture description */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3">
                Technical Systems Topology
              </h2>
              <p className="text-sm text-slate-655 leading-relaxed">
                {service.architectureDesc}
              </p>
              
              <ul className="space-y-3 font-mono text-xs text-slate-700">
                {service.architectureDetails.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start space-x-2">
                    <span className="text-[#3b82f6] font-bold shrink-0 mt-0.5">&bull;</span>
                    <span className="font-sans">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live Interactive Simulator Console */}
            <div className="lg:col-span-6">
              {renderServiceSimulator()}
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES USING THIS SERVICE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3">
          Applied Industrial Domains
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.industries.map((ind, indIdx) => (
            <div 
              key={indIdx}
              onClick={() => setSelectedIndCard(selectedIndCard === indIdx ? null : indIdx)}
              className="bg-white hover:bg-slate-50/50 border border-slate-200 hover:border-[#2b6cb0] p-6 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-slate-900 font-bold text-lg font-outfit group-hover:text-[#0f4c81] transition-colors">
                    {ind.name}
                  </h3>
                  <span className="text-[9px] font-mono text-[#0f4c81] bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    S-INFO
                  </span>
                </div>
                
                {selectedIndCard === indIdx ? (
                  <div className="space-y-3 text-[11px] font-mono text-slate-655 pt-2 border-t border-slate-100">
                    <div>
                      <strong className="text-[#0f4c81]">NEED:</strong> <span className="font-sans">{ind.need}</span>
                    </div>
                    <div>
                      <strong className="text-[#0f4c81]">CHALLENGE:</strong> <span className="font-sans">{ind.challenge}</span>
                    </div>
                    <div>
                      <strong className="text-[#0f4c81]">ADVANTAGE:</strong> <span className="font-sans">{ind.advantage}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-550 leading-relaxed line-clamp-3">
                    {ind.need}
                  </p>
                )}
              </div>

              <span className="text-[9px] font-mono text-[#0f4c81] mt-4 block">
                {selectedIndCard === indIdx ? 'Click to collapse details' : 'Click to drill down details &rarr;'}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. REAL IMPLEMENTATION EXAMPLES (CASE STUDY) */}
      <section className="py-16 bg-[#eef2f7]/50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3">
            Case Study & Operational Outcomes
          </h2>
          
          <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-6 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div>
                <span className="text-[9px] font-mono text-[#0f4c81] uppercase tracking-widest block font-bold">
                  B2B CLIENT CASE SHEET
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-outfit mt-1">
                  {service.caseStudy.client}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase tracking-wider bg-emerald-50 border border-emerald-250 px-2 py-1 rounded">
                VERIFIED DELIVERY
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-600 font-sans leading-relaxed">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px] font-mono">1. Client Requirement:</h4>
                  <p className="mt-1">{service.caseStudy.requirement}</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px] font-mono">2. Technical Problem:</h4>
                  <p className="mt-1 text-rose-700/90">{service.caseStudy.problem}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px] font-mono">3. Engineering Solution:</h4>
                  <p className="mt-1">{service.caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px] font-mono">4. Products Integrated:</h4>
                  <p className="mt-1 text-[#0f4c81] font-mono">{service.caseStudy.products}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono">
              <span className="text-slate-500 uppercase">Outcome: {service.caseStudy.outcome}</span>
              <span className="text-emerald-700 font-bold uppercase tracking-wider">Metrics: {service.caseStudy.improvement}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY & SYSTEMS USED */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3">
          Technical Ecosystem & Systems
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
          {service.techEcosystem.map((tech, tIdx) => (
            <div 
              key={tIdx} 
              className="bg-white border border-slate-200 p-6 rounded-lg space-y-3 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h4 className="text-slate-900 font-bold text-sm mb-2">{tech.name}</h4>
                <p className="text-slate-600 leading-normal mb-4 font-sans">{tech.use}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-500">
                <strong className="text-[#0f4c81]">LOGIC:</strong> <span className="font-sans">{tech.logic}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9 & 10. QUALITY ASSURANCE & SAFETY */}
      <section className="py-16 bg-[#eef2f7]/50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* QA section */}
            <div className="space-y-6">
              <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3">
                Quality Assurance & Audits
              </h2>
              <ul className="space-y-3 text-xs font-mono text-slate-700">
                {service.qualityAssurance.map((qa, qaIdx) => (
                  <li key={qaIdx} className="flex items-start space-x-2">
                    <span className="text-emerald-700 font-bold shrink-0 mt-0.5">&check;</span>
                    <span className="font-sans">{qa}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety block */}
            <div className="space-y-6">
              <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3">
                Safety & Standards Conformity
              </h2>
              <div className="space-y-3 font-mono text-xs text-slate-700">
                {service.safetyCompliance.map((safe, safeIdx) => (
                  <div key={safeIdx} className="bg-white border border-slate-200 p-4 rounded shadow-xs">
                    <span className="text-[#0f4c81] font-bold block mb-1">{safe.standard}</span>
                    <span className="text-slate-600 leading-relaxed font-sans">{safe.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. MAINTENANCE, SUPPORT & ACCORDIONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3">
              Lifecycle Support & AMC Services
            </h2>
            <div className="space-y-3">
              {service.maintenanceAMC.map((maint, mIdx) => (
                <div key={mIdx} className="border border-slate-200 rounded overflow-hidden shadow-xs">
                  <button
                    onClick={() => toggleAccordion(mIdx)}
                    className="w-full text-left px-5 py-4 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider font-mono flex justify-between items-center focus:outline-none cursor-pointer"
                  >
                    <span>CYCLE STAGE 0{mIdx + 1}: {maint.split(":")[0]}</span>
                    <span className="text-[#0f4c81] font-bold text-sm">
                      {activeAccordion === mIdx ? '−' : '+'}
                    </span>
                  </button>
                  {activeAccordion === mIdx && (
                    <div className="px-5 py-4 bg-[#E8F0FA] text-xs leading-relaxed text-slate-600 border-t border-slate-100 font-sans">
                      {maint}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 13. DOCUMENTATION SYSTEM */}
          <div className="lg:col-span-4 bg-white border border-slate-200 p-6 rounded-lg space-y-6 font-mono text-xs shadow-sm">
            <h4 className="text-[#0f4c81] font-bold uppercase tracking-wider border-b border-slate-100 pb-2">
              TECHNICAL FILE DOWNLOADS
            </h4>
            <div className="space-y-4">
              {service.docs.map((doc, docIdx) => (
                <div 
                  key={docIdx}
                  onClick={() => alert(`Document "${doc.name}" has been queued for secure download from portal.`)}
                  className="p-3 bg-[#E8F0FA] border border-slate-150 rounded hover:border-[#0f4c81] cursor-pointer flex justify-between items-center transition-all group"
                >
                  <div>
                    <span className="text-slate-800 group-hover:text-[#0f4c81] font-semibold transition-colors block text-[10px]">
                      {doc.name}
                    </span>
                    <span className="text-[8px] text-slate-400 uppercase">{doc.type} &bull; {doc.size}</span>
                  </div>
                  <span className="text-[#0f4c81] group-hover:underline text-[9px]">Download &darr;</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Dynamic FAQ Accordions */}
      <section className="py-16 bg-[#eef2f7]/30 border-t border-slate-200 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-[#0f4c81] font-bold text-xl font-outfit border-l-4 border-[#0f4c81] pl-3 mb-8">
            Divisional FAQs
          </h3>
          <div className="space-y-4">
            {service.faqs.map((faq, fIdx) => (
              <div key={fIdx} className="bg-white border border-slate-200 p-6 rounded-lg space-y-2 shadow-sm">
                <h4 className="text-slate-900 font-bold text-sm font-sans">{faq.q}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
