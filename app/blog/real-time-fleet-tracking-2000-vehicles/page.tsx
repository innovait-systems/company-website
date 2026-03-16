"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RealTimeFleetTrackingArticle() {
  return (
    <>
      <Navbar />
      <main className="bg-page text-primary">
        <article className="pt-32 pb-24 bg-page">
          <div className="max-w-3xl mx-auto px-6">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] uppercase text-subtle hover:text-gold mb-4"
            >
              <ArrowLeft size={14} />
              Back to insights
            </Link>
            <p className="section-label mb-3">Engineering · FleetOS</p>
            <h1 className="section-title mb-4">
              How We Built a Real-Time Fleet Tracking System for 2,000 Vehicles
            </h1>
            <p className="text-muted text-sm font-body mb-10">
              Sub-second tracking across India, without over-spending on infrastructure.
            </p>

            <div className="space-y-6 text-muted font-body text-[15px] leading-relaxed">
              <p>
                When we started work on FleetOS, the requirement sounded simple: “We&apos;d
                like to see all our trucks on a map, in real time.” In practice, that meant
                ingesting position updates from more than 2,000 GPS devices across patchy
                cellular networks, and making sure dispatchers could trust what they saw.
              </p>

              <h2>Why WebSockets (and Not Just Polling)</h2>
              <p>
                Our first prototype used a straightforward polling model: each browser tab
                hit an API every 5–10 seconds to fetch the latest locations. It worked for a
                dozen vehicles, but quickly fell apart as we scaled:
              </p>
              <ul>
                <li>Network usage grew linearly with the number of tabs open.</li>
                <li>
                  Vehicles that hadn&apos;t moved still generated the same amount of traffic.
                </li>
                <li>
                  Dispatchers complained about the lag — 10 seconds is long when a truck is
                  about to miss an unloading window.
                </li>
              </ul>
              <p>
                We switched to a WebSocket-based fan-out model. The backend maintains a
                single connection per browser tab; as fresh GPS data arrives, we push only
                the changed vehicles down to connected clients. That let us keep perceived
                latency well under a second for most users.
              </p>

              <h2>Geospatial Indexing That Stays Fast</h2>
              <p>
                Storing positions as plain latitude/longitude pairs works until you want
                fast queries like “all vehicles within 5km of this warehouse” or “everything
                along this corridor.” For FleetOS we leaned on PostGIS with a few simple
                rules:
              </p>
              <ul>
                <li>
                  Every position update is stored as a geometry with a spatial index,
                  letting us answer proximity queries in milliseconds.
                </li>
                <li>
                  We keep a compact “current state” table per vehicle and a historical table
                  partitioned by month, so dashboards stay fast while history is still
                  accessible.
                </li>
              </ul>

              <h2>Making Tradeoffs Explicit</h2>
              <p>
                We intentionally traded a tiny amount of precision for lower cost and
                simpler operations. For example:
              </p>
              <ul>
                <li>
                  We down-sample updates from vehicles that are stationary at a warehouse to
                  once every few minutes.
                </li>
                <li>
                  We snap points to a road network when rendering the map, which hides GPS
                  jitter without changing the underlying raw data.
                </li>
              </ul>
              <p>
                The result is a system that feels immediate to dispatchers and scales to
                thousands of vehicles without an exotic infrastructure bill.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

