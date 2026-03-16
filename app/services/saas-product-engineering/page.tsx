"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function SaasProductEngineeringPage() {
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
            <p className="section-label mb-3">Service · SaaS</p>
            <h1 className="section-title mb-4">SaaS Product Engineering</h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed mb-10">
              We help founders and product teams design, build, and operate SaaS products
              that can comfortably support their first hundred customers — and their
              first serious enterprise client.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mb-16 text-[15px] text-muted font-body leading-relaxed">
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">
                  From Idea to Production
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Clarifying the core user journeys and value propositions.</li>
                  <li>
                    Designing the data model and multi-tenant architecture with pricing
                    and packaging in mind.
                  </li>
                  <li>
                    Building the initial set of workflows that prove value without
                    over-engineering.
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">Operational Concerns</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Tenant-aware metrics and logging to understand who is using what.</li>
                  <li>Safe migrations as your schemas and features evolve.</li>
                  <li>
                    Guardrails for roles and permissions, so you can pass security reviews
                    without a last-minute scramble.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 text-[15px] text-muted font-body leading-relaxed">
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Billing & Plans</h2>
                <p>
                  We frequently work with Stripe and similar providers to implement
                  subscription plans, usage-based billing, trials, and upgrades in a way
                  that&apos;s understandable to users and maintainable for your team.
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Analytics & Growth</h2>
                <p>
                  Instrumentation is baked in from the start: funnels, activation events,
                  and behaviour tracking. That makes it easier to answer questions like
                  “which features correlate with renewals?” without retrofitting tracking
                  later.
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

