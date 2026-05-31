import { Inter, Poppins, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import KnowledgeAssistant from "@/components/Assistant/KnowledgeAssistant";
import { Metadata } from 'next';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

const manrope = Manrope({
  variable: "--font-manrope",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#f7f9fc] text-[#0B1F3A] antialiased min-h-screen flex flex-col selection:bg-blue-500/20 selection:text-slate-900 font-sans">
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
