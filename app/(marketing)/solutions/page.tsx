
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { SolutionStickyNav } from '@/components/SolutionStickyNav';
import Link from 'next/link';

export const metadata = {
  title: 'Solutions',
  description: 'Vertical expertise. Platform-grade execution. Sector-ready solutions for E-commerce, Security, Fintech, and more.'
};

const solutions = [
  { id: 'ecomtech', title: 'eComTech', desc: 'Marketplaces, subscriptions, vendor ecosystems, and conversion optimisation.', href: '/solutions/ecomtech' },
  { id: 'sectech', title: 'SecTech', desc: 'Secure service workflows, verification, incident reporting, and compliance-ready operations.', href: '/solutions/sectech' },
  { id: 'agrictech', title: 'AgricTech', desc: 'Supply chain coordination, farmer/vendor networks, and operational tracking.', href: '/solutions/agrictech' },
  { id: 'fintech', title: 'FinTech', desc: 'Payments, risk controls, audit trails, and secure data handling.', href: '/solutions/fintech' },
  { id: 'nichtech', title: 'NichTech', desc: 'Creator monetisation, community systems, and validation workflows.', href: '/solutions/nichtech' },
  { id: 'edutech', title: 'EduTech', desc: 'Learning platforms, assessments, analytics, and AI-driven personalized paths.', href: '/solutions/edutech' }
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      <Section 
        eyebrow="Verticals"
        title="Expertise. Platform-grade execution."
        subtitle="SGT builds sector-ready solutions that ship faster because we reuse proven playbooks—architecture patterns, security controls, and operational workflows."
        className="pb-16"
      >
        <div className="flex flex-col gap-10">
          {/* High-visibility Featured Solution Banner */}
          <div className="inline-flex">
            <Link 
              href="/solutions/ecomtech" 
              className="group relative flex flex-col sm:flex-row items-center gap-4 p-1 pr-6 rounded-full bg-white border border-indigo-100 shadow-xl shadow-indigo-500/5 hover:border-indigo-500 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-3 pl-1">
                <span className="px-4 py-1.5 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-600/20">
                  Featured
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 pr-2">
                Explore EcomTech: Marketplaces & Niche Commerce Infrastructure
                <svg className="w-4 h-4 text-indigo-600 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button href="/contact/start" size="lg" className="px-10 h-14">
              Start a Project
            </Button>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Or browse all sectors below
            </p>
          </div>
        </div>
      </Section>

      {/* Sticky Secondary Nav */}
      <SolutionStickyNav />

      <Section className="bg-white/40 border-y border-slate-200/60">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((s) => (
            <div 
              key={s.id} 
              className="glass-card p-10 rounded-3xl group border-slate-100/50 flex flex-col h-full hover:border-indigo-200/50"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors tracking-tight">
                  {s.title}
                </h3>
                <p className="text-slate-500 mb-10 flex-grow leading-relaxed">
                  {s.desc}
                </p>
                
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-auto pt-6 border-t border-slate-100/50">
                  <Link 
                    href={s.href}
                    className="inline-flex items-center text-xs font-black text-slate-950 gap-2 uppercase tracking-widest hover:text-indigo-600 transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href={`/contact/start?solution=${s.id}`}
                    className="inline-flex items-center text-xs font-black text-indigo-600 gap-2 uppercase tracking-widest hover:text-indigo-700 transition-all hover:scale-105"
                  >
                    Enquire
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section centered title="How we apply our playbooks" eyebrow="The SGT Standard">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Reference architectures",
            "Security controls",
            "Analytics instrumentation",
            "Reusable workflows"
          ].map(item => (
            <div key={item} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-900 text-center">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
