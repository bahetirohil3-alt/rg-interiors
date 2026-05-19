"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const trustBadges = [
  { icon: "⭐", label: "4.9 Rating", sub: "Google Reviews" },
  { icon: "🏠", label: "230+", sub: "Happy Clients" },
  { icon: "✨", label: "Luxury", sub: "Designs" },
  { icon: "📐", label: "Expert", sub: "Architecture" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const bg = heroRef.current.querySelector(".hero-bg") as HTMLElement;
        if (bg) bg.style.transform = `translateY(${scrollY * 0.3}px) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="hero-bg absolute inset-0 scale-110">
        <Image
          src="/hero-bg.png"
          alt="Luxury interior design"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium">
              Premium Interior Design Studio
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-up">
            Transforming Spaces Into{" "}
            <span className="text-gradient-gold">Timeless Experiences</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-light text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Premium interior design and architecture services for homes, offices
            and commercial spaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-14 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link
              href="#contact"
              className="px-8 py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 hover:scale-105 text-sm tracking-wide"
            >
              Book Consultation
            </Link>
            <a
              href="tel:+918003420150"
              className="px-8 py-3.5 border border-gold/40 text-gold rounded-full hover:bg-gold/10 transition-all duration-300 hover:border-gold text-sm tracking-wide flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="glass-light rounded-xl px-4 py-3 text-center hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                  {badge.icon}
                </div>
                <div className="text-white font-semibold text-sm">{badge.label}</div>
                <div className="text-gray-light text-[10px] uppercase tracking-wider">
                  {badge.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-gray-light text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-5 h-8 border border-gold/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gold rounded-full mt-1.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
