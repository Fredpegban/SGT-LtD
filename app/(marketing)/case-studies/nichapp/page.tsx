
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export const metadata = { title: 'Case Study: Nichapp | SGT' };

export default function NichappCaseStudy() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-slate-950">Nichapp — monetisation and validation for niche founders and creators.</h1>
          
          <div className="mb-20">
            <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-4">Overview</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Nichapp helps niche builders tell their story, validate ideas, and monetise through supporter tiers—combining community mechanics with a scalable platform foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-xl font-bold mb-6 text-slate-950">The Challenge</h2>
              <ul className="space-y-4 text-slate-600">
                <li>• Design two-sided experiences (founder + supporter)</li>
                <li>• Enable payments, tiers, and gated value</li>
                <li>• Build trust features and moderation-ready patterns</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-6 text-slate-950">What We Built</h2>
              <ul className="space-y-4 text-slate-600">
                <li>• Founder onboarding and story publishing flows</li>
                <li>• Supporter tiers, subscriptions, and benefit delivery</li>
                <li>• Admin moderation and operational dashboards</li>
                <li>• Analytics for activation, conversion, retention</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-xl font-bold mb-6 text-slate-950">Architecture & Security</h2>
              <ul className="space-y-4 text-slate-600">
                <li>• Secure payments integration with resilient webhook patterns</li>
                <li>• Role-based access control and data minimisation principles</li>
                <li>• Audit trails for key monetisation and account actions</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-6 text-slate-950">Delivery Approach</h2>
              <ul className="space-y-4 text-slate-600">
                <li>• Journey mapping and rapid prototyping in Discovery</li>
                <li>• Incremental shipping with QA gates on monetisation flows</li>
                <li>• Instrumentation-first analytics for iteration</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-12 rounded-3xl mb-20">
            <h2 className="text-2xl font-bold mb-8 text-slate-950">Outcomes</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <span className="text-indigo-600 font-bold block mb-1">Outcome:</span>
                <p className="text-slate-700">Increased activation through improved onboarding</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <span className="text-indigo-600 font-bold block mb-1">Outcome:</span>
                <p className="text-slate-700">Reduced friction in supporter checkout</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <span className="text-indigo-600 font-bold block mb-1">Outcome:</span>
                <p className="text-slate-700">More consistent benefit delivery through automation</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center py-12 border-t border-slate-200">
            <h3 className="text-2xl font-bold mb-8">Ready to build your creator platform?</h3>
            <Button href="/contact/start" size="lg">Start a Project</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
