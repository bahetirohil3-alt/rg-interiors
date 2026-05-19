import Link from "next/link";

const socials = [
  { name: "Instagram", icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" },
  { name: "Facebook", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { name: "YouTube", icon: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" },
];

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-light to-gold-dark flex items-center justify-center font-[family-name:var(--font-playfair)] text-black font-bold text-sm">RG</div>
              <div><span className="text-white text-sm font-semibold block">Ravi Gupta</span><span className="text-gold text-[10px] uppercase tracking-[0.2em]">Interiors & Architecture</span></div>
            </div>
            <p className="text-gray-light text-sm leading-relaxed">Transforming spaces into timeless experiences with premium interior design and architecture.</p>
          </div>
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home","Projects","Services","About","Contact"].map(l=>(
                <Link key={l} href={`#${l.toLowerCase()}`} className="block text-gray-light text-sm hover:text-gold transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socials.map(s=>(
                <a key={s.name} href="#" aria-label={s.name} className="w-10 h-10 rounded-full bg-white/5 border border-dark-border flex items-center justify-center hover:border-gold/40 hover:bg-gold/10 transition-all group">
                  <svg className="w-4 h-4 text-gray-light group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon}/></svg>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a href="tel:+918003420150" className="text-gray-light text-sm hover:text-gold transition-colors flex items-center gap-2">📞 80034 20150</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-dark-border text-center text-gray-light text-xs">
          © {new Date().getFullYear()} Ravi Gupta Interiors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
