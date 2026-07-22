"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ZohoAwsHybridLogisticsCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="bg-page text-primary">
        <section className="pt-32 pb-20 bg-page">
          <div className="max-w-5xl mx-auto px-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] uppercase text-subtle hover:text-gold mb-4"
            >
              <ArrowLeft size={14} />
              Back to case studies
            </Link>
            <p className="section-label mb-3">Case Study · Cloud Integration & Hybrid Architecture</p>
            <h1 className="section-title mb-4 leading-tight">
              Transforming a Zoho-Based Transportation Platform into a Scalable Cloud-Native Solution
            </h1>
            
            <p className="text-muted font-body max-w-3xl text-base leading-relaxed mb-8">
              A transportation and logistics company relied on a custom-built platform developed using Zoho Creator and Zoho Analytics to manage assets, loads, and transactions. As transaction volumes increased, we re-engineered the processing architecture by integrating AWS cloud services to achieve higher performance, improved scalability, and long-term cost efficiency.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm font-body border-t border-b border-white/5 py-8">
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Industry
                </p>
                <p className="text-primary font-semibold">Transportation & Logistics</p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Platforms
                </p>
                <p className="text-primary font-semibold">Zoho Creator & Zoho Analytics</p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Cloud Integration
                </p>
                <p className="text-primary font-semibold">AWS (SQS, Lambda, Python)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-16 text-muted">
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">Business Challenge</h2>
                <p>
                  While Zoho Creator provided an excellent low-code development environment, the growing scale introduced operational demands that exceeded the platform's processing capabilities:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm pl-2">
                  <li>Large volumes of inbound API transactions requiring continuous ingestion.</li>
                  <li>Overlapping scheduled workflows creating scheduling bottlenecks.</li>
                  <li>Escalating subscription costs driven by processing and storage limits.</li>
                  <li>Limited observability into processing errors and operational failures.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">Our Approach</h2>
                <p>
                  Instead of recommending an expensive platform replacement, we designed a hybrid architecture that retained the strengths of Zoho Creator while offloading heavy lifting to AWS:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm pl-2">
                  <li>Decoupled API ingestion using asynchronous **Amazon Simple Queue Service (SQS)**.</li>
                  <li>Re-engineered complex business logic into Python cloud services.</li>
                  <li>Decoupled heavy workflow executions to prevent scheduler delays.</li>
                  <li>Integrated automated Microsoft Teams notifications for proactive alerts.</li>
                </ul>
              </div>
            </div>

            {/* Architecture Block */}
            <div className="p-8 bg-surface-elevated border border-white/5 mb-16 rounded-sm">
              <h2 className="font-display text-lg text-primary mb-4">Solution Architecture</h2>
              <div className="grid md:grid-cols-2 gap-8 text-sm font-mono leading-relaxed text-muted">
                <div>
                  <p className="text-gold mb-2 font-display uppercase tracking-widest text-xs">Existing Platform</p>
                  <p className="bg-navy/30 p-4 border border-white/5 rounded">
                    Enterprise Systems <br />
                    ↳ REST APIs <br />
                    ↳ Zoho Creator <br />
                    ↳ Zoho Analytics
                  </p>
                </div>
                <div>
                  <p className="text-gold mb-2 font-display uppercase tracking-widest text-xs">Enhanced Architecture</p>
                  <p className="bg-navy/30 p-4 border border-white/5 rounded">
                    Enterprise Systems <br />
                    ↳ REST APIs <br />
                    ↳ Amazon SQS Queue <br />
                    ↳ Python AWS Services <br />
                    ↳ Zoho Creator & Analytics
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-16 text-muted">
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Business Outcomes</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Improved processing performance for high-volume transactions.</li>
                  <li>Eliminated scheduling bottlenecks and delayed data sync jobs.</li>
                  <li>Increased platform scalability through elastic, cloud-native services.</li>
                  <li>Enhanced visibility with proactive monitoring and Teams integration alerts.</li>
                  <li>Optimized infrastructure costs with consumption-based AWS computing.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Technologies Used</h2>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Zoho Creator", "Zoho Analytics", "Amazon Web Services (AWS)", 
                    "Amazon SQS", "Python", "REST APIs", "Microsoft Teams Integration"
                  ].map((tech) => (
                    <span key={tech} className="text-xs font-mono border border-gold/15 bg-gold/5 px-3 py-1 text-gold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Us Box */}
            <div className="p-8 border border-gold/20 bg-gold/5 rounded-sm">
              <h2 className="font-display text-lg text-primary mb-3">Why Innovait Systems?</h2>
              <p className="text-muted text-sm font-body leading-relaxed mb-4">
                We help organizations maximize the value of their existing technology investments. Rather than replacing proven business applications, we identify performance bottlenecks, redesign critical components, and implement scalable cloud-native solutions that improve reliability, performance, and operational efficiency.
              </p>
              <p className="text-gold text-sm font-semibold font-body">
                Looking to improve your application's performance or scalability? Contact Innovait Systems for a solution assessment.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
