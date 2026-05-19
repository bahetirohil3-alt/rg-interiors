"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  { title: "Living Room", category: "Residential", img: "/portfolio-living.png" },
  { title: "Bedroom", category: "Residential", img: "/portfolio-bedroom.png" },
  { title: "Kitchen", category: "Modular", img: "/portfolio-kitchen.png" },
  { title: "Office", category: "Commercial", img: "/portfolio-office.png" },
  { title: "Villa", category: "Architecture", img: "/portfolio-villa.png" },
  { title: "Commercial Space", category: "Commercial", img: "/portfolio-commercial.png" },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">Our Work</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="section-divider" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="relative group rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                className={`object-cover transition-transform duration-700 ${hovered === i ? "scale-110" : "scale-100"}`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 ${hovered === i ? "opacity-100" : "opacity-60"}`} />
              <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${hovered === i ? "translate-y-0" : "translate-y-2"}`}>
                <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-medium">{p.category}</span>
                <h3 className="text-white text-xl font-semibold font-[family-name:var(--font-playfair)] mt-1">{p.title}</h3>
                <div className={`mt-3 flex items-center gap-2 text-gold text-xs font-medium transition-all duration-500 ${hovered === i ? "opacity-100" : "opacity-0"}`}>
                  View Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
