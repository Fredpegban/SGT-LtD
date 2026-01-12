import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';

// Note: In this environment, Link is imported from 'next/link'. 
// For the preview, we handle it via the index.tsx mock if needed.
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <Container>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-indigo-100 bg-white/50 backdrop-blur-sm text-indigo-700 text-xs font-bold tracking-wider uppercase mb-10 shadow-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Birmingham, UK • AI-Native Product Engineering
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-950 mb-8 text-balance">
              Build secure, AI-native products <span className="text-indigo-600">that scale.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl text-balance">
              SGT helps niche businesses design, build, and operate cutting-edge platforms fast—without compromising security or quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center mb-16">
              <Button href="/contact/start" size="lg" className="px-10 h-14">
                Start a Project
              </Button>
              <Button href="/case-studies" size="lg" variant="outline" className="px-10 h-14">
                View Case Studies
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-slate-100 w-full max-w-3xl">
              {[
                { label: 'Security-by-design', sub: 'Threat modeling by default' },
                { label: 'AI automation', sub: 'Native LLM workflows' },
                { label: 'Platform-grade', sub: 'Built for high uptime' }
              ].map(chip => (
                <div key={chip.label} className="text-left">
                  <div className="text-sm font-bold text-slate-950 mb-1">{chip.label}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">{chip.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <Section 
        eyebrow="Expertise" 
        title="Vertical expertise. Engineering rigor."
        className="bg-white/40"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Product Engineering",
              desc: "From MVP to v1, we ship production-grade software with world-class UX and performance.",
              icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            },
            {
              title: "AI & Automation",
              desc: "We design AI workflows that reduce cost-to-serve and unlock new revenue—safely.",
              icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            },
            {
              title: "Security-by-Design",
              desc: "Threat modeling, secure defaults, and privacy-first architecture baked into every release.",
              icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            }
          ].map((item) => (
            <div key={item.title} className="glass-card p-10 rounded-3xl group">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Delivery Methodology */}
      <Section 
        centered
        eyebrow="Methodology"
        title="Delivery built for clarity, speed, and governance."
        subtitle="We select the right delivery model based on your project's risk profile, scope, and feedback needs."
        className="bg-slate-50 border-y border-slate-200/60"
      >
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Waterfall",
              bestFor: "fixed scope, compliance-heavy delivery",
              how: ["requirements → design → build → test → release", "stage gates with signed approvals"],
              get: ["predictable milestones", "formal documentation"]
            },
            {
              title: "Agile Scrum",
              bestFor: "product builds, changing requirements",
              how: ["backlog-driven 2-week sprints", "sprint planning, review, and retro"],
              get: ["usable increments every sprint", "measurable progress"]
            },
            {
              title: "Kanban",
              bestFor: "continuous delivery, support/ops",
              how: ["visual workflow with WIP limits", "continuous prioritisation"],
              get: ["predictable cycle time", "operational visibility"]
            }
          ].map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-indigo-600 font-bold mb-6 uppercase tracking-wider">Best for: {item.bestFor}</p>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">How it works</h4>
                  <ul className="space-y-2">
                    {item.how.map(h => (
                      <li key={h} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-indigo-400 font-bold">•</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">What you get</h4>
                  <ul className="space-y-2">
                    {item.get.map(g => (
                      <li key={g} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-emerald-500 font-bold">✓</span> {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why SGT - Bullet proofs */}
      <Section title="Why SGT" eyebrow="Proof">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-2xl text-slate-700 leading-relaxed font-medium mb-10">
              We bridge the gap between high-level vision and technical execution, delivering software that works in production, not just on local machines.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { t: "Niche-first delivery", d: "Tailored playbooks for vertical markets." },
                { t: "Holistic execution", d: "Architecture, engineering, and ops unified." },
                { t: "Enterprise-grade", d: "Rigorous standards for security and reliability." },
                { t: "Outcome focused", d: "We measure success by your business metrics." }
              ].map(p => (
                <div key={p.t} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950">{p.t}</h4>
                    <p className="text-slate-500 text-sm">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-950 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 text-indigo-500/10">
                <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
             </div>
             <h3 className="text-2xl font-bold mb-8 relative z-10">Our Operating Model</h3>
             <div className="space-y-10 relative z-10">
                {[
                  { step: '01', title: 'Discovery Sprint', desc: 'Goals, scope, user journeys, and delivery plan mapped in days.' },
                  { step: '02', title: 'Build Sprint', desc: 'Rapid implementation with QA automation and secure defaults.' },
                  { step: '03', title: 'Scale & Optimise', desc: 'Continuous improvements, analytics, and roadmap execution.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <span className="text-3xl font-black text-indigo-500 opacity-50">{item.step}</span>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section 
        eyebrow="Solutions"
        title="Platforms tailored to your niche."
        className="bg-white"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 'ecomtech', title: 'eComTech', desc: 'Marketplaces, subscriptions, and multi-vendor ecosystems.' },
            { id: 'sectech', title: 'SecTech', desc: 'Secure service workflows and operational compliance.' },
            { id: 'agrictech', title: 'AgricTech', desc: 'Supply chain tracking and producer-buyer coordination.' },
            { id: 'fintech', title: 'FinTech', desc: 'Payments, risk signals, and secure audit trails.' },
            { id: 'nichtech', title: 'NichTech', desc: 'Creator monetisation and community storytelling.' },
            { id: 'edutech', title: 'EduTech', desc: 'Learning pathways and assessment automation.' }
          ].map((s) => (
            <Link key={s.id} href={`/solutions/${s.id}`} className="glass-card p-10 rounded-3xl flex flex-col group border-slate-100">
              <h4 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{s.title}</h4>
              <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed">{s.desc}</p>
              <div className="text-xs font-black text-slate-900 flex items-center gap-2 uppercase tracking-widest">
                Explore Solution
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Products Strip */}
      <Section className="bg-slate-50 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
             <h3 className="text-2xl font-bold mb-2">Built & operated by SGT.</h3>
             <p className="text-slate-500">We ship with operational reality because we run our own platforms.</p>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            {['Sellapy eCommerce', 'Nichapp', 'Gamapy'].map(p => (
              <span key={p} className="text-sm font-bold text-slate-400 border-x border-slate-200 px-4">{p}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="pb-40">
        <div className="premium-gradient rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">Ready to build <br/><span className="text-indigo-400">something serious?</span></h2>
            <p className="text-xl text-indigo-100/80 mb-12 leading-relaxed">
              Tell us what you’re building and we’ll respond with a clear plan, timeline, and realistic next steps.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button href="/contact/start" size="lg" className="bg-white text-slate-950 hover:bg-indigo-50 h-16 px-12 text-lg">
                Start a Project
              </Button>
              <Button href="/contact/book" size="lg" variant="outline" className="border-indigo-400/30 text-white hover:bg-white/10 h-16 px-12 text-lg">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}