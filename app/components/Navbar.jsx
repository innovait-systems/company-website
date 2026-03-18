"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import logoDark from "@/app/assets/images/logo-dark.svg";
import logoLight from "@/app/assets/images/logo-light.svg";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  // Handle scroll shadow / background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Initial theme: system or saved preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const stored = window.localStorage.getItem("innovait_theme");

    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      root.dataset.theme = stored;
      window.dispatchEvent(
        new CustomEvent("theme:change", { detail: { theme: stored } }),
      );
      return;
    }

    // System preference
    const prefersDark =
      window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initial = prefersDark ? "dark" : "light";
    setTheme(initial);
    root.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    root.dataset.theme = next;
    window.localStorage.setItem("innovait_theme", next);
    window.dispatchEvent(
      new CustomEvent("theme:change", { detail: { theme: next } }),
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "backdrop-blur-md border-b border-subtle py-4"
        : "bg-transparent py-6"
        }`}
      style={
        scrolled
          ? {
            backgroundColor: "var(--nav-bg-scrolled)",
          }
          : undefined
      }
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={theme === "dark" ? logoDark : logoLight}
            alt="Innovait Logo"
            width={"auto"}
            height={55}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className="nav-link font-body text-white">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side: theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/60 transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href="/#contact" className="btn-primary text-xs tracking-[0.15em]">
            START A PROJECT
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-gold transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-navy-deep border-t border-white/5 px-6 py-6 flex flex-col gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-white/70 hover:text-gold text-sm tracking-widest transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary text-center text-xs tracking-[0.15em]" onClick={() => setOpen(false)}>
            START A PROJECT
          </Link>
        </div>
      </div>
    </header>
  );
}

