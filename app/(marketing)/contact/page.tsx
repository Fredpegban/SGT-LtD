
import React from 'react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Link from 'next/link';

export const metadata = {
  title: 'Contact',
  description: 'Tell us what you’re building. We’ll respond with clear next steps.'
};

export default function ContactLandingPage() {
  return (
    <div className="flex flex-col">
      <Section 
        eyebrow="Connect"
        title="Tell us what you’re building."
        subtitle="We respond within 1–2 business days with clear next steps. If it’s a fit, we’ll propose a Discovery Sprint or a delivery plan."
      />

      <Container className="mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/contact/start" className="group p-12 premium-gradient text-white rounded-[2.5rem] hover:scale-[1.01] transition-all relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
             </div>
             <div className="relative z-10">
               <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10">Recommended</span>
               <h3 className="text-4xl font-bold mb-4 tracking-tight">Start a Project</h3>
               <p className="text-indigo-100/70 mb-10 max-w-xs text-lg">Detailed brief to understand scope and goals.</p>
               <span className="inline-flex items-center gap-2 font-bold group-hover:translate-x-1 transition-transform">
                 Get Started
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </span>
             </div>
          </Link>

          <Link href="/contact/book" className="group p-12 bg-white border border-slate-200 rounded-[2.5rem] hover:border-indigo-500 hover:shadow-xl transition-all flex flex-col justify-center">
             <h3 className="text-4xl font-bold mb-4 tracking-tight">Book a Call</h3>
             <p className="text-slate-500 mb-10 max-w-xs text-lg leading-relaxed">Fast alignment and a realistic delivery path consultation.</p>
             <span className="inline-flex items-center gap-2 font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
               Check Calendar
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </span>
          </Link>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-slate-400 italic">
            “Security is baked in. We keep your information confidential. We never share your idea.”
          </p>
        </div>
      </Container>
    </div>
  );
}
