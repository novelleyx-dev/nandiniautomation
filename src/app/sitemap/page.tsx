import Link from "next/link";

export default function SitemapPage() {
  const links = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Projects", url: "/projects" },
    { title: "Industries", url: "/industries" },
    { title: "Certifications", url: "/certifications" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <div className="bg-[#E8F0FA] min-h-screen text-slate-800 font-sans py-24">
      <div className="max-w-4xl mx-auto px-4 bg-white p-10 rounded-lg shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold font-outfit text-slate-900 mb-6">Sitemap</h1>
        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
          An overview of the main pages on the Nandini Enterprises website.
        </p>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.url} className="text-[#0f4c81] hover:underline font-medium text-lg">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
