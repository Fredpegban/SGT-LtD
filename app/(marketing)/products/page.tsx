
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';

export const metadata = {
  title: 'Products',
  description: 'Platforms built and operated by Sellapy Global Technology Limited.'
};

const products = [
  {
    title: 'Sellapy eCommerce',
    desc: 'Niche commerce and marketplace infrastructure for modern trade.',
    tags: ['Marketplace', 'Payments', 'Vendor Ops']
  },
  {
    title: 'Nichapp',
    desc: 'Storytelling, validation, and supporter-tier monetisation for creators.',
    tags: ['Creator Economy', 'Subscription', 'Validation']
  },
  {
    title: 'Gamapy',
    desc: 'Tournaments, entry fees, and admin automation—built to scale.',
    tags: ['Esports', 'Automation', 'Engagement']
  }
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <Section 
        eyebrow="Proprietary"
        title="Products built and operated by SGT."
        subtitle="We build and run our own platforms. That means we ship with operational reality: reliability, security, support workflows, and growth analytics."
      />

      <Container className="mb-24">
        <div className="grid gap-8">
          {products.map((p) => (
            <div key={p.title} className="glass-card p-10 md:p-12 rounded-[2.5rem] border-slate-100 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 aspect-[4/3] bg-slate-950 rounded-3xl flex items-center justify-center text-6xl font-black text-white/10 relative overflow-hidden">
                <div className="absolute inset-0 premium-gradient opacity-20" />
                <span className="relative z-10">{p.title[0]}</span>
              </div>
              <div className="flex-grow">
                <div className="flex gap-2 mb-6">
                  {p.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-[10px] font-black uppercase tracking-widest">{t}</span>
                  ))}
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-[10px] font-black uppercase tracking-widest">Built & Operated by SGT</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{p.title}</h3>
                <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl">{p.desc}</p>
                <Button href="/contact/start" variant="outline" className="font-bold">Enquire about Custom Build</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Section className="bg-slate-950 text-white rounded-[3rem] mx-4 md:mx-10 mb-24" centered eyebrow="Platform Grade" title="Engineered for high-stakes environments.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center mt-12">
          {[
            { l: "Reliability", d: "99.9% uptime by design" },
            { l: "Security", d: "SOC2-ready patterns" },
            { l: "Analytics", d: "Event-driven visibility" },
            { l: "Tooling", d: "Admin-first operations" }
          ].map(item => (
            <div key={item.l}>
              <div className="text-xl font-bold text-white mb-2">{item.l}</div>
              <div className="text-sm text-slate-400">{item.d}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
