"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-gold-light to-gold-dark flex items-center justify-center font-[family-name:var(--font-playfair)] text-black font-bold text-lg tracking-tight group-hover:scale-105 transition-transform">
            RG
          </div>
          <div className="hidden sm:block">
            <span className="text-white text-sm font-semibold tracking-wide block leading-tight">
              Ravi Gupta
            </span>
            <span className="text-gold text-[10px] uppercase tracking-[0.2em] block">
              Interiors & Architecture
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-gray-light hover:text-gold transition-colors duration-300 tracking-wide uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black text-sm font-semibold rounded-full hover:shadow-[0_0_25px_rgba(201,168,76,0.4)] transition-all duration-300 hover:scale-105"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 border-t border-dark-border" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-light hover:text-gold transition-colors tracking-wide uppercase"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-6 py-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black text-sm font-semibold rounded-full text-center hover:shadow-[0_0_25px_rgba(201,168,76,0.4)] transition-all"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
