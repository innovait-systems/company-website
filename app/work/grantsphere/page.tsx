"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function GrantSphereCaseStudy() {
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
            <p className="section-label mb-3">Case Study · Enterprise Web App</p>
            <h1 className="section-title mb-4">GrantSphere</h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed mb-8">
              GrantSphere is a government grant management portal that enables central
              and state departments to track, approve, and disburse funds across tens
              of thousands of beneficiaries with full audit trails.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm font-body">
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Funds Managed
                </p>
                <p className="text-primary font-semibold">₹430Cr disbursed in year one</p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Users
                </p>
                <p className="text-primary font-semibold">
                  220+ officials across 6 departments
                </p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Stack
                </p>
                <p className="text-primary">React · Java Spring · Oracle DB</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 mb-16 text-muted">
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">The Situation</h2>
                <p>
                  Before GrantSphere, scheme administrators relied on Excel, email, and
                  physical files to move applications through scrutiny, sanction, and
                  disbursement. There was no single view of utilisation, and audit
                  queries regularly took weeks to answer.
                </p>
                <p>
                  The government needed a system that could enforce scheme rules,
                  prevent duplicate beneficiaries, and provide a clear audit trail
                  without slowing down disbursement.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">What We Delivered</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    A configurable workflow engine to model scheme-specific approval
                    paths, eligibility checks, and document requirements.
                  </li>
                  <li>
                    A beneficiary registry with deduplication across Aadhaar and bank
                    accounts, reducing duplicate records.
                  </li>
                  <li>
                    Real-time dashboards for utilisation by district, scheme, and
                    financial year, with exportable reports for audits.
                  </li>
                  <li>
                    Integration with treasury systems for payment status updates.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 text-muted">
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Impact</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Time to generate utilisation certificates dropped from 10–12 days
                    to under 2 days at quarter-end.
                  </li>
                  <li>
                    Duplicate applications reduced by an estimated 19% in the first
                    year thanks to the centralised registry.
                  </li>
                  <li>
                    Departments now have a live view of sanctions and payments, making
                    it easier to reallocate unspent funds before the financial year
                    closes.
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Rollout</h2>
                <p>
                  We first rolled out GrantSphere to a pilot scheme in one department
                  and then expanded to additional schemes over two release cycles.
                  Training was conducted for more than 150 officers, supported by
                  on-screen guidance inside the application to reduce manual process
                  documents.
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

