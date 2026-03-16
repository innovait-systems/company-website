"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "50+", label: "Products Shipped" },
  { value: "30+", label: "Enterprise Clients" },
  { value: "8", label: "Years Building" },
  { value: "4", label: "Countries Served" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, [mounted])

  useEffect(() => {
    // mounted = true;
    // Particle canvas animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let animId;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      // Draw connecting lines
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(201,168,76,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-page">
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Radial glow center */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #C9A84C 0%, #1B6CA8 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-5 animate-pulse-slow"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }} />
      <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full opacity-5 animate-pulse-slow"
        style={{ background: "radial-gradient(circle, #1B6CA8, transparent)", animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Label */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <span className="section-label">Indian Technology Company</span>
            <span className="h-px w-12 bg-gold/50" />
            <span className="section-label opacity-60">Est. 2016</span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-bold leading-[1.05] mb-8 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            <span className="text-white block">Where</span>
            <span className="gold-text block">Intelligence</span>
            <span className="text-white block">Meets Innovation.</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-white/55 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-body transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            We build intelligent web apps, mobile apps, and SaaS products that
            don&apos;t just function — they think. Trusted by founders and enterprises
            across India and beyond.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-20 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <a
              href="#contact"
              className="btn-primary flex items-center gap-2 group text-xs tracking-[0.15em]"
            >
              START A PROJECT
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#work" className="btn-outline text-xs tracking-[0.15em]">
              VIEW OUR WORK
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <div className="font-display font-bold text-gold text-3xl md:text-4xl mb-1">
                  {s.value}
                </div>
                <div className="text-white/40 text-xs tracking-wider uppercase font-body">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-[0.3em] uppercase font-body">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>

      {/* Right side label */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <span className="writing-vertical text-white/20 text-xs tracking-[0.3em] uppercase font-body">
          innovait.com
        </span>
        <span className="h-16 w-px bg-gold/20" />
      </div>
    </section>
  );
}
