
import React from 'react';
import { Container } from '@/components/Container';
import Link from 'next/link';

export const metadata = { title: 'Thank You' };

export default function ThanksPage() {
  return (
    <div className="py-32">
      <Container size="sm" className="text-center">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-10">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="text-4xl font-bold mb-6">Thanks—your brief is in.</h1>
        <p className="text-xl text-slate-600 mb-12">
          We’ll review and follow up with next steps. In the meantime, you can explore relevant work:
        </p>

        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <Link href="/case-studies" className="p-4 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">View Case Studies</Link>
          <Link href="/security" className="p-4 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">Security Practices</Link>
          <Link href="/solutions" className="p-4 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">Solutions</Link>
        </div>
      </Container>
    </div>
  );
}
