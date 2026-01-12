
import React from 'react';
import { Container } from '@/components/Container';
import { ContactForm } from '@/components/ContactForm';
import { Section } from '@/components/Section';

export const metadata = {
  title: 'Start a Project',
  description: 'Provide details about your project to get a clear plan and timeline.'
};

export default function StartProjectPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h1 className="text-5xl font-bold mb-6 tracking-tight">Start a Project</h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                Provide the context we need to build a realistic roadmap.
              </p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-8 sticky top-32">
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
              <h3 className="text-lg font-bold mb-6 tracking-tight">What happens next</h3>
              <ul className="space-y-6">
                {[
                  { t: "Review", d: "We review within 1–2 business days." },
                  { t: "Clarification", d: "We reply with clarifying questions or a Discovery plan." },
                  { t: "Urgency", d: "If your project is urgent, book a call instead." }
                ].map(item => (
                  <li key={item.t} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 mt-1 text-[10px] font-bold text-white">✓</div>
                    <div>
                      <div className="font-bold text-slate-900">{item.t}</div>
                      <div className="text-sm text-slate-500">{item.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-indigo-600 rounded-3xl text-white">
               <h4 className="font-bold mb-4">Confidentiality</h4>
               <p className="text-sm text-indigo-100/80 leading-relaxed">
                  Every brief submitted to SGT is handled with strict confidentiality. We treat your intellectual property with the same rigor as our own.
               </p>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
