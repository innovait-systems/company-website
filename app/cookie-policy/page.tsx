"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicyPage() {
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
            <h1 className="section-title mb-4">Cookie Policy</h1>
            <p className="text-muted text-sm font-body mb-10">
              Last updated: March 2026
            </p>

            <div className="space-y-6 text-muted font-body text-[15px] leading-relaxed">
              <p>
                This Cookie Policy explains how Innovait Systems (&quot;Innovait&quot;,
                &quot;we&quot;, &quot;us&quot;) uses cookies and similar technologies on
                our website.
              </p>

              <h2 className="font-display text-lg text-primary">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you
                visit a website. They help the site remember your actions and
                preferences over a period of time.
              </p>

              <h2 className="font-display text-lg text-primary">2. How We Use Cookies</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Understand how visitors use our website so we can improve content and
                  navigation.
                </li>
                <li>
                  Remember basic preferences, such as your theme selection (light or
                  dark mode).
                </li>
                <li>
                  Maintain the security and performance of the website.
                </li>
              </ul>

              <h2 className="font-display text-lg text-primary">3. Types of Cookies We Use</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Essential cookies</strong> – required for the site to function
                  correctly (for example, to remember your theme).
                </li>
                <li>
                  <strong>Analytics cookies</strong> – used in aggregate to understand
                  which pages are visited and how users interact with the site.
                </li>
              </ul>

              <h2 className="font-display text-lg text-primary">4. Third-Party Cookies</h2>
              <p>
                If we use third-party analytics or embedded content (such as videos),
                those providers may set their own cookies. We aim to work only with
                reputable providers and limit the data they collect to what is necessary
                for their service.
              </p>

              <h2 className="font-display text-lg text-primary">5. Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings.
                You can usually configure your browser to block or delete cookies, or to
                alert you when cookies are being set.
              </p>
              <p>
                Please note that disabling certain cookies may affect how our website
                functions and could limit your ability to use some features.
              </p>

              <h2 className="font-display text-lg text-primary">6. Updates</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be
                posted on this page along with an updated &quot;Last updated&quot; date.
              </p>

              <h2 className="font-display text-lg text-primary">7. Contact</h2>
              <p>
                If you have any questions about our use of cookies, you can contact us
                at{" "}
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

