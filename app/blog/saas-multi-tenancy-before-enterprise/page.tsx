"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function MultiTenancyArticle() {
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
            <p className="section-label mb-3">Product · SaaS</p>
            <h1 className="section-title mb-4">
              Why Your SaaS Needs a Multi-Tenancy Strategy Before Your First Enterprise Customer
            </h1>
            <p className="text-muted text-sm font-body mb-10">
              Multi-tenancy isn&apos;t a feature you bolt on later — it&apos;s a lens for how you model
              data, permissions, and growth from day one.
            </p>

            <div className="space-y-6 text-muted font-body text-[15px] leading-relaxed">
              <p>
                Most SaaS teams only seriously think about multi-tenancy when a big
                prospect&apos;s security questionnaire lands in their inbox. By then,
                tenants are half-baked concepts in the codebase and separating data per
                customer feels risky.
              </p>

              <h2>What We Mean by Multi-Tenancy</h2>
              <p>
                In practice, multi-tenancy is a combination of three concerns:
              </p>
              <ul>
                <li>
                  <strong>Data isolation</strong> — ensuring one customer&apos;s data
                  never leaks into another&apos;s experience or exports.
                </li>
                <li>
                  <strong>Configuration isolation</strong> — allowing per-tenant
                  feature flags, branding, limits, and integrations.
                </li>
                <li>
                  <strong>Operational isolation</strong> — being able to debug,
                  migrate, and sometimes even scale tenants independently.
                </li>
              </ul>

              <h2>How We Design for It Early</h2>
              <p>
                When we build new SaaS products, we treat the tenant as a first-class
                citizen in the domain model. That usually means:
              </p>
              <ul>
                <li>
                  A clear <code>tenants</code> table or collection, with all primary
                  entities (users, projects, invoices, etc.) explicitly linked to a
                  tenant ID.
                </li>
                <li>
                  A consistent way of scoping queries in the backend so no handler
                  forgets to filter by tenant.
                </li>
                <li>
                  A configuration layer (often JSON or a dedicated settings table)
                  for per-tenant toggles and limits.
                </li>
              </ul>

              <h2>Patterns We Reach For</h2>
              <p>
                Depending on the stage and requirements, we mix and match patterns:
              </p>
              <ul>
                <li>
                  <strong>Shared DB, shared schema</strong> for early-stage products —
                  fastest to iterate, still safe if scoping is disciplined.
                </li>
                <li>
                  <strong>Shared DB, separate schemas</strong> for tenants with heavier
                  customisation or stricter audit needs.
                </li>
                <li>
                  <strong>Separate databases per tenant</strong> only when regulatory
                  or scale requirements justify the operational overhead.
                </li>
              </ul>

              <h2>Why This Matters Before Enterprise</h2>
              <p>
                Getting these basics in place early doesn&apos;t slow you down — it
                keeps you from having to pause roadmap work later to untangle cross-tenant
                queries or retrofit access controls. More importantly, it lets you say
                “yes” to the first serious enterprise security review with confidence.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

