
import React from 'react';
import { Container } from '@/components/Container';

export const metadata = {
  title: 'Book a Call',
  description: 'Book a consultation with our team for fast alignment.'
};

export default function BookCallPage() {
  return (
    <div className="py-24">
      <Container size="md">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6">Book a call with SGT</h1>
          <p className="text-xl text-slate-600">
            For teams who want fast alignment. We’ll validate fit, clarify scope, and recommend the next step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold mb-8">What we’ll cover:</h3>
            <ul className="space-y-6">
              {[
                "A clear problem statement and proposed approach",
                "A realistic delivery path (MVP vs phased roadmap)",
                "Risks, dependencies, and success metrics"
              ].map(item => (
                <li key={item} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-3xl p-1 md:p-8 flex items-center justify-center min-h-[400px]">
             {/* Calendar Embed Placeholder */}
             <div className="text-center p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 w-full">
                <svg className="w-12 h-12 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <p className="text-slate-400 font-medium">Calendar booking interface would be embedded here.</p>
                <p className="text-xs text-slate-300 mt-2">(e.g., Calendly, SavvyCal, or Hubspot)</p>
             </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
