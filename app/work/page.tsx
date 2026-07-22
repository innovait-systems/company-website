"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Work from "@/app/components/Work";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page text-primary min-h-screen">
        {/* Intro Header */}
        <section className="pt-32 pb-12 bg-page">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] uppercase text-subtle hover:text-gold mb-6"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
            <p className="section-label mb-3">Portfolio</p>
            <h1 className="section-title mb-4">Case Studies</h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed">
              Explore how we help founders, startups, and enterprise teams design, build, and optimize scalable digital products and hybrid low-code architectures.
            </p>
          </div>
        </section>

        {/* Selected Work section */}
        <Work />
      </main>
      <Footer />
    </>
  );
}
