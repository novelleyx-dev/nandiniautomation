import { getEntries } from '@/lib/cms';
import Link from 'next/link';

export default async function ServicesPage() {
  const services = getEntries('services');

  return (
    <div className="bg-[#E8F0FA] min-h-screen text-slate-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-white border-b border-slate-200 overflow-hidden">
        {/* Advanced Tech Blueprint Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-6">
              <span className="inline-block border border-[var(--color-ne-blue-corp)] bg-blue-50/50 text-xs uppercase tracking-widest text-[var(--color-ne-blue-corp)] font-mono font-bold px-3 py-1 rounded">
                B2B Solutions Matrix
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-outfit leading-tight tracking-tight">
                Engineering Divisions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-ne-blue-corp)] to-[var(--color-ne-blue-steel)]">Services</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
                Nandini Enterprises offers a high-performance backup maintenance ecosystem. 
                We are equipped with advanced testing devices and custom diagnostic equipment.
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-ne-blue-corp)] to-[var(--color-ne-blue-steel)] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" 
                  alt="Automation Facility Operations" 
                  className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ne-blue-corp)]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest font-bold">SYSTEM ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.slug} 
              className="group relative bg-white border border-slate-200 rounded-xl p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Dynamic top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-ne-blue-corp)] to-[var(--color-ne-blue-steel)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-[var(--color-ne-blue-corp)] font-bold font-mono text-sm border border-blue-100 group-hover:bg-[var(--color-ne-blue-corp)] group-hover:text-white transition-colors duration-300">
                    0{index + 1}
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase bg-slate-50 px-2 py-1 rounded border border-slate-100">
                    Industrial Spec
                  </span>
                </div>
                
                <h2 className="text-[var(--color-ne-blue-corp)] font-bold text-xl font-outfit mb-3 group-hover:text-[var(--color-ne-blue-steel)] transition-colors">
                  {service.title}
                </h2>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  {service.overview}
                </p>
                
                {service.brands && (
                  <div className="mb-6">
                    <span className="text-[9px] font-mono text-slate-400 block mb-2 uppercase font-bold tracking-wider">Deployments & Partners:</span>
                    <div className="flex flex-wrap gap-2">
                      {service.brands.slice(0, 3).map((brand) => (
                        <span key={brand} className="bg-white px-2.5 py-1 rounded text-[10px] font-mono text-slate-600 border border-slate-200 shadow-sm group-hover:border-blue-200 transition-colors">
                          {brand}
                        </span>
                      ))}
                      {service.brands.length > 3 && (
                        <span className="text-[10px] font-mono text-slate-400 self-center font-medium">
                          +{service.brands.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono relative z-10">
                <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                  24/7 SUPPORT &rarr;
                </span>
                <Link 
                  href={`/services/${service.slug}`} 
                  className="inline-flex items-center justify-center bg-[var(--color-ne-blue-corp)] text-white hover:bg-[var(--color-ne-blue-steel)] px-4 py-2 rounded font-bold tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  FULL SPECS &rarr;
                </Link>
              </div>
              
              {/* Decorative background logo/number fade */}
              <div className="absolute -bottom-4 -right-4 text-9xl font-extrabold text-slate-50 font-outfit select-none z-0 group-hover:text-blue-50 transition-colors duration-500 opacity-50">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
