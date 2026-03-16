"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function WebApplicationDevelopmentPage() {
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
            <p className="section-label mb-3">Service · Web</p>
            <h1 className="section-title mb-4">Web Application Development</h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed mb-10">
              We design and build web applications that stay fast and reliable as your
              user base, data, and ambitions grow — from internal dashboards to global
              customer-facing products.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mb-16 text-[15px] text-muted font-body leading-relaxed">
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">
                  Where We&apos;re Typically Brought In
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    A founder wants to move beyond a no-code prototype into a robust
                    production web app.
                  </li>
                  <li>
                    An internal tool has grown into a critical system, but performance,
                    reliability, and UX are holding the team back.
                  </li>
                  <li>
                    A business needs to consolidate multiple legacy portals into a single,
                    coherent experience.
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">What We Focus On</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Clean, maintainable React/Next.js frontends that are a pleasure for
                    developers to work in.
                  </li>
                  <li>
                    API-first backends that make it easy to add mobile apps or partner
                    integrations later.
                  </li>
                  <li>
                    Observability from day one — logs, metrics, traces — so you can
                    debug incidents quickly instead of guessing.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 text-[15px] text-muted font-body leading-relaxed">
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Typical Stack</h2>
                <p>
                  We prefer modern, battle-tested tools: Next.js or React on the
                  frontend, Node.js or a language suitable for your team on the backend,
                  and PostgreSQL for relational data. We&apos;ll happily meet you where you
                  are if you already have constraints.
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Engagement Model</h2>
                <p>
                  Most web application projects start with a short discovery phase to
                  understand your users, constraints, and existing systems. We then
                  structure the build into 2–3 week sprints with regular demos, so you
                  can see progress and reprioritise as needed.
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

