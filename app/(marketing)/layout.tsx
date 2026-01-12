
'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Background Mesh Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-mesh overflow-hidden">
        {/* Softened Gradient Orbs */}
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[70%] rounded-full bg-indigo-500/5 blur-[180px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-15%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/5 blur-[180px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
