"use client";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

const footerLinks = {
  Company: ["About", "Services", "Work", "Blog", "Contact"],
  Services: ["Web Apps", "Mobile Apps", "SaaS Products", "AI Integrations"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-deep border-t border-white/5">
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
            <div className="font-display font-bold text-3xl tracking-[0.12em] text-white mb-4">
              INNOV<span className="text-gold">AI</span>T
            </div>
            <p className="text-white/40 font-body text-sm leading-relaxed mb-6 max-w-xs">
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
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-body font-semibold text-xs tracking-[0.2em] uppercase mb-5">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/35 hover:text-gold text-sm font-body transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/25 text-xs font-body">
            © 2026 Innovait Solution. All rights reserved.</p>
          <div className="flex items-center gap-2 text-white/20 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
