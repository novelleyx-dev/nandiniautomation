import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts, RGB } from 'pdf-lib';

// ============================================================
// STATIC SITE DOCUMENTATION (page data, features, tech stack)
// ============================================================
const SITE_DOC = {
  company: {
    name: 'Nandini Enterprises',
    tagline: 'Industrial Automation Powerhouse',
    established: '1990s',
    location: 'Plot No. 49, Phase-III, IDA Cherlapally, Hyderabad, Telangana - 500051, India',
    phone: '+91-40-23190131',
    email: 'info@nandiniautomation.com',
    certifications: ['ISO 9001:2015', 'CPRI Certified', 'Grade-A Electrical License'],
    partners: ['Siemens', 'Yaskawa (Authorized Service Center)', 'ABB (Channel Partner)', 'Baumer (Authorized)', 'Yokogawa', 'Honeywell', 'WIKA', 'L&T', 'Crompton', 'Nidec'],
  },
  techStack: {
    framework: 'Next.js 16.2.6 (App Router, Webpack build)',
    language: 'TypeScript 6.x',
    styling: 'Tailwind CSS v4.x',
    animations: 'Framer Motion 12.x',
    icons: 'Lucide React 1.x',
    fonts: 'Inter + Outfit (Google Fonts, next/font)',
    stateManagement: 'React useState/useRef/useEffect hooks (no external store)',
    deployment: 'Vercel (serverless, Edge-capable)',
    repo: 'GitHub (novelleyx-dev/nandiniautomation)',
    nodeVersion: 'Node 20.x LTS',
    reactVersion: 'React 19.x',
  },
  colorSystem: {
    background: '#E8F0FA (global app background)',
    primaryBlue: '#0A3D91 (corporate deep royal blue)',
    steelBlue: '#1565C0 (section accent)',
    footerBg: '#0f172a (slate-900)',
    textPrimary: '#1e293b (slate-800)',
    textSecondary: '#475569 (slate-600)',
    accentGreen: '#10b981 (emerald-500, success states)',
  },
  pages: [
    {
      route: '/',
      title: 'Homepage (Main Landing Page)',
      file: 'src/app/page.tsx',
      purpose: 'The primary marketing page of the website. Designed to convert B2B industrial clients. Contains multiple sections stacked vertically.',
      sections: [
        'HeroSlideshow - Full-screen image carousel with 5 AI-generated industrial images, animated text overlay, slide indicators, and auto-advance every 5 seconds',
        'Trust Strip - Logos and certification badges: ISO 9001:2015, CPRI, Safety Standards, Partner logos',
        'Services Preview - Grid of 6 service cards with hover animations and CTA links',
        'Industries Grid - 8 industry sectors we serve: Steel, Cement, Oil & Gas, Power, Pharma, Water, Food, Mining',
        'Why Choose Us - 4 USP cards with floating stats: 500+ Projects, 30+ Years, 24/7 Support, ISO Certified',
        'Process Workflow - 4-step engineering process: Consultation > Design > Fabrication > Commissioning',
        'Projects Overview - Portfolio cards of major completed EPC projects',
        'Company Story - Founding history, growth timeline, and leadership values',
        'Partner Logos - Brand wall of authorized partners (Siemens, Yaskawa, ABB, etc.)',
        'Lead Capture Form - Dynamic RFQ (Request for Quotation) form that adapts fields based on selected service category',
      ],
    },
    {
      route: '/about',
      title: 'About Us / Executive Profile',
      file: 'src/app/about/page.tsx',
      purpose: 'Showcases the company history, leadership team, founding philosophy, and engineering credentials. Aimed at building trust with enterprise procurement teams.',
      sections: ['Company History & Founding Story', 'Leadership Profile Cards', 'Certifications & Awards', 'Manufacturing Facility Overview'],
    },
    {
      route: '/services',
      title: 'Services Overview',
      file: 'src/app/services/page.tsx',
      purpose: 'A listing page of all 6 main service categories offered by Nandini Enterprises. Each card links to a dedicated service deep-dive page.',
      sections: [
        'Advanced Industrial Automation Engineering',
        'Industrial Robotics Integration',
        'Precision Process Instrumentation',
        'High-Performance Electrical Systems',
        'Smart Elevator Solutions',
        'Advanced Electrical Control Panels',
      ],
    },
    {
      route: '/services/[slug]',
      title: 'Dynamic Service Detail Pages',
      file: 'src/app/services/[slug]/page.tsx + src/lib/servicesData.ts',
      purpose: 'Each service slug renders a 500+ word detailed deep-dive page. Data is sourced from servicesData.ts which contains rich structured JSON objects per service.',
      structure: 'Stats cards > Overview paragraphs > Before/After Challenge > 4-step Workflow > Architecture > Industries > Case Study > Tech Ecosystem > Quality Assurance > Safety Compliance > Maintenance AMC > FAQs',
      dataSource: 'src/lib/servicesData.ts - contains SERVICES_DATA record with full service documentation objects',
      slugs: ['panel-manufacturing', 'plc-scada', 'vfd-solutions', 'robotics', 'elevator-solutions', 'instrumentation'],
    },
    {
      route: '/services/industrial-automation',
      title: 'Industrial Automation Service Page',
      file: 'src/app/services/industrial-automation/page.tsx',
      purpose: 'Standalone page for advanced industrial automation engineering. Independent of the dynamic slug system with custom layout.',
    },
    {
      route: '/services/instrumentation',
      title: 'Precision Process Instrumentation',
      file: 'src/app/services/instrumentation/page.tsx',
      purpose: 'Coverage of pressure transmitters, flow meters, temperature sensors, and calibration services.',
    },
    {
      route: '/services/electrical-systems',
      title: 'High-Performance Electrical Systems',
      file: 'src/app/services/electrical-systems/page.tsx',
      purpose: 'Electrical design, installation, testing, and maintenance for industrial facilities.',
    },
    {
      route: '/services/robotics',
      title: 'Industrial Robotics Integration',
      file: 'src/app/services/robotics/page.tsx',
      purpose: 'Yaskawa Motoman robot arm integration, pick-and-place, palletizing, and welding automation.',
    },
    {
      route: '/services/elevator-solutions',
      title: 'Smart Elevator & Lift Solutions',
      file: 'src/app/services/elevator-solutions/page.tsx',
      purpose: 'VFD-driven passenger and goods lifts, modernization of existing lifts, and Yaskawa L1000A elevator drives.',
    },
    {
      route: '/services/control-panels',
      title: 'Advanced Electrical Control Panels',
      file: 'src/app/services/control-panels/page.tsx',
      purpose: 'CPRI-certified PCC/MCC panels, busbar assembly, form-4b segregation, FAT testing.',
    },
    {
      route: '/industries',
      title: 'Industries We Serve',
      file: 'src/app/industries/page.tsx',
      purpose: 'Dedicated page listing 8 industrial sectors with specific pain points and Nandini solutions per sector.',
      industries: ['Steel & Metals', 'Cement & Mining', 'Oil & Gas Refineries', 'Power Generation & Utilities', 'Pharmaceutical & Cleanrooms', 'Water Treatment & Municipal', 'Food & Beverage Processing', 'Textile & Garment Mills'],
    },
    {
      route: '/projects',
      title: 'EPC Projects Portfolio',
      file: 'src/app/projects/page.tsx',
      purpose: 'A gallery of 500+ completed large-scale EPC (Engineering Procurement & Construction) projects. Includes steel plants, cement factories, water treatment, oil refineries, pharma labs. Each card has client details, scope, and outcome.',
    },
    {
      route: '/contact',
      title: 'Contact & RFQ Submission',
      file: 'src/app/contact/page.tsx',
      purpose: 'Primary lead capture page. Contains a dynamic form, company contact details, embedded map location, and direct WhatsApp integration.',
      formFields: ['Full Name', 'Company Name', 'Email Address', 'Phone Number', 'Service Category (dropdown)', 'Project Description', 'Expected Budget Range', 'Timeline'],
    },
    {
      route: '/gallery',
      title: 'Manufacturing Facility Gallery',
      file: 'src/app/gallery/page.tsx',
      purpose: 'Photo gallery of the Cherlapally manufacturing facility, panel assembly floor, testing rigs, and completed installations at client sites.',
    },
    {
      route: '/certifications',
      title: 'Compliance & Certifications',
      file: 'src/app/certifications/page.tsx',
      purpose: 'Displays all active certifications, licenses, and compliance documents: ISO 9001:2015, CPRI test certificates, Grade-A Electrical License, and partner authorization letters.',
    },
    {
      route: '/knowledge-center',
      title: 'White Papers & Technical Articles',
      file: 'src/app/knowledge-center/page.tsx',
      purpose: 'Technical knowledge hub with white papers, engineering guides, and industry articles aimed at informing B2B engineering buyers.',
    },
    {
      route: '/products',
      title: 'Products Catalogue',
      file: 'src/app/products/page.tsx',
      purpose: 'Catalogue of products available for procurement: VFDs, relays, sensors, cables, switchgears, HMI panels, encoders.',
    },
  ],
  features: [
    {
      index: 'F-01',
      name: 'Hero Slideshow with Auto-Advance',
      file: 'src/components/Home/HeroSlideshow.tsx',
      trigger: 'Rendered automatically on homepage mount',
      description: 'A full-screen image carousel with 5 AI-generated industrial background images. Features: auto-advance every 5 seconds, manual dot indicator navigation, smooth CSS opacity transitions, gradient overlay for text legibility, animated engineering text heading and sub-headline.',
      implementation: 'Uses React useState for activeSlide index and useEffect for setInterval auto-advance. Images are stored in /public/images/ as imported Next.js Image components. Background-size: cover with crossfade effect.',
      dependencies: 'next/image, React hooks',
    },
    {
      index: 'F-02',
      name: 'Global Right-Click Protection',
      file: 'src/components/Layout/DisableRightClick.tsx',
      trigger: 'Mounts globally in RootLayout via layout.tsx',
      description: 'A client component that attaches a document-level contextmenu event listener to call preventDefault() on all right-click events across the entire website. Prevents inspection of source code, image saving, and link copying by regular visitors.',
      implementation: 'useEffect attaches document.addEventListener("contextmenu", handler) on mount. Cleanup removes the listener on unmount. The component renders null (no visible UI).',
      note: 'EXCEPTION: The Sitemap link in the footer uses e.stopPropagation() to bypass this listener for the confidential PDF export trigger.',
      dependencies: 'React (useEffect)',
    },
    {
      index: 'F-03',
      name: 'Confidential Double Right-Click PDF Export [HIDDEN]',
      file: 'src/components/Layout/Footer.tsx + src/app/api/export-source/route.ts',
      trigger: 'Double right-click (within 800ms) on the "Sitemap" link in the footer',
      description: 'A completely hidden, confidential feature. When the Sitemap link is double-right-clicked within 800ms, it: (1) Shows a floating "COMPILING..." loader toast, (2) Captures a JPEG screenshot of the current page using html2canvas at 0.5 scale, (3) POSTs the screenshot + currentUrl to the /api/export-source backend API, (4) The API generates a multi-page dark-themed PDF using pdf-lib containing all site documentation, source code, feature index, page data, and directory structure, (5) The PDF is streamed back and auto-downloaded as Nandini_Source_Export.pdf.',
      implementation: 'Footer.tsx tracks lastRightClickRef timestamp. The API route uses pdf-lib (pure JavaScript PDF library, no filesystem font dependencies) to generate the PDF server-side. StandardFonts from pdf-lib are base64 embedded - zero external file dependencies, works on Vercel serverless.',
      security: 'Right-click globally disabled. Only this one link bypasses protection via stopPropagation. The PDF trigger is invisible to any external party.',
      dependencies: 'html2canvas (client), pdf-lib (server), React useState/useRef',
    },
    {
      index: 'F-04',
      name: 'Internal Knowledge Navigation Chatbot',
      file: 'src/components/Assistant/KnowledgeAssistant.tsx',
      trigger: 'Click the chat bubble icon (bottom right, above WhatsApp button)',
      description: 'A floating chat assistant for internal navigation and client support. Responds to keyword queries with links to relevant pages. Handles queries about: projects, services, automation, panels, VFD, contact, quote, about, company, industries, sectors.',
      implementation: 'Pure React state management. Uses a rule-based keyword matching system (no external AI API). Messages array stores conversation history. generateResponse() function matches lowercase query against keyword sets and returns prebuilt response objects with optional navigation links. 600ms simulated thinking delay.',
      uiDetails: 'Fixed bottom-24 right-6 z-50. Chat window: 340px wide, 480px tall, white bg with E8F0FA message area. FAB button: white circle with chat icon. Uses CSS gradient header from corporate blue to steel blue.',
      dependencies: 'React hooks, next/link',
    },
    {
      index: 'F-05',
      name: 'Dynamic Lead Capture RFQ Form',
      file: 'src/app/page.tsx (embedded in homepage) + src/app/contact/page.tsx',
      trigger: 'User scrolls to form section on homepage or visits /contact',
      description: 'An adaptive multi-field form that changes available fields based on selected service category. Includes validation, field groups, and a professional submit CTA. Form covers: service type, project description, timeline, budget range, contact details.',
      implementation: 'React controlled components with useState for form state. Service category selector triggers conditional field rendering.',
      dependencies: 'React hooks',
    },
    {
      index: 'F-06',
      name: 'WhatsApp Floating Action Button',
      file: 'src/components/Layout/Footer.tsx',
      trigger: 'Always visible (fixed bottom-6 right-6)',
      description: 'A green floating action button fixed to the bottom-right of every page. Opens WhatsApp chat with the company number (+91-40-23190131). On hover, shows a tooltip "Talk to an Engineer". Smooth scale-up animation on hover.',
      implementation: 'Anchor tag with href="https://wa.me/914023190131", target="_blank". CSS hover:scale-110 transition. Tooltip span with opacity-0 group-hover:opacity-100 transition.',
      dependencies: 'None (pure HTML/CSS)',
    },
    {
      index: 'F-07',
      name: 'Sticky Header with Navigation',
      file: 'src/components/Layout/Header.tsx',
      trigger: 'Always visible, sticky top-0 z-50',
      description: 'A sticky enterprise navigation header. Contains: company logo/wordmark, main nav links (Home, Services dropdown, Projects, Industries, Resources, Contact), and a "Request Quote" CTA button. On mobile, collapses to hamburger menu.',
      implementation: 'React component with mobile menu state. useEffect listens to window scroll to add shadow on scroll. Services link has a mega-dropdown menu with all 6 service categories.',
      dependencies: 'React hooks, next/link, next/navigation',
    },
    {
      index: 'F-08',
      name: 'Animated Statistics Counters',
      file: 'src/app/page.tsx (Why Choose Us section)',
      trigger: 'Element scrolls into viewport',
      description: 'Animated number counter cards that count up from 0 to target values when visible. Stats: 500+ Projects, 30+ Years Experience, 24/7 Support, ISO 9001:2015.',
      implementation: 'react-countup library with react-intersection-observer to trigger counting only when the element enters the viewport.',
      dependencies: 'react-countup, react-intersection-observer',
    },
    {
      index: 'F-09',
      name: 'Framer Motion Page Animations',
      file: 'src/app/page.tsx (multiple sections)',
      trigger: 'Page load and scroll',
      description: 'Section cards and elements animate in with fade-up, stagger, and scale effects using Framer Motion. Industry cards, service cards, and process steps all have entrance animations.',
      implementation: 'motion.div with initial/animate/transition props. whileInView mode triggers animations when element enters viewport. Stagger children using variants with staggerChildren delay.',
      dependencies: 'framer-motion',
    },
    {
      index: 'F-10',
      name: 'Dynamic Service Detail Pages (SSG)',
      file: 'src/app/services/[slug]/page.tsx',
      trigger: 'Route visit e.g. /services/panel-manufacturing',
      description: 'Statically pre-generated service pages at build time using generateStaticParams. Each page pulls complete structured data from servicesData.ts. Data includes: title, subtitle, stats, overview paragraphs, challenge case, 4-step workflow, architecture, industries, full case study, tech ecosystem, QA process, safety standards, maintenance AMC, downloadable docs, and 8 FAQs.',
      implementation: 'Next.js App Router generateStaticParams() exports all slugs at build time. Page component receives params.slug, fetches from SERVICES_DATA record, renders ServicePageClient component with all data.',
      dependencies: 'src/lib/servicesData.ts, src/components/Service/ServicePageClient.tsx',
    },
    {
      index: 'F-11',
      name: 'Projects Portfolio Gallery with AI Images',
      file: 'src/app/projects/page.tsx',
      trigger: 'User visits /projects',
      description: 'An image gallery grid of completed large-scale EPC projects. Project types: Steel Plants, Cement Factories, Oil Refineries, Water Treatment, Pharma Labs. Images are AI-generated industrial scenes stored as artifacts.',
      implementation: 'Static page with Next.js Image components. Cards have hover overlay effects, project title, scope summary, and industry tag badge.',
      dependencies: 'next/image',
    },
    {
      index: 'F-12',
      name: 'SEO Metadata & OpenGraph',
      file: 'src/app/layout.tsx',
      trigger: 'Server-side rendered on every page request',
      description: 'Root layout exports Next.js Metadata object with: full title, meta description, keywords array, OpenGraph title/description/url/siteName/locale/type, and robots directives (index: true, follow: true).',
      implementation: 'Next.js App Router built-in Metadata API. Exported from layout.tsx. Each sub-page can override with its own exported metadata object.',
      dependencies: 'Next.js Metadata API',
    },
  ],
  components: [
    { name: 'Header', path: 'src/components/Layout/Header.tsx', type: 'Client Component', description: 'Sticky navigation header with mobile menu and service dropdown' },
    { name: 'Footer', path: 'src/components/Layout/Footer.tsx', type: 'Client Component', description: 'Multi-column footer with partner logos, links, WhatsApp FAB, and hidden PDF export trigger' },
    { name: 'DisableRightClick', path: 'src/components/Layout/DisableRightClick.tsx', type: 'Client Component', description: 'Global right-click prevention via document event listener. Renders null.' },
    { name: 'KnowledgeAssistant', path: 'src/components/Assistant/KnowledgeAssistant.tsx', type: 'Client Component', description: 'Floating chat assistant with keyword-based navigation responses' },
    { name: 'HeroSlideshow', path: 'src/components/Home/HeroSlideshow.tsx', type: 'Client Component', description: 'Full-screen auto-advance image carousel for homepage hero section' },
    { name: 'ServicePageClient', path: 'src/components/Service/ServicePageClient.tsx', type: 'Client Component', description: 'Rich service detail page renderer consuming ServiceDetails data objects' },
  ],
  dataFiles: [
    { name: 'servicesData.ts', path: 'src/lib/servicesData.ts', description: 'Master data file containing SERVICES_DATA record with full structured documentation for 6 service categories. Each entry contains: slug, title, subtitle, stats[4], overviewParagraphs[4], challenges{before,after,scenario}, workflow[4 steps], architectureDesc, architectureDetails[4], industries[3], caseStudy, techEcosystem[3], qualityAssurance[4], safetyCompliance[3], maintenanceAMC[4], docs[3], faqs[8].' },
    { name: 'cms.ts', path: 'src/lib/cms.ts', description: 'Content management utility functions for fetching structured content data' },
    { name: 'data.ts', path: 'src/lib/data.ts', description: 'General site-wide data constants and utility data structures' },
  ],
  apiRoutes: [
    { route: '/api/export-source', method: 'POST', file: 'src/app/api/export-source/route.ts', description: 'Highly confidential. Accepts screenshot (base64 JPEG) and currentUrl. Generates comprehensive dark-themed PDF using pdf-lib. Returns PDF stream.' },
  ],
  styling: {
    globalCSS: 'src/app/globals.css',
    approach: 'Tailwind CSS v4.x utility-first, augmented with CSS custom properties for color tokens',
    fonts: 'Inter (--font-inter, body text) + Outfit (--font-outfit, headings)',
    customProperties: ['--color-ne-blue-corp: #0A3D91', '--color-ne-blue-steel: #1565C0', '--color-ne-blue-electric: #1E88E5'],
    bodyBackground: 'bg-[#E8F0FA] - a light powder-blue corporate theme',
    footerBackground: 'bg-slate-900 (#0f172a)',
  },
  deployment: {
    platform: 'Vercel',
    buildCommand: 'next build --webpack',
    outputType: 'Static (SSG) + Serverless functions for API routes',
    domain: 'nandiniautomation.vercel.app',
    repo: 'github.com/novelleyx-dev/nandiniautomation',
    branch: 'main',
    envVars: 'None required currently',
    caveats: [
      'pdf-lib is used (NOT pdfkit) because Vercel serverless cannot access pdfkit AFM font files at runtime',
      'src/fonts/ contains bundled TTF files as fallback; outputFileTracingIncludes configured in next.config.mjs',
      'html2canvas screenshot is compressed to 0.5 scale JPEG to stay under Vercel 4.5MB payload limit',
    ],
  },
  knownIssues: [
    'pdfkit causes Helvetica.afm ENOENT on Vercel serverless - FIXED by migrating to pdf-lib',
    'Buffer type mismatch in Response constructor - FIXED by wrapping in Buffer.from()',
    'html2canvas payload too large at scale:1 PNG - FIXED by scale:0.5 JPEG 0.6 quality',
    'outputFileTracingIncludes was in experimental block - FIXED by moving to root level in next.config.mjs',
    'Footer was Server Component blocking useState - FIXED by adding use client directive',
  ],
};

