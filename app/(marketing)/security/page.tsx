
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import Link from 'next/link';

export const metadata = {
  title: 'Security',
  description: 'Security is a feature. Not an afterthought. SGT builds platforms that earn trust.'
};

export default function SecurityPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl font-bold mb-8">Security is a feature. Not an afterthought.</h1>
          <p className="text-2xl text-slate-600 mb-10 leading-relaxed">
            SGT builds platforms that earn trust. We implement security and privacy controls from day one—across architecture, code, infrastructure, and operations.
          </p>
        </div>

        <section className="mb-24 grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-slate-950 text-white rounded-3xl">
            <h2 className="text-2xl font-bold mb-8">Security Principles</h2>
            <ul className="space-y-6">
              {[
                { t: "Secure by default", d: "Least privilege, minimal exposure, safe configurations." },
                { t: "Privacy by design", d: "Data minimisation, retention controls, clear access boundaries." },
                { t: "Defense in depth", d: "Layered controls across application and infrastructure." },
                { t: "Auditability", d: "Critical actions are traceable, reviewable, and monitored." },
                { t: "Reliability", d: "Resilient systems reduce security risk and operational incidents." }
              ].map(item => (
                <li key={item.t}>
                  <strong className="text-indigo-400 block mb-1">{item.t}</strong>
                  <span className="text-slate-400 text-sm">{item.d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-12">
            <div>
               <h2 className="text-2xl font-bold mb-4">Secure Development Lifecycle</h2>
               <p className="text-slate-600 mb-4 font-medium">Design → Build → Test → Release</p>
               <p className="text-slate-500">
                  Every feature is threat-modeled during design, checked against secure-coding guidelines during build, and tested with automated security scanners before release.
               </p>
            </div>
            <div>
               <h2 className="text-2xl font-bold mb-4">Technical Controls</h2>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
                  <li>• RBAC & Least Privilege</li>
                  <li>• Strong Authentication</li>
                  <li>• Secure Webhooks</li>
                  <li>• Audit Logs</li>
                  <li>• Input Validation</li>
                  <li>• Rate Limiting</li>
                  <li>• Data Encryption</li>
                  <li>• Observability</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="mb-24 p-12 bg-indigo-50 rounded-3xl border border-indigo-100">
           <h2 className="text-3xl font-bold mb-6">Compliance Readiness</h2>
           <p className="text-xl text-slate-700 max-w-3xl leading-relaxed mb-8">
              We build with GDPR-aware patterns: lawful data handling, minimisation, retention, and user rights considerations. For regulated needs, we support partner-led pathways (KYC/KYB, sector-specific compliance).
           </p>
           <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <div>
                 <h4 className="font-bold mb-2">Vulnerability Reporting</h4>
                 <p className="text-sm text-slate-500 mb-4">Have you found a security issue in one of our products?</p>
                 <Link href="/responsible-disclosure" className="text-indigo-600 font-bold hover:underline">View Disclosure Policy →</Link>
              </div>
              <Button href="/contact/start" variant="primary">Start a Project</Button>
           </div>
        </section>
      </Container>
    </div>
  );
}
