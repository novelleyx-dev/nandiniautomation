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
  if (normalizedSlug === 'vfd-solutions' || normalizedSlug === 'engineering-support') {
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
    'engineering-support',
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

  const getHeroImage = (slug: string) => {
    const images: Record<string, string> = {
      'panel-manufacturing': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'industrial-automation': 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80',
      'scada-systems': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      'plc-programming': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'vfd-solutions': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      'engineering-support': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      'robotics': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
      'instrumentation': 'https://images.unsplash.com/photo-1580983218765-f663cbefa512?auto=format&fit=crop&w=1200&q=80',
      'elevator-systems': 'https://images.unsplash.com/photo-1517420704952-d9f39740e38f?auto=format&fit=crop&w=1200&q=80',
      'electrical-solutions': 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
      'amc-services': 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80',
    };
    return images[slug.toLowerCase()] || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80';
  };

  return (
    <div className="bg-[#E8F0FA] min-h-screen text-slate-800 font-sans">
      
      {/* Service Header / Hero Section */}
      <div className="relative py-24 bg-white border-b border-slate-200 overflow-hidden">
        {/* Decorative blueprint grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-75 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
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
            <div className="hidden lg:block">
              <img 
                src={getHeroImage(slug)} 
                alt={service.title}
                className="w-full h-[350px] object-cover rounded-lg shadow-lg border border-slate-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Client Panel */}
      <ServicePageClient service={service} />

    </div>
  );
}
