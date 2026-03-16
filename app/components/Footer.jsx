"use client";
import { useEffect, useState } from "react";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoDark from "@/app/assets/images/logo-dark.svg";
import logoLight from "@/app/assets/images/logo-light.svg";

const Company = [
  { "label": "About", "href": "/#about" },
  { "label": "Services", "href": "/#services" },
  { "label": "Work", "href": "/#work" },
  { "label": "Blog", "href": "/#blog" },
  { "label": "Contact", "href": "/#contact" }
];

const Services = [
  { "label": "Web Apps", "href": "/services/web-application-development" },
  { "label": "Mobile Apps", "href": "/services/mobile-app-development" },
  { "label": "SaaS Products", "href": "/services/saas-product-engineering" },
  { "label": "AI Integrations", "href": "/services/ai-intelligent-integrations" }
];

const Legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function Footer() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const resolveInitialTheme = () => {
      const root = document.documentElement;
      const stored = window.localStorage.getItem("innovait_theme");
      if (stored === "light" || stored === "dark") return stored;
      if (root.dataset.theme === "light" || root.dataset.theme === "dark") {
        return root.dataset.theme;
      }
      const prefersDark =
        window.matchMedia?.("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    };

    setTheme(resolveInitialTheme());

    const handleThemeChange = (event) => {
      const next = event.detail?.theme;
      if (next === "light" || next === "dark") {
        setTheme(next);
      }
    };

    // Listen for theme changes dispatched from Navbar
    window.addEventListener(
      "theme:change",
      handleThemeChange,
    );
    return () => {
      window.removeEventListener(
        "theme:change",
        handleThemeChange,
      );
    };
  }, []);

  return (
    <footer className="relative bg-page border-t border-subtle">
      {/* Top CTA strip */}
      <div className="bg-gold py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display font-bold text-navy text-lg md:text-xl">
            Ready to build something intelligent?
          </p>
          <a
            href="#contact"
            className="bg-navy text-gold font-body font-semibold text-xs tracking-[0.15em] px-8 py-3.5 hover:bg-navy-light transition-colors flex-shrink-0"
          >
            START A PROJECT →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="font-display font-bold text-3xl tracking-[0.12em] text-primary mb-4">
              <Link href="/" className="flex items-center gap-2 group">
                <Image
                  src={theme === "dark" ? logoDark : logoLight}
                  alt="Innovait Logo"
                  width={"auto"}
                  height={55}
                />
              </Link>
            </div>
            <p className="text-muted font-body text-sm leading-relaxed mb-6 max-w-xs">
              A Chennai-based technology company building intelligent web apps, mobile
              apps, and SaaS products for businesses that refuse to settle.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/50 transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {Company.map((link, i) => (
                <li key={link.label}>
                  <Link
                    key={i}
                    href={link.href}
                    className="text-muted hover:text-gold text-sm font-body transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {Services.map((link, i) => (
                <li key={link.label}>
                  <Link
                    key={i}
                    href={link.href}
                    className="text-muted hover:text-gold text-sm font-body transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-body font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {Legal.map((link, i) => (
                <li key={link.label}>
                  <Link
                    key={i}
                    href={link.href}
                    className="text-muted hover:text-gold text-sm font-body transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/25 text-xs font-body">
            © 2026 Innovait Systems. All rights reserved.</p>
          {/* <div className="flex items-center gap-2 text-white/20 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </div> */}
        </div>
      </div>
    </footer>
  );
}
