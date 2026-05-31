import { notFound } from 'next/navigation';
import { SERVICES_DATA, ServiceDetails } from '@/lib/servicesData';
import ServicePageClient from '@/components/Service/ServicePageClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Map slugs to service keys in data dictionary
function getServiceDetails(slug: string): ServiceDetails | null {
  const normalizedSlug = slug.toLowerCase();
  
  if (normalizedSlug === 'panel-manufacturing') {
    return SERVICES_DATA['panel-manufacturing'];
  }
  if (
    normalizedSlug === 'industrial-automation' || 
    normalizedSlug === 'plc-programming' || 
    normalizedSlug === 'scada-systems' ||
    normalizedSlug === 'plc-scada'
  ) {
    return SERVICES_DATA['plc-scada'];
  }
  if (normalizedSlug === 'vfd-solutions') {
    return SERVICES_DATA['vfd-solutions'];
  }
  if (normalizedSlug === 'robotics') {
    return SERVICES_DATA['robotics'];
  }
  if (normalizedSlug === 'instrumentation') {
    return SERVICES_DATA['instrumentation'];
  }
  if (normalizedSlug === 'elevator-systems') {
    return SERVICES_DATA['elevator-systems'];
  }
  if (normalizedSlug === 'electrical-solutions') {
    return SERVICES_DATA['electrical-solutions'];
  }
  if (normalizedSlug === 'amc-services') {
    return SERVICES_DATA['amc-services'];
  }
  
  return null;
}

export async function generateStaticParams() {
  const slugs = [
    'panel-manufacturing',
    'industrial-automation',
    'scada-systems',
    'plc-programming',
    'robotics',
    'instrumentation',
    'elevator-systems',
    'electrical-solutions',
    'amc-services',
  ];
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceDetails(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-[#E8F0FA] min-h-screen text-slate-800 font-sans">
      
      {/* Service Header / Hero Section */}
      <div className="relative py-24 bg-white border-b border-slate-200 overflow-hidden">
        {/* Decorative blueprint grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-75 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#0f4c81] font-mono font-bold block">
              Engineering Division
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit">
              {service.title}
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              {service.subtitle}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="bg-[#E8F0FA] border border-slate-200 text-[10px] uppercase font-mono px-2.5 py-1 text-slate-600 rounded shadow-xs">
                Erection & ESE Certified
              </span>
              <span className="bg-[#E8F0FA] border border-slate-200 text-[10px] uppercase font-mono px-2.5 py-1 text-slate-600 rounded shadow-xs">
                ISO 9001:2015 Approved
              </span>
              <span className="bg-[#E8F0FA] border border-slate-200 text-[10px] uppercase font-mono px-2.5 py-1 text-slate-600 rounded shadow-xs">
                turnkey execution
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Client Panel */}
      <ServicePageClient service={service} />

    </div>
  );
}
