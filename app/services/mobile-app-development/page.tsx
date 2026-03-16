"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page text-primary">
        <section className="pt-32 pb-24 bg-page">
          <div className="max-w-5xl mx-auto px-6">
            <Link
              href="/#services-list"
              className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] uppercase text-subtle hover:text-gold mb-4"
            >
              <ArrowLeft size={14} />
              Back to services
            </Link>
            <p className="section-label mb-3">Service · Mobile</p>
            <h1 className="section-title mb-4">Mobile App Development</h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed mb-10">
              We build mobile apps that feel native on both iOS and Android, with a
              single React Native codebase where it makes sense — and native modules
              when performance demands it.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mb-16 text-[15px] text-muted font-body leading-relaxed">
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">
                  From MVP to App Store Launch
                </h2>
                <p>
                  Whether you&apos;re shipping a v1 consumer app or an internal tool, we
                  help you move from wireframes to a polished, store-ready build.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Product flows tuned for your target audience and markets.</li>
                  <li>Onboarding and empty states that help users succeed quickly.</li>
                  <li>
                    Guidance on App Store / Play Store requirements so approvals aren&apos;t
                    an afterthought.
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">What We Care About</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fast startup times and smooth scrolling on mid-range devices.</li>
                  <li>Offline behaviour that doesn&apos;t surprise users when they roam.</li>
                  <li>Clear analytics so you know which parts of the app are working.</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 text-[15px] text-muted font-body leading-relaxed">
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Technologies</h2>
                <p>
                  We primarily use React Native, with native Swift/Kotlin modules when
                  needed for performance or platform-specific integrations (e.g. health
                  APIs, secure enclaves, advanced camera features).
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Release & Support</h2>
                <p>
                  After launch, we typically stay on to help you monitor crash reports,
                  run A/B tests on onboarding, and plan your next set of releases so the
                  app keeps improving instead of stagnating after v1.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

