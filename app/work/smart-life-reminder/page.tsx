"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function SmartLifeReminderCaseStudy() {
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
            <h1 className="section-title mb-4">Smart Life Reminder</h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed mb-8">
              Smart Life Reminder is a clean, intuitive utility app designed to help users organize their daily tasks and receive timely, location-based notifications without draining device battery.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm font-body">
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Impact
                </p>
                <p className="text-primary font-semibold">
                  Live on Google Play Store
                </p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Platforms
                </p>
                <p className="text-primary font-semibold">Android</p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Stack
                </p>
                <p className="text-primary">
                  Flutter · Riverpod · Drift ORM
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://smart-life-reminder.innovait-systems.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-xs tracking-[0.15em]"
              >
                VISIT OFFICIAL WEBSITE
                <ArrowUpRight size={14} />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.innovait.smart_life_reminder&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 text-xs tracking-[0.15em]"
              >
                GET IT ON PLAY STORE
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-16 text-muted">
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">The Challenge</h2>
                <p>
                  Most modern reminder applications are either overloaded with bloated task-management features or aggressively consume battery due to constant background location tracking.
                </p>
                <p>
                  Our goal was to build a lightweight, privacy-focused utility app that offers location-based alerts. The primary technical hurdle lay in creating geofencing mechanisms that were highly reliable but consumed minimal system resources.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">Our Approach</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Designed a minimal, distraction-free card-based UI focusing on quick entry and ease of scheduling.
                  </li>
                  <li>
                    Implemented intelligent background location polling intervals that scale back when the user is stationary.
                  </li>
                  <li>
                    Adopted a fully local database model (SQLite & Drift ORM) to keep personal task data entirely private and instantly queryable offline.
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailed Technology Stack & Badges */}
            <div className="grid lg:grid-cols-3 gap-10 mb-16 border-t border-b border-white/5 py-16 text-muted">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="font-display text-lg text-primary">Detailed Technology Stack</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-xs font-body leading-relaxed">
                  <div className="space-y-2 border-l border-gold/20 pl-4">
                    <p><span className="text-white/60 font-semibold">Framework:</span> Flutter</p>
                    <p><span className="text-white/60 font-semibold">Language:</span> Dart</p>
                    <p><span className="text-white/60 font-semibold">State Management:</span> Riverpod</p>
                    <p><span className="text-white/60 font-semibold">Navigation:</span> Go Router</p>
                    <p><span className="text-white/60 font-semibold">Database:</span> Drift ORM, SQLite</p>
                    <p><span className="text-white/60 font-semibold">Authentication:</span> Firebase Auth, Google Sign-In</p>
                    <p><span className="text-white/60 font-semibold">Cloud Services:</span> Firebase, Google APIs</p>
                  </div>
                  <div className="space-y-2 border-l border-gold/20 pl-4">
                    <p><span className="text-white/60 font-semibold">Notifications:</span> Local Notifications</p>
                    <p><span className="text-white/60 font-semibold">Background Tasks:</span> WorkManager</p>
                    <p><span className="text-white/60 font-semibold">Networking:</span> HTTP</p>
                    <p><span className="text-white/60 font-semibold">Storage:</span> Shared Preferences</p>
                    <p><span className="text-white/60 font-semibold">Device APIs:</span> Image/File Picker, Permissions</p>
                    <p><span className="text-white/60 font-semibold">Monetization:</span> Google Play In-App Purchase</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-lg text-primary mb-6">Technology Badges</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Flutter", "Dart", "Riverpod", "Go Router", "Drift ORM", "SQLite", 
                    "Firebase", "Firebase Auth", "Remote Config", "Google Sign-In", 
                    "Google APIs", "HTTP REST API", "WorkManager", "Flutter Local Notifications", 
                    "Shared Preferences", "Image Picker", "File Picker", "Permission Handler", 
                    "Google Play Billing", "Material Design"
                  ].map((badge) => (
                    <span key={badge} className="text-[10px] font-mono border border-gold/15 bg-gold/5 px-2.5 py-1 text-gold">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 text-muted">
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Results</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Successfully launched on the Google Play Store with excellent initial responsiveness reports.
                  </li>
                  <li>
                    Optimized battery impact by over 70% compared to typical geofence utility solutions.
                  </li>
                  <li>
                    Zero user data collected or sent to external servers, providing a fully secure offline tool.
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Timeline</h2>
                <p>
                  We delivered v1 of the Smart Life Reminder app within 8 weeks. This rapid release cycle enabled immediate user testing, followed by two minor iterations addressing performance metrics on older Android models.
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