// ============================================================
// COLORS (dark theme)
// ============================================================
const C = {
  pageBg: rgb(0.04, 0.06, 0.12),        // Deep navy background
  cardBg: rgb(0.08, 0.11, 0.19),         // Card background
  borderLine: rgb(0.15, 0.22, 0.38),     // Subtle border
  headingWhite: rgb(0.95, 0.97, 1.0),    // Near-white headings
  bodyText: rgb(0.75, 0.80, 0.90),       // Body text
  mutedText: rgb(0.45, 0.52, 0.65),      // Muted/meta text
  accentBlue: rgb(0.2, 0.55, 1.0),       // Primary blue accent
  accentCyan: rgb(0.0, 0.82, 0.98),      // Cyan accent
  accentGreen: rgb(0.2, 0.85, 0.5),      // Green success
  accentYellow: rgb(1.0, 0.80, 0.1),     // Yellow warning/highlight
  accentOrange: rgb(1.0, 0.5, 0.1),      // Orange for F-numbers
  accentRed: rgb(0.95, 0.25, 0.25),      // Red for warnings
  codeText: rgb(0.5, 0.95, 0.65),        // Code green
  codeBg: rgb(0.05, 0.09, 0.16),         // Code block bg
};

// ============================================================
// PDF RENDERER CLASS
// ============================================================
class DarkPDFRenderer {
  pdfDoc: PDFDocument;
  fontBold: any;
  fontRegular: any;
  fontMono: any;
  currentPage: any;
  y: number;
  pageNum: number;
  readonly PAGE_W = 595;
  readonly PAGE_H = 842;
  readonly MARGIN = 45;
  readonly CONTENT_W: number;
  readonly LINE_H = 11;

