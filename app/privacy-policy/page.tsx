"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
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
            <h1 className="section-title mb-4">Privacy Policy</h1>
            <p className="text-muted text-sm font-body mb-10">
              Last updated: March 2026
            </p>

            <div className="space-y-6 text-muted font-body text-[15px] leading-relaxed">
              <p>
                Innovait Systems (&quot;Innovait&quot;, &quot;we&quot;, &quot;us&quot;) is a
                technology company based in Chennai, India. This Privacy Policy explains
                how we collect, use, and protect personal information when you visit our
                website or contact us about working together.
              </p>

              <h2 className="font-display text-lg text-primary">1. Information We Collect</h2>
              <p>We collect information in three main ways:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Information you provide directly</strong> – for example, when
                  you fill in the contact form, book a call, or correspond with us by
                  email. This may include your name, email address, company name, and
                  details about your project.
                </li>
                <li>
                  <strong>Usage data</strong> – basic analytics about how you use our
                  website, such as pages visited, time on page, and your general
                  location (city/country). This is typically collected in aggregate via
                  analytics tools.
                </li>
                <li>
                  <strong>Technical data</strong> – such as IP address, browser type,
                  and device information, collected to keep the site secure and reliable.
                </li>
              </ul>

              <h2 className="font-display text-lg text-primary">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Respond to your enquiries and understand your project needs.</li>
                <li>
                  Schedule and conduct discovery calls or follow-up conversations.
                </li>
                <li>
                  Improve our website content and understand which services are most
                  relevant to visitors.
                </li>
                <li>
                  Maintain the security and performance of our website and supporting
                  infrastructure.
                </li>
              </ul>

              <h2 className="font-display text-lg text-primary">3. How We Share Data</h2>
              <p>
                We do not sell your personal information. We may share limited data with
                trusted service providers who help us run our website, email, analytics,
                or appointment scheduling. These providers are only allowed to use your
                information to perform services on our behalf.
              </p>

              <h2 className="font-display text-lg text-primary">4. Data Retention</h2>
              <p>
                We keep contact enquiries and related communication for as long as
                needed to respond and, where appropriate, maintain a record of potential
                or existing client relationships. If you would like your information
                removed from our records, you can contact us at the email below.
              </p>

              <h2 className="font-display text-lg text-primary">5. Your Rights</h2>
              <p>
                Depending on your location, you may have rights to access, correct, or
                delete personal information we hold about you. You may also have the
                right to object to or restrict certain types of processing.
              </p>
              <p>
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:hello@innovait.com"
                  className="text-gold hover:text-gold-light underline underline-offset-4"
                >
                  hello@innovait.com
                </a>
                . We may need to verify your identity before fulfilling your request.
              </p>

              <h2 className="font-display text-lg text-primary">6. Third-Party Links</h2>
              <p>
                Our website may contain links to other websites. We are not responsible
                for the privacy practices or content of those sites. We encourage you to
                review their privacy policies before providing any personal information.
              </p>

              <h2 className="font-display text-lg text-primary">7. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes
                in our practices or legal obligations. When we do, we will update the
                &quot;Last updated&quot; date at the top of this page.
              </p>

              <h2 className="font-display text-lg text-primary">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle
                your data, you can reach us at:
              </p>
              <p>
                <span className="font-semibold">Innovait Systems</span>
                <br />
                Chennai, Tamil Nadu, India
                <br />
                Email:{" "}
                <a
                  href="mailto:hello@innovait.com"
                  className="text-gold hover:text-gold-light underline underline-offset-4"
                >
                  hello@innovait.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

