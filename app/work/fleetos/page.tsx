"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function FleetOSCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="bg-page text-primary">
        <section className="pt-32 pb-20 bg-page">
          <div className="max-w-5xl mx-auto px-6">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] uppercase text-subtle hover:text-gold mb-4"
            >
              <ArrowLeft size={14} />
              Back to work
            </Link>
            <p className="section-label mb-3">Case Study · SaaS Platform</p>
            <h1 className="section-title mb-4">FleetOS</h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed mb-8">
              FleetOS is an end-to-end fleet management SaaS for a Chennai-based
              logistics company, providing real-time visibility into more than 2,000
              vehicles across India.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm font-body">
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Impact
                </p>
                <p className="text-primary font-semibold">
                  32% reduction in delayed deliveries
                </p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Scale
                </p>
                <p className="text-primary font-semibold">
                  2,000+ vehicles · 180 dispatch users
                </p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Stack
                </p>
                <p className="text-primary">
                  Next.js · Node.js · PostgreSQL · WebSocket · AWS
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              <div className="space-y-4 text-muted">
                <h2 className="font-display text-lg text-primary">The Brief</h2>
                <p>
                  The logistics team was coordinating more than 2,000 trucks over
                  WhatsApp groups, spreadsheets, and a legacy GPS portal that lagged by
                  several minutes. Dispatchers had no single view of current routes,
                  exceptions, or upcoming maintenance windows.
                </p>
                <p>
                  The mandate for FleetOS was clear: give operations a real-time,
                  trustworthy control tower for the fleet, with accurate ETAs and
                  actionable alerts, without disrupting drivers or existing GPS
                  hardware.
                </p>
              </div>
              <div className="space-y-4 text-muted">
                <h2 className="font-display text-lg text-primary">What We Built</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Real-time map, powered by WebSockets, showing live vehicle
                    positions, route progress, and late-delivery risk scores.
                  </li>
                  <li>
                    A dispatcher console with SLA-based alerting, exception queues, and
                    tools to reassign loads or reroute vehicles in a few clicks.
                  </li>
                  <li>
                    Maintenance and fuel modules that connect odometer readings and
                    engine-hours to service schedules, reducing unexpected breakdowns.
                  </li>
                  <li>
                    Role-based access for regional managers, finance, and client-facing
                    teams, each with dashboards tailored to their KPIs.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 text-muted">
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Results</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Average delay per trip dropped from 42 minutes to 28 minutes within
                    the first quarter after rollout.
                  </li>
                  <li>
                    Dispatchers now manage 1.7× more active trips per person thanks to
                    a consolidated view and fewer manual calls.
                  </li>
                  <li>
                    Fleet utilisation reporting time went from 2 days at month-end to
                    an on-demand export that takes under a minute.
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Engagement Snapshot</h2>
                <p>
                  We delivered FleetOS in three phases over 6 months: discovery and
                  design sprints, core platform build, and then a staggered rollout
                  region by region. Weekly working sessions with dispatch leads ensured
                  that what we shipped matched the reality on Indian roads, not just a
                  generic fleet template.
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

