
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { SolutionNav } from '@/components/SolutionNav';

export const metadata = { title: 'SecTech | SGT' };

export default function SecTechPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl font-bold mb-8 text-slate-950">Security technology that builds trust—by design.</h1>
          <p className="text-2xl text-slate-600 mb-10 leading-relaxed">
            SGT builds secure service platforms for security operations, workforce management, customer onboarding, and incident workflows—designed with privacy and auditability from day one.
          </p>
          <Button href="/contact/start" size="lg">Start a Project</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-slate-950">What We Build</h2>
            <ul className="space-y-4">
              {[
                "Client intake + quotation + scheduling workflows",
                "Workforce onboarding, vetting, role-based access control",
                "Incident reporting, evidence handling, audit trails",
                "Secure communications and escalation routing",
                "Analytics dashboards: coverage, SLAs, response times",
                "Integrations: notifications, payments, CRM/ERP where needed"
              ].map(item => (
                <li key={item} className="flex gap-4 text-slate-700">
                  <span className="text-indigo-600 font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-8 text-slate-950">Security & Compliance Focus</h2>
            <ul className="space-y-4">
              {[
                "Threat modeling and secure-by-default architecture",
                "Strong identity and access controls",
                "Logging, auditability, and operational traceability",
                "GDPR-aware data handling and retention patterns"
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
      
      <SolutionNav currentId="sectech" />

      <Container className="mt-16">
        <div className="text-center p-16 bg-slate-950 rounded-3xl text-white">
          <h2 className="text-3xl font-bold mb-6">Build a security platform your customers can trust.</h2>
          <Button href="/contact/start" variant="secondary" size="lg">Get Started</Button>
        </div>
      </Container>
    </div>
  );
}
