"use client";

const reasons = [
  { icon: "✓", title: "Customized Designs", desc: "Tailored to your lifestyle and preferences" },
  { icon: "✓", title: "Premium Quality", desc: "Only the finest materials and finishes" },
  { icon: "✓", title: "Modern Concepts", desc: "Contemporary trends with timeless appeal" },
  { icon: "✓", title: "Expert Team", desc: "Skilled designers and architects" },
  { icon: "✓", title: "End-to-End Support", desc: "From concept to completion" },
  { icon: "✓", title: "On-Time Delivery", desc: "We respect your timelines" },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-background to-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">Why Us</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Why Choose <span className="text-gradient-gold">Ravi Gupta Interiors</span>
          </h2>
          <div className="section-divider" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={r.title} className="flex gap-4 p-6 glass rounded-xl hover:border-gold/30 transition-all duration-300 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-black font-bold text-sm">
                {r.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{r.title}</h3>
                <p className="text-gray-light text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
