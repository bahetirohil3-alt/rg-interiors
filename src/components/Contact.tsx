"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", project: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", phone: "", project: "", message: "" });
  };
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-background to-dark" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.3em]">Get In Touch</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl font-bold mt-3 mb-4">Contact <span className="text-gradient-gold">Us</span></h2>
          <div className="section-divider" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">📞</div>
                <div><h3 className="text-white font-semibold text-sm mb-1">Phone</h3><a href="tel:+918003420150" className="text-gray-light text-sm hover:text-gold transition-colors">80034 20150</a></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">📍</div>
                <div><h3 className="text-white font-semibold text-sm mb-1">Address</h3><p className="text-gray-light text-sm">Agrasen Nagar, Plot No-99, opp. Maheshwari Chaska Restaurant, Keshavpura, Dadabari, Kota, Rajasthan 324009</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">⏰</div>
                <div><h3 className="text-white font-semibold text-sm mb-1">Hours</h3><p className="text-gray-light text-sm">Mon – Sat: 10 AM – 7 PM</p></div>
              </div>
            </div>
            <div className="glass rounded-2xl overflow-hidden aspect-video">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.8!2d75.854!3d25.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1" width="100%" height="100%" style={{border:0,filter:"invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.6)"}} allowFullScreen loading="lazy" title="Location" />
            </div>
          </div>
          <div className="glass rounded-2xl p-8">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">Book a Free Consultation</h3>
            <p className="text-gray-light text-sm mb-8">Tell us about your project and we&apos;ll get back within 24 hours.</p>
            {submitted && <div className="mb-6 p-4 rounded-xl bg-gold/10 border border-gold/30 text-gold text-sm text-center">✓ Thank you! We&apos;ll contact you soon.</div>}
            <form onSubmit={handleSubmit} className="space-y-5">
              <input id="contact-name" type="text" placeholder="Your Name" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full px-5 py-3.5 bg-white/5 border border-dark-border rounded-xl text-white text-sm placeholder:text-gray-light/50 focus:outline-none focus:border-gold/50 transition-colors" />
              <input id="contact-phone" type="tel" placeholder="Phone Number" required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full px-5 py-3.5 bg-white/5 border border-dark-border rounded-xl text-white text-sm placeholder:text-gray-light/50 focus:outline-none focus:border-gold/50 transition-colors" />
              <select id="contact-project" value={form.project} onChange={e=>setForm({...form,project:e.target.value})} required className="w-full px-5 py-3.5 bg-white/5 border border-dark-border rounded-xl text-white text-sm focus:outline-none focus:border-gold/50 transition-colors">
                <option value="" className="bg-dark">Select Project Type</option>
                <option value="home" className="bg-dark">Home Interior</option>
                <option value="office" className="bg-dark">Office Design</option>
                <option value="kitchen" className="bg-dark">Modular Kitchen</option>
                <option value="bedroom" className="bg-dark">Luxury Bedroom</option>
                <option value="commercial" className="bg-dark">Commercial Space</option>
                <option value="architecture" className="bg-dark">Architecture Planning</option>
              </select>
              <textarea id="contact-message" placeholder="Tell us about your project..." rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full px-5 py-3.5 bg-white/5 border border-dark-border rounded-xl text-white text-sm placeholder:text-gray-light/50 focus:outline-none focus:border-gold/50 transition-colors resize-none" />
              <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300 hover:scale-[1.02] text-sm tracking-wide">Send Consultation Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
