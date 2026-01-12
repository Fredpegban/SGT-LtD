
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';

export const metadata = {
  title: 'Company',
  description: 'Built in Birmingham. Designed for global scale.'
};

export default function CompanyPage() {
  return (
    <div className="flex flex-col">
      <Section 
        centered
        eyebrow="Mission"
        title="Built in Birmingham. Designed for global scale."
        subtitle="SGT exists to help niche businesses compete with world-class technology. We combine product thinking, AI-native engineering, and security-by-design to deliver platforms that perform."
      >
        <div className="flex justify-center gap-4">
          <Button href="/contact/start" size="lg">Start a Project</Button>
          <Button href="/case-studies" size="lg" variant="outline">View Case Studies</Button>
        </div>
      </Section>

      <Section title="Our Delivery Framework" eyebrow="Governance" className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold tracking-tight">Standardizing when we use Waterfall vs Agile.</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Delivery success requires the right tool for the job. We don't force one methodology on all clients—we assess scope clarity, regulatory needs, and stakeholder availability to determine the path.
            </p>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="font-bold mb-4">Governance & QA</h4>
              <p className="text-slate-500 mb-6 italic">How we ensure predictability across all models:</p>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3"><span className="text-indigo-600 font-bold">RAID</span> Risk, Assumption, Issue, and Dependency logs updated weekly.</li>
                <li className="flex gap-3"><span className="text-indigo-600 font-bold">QA Gates</span> Code review, automated tests, and security scans for every PR.</li>
                <li className="flex gap-3"><span className="text-indigo-600 font-bold">Release Readiness</span> Formal checklist verification before production deployment.</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              { 
                t: 'Waterfall Delivery', 
                c: 'Fixed-price, fixed-scope engagements where requirements are known upfront. Perfect for procurement-heavy or compliance-strict projects.',
                tag: 'Predictable'
              },
              { 
                t: 'Agile Scrum', 
                c: 'Rapid iteration for innovative products. We work in 2-week sprints to build and refine based on real user feedback.',
                tag: 'Adaptive'
              },
              { 
                t: 'Kanban Flow', 
                c: 'Ideal for maintenance and operational support. We prioritize a continuous flow of tasks to maintain peak platform performance.',
                tag: 'Continuous'
              }
            ].map(m => (
              <div key={m.t} className="p-8 border border-slate-100 rounded-3xl bg-slate-50/50">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold">{m.t}</h4>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-indigo-100 text-indigo-700 px-2 py-1 rounded">{m.tag}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{m.c}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Values" title="What we stand for" centered className="bg-slate-50 border-t border-slate-200/60">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { t: 'Craft and speed', d: 'We ship fast but never at the expense of control or quality.' },
            { t: 'Trust through clarity', d: 'Transparent processes and deep security integration.' },
            { t: 'Measurable outcomes', d: 'We focus on business value and user success metrics.' },
            { t: 'Respect for data', d: 'Privacy-first architecture is non-negotiable.' }
          ].map(v => (
            <div key={v.t} className="glass-card p-8 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">{v.t}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
