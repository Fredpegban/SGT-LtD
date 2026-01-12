
import React from 'react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies',
  description: 'Proof of execution. Not just promises. Real-world platforms built by SGT.'
};

const cases = [
  { id: 'sellapy-ecommerce', title: 'Sellapy eCommerce', desc: 'Niche marketplace infrastructure built to scale.' },
  { id: 'nichapp', title: 'Nichapp', desc: 'Monetisation and validation for founders.' },
  { id: 'gamapy', title: 'Gamapy', desc: 'Tournament operations and payments automation.' }
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      <Section 
        eyebrow="Portfolio"
        title="Proof of execution."
        subtitle="We build products that live in the real world. Here is how we approach problem framing, architecture, and secure delivery."
      />

      <Container className="mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <Link key={c.id} href={`/case-studies/${c.id}`} className="group">
              <div className="glass-card rounded-[2rem] overflow-hidden border-slate-100 shadow-sm group-hover:shadow-2xl transition-all">
                <div className="aspect-video bg-slate-950 p-8 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 premium-gradient opacity-30" />
                   <div className="text-white/20 font-black text-7xl relative z-10 group-hover:scale-110 transition-transform">{c.title[0]}</div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{c.title}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed line-clamp-2">{c.desc}</p>
                  <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest inline-flex items-center gap-2">
                    Case Study
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      <Section centered eyebrow="Metrics" title="How we measure success">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Activation", "Conversion", "Retention", "Efficiency", "Risk Reduction"].map(m => (
            <div key={m} className="p-8 border border-slate-100 bg-white rounded-2xl shadow-sm text-center">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 block mb-2">Primary KPI</span>
              <span className="text-lg font-bold text-slate-900">{m}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
