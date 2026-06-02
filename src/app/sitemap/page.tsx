import Link from "next/link";

export default function SitemapPage() {
  const sitemapData = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { 
      title: "Engineering Services & Capabilities", 
      url: "/services",
      children: [
        { title: "CPRI-Certified Panel Manufacturing", url: "/services/panel-manufacturing" },
        { title: "Industrial PLC & SCADA Integration", url: "/services/plc-scada" },
        { title: "YASKAWA VFD Solutions", url: "/services/vfd-solutions" },
        { title: "Robotics & Motion Control", url: "/services/robotics" },
        { title: "Instrumentation & Process Control", url: "/services/instrumentation" },
        { title: "Elevator Microprocessor Systems", url: "/services/elevator-systems" },
        { title: "High-Voltage Electrical Solutions", url: "/services/electrical-solutions" },
        { title: "AMC & Lifecycle Support", url: "/services/amc-services" }
      ]
    },
    { title: "Projects & Deployments", url: "/projects" },
    { title: "Industries Served", url: "/industries" },
    { title: "Quality & Certifications", url: "/certifications" },
    { title: "Contact & Reach", url: "/contact" },
  ];

  return (
    <div className="bg-[#E8F0FA] min-h-screen text-slate-800 font-sans py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white p-10 rounded-xl shadow-lg border border-slate-200 relative overflow-hidden">
          {/* Decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 pointer-events-none" />
          
          <div className="relative z-10 mb-10 border-b border-slate-100 pb-8">
            <span className="text-xs uppercase tracking-widest text-[#0f4c81] font-mono font-bold block mb-2">
              Architecture Overview
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-outfit text-slate-900 mb-4">Sitemap Directory</h1>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
              An organized structural map of the Nandini Enterprises digital portal. Easily navigate through our divisions, services, and corporate resources.
            </p>
          </div>

          <div className="relative z-10 pl-2 sm:pl-8 font-mono">
            {/* Root Node */}
            <div className="inline-flex items-center px-5 py-2.5 bg-[#0f4c81] text-white rounded-lg shadow-md font-bold uppercase tracking-widest text-xs mb-6 border border-[#0a3a64]">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Nandini Enterprises Root
            </div>

            <ul className="ml-6 space-y-6 pb-6 relative">
              {/* Main vertical line for root children */}
              <div className="absolute top-0 bottom-4 left-0 w-[3px] bg-slate-200" />
              
              {sitemapData.map((node, i) => (
                <li key={node.title} className="relative pl-10">
                  {/* Branch out */}
                  <div className="absolute top-5 left-0 w-10 h-[3px] bg-slate-200" />
                  
                  {/* Mask if last node to prevent the vertical line from going too far down */}
                  {i === sitemapData.length - 1 && (
                    <div className="absolute top-6 left-[-2px] bottom-[-24px] w-4 bg-white z-0" />
                  )}

                  <div className="relative z-10">
                    <Link href={node.url} className="inline-flex items-center px-4 py-2.5 bg-slate-50 border-2 border-slate-200 hover:border-[#0f4c81] rounded-lg text-slate-700 hover:text-[#0f4c81] transition-all font-semibold text-sm shadow-sm group">
                      <span className="w-2 h-2 bg-slate-300 rounded-full mr-3 group-hover:bg-[#0f4c81] transition-colors" />
                      {node.title}
                    </Link>
                  </div>

                  {node.children && (
                    <ul className="mt-5 ml-8 relative space-y-3 pb-2">
                      <div className="absolute top-0 bottom-4 left-0 w-px border-l-2 border-dashed border-slate-300" />
                      {node.children.map((child, j) => (
                        <li key={child.title} className="relative pl-8">
                          {/* Child branch out */}
                          <div className="absolute top-4 left-0 w-8 h-px border-t-2 border-dashed border-slate-300" />
                          
                          {/* Mask if last child */}
                          {j === node.children.length - 1 && (
                            <div className="absolute top-5 left-[-2px] bottom-[-16px] w-2 bg-white z-0" />
                          )}

                          <div className="relative z-10 py-0.5">
                            <Link href={child.url} className="inline-block text-[11px] uppercase tracking-wider font-sans font-bold text-slate-500 hover:text-white hover:bg-[#0f4c81] bg-white px-3 py-1.5 border border-slate-200 rounded shadow-xs hover:shadow-sm transition-all">
                              {child.title}
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
