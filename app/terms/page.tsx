
import React from 'react';
import { Container } from '@/components/Container';

export const metadata = { title: 'Terms of Service | SGT' };

export default function TermsPage() {
  return (
    <div className="py-24 prose prose-slate max-w-none">
      <Container size="md">
        <h1 className="text-4xl font-bold mb-8 text-slate-950">Terms of Service</h1>
        <p className="text-slate-600 mb-12">Last updated: May 20, 2024</p>
        
        <div className="space-y-12 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-950">1. Agreement to Terms</h2>
            <p>By accessing or using the services of Sellapy Global Technology (SGT) Limited, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-950">2. Intellectual Property</h2>
            <p>All content, trademarks, and data on this website are the property of SGT Limited or its licensors. Unauthorised use is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-950">3. Limitation of Liability</h2>
            <p>SGT Limited provides its services "as is" and shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website or services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-950">4. Governing Law</h2>
            <p>These terms are governed by the laws of the United Kingdom. Any disputes shall be subject to the exclusive jurisdiction of the UK courts.</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
