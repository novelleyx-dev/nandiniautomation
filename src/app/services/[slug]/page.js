import { getEntryBySlug, getEntries } from '@/lib/cms';
import { notFound } from 'next/navigation';
import styles from './service.module.css';
import Link from 'next/link';

export async function generateStaticParams() {
  const services = getEntries('services');
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getEntryBySlug('services', slug);

  if (!service) {
    notFound();
  }

  return (
    <div className={styles.servicePage}>
      {/* Service Header */}
      <div className={styles.serviceHero}>
        <div className="container">
          <h1>{service.title}</h1>
          <p className={styles.overview}>{service.overview}</p>
        </div>
      </div>

      <div className={`container ${styles.contentGrid}`}>
        {/* Main Content */}
        <div className={styles.mainContent}>
          <section className={styles.section}>
            <h2>Supported Brands</h2>
            <div className={styles.tags}>
              {service.brands?.map(brand => (
                <span key={brand} className={styles.tag}>{brand}</span>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Project Methodology</h2>
            <div className={styles.timeline}>
              {service.methodology?.map((step, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>{idx + 1}</div>
                  <div className={styles.timelineContent}>
                    <h3>{step.step}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Key Benefits</h2>
            <p className={styles.benefitsText}>{service.benefits}</p>
          </section>

          <section className={styles.section}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqs}>
              {service.faqs?.map((faq, idx) => (
                <div key={idx} className={styles.faqItem}>
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarWidget}>
            <h3>Industries Served</h3>
            <ul className={styles.industryList}>
              {service.industries?.map(industry => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.sidebarWidget}>
            <h3>Need this service?</h3>
            <p>Our engineers are ready to analyze your requirements.</p>
            <Link href="/contact" className="btn btn-primary">Request Quotation</Link>
          </div>
          
          <div className={styles.sidebarWidget}>
            <h3>Related Documents</h3>
            <ul className={styles.docList}>
              <li><a href="#">Technical Brochure (PDF)</a></li>
              <li><a href="#">Case Study (PDF)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
