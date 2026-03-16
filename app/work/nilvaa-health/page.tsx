"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function NilvaaHealthCaseStudy() {
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
            <p className="section-label mb-3">Case Study · Mobile App</p>
            <h1 className="section-title mb-4">Nilvaa Health</h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed mb-8">
              Nilvaa Health is a patient-facing mobile app for an Indian healthtech
              startup, enabling appointment booking, teleconsultation, and health
              records in a single experience used by patients and clinicians every day.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm font-body">
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Impact
                </p>
                <p className="text-primary font-semibold">
                  52K downloads · 38K monthly active patients
                </p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Platforms
                </p>
                <p className="text-primary font-semibold">iOS & Android</p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Stack
                </p>
                <p className="text-primary">
                  React Native · Firebase Auth · Node.js API
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 mb-16 text-muted">
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">The Challenge</h2>
                <p>
                  Nilvaa&apos;s founders were running a successful network of clinics,
                  but appointment booking and teleconsultations were stitched together
                  across phone calls, WhatsApp, and a basic website form. Patients
                  frequently dropped off because they weren&apos;t sure if their slot
                  was confirmed or how to join a video consult.
                </p>
                <p>
                  The team needed a single mobile experience that could handle slot
                  discovery, booking, payments, reminders, and follow-up care without
                  overwhelming first-time smartphone users.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">Our Approach</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Designed a simple 3-step booking flow with language localisation
                    for English and Tamil.
                  </li>
                  <li>
                    Integrated real-time doctor schedules, cancellation windows, and
                    automated SMS + push reminders.
                  </li>
                  <li>
                    Embedded teleconsultation links that work across low-bandwidth
                    connections, with fallbacks to audio-only.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 text-muted">
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Results</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    61% of all appointments are now booked via the app, reducing front
                    desk call volume by roughly 40%.
                  </li>
                  <li>
                    No-show rates for teleconsultations dropped from 27% to 12% after
                    adding reminders and in-app status updates.
                  </li>
                  <li>
                    Patients now receive digital prescriptions and lab orders directly
                    inside the app, which increased repeat consultation rates.
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Timeline</h2>
                <p>
                  We delivered v1 of the Nilvaa Health app in 14 weeks, followed by a
                  staged rollout across four clinics. Over the next 3 months we
                  shipped fortnightly updates based on NPS feedback from patients and
                  doctors, steadily increasing adoption without overloading the care
                  teams.
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

