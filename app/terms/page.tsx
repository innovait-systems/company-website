"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page text-primary">
        <section className="pt-32 pb-24 bg-page">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/#top"
              className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] uppercase text-subtle hover:text-gold mb-4"
            >
              <ArrowLeft size={14} />
              Back to home
            </Link>
            <p className="section-label mb-3">Legal</p>
            <h1 className="section-title mb-4">Terms &amp; Conditions</h1>
            <p className="text-muted text-sm font-body mb-10">
              Last updated: March 2026
            </p>

            <div className="space-y-6 text-muted font-body text-[15px] leading-relaxed">
              <p>
                These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the
                Innovait Systems website and any information, content, or services made
                available through it. By using this site, you agree to these Terms.
              </p>

              <h2 className="font-display text-lg text-primary">1. Who We Are</h2>
              <p>
                Innovait Systems (&quot;Innovait&quot;, &quot;we&quot;, &quot;us&quot;)
                is a technology company based in Chennai, India, focused on building
                web, mobile, SaaS, and AI-powered products for clients.
              </p>

              <h2 className="font-display text-lg text-primary">2. Use of the Website</h2>
              <p>
                The content on this website is provided for general information about
                our services and capabilities. You agree not to misuse the site, attempt
                to gain unauthorised access to our systems, or interfere with other
                users&apos; use of the site.
              </p>

              <h2 className="font-display text-lg text-primary">3. No Professional Advice</h2>
              <p>
                Nothing on this website constitutes legal, financial, or other
                professional advice. Any decisions you make based on information from
                this site are your responsibility. For specific advice, you should
                consult a qualified professional.
              </p>

              <h2 className="font-display text-lg text-primary">4. Engagements With Innovait</h2>
              <p>
                Any project or consulting engagement with Innovait will be governed by a
                separate written agreement or statement of work. In the event of a
                conflict between these Terms and an executed agreement, the executed
                agreement will prevail.
              </p>

              <h2 className="font-display text-lg text-primary">5. Intellectual Property</h2>
              <p>
                Unless otherwise stated, all content on this website (including text,
                graphics, and layout) is owned by or licensed to Innovait. You may not
                reproduce, distribute, or create derivative works from any content
                without our prior written consent.
              </p>

              <h2 className="font-display text-lg text-primary">6. Third-Party Links</h2>
              <p>
                This site may include links to third-party websites. We are not
                responsible for the content, policies, or practices of these external
                sites and provide them only as a convenience.
              </p>

              <h2 className="font-display text-lg text-primary">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Innovait shall not be liable for
                any indirect, incidental, consequential, or punitive damages arising out
                of or related to your use of this website. Our total liability for any
                claim related to the site will be limited to the amount, if any, you
                paid us to access it (which is typically zero).
              </p>

              <h2 className="font-display text-lg text-primary">8. Changes to the Site and Terms</h2>
              <p>
                We may update the content of this site or these Terms from time to time
                without prior notice. Continued use of the site after changes are posted
                will constitute your acceptance of the updated Terms.
              </p>

              <h2 className="font-display text-lg text-primary">9. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of
                India. Any disputes arising out of or relating to these Terms or your
                use of the website will be subject to the exclusive jurisdiction of the
                courts in Chennai, Tamil Nadu.
              </p>

              <h2 className="font-display text-lg text-primary">10. Contact</h2>
              <p>
                If you have any questions about these Terms, you can contact us at{" "}
                <a
                  href="mailto:hello@innovait.com"
                  className="text-gold hover:text-gold-light underline underline-offset-4"
                >
                  hello@innovait.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

