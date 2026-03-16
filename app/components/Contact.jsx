"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu, India" },
  { icon: Mail, label: "Email", value: "hello@innovait.com" },
  { icon: Phone, label: "Phone", value: "+91 98400 00000" },
];

const projectTypes = [
  "Web Application",
  "Mobile App",
  "SaaS Product",
  "AI Integration",
  "Other",
];

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    budget: "",
    timeline: "",
    goals: "",
    hearAbout: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let recaptchaToken = null;

      if (RECAPTCHA_SITE_KEY && typeof window !== "undefined" && window.grecaptcha) {
        recaptchaToken = await new Promise((resolve, reject) => {
          window.grecaptcha.ready(() => {
            window.grecaptcha
              .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
              .then(resolve)
              .catch(reject);
          });
        });
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        company: "",
        type: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-surface-elevated border border-subtle text-primary placeholder:text-subtle px-5 py-3.5 text-sm font-body focus:outline-none focus:border-gold/50 transition-colors duration-300";

  return (
    <section id="contact" className="relative py-32 bg-page overflow-hidden" ref={ref}>
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="section-title mb-6">
            Let&apos;s Build <span className="gold-text">Something Great</span>
          </h2>
          <p className="text-muted font-body max-w-xl mx-auto text-base leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Tell us what you&apos;re
            building and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — info */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}>
            <div className="space-y-8 mb-12">
              {contactInfo.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-subtle text-xs tracking-widest uppercase font-body mb-1">
                        {c.label}
                      </p>
                      <p className="text-primary font-body text-sm">{c.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA box */}
            <div className="p-8 bg-surface-elevated border border-subtle">
              <p className="text-gold text-xs tracking-widest uppercase font-body mb-4">
                Quick Start
              </p>
              <h3 className="font-display font-bold text-primary text-xl mb-3">
                Free 30-Minute Discovery Call
              </h3>
              <p className="text-muted text-sm font-body leading-relaxed mb-6">
                Not ready to commit? Start with a no-pressure conversation about your
                product vision. We&apos;ll give you honest advice — even if that means
                pointing you elsewhere.
              </p>
              <a
                href="mailto:hello@innovait.com"
                className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase font-body hover:gap-4 transition-all duration-300"
              >
                Schedule a Call <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-subtle bg-surface-elevated">
                <CheckCircle2 size={48} className="text-gold mb-6" />
                <h3 className="font-display font-bold text-primary text-2xl mb-3">
                  Message Received!
                </h3>
                <p className="text-muted font-body text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours with
                  our thoughts on your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-subtle text-xs tracking-widest uppercase font-body block mb-2">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="James Dal"
                      className={inputClass}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-subtle text-xs tracking-widest uppercase font-body block mb-2">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="james.dal@company.com"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-subtle text-xs tracking-widest uppercase font-body block mb-2">
                    Company / Startup Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className={inputClass}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-subtle text-xs tracking-widest uppercase font-body block mb-2">
                    Project Type *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((pt) => (
                      <button
                        key={pt}
                        type="button"
                        onClick={() => setForm({ ...form, type: pt })}
                        className={`text-xs font-body px-4 py-2 tracking-wider border border-subtle transition-all duration-200 ${form.type === pt
                          ? "bg-gold text-navy border-gold font-semibold"
                          : "border-white/15 text-white/45 hover:border-gold/50 hover:text-gold"
                          }`}
                      >
                        {pt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-white/30 text-xs tracking-widest uppercase font-body block mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe what you're building, your timeline, any technical requirements or challenges..."
                    className={`${inputClass} resize-none`}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-xs font-body text-center">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 group text-xs tracking-[0.15em] disabled:opacity-70"
                >
                  {loading ? (
                    <span className="font-body">SENDING...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-white/20 text-xs font-body text-center">
                  We respond to every enquiry within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
