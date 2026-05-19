"use client";

const services = [
  { icon: "🏠", title: "Home Interior", desc: "Complete home transformation with bespoke furniture, décor & lighting solutions." },
  { icon: "🏢", title: "Office Design", desc: "Productive, elegant workspaces that reflect your brand identity." },
  { icon: "🍳", title: "Modular Kitchen", desc: "Smart, stylish kitchens with premium materials and clever storage." },
  { icon: "🛏️", title: "Luxury Bedroom", desc: "Serene, sophisticated bedrooms designed for ultimate comfort." },
  { icon: "🏪", title: "Commercial Spaces", desc: "Retail, hospitality & commercial interiors that captivate customers." },
  { icon: "📐", title: "Architecture Planning", desc: "End-to-end architectural planning with 3D visualization." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-dark to-background" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">What We Offer</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <div className="section-divider" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass rounded-2xl p-8 group hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(201,168,76,0.1)]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2 font-[family-name:var(--font-playfair)]">{s.title}</h3>
              <p className="text-gray-light text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-5 w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-gold to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
