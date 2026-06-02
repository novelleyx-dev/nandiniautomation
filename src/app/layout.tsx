import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import KnowledgeAssistant from "@/components/Assistant/KnowledgeAssistant";
import DisableRightClick from "@/components/Layout/DisableRightClick";
import { Metadata } from 'next';

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nandini Enterprises | Premium Industrial Automation, Electrical & Robotics Solutions",
  description: "ISO 9001:2015 certified partner for heavy-scale industries across India. Designing & manufacturing CPRI certified PCC/MCC panels, SCADA & PLC integration, Yaskawa VFD repairs, and robotic workflows.",
  keywords: ["Industrial Automation", "Electrical Engineering", "Robotics", "VFD Systems", "PLC SCADA", "Electrical Panels", "Yaskawa Service Center", "ABB partner", "Baumer partner", "Hyderabad Automation", "India Automation"],
  openGraph: {
    title: "Nandini Enterprises | Premium Industrial Automation & Electrical Engineering",
    description: "Reliable B2B industrial ecosystem and manufacturing partner for large-scale automation projects in India.",
    url: "https://www.nandiniautomation.com",
    siteName: "Nandini Enterprises",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#E8F0FA] text-slate-800 antialiased min-h-screen flex flex-col selection:bg-blue-500/20 selection:text-slate-900">
        <DisableRightClick />
        <div className="flex-grow flex flex-col">
          <Header />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
          <KnowledgeAssistant />
        </div>
      </body>
    </html>
  );
}