  constructor(pdfDoc: PDFDocument, fontBold: any, fontRegular: any, fontMono: any) {
    this.pdfDoc = pdfDoc;
    this.fontBold = fontBold;
    this.fontRegular = fontRegular;
    this.fontMono = fontMono;
    this.currentPage = null;
    this.y = 0;
    this.pageNum = 0;
    this.CONTENT_W = this.PAGE_W - this.MARGIN * 2;
  }

  newPage(fillBg = true) {
    this.currentPage = this.pdfDoc.addPage([this.PAGE_W, this.PAGE_H]);
    this.pageNum++;
    this.y = this.PAGE_H - this.MARGIN;
    if (fillBg) {
      // Dark background
      this.currentPage.drawRectangle({
        x: 0, y: 0,
        width: this.PAGE_W, height: this.PAGE_H,
        color: C.pageBg,
      });
      // Subtle top accent bar
      this.currentPage.drawRectangle({
        x: 0, y: this.PAGE_H - 3,
        width: this.PAGE_W, height: 3,
        color: C.accentBlue,
      });
      // Page number
      this.currentPage.drawText(`${this.pageNum}`, {
        x: this.PAGE_W - this.MARGIN,
        y: 18,
        font: this.fontRegular,
        size: 8,
        color: C.mutedText,
      });
      // Footer line
      this.currentPage.drawRectangle({
        x: this.MARGIN, y: 28,
        width: this.CONTENT_W, height: 0.5,
        color: C.borderLine,
      });
      this.currentPage.drawText('NANDINI ENTERPRISES - INTERNAL CONFIDENTIAL TECHNICAL DOCUMENT', {
        x: this.MARGIN, y: 18,
        font: this.fontRegular,
        size: 6,
        color: C.mutedText,
      });
    }
    return this;
  }

