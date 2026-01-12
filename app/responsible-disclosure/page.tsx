
import React from 'react';
import { Container } from '@/components/Container';

export const metadata = { title: 'Responsible Disclosure | SGT' };

export default function DisclosurePage() {
  return (
    <div className="py-24 prose prose-slate max-w-none">
      <Container size="md">
        <h1 className="text-4xl font-bold mb-8 text-slate-950">Responsible Disclosure Policy</h1>
        <p className="text-slate-600 mb-12">Security is core to everything we build at SGT.</p>
        
        <div className="space-y-12 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-950">Our Commitment</h2>
            <p>We value the security community's help in keeping our platforms safe. If you believe you've found a security vulnerability in one of our products or services, we want to hear from you.</p>
          </section>

          <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-xl font-bold mb-4 text-slate-950">Reporting a Vulnerability</h2>
            <p className="mb-4">Please email us at <strong>security@sellapy.global</strong> with the following details:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Description of the vulnerability</li>
              <li>Steps to reproduce (proof of concept)</li>
              <li>Potential impact</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-950">Guidelines</h2>
            <p className="mb-4">To help us process your report, we ask that you:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Give us reasonable time to respond before making information public</li>
              <li>Avoid privacy violations and disruption to our services</li>
              <li>Do not attempt to access or modify data that does not belong to you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-950">Our Response</h2>
            <p>We will acknowledge receipt of your report within 48 hours and provide a timeline for resolution where appropriate. We do not currently offer a bug bounty program, but we provide public credit for valid, unique reports.</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
