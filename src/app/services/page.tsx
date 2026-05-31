import { getEntries } from '@/lib/cms';
import Link from 'next/link';

export default async function ServicesPage() {
  const services = getEntries('services');

  return (
    <div className="bg-[#f7f9fc] min-h-screen text-slate-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#0f4c81] font-mono font-bold block">
                B2B Solutions Matrix
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-outfit leading-tight">
                Engineering Divisions & Services
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-655">
                Nandini Enterprises offers a high-performance backup maintenance ecosystem. 
                We are equipped with advanced testing devices and custom diagnostic equipment.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0f4c81] to-[#2b6cb0] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
                alt="Automation Facility Operations" 
                className="relative rounded-lg shadow-xl object-cover w-full h-[280px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.slug} 
              className="bg-white border border-slate-200 hover:border-[#2b6cb0] rounded-lg p-8 flex flex-col justify-between hover:shadow-md transition-all group shadow-sm"
            >
              <div>
                <h2 className="text-[#0f4c81] font-bold text-xl font-outfit mb-3 group-hover:text-[#2b6cb0] transition-colors">
                  {service.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {service.overview}
                </p>
                
                {service.brands && (
                  <div className="mb-6">
                    <span className="text-[10px] font-mono text-slate-400 block mb-2 uppercase">Brand Deployments:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.brands.slice(0, 3).map((brand) => (
                        <span key={brand} className="bg-[#f7f9fc] px-2 py-0.5 rounded text-[9px] font-mono text-slate-600 border border-slate-250">
                          {brand}
                        </span>
                      ))}
                      {service.brands.length > 3 && (
                        <span className="text-[9px] font-mono text-slate-400 self-center">
                          +{service.brands.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono">
                <span className="text-slate-400 uppercase">24/7 SUPPORT AVAILABLE</span>
                <Link 
                  href={`/services/${service.slug}`} 
                  className="text-[#0f4c81] hover:text-[#2b6cb0] font-bold tracking-wider"
                >
                  FULL SPECS &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