  checkY(neededSpace = 20) {
    if (this.y < this.MARGIN + 40 + neededSpace) {
      this.newPage();
    }
  }

  drawRect(x: number, y: number, w: number, h: number, color: RGB) {
    this.currentPage.drawRectangle({ x, y, width: w, height: h, color });
  }

  hRule(color = C.borderLine) {
    this.checkY(4);
    this.currentPage.drawRectangle({
      x: this.MARGIN, y: this.y,
      width: this.CONTENT_W, height: 0.5,
      color,
    });
    this.y -= 8;
  }

  text(str: string, opts: {
    size?: number; color?: RGB; font?: any; x?: number; maxWidth?: number;
  } = {}) {
    const size = opts.size ?? 9;
    const color = opts.color ?? C.bodyText;
    const font = opts.font ?? this.fontRegular;
    const x = opts.x ?? this.MARGIN;
    const maxWidth = opts.maxWidth ?? this.CONTENT_W;
    const lineH = size * 1.5;

    this.checkY(lineH + 2);
    const clean = sanitize(str).slice(0, 600);
    if (!clean) return;

    // Word-wrap
    const words = clean.split(' ');
    let line = '';
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      const w = font.widthOfTextAtSize(test, size);
      if (w > maxWidth && line !== '') {
        this.checkY(lineH + 2);
        this.currentPage.drawText(line, { x, y: this.y, font, size, color });
        this.y -= lineH;
        line = word;
      } else {
        line = test;
      }
    }
    if (line) {
      this.checkY(lineH + 2);
      this.currentPage.drawText(line, { x, y: this.y, font, size, color });
      this.y -= lineH;
    }
  }

  h1(str: string) {
    this.checkY(28);
    this.currentPage.drawRectangle({ x: this.MARGIN, y: this.y - 2, width: this.CONTENT_W, height: 24, color: C.cardBg });
    this.currentPage.drawRectangle({ x: this.MARGIN, y: this.y - 2, width: 4, height: 24, color: C.accentBlue });
    this.currentPage.drawText(sanitize(str).slice(0, 80), {
      x: this.MARGIN + 10, y: this.y + 6,
      font: this.fontBold, size: 15, color: C.headingWhite,
    });
    this.y -= 30;
  }

  h2(str: string, color = C.accentCyan) {
    this.checkY(20);
    this.currentPage.drawText(sanitize(str).slice(0, 100), {
      x: this.MARGIN, y: this.y,
      font: this.fontBold, size: 11, color,
    });
    this.y -= 6;
    this.currentPage.drawRectangle({ x: this.MARGIN, y: this.y, width: 60, height: 1, color });
    this.y -= 10;
  }

  h3(str: string, color = C.accentBlue) {
    this.checkY(16);
    this.currentPage.drawText(sanitize(str).slice(0, 100), {
      x: this.MARGIN, y: this.y,
      font: this.fontBold, size: 9.5, color,
    });
    this.y -= 13;
  }

  badge(label: string, color = C.accentBlue) {
    this.checkY(14);
    const w = Math.min(this.fontBold.widthOfTextAtSize(sanitize(label), 7) + 10, 200);
    this.currentPage.drawRectangle({ x: this.MARGIN, y: this.y - 3, width: w, height: 12, color, opacity: 0.2 });
    this.currentPage.drawText(sanitize(label).slice(0, 40), {
      x: this.MARGIN + 5, y: this.y,
      font: this.fontBold, size: 7, color,
    });
    this.y -= 14;
  }

  bullet(str: string, indent = 0, bulletColor = C.accentBlue) {
    const x = this.MARGIN + indent;
    const maxW = this.CONTENT_W - indent - 10;
    const lineH = 10;
    this.checkY(lineH + 2);
    this.currentPage.drawCircle({ x: x + 3, y: this.y + 3, size: 2, color: bulletColor });
    // text after bullet
    const clean = sanitize(str).slice(0, 400);
    const words = clean.split(' ');
    let line = '';
    let firstLine = true;
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      const tw = this.fontRegular.widthOfTextAtSize(test, 8.5);
      if (tw > maxW && line !== '') {
        this.checkY(lineH + 2);
        this.currentPage.drawText(line, {
          x: x + 10, y: this.y + (firstLine ? 0 : 0),
          font: this.fontRegular, size: 8.5, color: C.bodyText,
        });
        this.y -= lineH;
        firstLine = false;
        line = word;
      } else {
        line = test;
      }
    }
    if (line) {
      this.checkY(lineH + 2);
      this.currentPage.drawText(line, {
        x: x + 10, y: this.y,
        font: this.fontRegular, size: 8.5, color: C.bodyText,
      });
      this.y -= lineH;
    }
  }

  codeBlock(lines: string[]) {
    const lineH = 9;
    const blockH = Math.min(lines.length * lineH + 10, 300);
    this.checkY(blockH);
    this.currentPage.drawRectangle({
      x: this.MARGIN, y: this.y - blockH + 10,
      width: this.CONTENT_W, height: blockH,
      color: C.codeBg,
    });
    this.currentPage.drawRectangle({
      x: this.MARGIN, y: this.y - blockH + 10,
      width: 2, height: blockH,
      color: C.accentGreen,
    });
    let codeY = this.y;
    for (const line of lines.slice(0, 30)) {
      if (codeY < this.MARGIN + 40) break;
      const clean = sanitize(line).slice(0, 120);
      if (clean) {
        this.currentPage.drawText(clean, {
          x: this.MARGIN + 8, y: codeY - 2,
          font: this.fontMono, size: 7, color: C.codeText,
        });
      }
      codeY -= lineH;
    }
    this.y = codeY;
    this.y -= 6;
  }

  kvRow(key: string, value: string) {
    this.checkY(12);
    const kw = 130;
    this.currentPage.drawText(sanitize(key).slice(0, 30) + ':', {
      x: this.MARGIN, y: this.y,
      font: this.fontBold, size: 8, color: C.accentBlue,
    });
    const clean = sanitize(value).slice(0, 200);
    const words = clean.split(' ');
    let line = '';
    let first = true;
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (this.fontRegular.widthOfTextAtSize(test, 8) > (this.CONTENT_W - kw) && line !== '') {
        if (first) {
          this.currentPage.drawText(line, { x: this.MARGIN + kw, y: this.y, font: this.fontRegular, size: 8, color: C.bodyText });
          first = false;
        } else {
          this.currentPage.drawText(line, { x: this.MARGIN + kw, y: this.y, font: this.fontRegular, size: 8, color: C.bodyText });
        }
        this.y -= 10;
        line = word;
      } else {
        line = test;
      }
    }
    if (line) {
      this.currentPage.drawText(line, { x: this.MARGIN + kw, y: this.y, font: this.fontRegular, size: 8, color: C.bodyText });
    }
    this.y -= 11;
  }

  sectionDivider(sectionNum: string, title: string) {
    this.newPage();
    // Full-width accent banner
    this.currentPage.drawRectangle({ x: 0, y: this.PAGE_H - 50, width: this.PAGE_W, height: 50, color: C.cardBg });
    this.currentPage.drawRectangle({ x: 0, y: this.PAGE_H - 53, width: this.PAGE_W, height: 3, color: C.accentBlue });
    this.currentPage.drawText(sectionNum, {
      x: this.MARGIN, y: this.PAGE_H - 32,
      font: this.fontBold, size: 11, color: C.accentBlue,
    });
    this.currentPage.drawText(sanitize(title).slice(0, 80), {
      x: this.MARGIN + 55, y: this.PAGE_H - 32,
      font: this.fontBold, size: 14, color: C.headingWhite,
    });
    this.y = this.PAGE_H - 70;
  }

  gap(n = 1) { this.y -= 8 * n; }
}

