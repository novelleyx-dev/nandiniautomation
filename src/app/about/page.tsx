export default function AboutPage() {
  const managementTeam = [
    { 
      name: "Mr. Maruti Marlapalle", 
      title: "Managing Partner", 
      desc: "Founder of NANDINI ENTERPRISES with a unique blend of core technical & excellent marketing skills for more than 25+ years in Electrical, Instrumentation and Automation. He leads the team with a vision to make the company a leader in the field." 
    },
    { 
      name: "Mrs. Pratima Maruti Marlapalle", 
      title: "Partner", 
      desc: "Influential in handling Human Resources, Finance, Purchase, and Service departments since 2011. Certified 'Under 10K Women from IIM Bangalore' and awarded 'Women Entrepreneur of the Year'." 
    },
    { 
      name: "Mr. Narayana Jajala", 
      title: "Senior General Manager – Projects", 
      desc: "Electronics and Communication Engineer with over 35 years of senior management experience in Cement, Iron & Steel industries, specializing in strategic planning and project execution." 
    },
    { 
      name: "Mr. B Venkat", 
      title: "General Manger – Sales & Marketing", 
      desc: "20+ years of experience handling complete Panel Division starting from Estimations, Manufacturing, and Testing till commissioning. Successfully handled many turnkey projects." 
    },
    { 
      name: "Mr. Srinivas", 
      title: "Vishakhapatnam Branch Head", 
      desc: "A well-known networker and influencer in the AP market, associated since the beginning of our career and company incorporation." 
    },
    { 
      name: "Mr. Sanket Badgujar", 
      title: "Pune Branch Head", 
      desc: "From a Techno-Financial background, successfully handled many turnkey jobs and projects, with expertise in Water & Waste Water Projects." 
    },
    { 
      name: "Mr. Surya Narayana", 
      title: "Manager (Design Projects & Engineering)", 
      desc: "16+ years of experience in the electrical panel industry, heading the Panel Division and overseeing complete operations from estimation to final execution." 
    },
    { 
      name: "Mr. Gangadhar", 
      title: "Services Manager", 
      desc: "10+ years of experience in Variable Frequency Drives (VFDs) and specializing in Dyno Drive Test Bench for Indian Railways, crane applications, and controller development." 
    },
    { 
      name: "Mr. Anil Kumar", 
      title: "Fabrication Manager", 
      desc: "Automobile Engineer with over 18+ years of experience in tool designing, panel designing, and fabrication." 
    },
  ];

  const awards = [
    "Excellence In Business services award 2025 - Rotary Club of Udgir MH",
    "Excellence In Industrial All-Round performance SME - FTCCI @ Hyderabad (July 2024)",
    "Service Excellence Award - Yaskawa @ Kathmandu, Nepal (Oct 2024)",
    "Business Excellence Award - Global Conference by FTII @Hyd (Aug 2024)",
    "She inspires Honor Award - NSI Council @ Hyd (July 2024)",
    "Certified Under 10K Women from IIM Bangalore - Pratima M. (2023)",
    "Service Excellence Award - Yaskawa at Dubai (2023)",
    "Excellence Award in Core Manufacturing - COWE at Jaipur (March 2022)",
    "Star Service Provider - YASKAWA at Phuket (May 2019)",
  ];

  return (
    <div className="bg-[#f7f9fc] min-h-screen text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#0f4c81] font-mono font-bold block">
                Corporate Profile
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit leading-tight">
                About Nandini Enterprises
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-650">
                Bringing Excellence in Business relationships and values, our company is a perfect blend of 'highly professional Sales Engineers' and 'strong Technical Service Engineers'.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="border border-slate-200 bg-[#f7f9fc] rounded px-4 py-2 text-center shadow-xs">
                  <span className="block text-2xl font-bold text-[#0f4c81] font-outfit">25+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold font-mono">Years Exp</span>
                </div>
                <div className="border border-slate-200 bg-[#f7f9fc] rounded px-4 py-2 text-center shadow-xs">
                  <span className="block text-2xl font-bold text-[#0f4c81] font-outfit">500+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold font-mono">Projects Done</span>
                </div>
                <div className="border border-slate-200 bg-[#f7f9fc] rounded px-4 py-2 text-center shadow-xs">
                  <span className="block text-2xl font-bold text-[#0f4c81] font-outfit">14+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold font-mono">Sectors</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0f4c81] to-[#2b6cb0] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <img 
                src="https://picsum.photos/seed/nandini/800/600" 
                alt="Nandini Enterprises Manufacturing Shop Floor" 
                className="relative rounded-lg shadow-xl object-cover w-full h-[350px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Profile Details */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit border-l-4 border-[#0f4c81] pl-3">
              Organisational Depth
            </h2>
            <p className="leading-relaxed text-sm text-slate-700">
              We at <strong>NANDINI ENTERPRISES</strong> are an ISO 9001:2015 Certified Company in the field of general-purpose Instrumentation and Sophisticated Automation System. We hold an &ldquo;A&rdquo; Grade 33KV License for HT & LT Electrical works, complete with supply and erection capabilities.
            </p>
            <p className="leading-relaxed text-sm text-slate-700">
              We are a CPRI Certified Electrical Control Panel Manufacturer providing PCC, MCC, VFD, and PLC Panels. We stand as a leading System Integrator for global giants including <strong>Yaskawa India Pvt Ltd</strong>, <strong>ABB India Ltd</strong>, <strong>Yokogawa India Limited</strong>, and <strong>Baumer India Pvt. Ltd</strong>.
            </p>
            <p className="leading-relaxed text-sm text-slate-700">
              With a state-of-the-art 11,000 Sft. facility located at the Cherlapally Industrial Development Zone in Hyderabad, we extend our quality products & services to OEMs, BMS, Hospitals, Educational Institutions, and Government organizations like Indian Railways, MAHAGENCO, HPCL, and Defense Labs.
            </p>
          </div>
          
          <div className="lg:col-span-4 bg-white border border-slate-200 p-6 rounded-lg space-y-6 shadow-sm">
            <h4 className="text-[#0f4c81] font-bold border-b border-slate-100 pb-2 text-xs font-mono uppercase tracking-wider">Operational Core Values</h4>
            <div className="space-y-3 font-mono text-xs text-slate-600">
              <p className="flex justify-between border-b border-slate-50 pb-1.5"><strong>ESTABLISHED:</strong> <span>2000</span></p>
              <p className="flex justify-between border-b border-slate-50 pb-1.5"><strong>HQ / PLANT:</strong> <span>IDA Cherlapally, Hyd</span></p>
              <p className="flex justify-between border-b border-slate-50 pb-1.5"><strong>CERTIFICATE:</strong> <span>ISO 9001:2015</span></p>
              <p className="flex justify-between border-b border-slate-50 pb-1.5"><strong>LICENSE:</strong> <span>A Grade (33KV)</span></p>
              <p className="flex justify-between"><strong>OEM PARTNERS:</strong> <span>Yaskawa, ABB, Baumer</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="py-16 bg-[#eef2f7] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-[#0f4c81] font-bold text-xl mb-4 font-outfit flex items-center space-x-2">
              <span className="w-1.5 h-6 bg-[#0f4c81] rounded" />
              <span>Our Vision</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              To be the most trusted Progressive Channel Partner, the leading Service Provider, and the Ultimate Resource of Excellence for Electrical, Instrumentation, and Automation Needs in major projects that empower the Nation.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-[#0f4c81] font-bold text-xl mb-4 font-outfit flex items-center space-x-2">
              <span className="w-1.5 h-6 bg-[#0f4c81] rounded" />
              <span>Our Mission</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              To provide advanced, reliable Electrical, Instrumentation, and Control Products to our Customers with the price, performance, and service to meet and exceed their expectations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Awards & Achievements */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit mb-8 border-l-4 border-[#0f4c81] pl-3">
          Awards & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          {awards.map((award, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 p-5 rounded shadow-xs hover:border-[#2b6cb0] hover:shadow-sm transition-all flex items-start space-x-3"
            >
              <span className="text-[#3b82f6] font-bold shrink-0 mt-0.5">&bull;</span>
              <span className="text-slate-700 leading-relaxed">{award}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Executive Leadership / Management Team */}
      <section className="py-16 bg-[#eef2f7]/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0f4c81] font-bold text-2xl font-outfit mb-12 border-l-4 border-[#0f4c81] pl-3">
            Our Management Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-[#2b6cb0] transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-slate-900 font-bold text-lg font-outfit mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-[#2b6cb0] font-mono font-bold block mb-4">
                    {member.title}
                  </span>
                  <p className="text-xs text-slate-650 leading-relaxed font-sans">
                    {member.desc}
                  </p>
                </div>
                <span className="text-[9px] font-mono text-slate-400 mt-6 uppercase tracking-wider">
                  Nandini Enterprises &bull; Leadership
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
