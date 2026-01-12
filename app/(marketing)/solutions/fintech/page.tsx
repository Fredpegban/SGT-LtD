
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { SolutionNav } from '@/components/SolutionNav';

export const metadata = { title: 'FinTech | SGT' };

export default function FinTechPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl font-bold mb-8 text-slate-950">FinTech systems built with controls, not shortcuts.</h1>
          <p className="text-2xl text-slate-600 mb-10 leading-relaxed">
            SGT builds payments-driven platforms with auditability, observability, and secure data handling—focused on reliability, fraud resistance, and governance.
          </p>
          <Button href="/contact/start" size="lg">Start a Project</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-slate-950">What We Build</h2>
            <ul className="space-y-4">
              {[
                "Payments and subscription billing workflows",
                "User onboarding journeys with risk controls",
                "Transaction monitoring patterns and audit trails",
                "Internal admin controls and approvals",
                "Reporting and reconciliation dashboards",
                "Integrations: KYC/KYB partners (where required)"
              ].map(item => (
                <li key={item} className="flex gap-4 text-slate-700">
                  <span className="text-indigo-600 font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-8 text-slate-950">Principles</h2>
            <ul className="space-y-4">
              {[
                "Least-privilege access and strong separation of duties",
                "Consistent logging and traceability",
                "Data minimisation and retention controls",
                "Secure webhooks, idempotency, and reliability patterns"
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
      
      <SolutionNav currentId="fintech" />

      <Container className="mt-16">
        <div className="text-center p-16 bg-slate-950 rounded-3xl text-white">
          <h2 className="text-3xl font-bold mb-6">Build FinTech-grade reliability into your product.</h2>
          <Button href="/contact/start" variant="secondary" size="lg">Get Started</Button>
        </div>
      </Container>
    </div>
  );
}
