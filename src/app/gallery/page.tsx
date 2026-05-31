'use client';

export default function GalleryPage() {
  const images = [
    { 
      title: "Plant Shop Floor Assembly", 
      category: "Fabrication", 
      size: "12,000 Sqft facility layout IDA Cherlapally",
      src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Double Hoisting VFD Panel Testing", 
      category: "Commissioning", 
      size: "Yaskawa A1000 configuration for crane sync",
      src: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "CPRI Short Circuit Verification", 
      category: "Compliance", 
      size: "Short circuit busbar assembly audit test check",
      src: "https://images.unsplash.com/photo-1581092162384-8987c17d4e26?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Indian Railways Simulator Test Rig", 
      category: "Defense & Rail", 
      size: "Ruggedized telemetry cabinet assembly logs",
      src: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "120 MLD Pump Station Control Desk", 
      category: "Water Treatment", 
      size: "Main SCADA display monitors loop monitoring",
      src: "https://images.unsplash.com/photo-1581091870627-77cf02a3a5a6?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Women operator CAD schematic layout", 
      category: "Stewardship / Seminar", 
      size: "CAD design training modules",
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-[#f7f9fc] min-h-screen text-slate-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#0f4c81] font-mono font-bold block">
                VISUAL RECORDINGS
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit leading-tight">
                Manufacturing & Site Operations Gallery
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Browse our IDA Cherlapally switchgear assembly plant, VFD testing bays, field erection projects, and educational seminars.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0f4c81] to-[#2b6cb0] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <img 
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=800&q=80" 
                alt="Engineering Team Seminar" 
                className="relative rounded-lg shadow-xl object-cover w-full h-[280px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-[#2b6cb0] transition-all flex flex-col justify-between group"
            >
              {/* Actual Image Block */}
              <div className="aspect-video relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 right-2 text-[8px] font-mono bg-white/90 text-slate-600 border border-slate-200 px-1 rounded uppercase tracking-widest shadow-xs">
                  REF: IMG_00{idx + 1}
                </span>
              </div>

              <div className="p-6 space-y-2">
                <span className="text-[10px] font-mono text-[#0f4c81] font-bold uppercase tracking-wider">
                  {img.category}
                </span>
                <h3 className="text-slate-900 font-bold text-base font-outfit">
                  {img.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {img.size}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
