'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Factory, Cpu, Zap, 
  Settings, CheckCircle, Clock, MapPin, Building2,
  ChevronRight, Cog, HardHat, Award, PhoneCall
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-[#F7F9FC] text-[#0B1F3A] min-h-screen font-sans selection:bg-[#1565C0] selection:text-white">
      
      {/* 1. ENTERPRISE HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B1F3A]">
        {/* Deep Industrial Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0B1F3A]/80 mix-blend-multiply z-10"></div>
          <Image 
            src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Industrial Automation Facility" 
            fill 
            className="object-cover opacity-60"
            priority
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="lg:col-span-8 space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#1565C0]/20 border border-[#1565C0]/40 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-mono font-bold text-blue-300 uppercase tracking-widest">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>Premium Industrial Engineering Partner</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight font-heading">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Excellence</span> in Automation & Electrical Solutions
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Delivering Industrial Automation, Instrumentation, Electrical Systems, Robotics, Elevators, Control Panels, SCADA Integration, and Smart Manufacturing Solutions Across Industries.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#1565C0] rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/20">
                  <span className="relative z-10 flex items-center gap-2 font-heading">
                    Get Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href="/contact?type=quote" className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-transparent border-2 border-slate-500 hover:border-white rounded-full transition-all hover:bg-white/5 font-heading">
                  Request Quote
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div 
              className="lg:col-span-4 hidden lg:grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {[
                { label: 'Years Experience', value: '18+' },
                { label: 'Projects Delivered', value: '500+' },
                { label: 'Industrial Clients', value: '100+' },
                { label: 'Technical Support', value: '24/7' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-2">
                  <div className="text-3xl font-bold text-white font-heading">{stat.value}</div>
                  <div className="text-xs text-blue-200 mt-2 font-mono uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono">Trusted by Global Leaders</span>
              <h3 className="text-xl font-bold text-[#0B1F3A] font-heading mt-1">Certified Engineering Excellence</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="font-heading font-bold text-2xl text-slate-800 flex items-center gap-2"><ShieldCheck className="text-[#0A3D91]"/> ISO 9001:2015</div>
              <div className="font-heading font-bold text-2xl text-slate-800 flex items-center gap-2"><Zap className="text-[#0A3D91]"/> CPRI Certified</div>
              <div className="font-heading font-bold text-2xl text-slate-800 flex items-center gap-2"><Award className="text-[#0A3D91]"/> 33KV License</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-sm font-bold text-[#1565C0] tracking-widest uppercase mb-3 font-mono">Our Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] font-heading leading-tight">
              Enterprise Grade Industrial Solutions
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industrial Automation",
                desc: "Turnkey automation with PLC programming, SCADA development, and drive integration.",
                icon: <Factory className="w-8 h-8 text-[#1565C0]" />,
                href: "/services/industrial-automation"
              },
              {
                title: "Instrumentation",
                desc: "Precision pressure, flow, and level measurement systems with calibration services.",
                icon: <Settings className="w-8 h-8 text-[#1565C0]" />,
                href: "/services/instrumentation"
              },
              {
                title: "Electrical Systems",
                desc: "HT & LT installations, power distribution, and complete electrical engineering.",
                icon: <Zap className="w-8 h-8 text-[#1565C0]" />,
                href: "/services/electrical-systems"
              },
              {
                title: "Robotics Solutions",
                desc: "Material handling, welding, and palletizing robotic integration for smart factories.",
                icon: <Cpu className="w-8 h-8 text-[#1565C0]" />,
                href: "/services/robotics"
              },
              {
                title: "Elevator Solutions",
                desc: "Installation and maintenance of passenger, freight, and heavy industrial elevators.",
                icon: <Building2 className="w-8 h-8 text-[#1565C0]" />,
                href: "/services/elevator-solutions"
              },
              {
                title: "Control Panels",
                desc: "Custom PCC, MCC, PLC, and VFD panels engineered to industry standards.",
                icon: <Cog className="w-8 h-8 text-[#1565C0]" />,
                href: "/services/control-panels"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group relative overflow-hidden"
              >
                <div className="w-16 h-16 bg-[#F7F9FC] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1565C0] group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:brightness-0 group-hover:invert transition-all">{service.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-[#0B1F3A] font-heading mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 font-mono text-sm leading-relaxed">{service.desc}</p>
                <Link href={service.href} className="inline-flex items-center text-[#1565C0] font-semibold text-sm hover:text-[#0A3D91] transition-colors">
                  Explore Details <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A3D91] to-[#1565C0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-[#1565C0] tracking-widest uppercase mb-3 font-mono">Industries We Serve</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] font-heading leading-tight">
                Empowering Core Sectors
              </h3>
            </div>
            <Link href="/industries" className="inline-flex items-center text-slate-500 hover:text-[#0A3D91] font-semibold transition-colors">
              View All Industries <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Cement', 'Steel', 'Power', 'Water Treatment', 'Pharmaceuticals', 'Oil & Gas', 'Manufacturing', 'Infrastructure'].map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image 
                  src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                  alt={ind}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold font-heading text-lg group-hover:text-blue-300 transition-colors">{ind}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US & WORKFLOW */}
      <section className="py-24 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Why Choose Us */}
            <div>
              <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-3 font-mono">The Nandini Advantage</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-10">Why Industry Leaders Choose Us</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "18+ Years Experience", "End-to-End Engineering",
                  "Certified Professionals", "24/7 Service Support",
                  "Cost Effective Solutions", "Industry Standard Compliance",
                  "Fast Project Execution", "Advanced Technology Integration"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow */}
            <div>
              <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-3 font-mono">Our Process</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-10">Execution Methodology</h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                {['Consultation & Site Survey', 'Engineering Design', 'Manufacturing & Assembly', 'Installation & Testing', 'Commissioning & Maintenance'].map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0B1F3A] bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold font-mono">
                      {idx + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                      <h4 className="font-bold font-heading text-lg">{step}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PARTNERSHIPS */}
      <section className="py-16 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-8 font-mono">Authorized System Integrators & Channel Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Yaskawa', 'ABB', 'Honeywell', 'Baumer', 'Yokogawa', 'Nidec'].map((partner) => (
              <div key={partner} className="text-2xl sm:text-3xl font-black text-slate-800 font-heading tracking-tighter">
                {partner.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
