
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { SolutionNav } from '@/components/SolutionNav';

export const metadata = { title: 'AgricTech | SGT' };

export default function AgricTechPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl font-bold mb-8 text-slate-950">AgricTech that connects supply chains and unlocks growth.</h1>
          <p className="text-2xl text-slate-600 mb-10 leading-relaxed">
            We build platforms that coordinate producers, buyers, logistics, and compliance—reducing waste, improving visibility, and making operations scalable.
          </p>
          <Button href="/contact/start" size="lg">Start a Project</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-slate-950">What We Build</h2>
            <ul className="space-y-4">
              {[
                "Producer/vendor onboarding and verification",
                "Inventory and order coordination",
                "Logistics workflow tracking and status updates",
                "Quality documentation and compliance checklists",
                "Export readiness workflows (document management + audit trails)",
                "Market insights dashboards"
              ].map(item => (
                <li key={item} className="flex gap-4 text-slate-700">
                  <span className="text-indigo-600 font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-8 text-slate-950">AI Use Cases</h2>
            <ul className="space-y-4">
              {[
                "Demand forecasting and pricing insights (where data supports it)",
                "Document summarisation and validation support",
                "Automated stakeholder updates and workflow routing"
              ].map(item => (
                <li key={item} className="flex gap-4 text-slate-700">
                  <span className="text-indigo-600 font-bold">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      
      <SolutionNav currentId="agrictech" />

      <Container className="mt-16">
        <div className="text-center p-16 bg-slate-950 rounded-3xl text-white">
          <h2 className="text-3xl font-bold mb-6">Build an AgricTech platform that runs end-to-end.</h2>
          <Button href="/contact/start" variant="secondary" size="lg">Get Started</Button>
        </div>
      </Container>
    </div>
  );
}