function sanitize(str: string): string {
  if (!str) return '';
  return str
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u2013|\u2014/g, '-')
    .replace(/\u2022/g, '*')
    .replace(/\u00A0/g, ' ')
    .replace(/[^\x20-\x7E]/g, '?')
    .replace(/\r/g, '');
}

// ============================================================
// MAIN API HANDLER
// ============================================================
export async function POST(req: NextRequest) {
  try {
    const { screenshot, currentUrl } = await req.json();

    const pdfDoc = await PDFDocument.create();
    pdfDoc.setTitle('Nandini Enterprises - Internal Technical Documentation');
    pdfDoc.setAuthor('Nandini Enterprises Engineering Team');
    pdfDoc.setSubject('HIGHLY CONFIDENTIAL - Internal Source & Site Audit');
    pdfDoc.setCreator('Automated Export System v3.0');
    pdfDoc.setCreationDate(new Date());

    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontMono = await pdfDoc.embedFont(StandardFonts.Courier);

    const r = new DarkPDFRenderer(pdfDoc, fontBold, fontRegular, fontMono);

    // ============================================================
    // COVER PAGE
    // ============================================================
    r.newPage();
    // Large title block
    r.currentPage.drawRectangle({ x: 0, y: r.PAGE_H - 240, width: r.PAGE_W, height: 240, color: C.cardBg });
    r.currentPage.drawRectangle({ x: 0, y: r.PAGE_H - 3, width: r.PAGE_W, height: 3, color: C.accentBlue });
    r.currentPage.drawRectangle({ x: 0, y: r.PAGE_H - 243, width: r.PAGE_W, height: 3, color: C.accentBlue });
    r.currentPage.drawRectangle({ x: r.MARGIN, y: r.PAGE_H - 90, width: 5, height: 60, color: C.accentBlue });

    r.currentPage.drawText('NANDINI ENTERPRISES', {
      x: r.MARGIN + 18, y: r.PAGE_H - 75,
      font: fontBold, size: 26, color: C.headingWhite,
    });
    r.currentPage.drawText('INTERNAL TECHNICAL DOCUMENTATION & SITE AUDIT REPORT', {
      x: r.MARGIN + 18, y: r.PAGE_H - 100,
      font: fontBold, size: 11, color: C.accentCyan,
    });
    r.currentPage.drawText('Industrial Automation Powerhouse | Hyderabad, India', {
      x: r.MARGIN + 18, y: r.PAGE_H - 118,
      font: fontRegular, size: 9, color: C.mutedText,
    });

    // Classification banner
    r.currentPage.drawRectangle({ x: r.MARGIN, y: r.PAGE_H - 165, width: r.CONTENT_W, height: 28, color: rgb(0.4, 0.05, 0.05) });
    r.currentPage.drawText('HIGHLY CONFIDENTIAL - FOR INTERNAL ENGINEERING TEAM USE ONLY', {
      x: r.MARGIN + 8, y: r.PAGE_H - 149,
      font: fontBold, size: 10, color: rgb(1, 0.7, 0.7),
    });
    r.currentPage.drawText('DO NOT DISTRIBUTE - NOT FOR CLIENT VISIBILITY', {
      x: r.MARGIN + 8, y: r.PAGE_H - 162,
      font: fontRegular, size: 8, color: rgb(0.9, 0.5, 0.5),
    });

    // Meta info
    r.currentPage.drawText(`Export Generated: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`, {
      x: r.MARGIN + 18, y: r.PAGE_H - 200,
      font: fontRegular, size: 8.5, color: C.mutedText,
    });
    r.currentPage.drawText(`Triggered From: ${currentUrl || 'Unknown'}`, {
      x: r.MARGIN + 18, y: r.PAGE_H - 213,
      font: fontRegular, size: 8.5, color: C.mutedText,
    });
    r.currentPage.drawText('Purpose: Complete site recovery, onboarding, and AI pricing analysis reference', {
      x: r.MARGIN + 18, y: r.PAGE_H - 226,
      font: fontRegular, size: 8.5, color: C.mutedText,
    });

    r.y = r.PAGE_H - 270;

    // Screenshot
    if (screenshot) {
      try {
        const base64Data = screenshot.replace(/^data:image\/\w+;base64,/, '');
        const imgBuf = Buffer.from(base64Data, 'base64');
        let img;
        if (screenshot.startsWith('data:image/jpeg') || screenshot.startsWith('data:image/jpg')) {
          img = await pdfDoc.embedJpg(imgBuf);
        } else {
          img = await pdfDoc.embedPng(imgBuf);
        }
        const scale = Math.min(r.CONTENT_W / img.width, 260 / img.height);
        const imgW = img.width * scale;
        const imgH = img.height * scale;
        r.currentPage.drawText('LIVE PAGE SCREENSHOT AT TIME OF EXPORT:', {
          x: r.MARGIN, y: r.y,
          font: fontBold, size: 9, color: C.accentBlue,
        });
        r.y -= 8;
        r.currentPage.drawRectangle({ x: r.MARGIN - 2, y: r.y - imgH - 2, width: imgW + 4, height: imgH + 4, color: C.borderLine });
        r.currentPage.drawImage(img, { x: r.MARGIN, y: r.y - imgH, width: imgW, height: imgH });
        r.y -= imgH + 16;
      } catch (e) {
        r.text('Screenshot could not be embedded.', { color: C.mutedText });
      }
    }

    // ============================================================
    // TABLE OF CONTENTS
    // ============================================================
    r.newPage();
    r.h1('TABLE OF CONTENTS');
    r.gap();

    const toc = [
      { num: 'SEC 1', title: 'Company Overview & Profile', sub: 'Company facts, contacts, certifications, authorized partners' },
      { num: 'SEC 2', title: 'Technology Stack & Architecture', sub: 'Framework, language, libraries, deployment platform' },
      { num: 'SEC 3', title: 'Color System & Design Tokens', sub: 'Global CSS variables, color palette, typography' },
      { num: 'SEC 4', title: 'Site Pages Documentation', sub: 'All routes, purposes, sections, form fields' },
      { num: 'SEC 5', title: 'Feature Index & Implementation Guide', sub: 'F-01 through F-12: all active features with trigger, code, and logic' },
      { num: 'SEC 6', title: 'Component Library Reference', sub: 'All React components with type, path, and description' },
      { num: 'SEC 7', title: 'Data Files & API Routes', sub: 'servicesData.ts structure, API endpoints' },
      { num: 'SEC 8', title: 'Deployment & Infrastructure', sub: 'Vercel config, build commands, known issues & fixes' },
      { num: 'SEC 9', title: 'Services Content - Full Text Data', sub: 'Complete service descriptions, FAQs, workflows (text readable by AI)' },
      { num: 'SEC 10', title: 'Project Directory Tree', sub: 'Full filesystem structure of codebase' },
      { num: 'SEC 11', title: 'Complete Source Code', sub: 'All .ts, .tsx, .css, .json, config files verbatim' },
    ];

    for (const item of toc) {
      r.checkY(22);
      r.currentPage.drawRectangle({ x: r.MARGIN, y: r.y - 4, width: r.CONTENT_W, height: 18, color: C.cardBg });
      r.currentPage.drawText(item.num, { x: r.MARGIN + 4, y: r.y + 3, font: fontBold, size: 8, color: C.accentBlue });
      r.currentPage.drawText(sanitize(item.title), { x: r.MARGIN + 55, y: r.y + 3, font: fontBold, size: 9, color: C.headingWhite });
      r.y -= 12;
      r.currentPage.drawText(sanitize(item.sub), { x: r.MARGIN + 55, y: r.y + 3, font: fontRegular, size: 7.5, color: C.mutedText });
      r.y -= 14;
    }

    // ============================================================
    // SECTION 1: COMPANY OVERVIEW
    // ============================================================
    r.sectionDivider('SECTION 1', 'Company Overview & Profile');
    r.h2('Company Identity');
    r.kvRow('Company Name', SITE_DOC.company.name);
    r.kvRow('Tagline', SITE_DOC.company.tagline);
    r.kvRow('Established', SITE_DOC.company.established);
    r.kvRow('Location', SITE_DOC.company.location);
    r.kvRow('Phone', SITE_DOC.company.phone);
    r.kvRow('Email', SITE_DOC.company.email);
    r.gap();
    r.h2('Certifications & Licenses');
    for (const cert of SITE_DOC.company.certifications) r.bullet(cert, 0, C.accentGreen);
    r.gap();
    r.h2('Authorized Partners');
    for (const p of SITE_DOC.company.partners) r.bullet(p);

    // ============================================================
    // SECTION 2: TECH STACK
    // ============================================================
    r.sectionDivider('SECTION 2', 'Technology Stack & Architecture');
    r.h2('Core Technologies');
    const ts = SITE_DOC.techStack;
    r.kvRow('Framework', ts.framework);
    r.kvRow('Language', ts.language);
    r.kvRow('Styling', ts.styling);
    r.kvRow('Animations', ts.animations);
    r.kvRow('Icons', ts.icons);
    r.kvRow('Fonts', ts.fonts);
    r.kvRow('State Mgmt', ts.stateManagement);
    r.kvRow('Deployment', ts.deployment);
    r.kvRow('Repository', ts.repo);
    r.kvRow('Node Version', ts.nodeVersion);
    r.kvRow('React Version', ts.reactVersion);

    // ============================================================
    // SECTION 3: COLOR SYSTEM
    // ============================================================
    r.sectionDivider('SECTION 3', 'Color System & Design Tokens');
    r.h2('Global CSS Color Palette');
    const cs = SITE_DOC.colorSystem;
    r.kvRow('Background', cs.background);
    r.kvRow('Primary Blue', cs.primaryBlue);
    r.kvRow('Steel Blue', cs.steelBlue);
    r.kvRow('Footer BG', cs.footerBg);
    r.kvRow('Text Primary', cs.textPrimary);
    r.kvRow('Text Secondary', cs.textSecondary);
    r.kvRow('Accent Green', cs.accentGreen);
    r.gap();
    r.h2('Typography & CSS Custom Properties');
    const st = SITE_DOC.styling;
    r.kvRow('Global CSS', st.globalCSS);
    r.kvRow('Approach', st.approach);
    r.kvRow('Fonts', st.fonts);
    r.kvRow('Body BG', st.bodyBackground);
    for (const cp of st.customProperties) r.bullet(cp, 0, C.accentCyan);

    // ============================================================
    // SECTION 4: PAGES
    // ============================================================
    r.sectionDivider('SECTION 4', 'Site Pages Documentation');
    for (const page of SITE_DOC.pages) {
      r.checkY(40);
      r.h2(page.route + '  -  ' + page.title, C.accentCyan);
      r.kvRow('Source File', page.file);
      r.text(page.purpose, { color: C.bodyText });
      r.gap(0.5);
      if ((page as any).sections) {
        r.h3('Sections on this page:');
        for (const s of (page as any).sections) r.bullet(s, 8);
      }
      if ((page as any).industries) {
        r.h3('Industries listed:');
        for (const ind of (page as any).industries) r.bullet(ind, 8);
      }
      if ((page as any).formFields) {
        r.h3('Form Fields:');
        for (const f of (page as any).formFields) r.bullet(f, 8, C.accentGreen);
      }
      if ((page as any).structure) {
        r.h3('Page Layout Structure:');
        r.text((page as any).structure, { color: C.mutedText });
      }
      if ((page as any).dataSource) r.kvRow('Data Source', (page as any).dataSource);
      if ((page as any).slugs) {
        r.h3('Available Slugs:');
        for (const slug of (page as any).slugs) r.bullet('/services/' + slug, 8, C.accentYellow);
      }
      r.gap();
      r.hRule();
      r.gap();
    }

    // ============================================================
    // SECTION 5: FEATURE INDEX
    // ============================================================
    r.sectionDivider('SECTION 5', 'Feature Index & Implementation Guide');
    r.text('This section catalogs every active feature on the website, how it is triggered, how it is implemented in code, and what dependencies it uses. This is the primary reference for any engineer understanding or rebuilding the system.', { color: C.mutedText });
    r.gap();

    for (const feat of SITE_DOC.features) {
      r.checkY(50);
      // Feature header card
      r.currentPage.drawRectangle({ x: r.MARGIN, y: r.y - 4, width: r.CONTENT_W, height: 20, color: C.cardBg });
      r.currentPage.drawRectangle({ x: r.MARGIN, y: r.y - 4, width: 4, height: 20, color: C.accentOrange });
      r.currentPage.drawText(feat.index, { x: r.MARGIN + 8, y: r.y + 5, font: fontBold, size: 9, color: C.accentOrange });
      r.currentPage.drawText(sanitize(feat.name), { x: r.MARGIN + 45, y: r.y + 5, font: fontBold, size: 10, color: C.headingWhite });
      r.y -= 22;
      r.kvRow('Source File', feat.file);
      r.kvRow('Trigger', feat.trigger);
      r.h3('Description:');
      r.text(feat.description, { color: C.bodyText });
      r.h3('Implementation Detail:');
      r.text(feat.implementation, { color: C.bodyText });
      if ((feat as any).security) {
        r.h3('Security Note:', C.accentRed);
        r.text((feat as any).security, { color: rgb(1, 0.7, 0.7) });
      }
      if ((feat as any).note) {
        r.h3('Important Note:', C.accentYellow);
        r.text((feat as any).note, { color: C.accentYellow });
      }
      if ((feat as any).uiDetails) {
        r.h3('UI / CSS Details:');
        r.text((feat as any).uiDetails, { color: C.mutedText });
      }
      r.kvRow('Dependencies', feat.dependencies);
      r.gap();
      r.hRule(C.borderLine);
      r.gap();
    }

    // ============================================================
    // SECTION 6: COMPONENTS
    // ============================================================
    r.sectionDivider('SECTION 6', 'Component Library Reference');
    for (const comp of SITE_DOC.components) {
      r.checkY(35);
      r.h2(comp.name, C.accentGreen);
      r.kvRow('File Path', comp.path);
      r.kvRow('Type', comp.type);
      r.text(comp.description, { color: C.bodyText });
      r.gap(0.5);
    }

    // ============================================================
    // SECTION 7: DATA FILES & API
    // ============================================================
    r.sectionDivider('SECTION 7', 'Data Files & API Routes');
    r.h2('Data Library Files');
    for (const df of SITE_DOC.dataFiles) {
      r.h3(df.name, C.accentCyan);
      r.kvRow('Path', df.path);
      r.text(df.description, { color: C.bodyText });
      r.gap(0.5);
    }
    r.gap();
    r.h2('API Routes');
    for (const api of SITE_DOC.apiRoutes) {
      r.h3(api.route + ' [' + api.method + ']', C.accentOrange);
      r.kvRow('File', api.file);
      r.text(api.description, { color: C.bodyText });
    }

    // ============================================================
    // SECTION 8: DEPLOYMENT
    // ============================================================
    r.sectionDivider('SECTION 8', 'Deployment & Infrastructure');
    const dep = SITE_DOC.deployment;
    r.h2('Deployment Configuration');
    r.kvRow('Platform', dep.platform);
    r.kvRow('Build Command', dep.buildCommand);
    r.kvRow('Output Type', dep.outputType);
    r.kvRow('Domain', dep.domain);
    r.kvRow('Repository', dep.repo);
    r.kvRow('Branch', dep.branch);
    r.kvRow('Env Variables', dep.envVars);
    r.gap();
    r.h2('Vercel Serverless Caveats', C.accentYellow);
    for (const cav of dep.caveats) r.bullet(cav, 0, C.accentYellow);
    r.gap();
    r.h2('Known Issues & Resolutions', C.accentRed);
    for (const issue of SITE_DOC.knownIssues) r.bullet(issue, 0, C.accentRed);

    // ============================================================
    // SECTION 9: SERVICES TEXT CONTENT
    // ============================================================
    r.sectionDivider('SECTION 9', 'Services Content - Full Text Data');
    r.text('This section contains the complete human-readable text data for all service categories. This is the primary content used on service pages and is optimized for AI analysis and pricing breakdown generation.', { color: C.mutedText });
    r.gap();

    const rootDir = process.cwd();
    const servicesDataPath = path.join(rootDir, 'src', 'lib', 'servicesData.ts');
    if (fs.existsSync(servicesDataPath)) {
      const rawData = fs.readFileSync(servicesDataPath, 'utf8');
      // Extract text content intelligently
      const textLines = rawData.split('\n').filter(l => {
        const t = l.trim();
        return t.startsWith('"') && t.length > 20 && !t.includes('slug:') && !t.includes('type:');
      });
      for (const line of textLines.slice(0, 400)) {
        const cleaned = line.trim().replace(/^"|",?$/g, '').replace(/\\n/g, ' ');
        if (cleaned.length > 15) {
          r.text(cleaned, { size: 8, color: C.bodyText });
        }
      }
    }

    // ============================================================
    // SECTION 10: DIRECTORY TREE
    // ============================================================
    r.sectionDivider('SECTION 10', 'Project Directory Tree & Structure');
    r.text('Complete filesystem structure of the project repository, excluding node_modules, .next, and .git. This gives any engineer or AI model an instant overview of the codebase topology.', { color: C.mutedText });
    r.gap();

    const tree = generateDirectoryTree(rootDir);
    const treeLines = tree.split('\n');
    r.currentPage.drawRectangle({ x: r.MARGIN, y: r.y - treeLines.length * 9 - 10, width: r.CONTENT_W, height: Math.min(treeLines.length * 9 + 10, r.y - r.MARGIN - 40), color: C.codeBg });
    for (const line of treeLines) {
      if (r.y < r.MARGIN + 40) r.newPage();
      if (line) {
        try {
          r.currentPage.drawText(sanitize(line).slice(0, 100), {
            x: r.MARGIN + 4, y: r.y,
            font: fontMono, size: 7.5, color: C.codeText,
          });
        } catch (_) {}
      }
      r.y -= 9.5;
    }

    // ============================================================
    // SECTION 11: FULL SOURCE CODE
    // ============================================================
    r.sectionDivider('SECTION 11', 'Complete Source Code');
    r.text('This section contains the verbatim source code of every file in the project. Files are ordered: root configs first, then all src/ files. This is the complete technical specification of the website.', { color: C.mutedText });
    r.gap();

    const sourceFiles = getSourceFiles(rootDir);

    for (const filePath of sourceFiles) {
      const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');
      let content = '';
      try { content = fs.readFileSync(filePath, 'utf8'); } catch (_) { continue; }

      r.newPage();
      // File header banner
      r.currentPage.drawRectangle({ x: r.MARGIN, y: r.y - 4, width: r.CONTENT_W, height: 24, color: rgb(0.1, 0.15, 0.28) });
      r.currentPage.drawRectangle({ x: r.MARGIN, y: r.y - 4, width: 3, height: 24, color: C.accentGreen });
      r.currentPage.drawText('FILE', { x: r.MARGIN + 6, y: r.y + 8, font: fontBold, size: 7, color: C.accentGreen });
      r.currentPage.drawText(sanitize(relativePath).slice(0, 90), {
        x: r.MARGIN + 28, y: r.y + 8,
        font: fontBold, size: 9, color: C.headingWhite,
      });
      r.currentPage.drawText(`${content.length} bytes | ${content.split('\n').length} lines`, {
        x: r.MARGIN + 28, y: r.y - 2,
        font: fontRegular, size: 7, color: C.mutedText,
      });
      r.y -= 30;

      const codeLines = content.split('\n');
      for (let i = 0; i < codeLines.length; i++) {
        if (r.y < r.MARGIN + 40) {
          r.newPage();
          // Continuation header
          r.currentPage.drawRectangle({ x: r.MARGIN, y: r.y - 2, width: r.CONTENT_W, height: 12, color: rgb(0.06, 0.09, 0.16) });
          r.currentPage.drawText(`... continued: ${sanitize(relativePath).slice(0, 70)}`, {
            x: r.MARGIN + 4, y: r.y,
            font: fontMono, size: 7, color: C.mutedText,
          });
          r.y -= 14;
        }

        const raw = codeLines[i];
        const clean = sanitize(raw).slice(0, 180);
        if (clean.length > 0) {
          try {
            r.currentPage.drawText(clean, {
              x: r.MARGIN + 4, y: r.y,
              font: fontMono, size: 7, color: C.codeText,
            });
          } catch (_) {}
        }
        r.y -= 8.5;
      }
    }

    const pdfBytes = await pdfDoc.save();
    return new Response(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Nandini_Source_Export.pdf"',
      },
    });

  } catch (err: any) {
    console.error('PDF Export Error:', err);
    return new Response(JSON.stringify({ error: err.message, stack: err.stack?.slice(0, 500) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// ============================================================
// FILE COLLECTION HELPERS
// ============================================================
function getSourceFiles(rootDir: string): string[] {
  const files: string[] = [];
  const rootConfigs = ['package.json', 'tsconfig.json', 'next.config.mjs', 'postcss.config.mjs', 'eslint.config.mjs'];
  for (const cfg of rootConfigs) {
    const p = path.join(rootDir, cfg);
    if (fs.existsSync(p) && fs.statSync(p).isFile()) files.push(p);
  }
  const srcDir = path.join(rootDir, 'src');
  if (fs.existsSync(srcDir)) recurse(srcDir);
  function recurse(dir: string) {
    try {
      for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          if (!['node_modules', '.next', '.git', 'fonts'].includes(item) && !item.startsWith('.')) recurse(full);
        } else {
          const ext = path.extname(item);
          if (['.ts', '.tsx', '.css', '.js', '.mjs', '.json'].includes(ext) && !item.endsWith('.d.ts') && item !== 'package-lock.json') {
            files.push(full);
          }
        }
      }
    } catch (_) {}
  }
  return files;
}

function generateDirectoryTree(rootDir: string): string {
  let out = 'nandini-enterprises/ (project root)\n';
  function recurse(dir: string, prefix = '') {
    try {
      const items = fs.readdirSync(dir)
        .map(name => {
          let isDir = false;
          try { isDir = fs.statSync(path.join(dir, name)).isDirectory(); } catch (_) {}
          return { name, isDir, full: path.join(dir, name) };
        })
        .filter(i => !['node_modules', '.next', '.git'].includes(i.name) && !i.name.startsWith('.') && i.name !== 'package-lock.json')
        .sort((a, b) => (a.isDir === b.isDir ? a.name.localeCompare(b.name) : a.isDir ? -1 : 1));
      items.forEach((item, idx) => {
        const last = idx === items.length - 1;
        out += `${prefix}${last ? '+-- ' : '|-- '}${item.name}${item.isDir ? '/' : ''}\n`;
        if (item.isDir) recurse(item.full, prefix + (last ? '    ' : '|   '));
      });
    } catch (_) {}
  }
  recurse(rootDir);
  return out;
}
