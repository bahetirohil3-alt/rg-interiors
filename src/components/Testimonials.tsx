"use client";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Villa Owner, Kota",
    text: "Ravi Gupta Interiors transformed our villa into an absolute masterpiece. The attention to detail and use of premium materials exceeded all our expectations. Truly world-class work!",
    rating: 5,
  },
  {
    name: "Rajesh Agarwal",
    role: "Business Owner, Kota",
    text: "Our new office space looks phenomenal. The team understood our brand perfectly and created a workspace that impresses every client who walks in. Highly recommended!",
    rating: 5,
  },
  {
    name: "Meena & Vikram Joshi",
    role: "Homeowners, Jaipur",
    text: "From modular kitchen to bedroom design — everything was handled with such professionalism. The 3D visualization helped us see the result before execution. Exceptional service!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">Testimonials</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Client <span className="text-gradient-gold">Reviews</span>
          </h2>
          <div className="section-divider" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-300 flex flex-col">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-light text-sm leading-relaxed flex-1 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 pt-6 border-t border-dark-border flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-black font-bold text-sm">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-light text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
