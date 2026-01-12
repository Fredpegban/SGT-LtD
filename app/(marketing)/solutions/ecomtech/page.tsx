
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { SolutionNav } from '@/components/SolutionNav';

export const metadata = { 
  title: 'eComTech | SGT',
  description: 'Niche commerce and marketplace infrastructure built for conversion and scale.'
};

export default function EcomTechPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-widest mb-8">
              Solution Area
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-slate-950 tracking-tight">
              eComTech that converts—built for <span className="text-indigo-600">niche markets.</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl text-balance">
              We design and build commerce systems that reduce friction, increase conversion, and scale with operations: marketplaces, subscriptions, and AI-enabled merchandising.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact/start" size="lg">Start a Project</Button>
              <Button href="/contact/book" variant="outline" size="lg">Book a Call</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Capabilities */}
      <Section className="bg-slate-50/50 border-y border-slate-100">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="glass-card p-10 md:p-12 rounded-[2.5rem] bg-white border-slate-200/60">
            <h2 className="text-2xl font-bold mb-8 text-slate-950 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              What We Build
            </h2>
            <ul className="space-y-6">
              {[
                "Marketplaces and multi-vendor platforms",
                "Subscription commerce and tiered access",
                "Vendor onboarding, approvals, and compliance flows",
                "Checkout, invoicing, and payment automation",
                "Admin dashboards, catalog management, and pricing",
                "AI-driven search and discovery matching"
              ].map(item => (
                <li key={item} className="flex gap-4 text-slate-600 leading-relaxed">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">AI Use Cases</h3>
              <div className="grid gap-4">
                {[
                  { t: "Smart Recommendations", d: "Discovery engines that understand niche intent." },
                  { t: "Automated Merchandising", d: "Safe, human-in-the-loop content generation." },
                  { t: "Risk & Fraud Signals", d: "Pattern monitoring for marketplace safety." }
                ].map(item => (
                  <div key={item.t} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="font-bold text-slate-900 mb-1">{item.t}</div>
                    <div className="text-sm text-slate-500">{item.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 bg-slate-950 rounded-[2rem] text-white">
              <h3 className="text-lg font-bold mb-4">The SGT Standard</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                We don't just ship code; we ship operational visibility. Every eComTech build includes admin controls for catalog governance and transaction monitoring by default.
              </p>
              <div className="flex gap-4">
                 <div className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full">Stripe Architecture</div>
                 <div className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full">GDPR Native</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Solution Navigation: Positioned after main content and before final CTA */}
      <SolutionNav currentId="ecomtech" />

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center p-16 md:p-24 bg-slate-950 rounded-[3rem] text-white relative overflow-hidden">
            <div className="absolute inset-0 premium-gradient opacity-60" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Build your commerce <br/>platform with SGT.</h2>
              <p className="text-xl text-indigo-100/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                From discovery to scale, we help you build high-performance infrastructure that runs your business.
              </p>
              <Button href="/contact/start" variant="secondary" size="lg" className="px-10 h-16 text-lg">
                Start a Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
