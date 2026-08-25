"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const PRODUCT_URL = "https://thannican.innovait-systems.com/";

export default function ThanniCanCaseStudy() {
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
            <h1 className="section-title mb-4">ThanniCan</h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed mb-6">
              ThanniCan is a mobile app we built at Innovait Systems for the people who
              deliver water cans — the bubble-top suppliers who keep homes and offices
              running. It handles the whole day: daily and recurring orders, delivery
              routes, a digital khata, payments, and GST invoices, and it lets customers
              find a nearby supplier from a map. It&rsquo;s currently in beta on Google Play.
            </p>

            {/* Prominent link to the live product */}
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-navy font-semibold text-sm font-body px-6 py-3 mb-12 hover:opacity-90 transition-opacity"
            >
              Visit the product — thannican.innovait-systems.com
              <ArrowUpRight size={16} />
            </a>

            <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm font-body">
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">Platform</p>
                <p className="text-primary font-semibold">Android · React Native</p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">Built for</p>
                <p className="text-primary font-semibold">Water-can suppliers and their customers, across India</p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">Status</p>
                <p className="text-primary font-semibold">In beta on Google Play (tester program)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-16 text-muted">
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">Problem Space</h2>
                <p>
                  A local water-can business runs on phone calls and a paper ledger.
                  Orders come in over WhatsApp and calls, deliveries are planned from
                  memory, and who owes what is tracked in a notebook. It works until it
                  doesn&rsquo;t — a missed delivery, a disputed balance, a month that
                  never quite adds up.
                </p>
                <p>
                  Customers have the mirror-image problem: no simple way to find a
                  reliable supplier nearby, set up a standing order, and pay without
                  chasing anyone.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">What It Does</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Daily and recurring orders, with delivery routes planned for the day.</li>
                  <li>A digital khata and monthly statements, so balances are never in doubt.</li>
                  <li>Payments by UPI, cash, or credit, with GST invoices and PDF receipts.</li>
                  <li>Map-based discovery, so customers can find and order from a supplier near them.</li>
                  <li>Support for 12 Indian languages, because the people using it don&rsquo;t all read English.</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 text-muted">
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">For the two sides</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Suppliers</strong> get orders, routes, ledger, and billing in one
                    place — and a ~90-day free trial to try it on their real round.
                  </li>
                  <li>
                    <strong>Customers</strong> get a free app to find a supplier, place a standing
                    order, and keep a clean record of what they&rsquo;ve paid.
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Engineering</h2>
                <p>
                  ThanniCan is a React Native app for Android, with order management,
                  routing, the ledger, UPI and cash payments, and GST-compliant invoicing
                  built in. It is written to work for a small supplier on a modest phone,
                  in the language they read.
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
