
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export const metadata = { title: 'Case Study: Gamapy | SGT' };

export default function GamapyCaseStudy() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-slate-950">Gamapy — tournament operations and payments, engineered for scale.</h1>
          
          <div className="mb-20">
            <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-4">Overview</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Gamapy coordinates tournament entry, admin operations, and monetisation—designed to reduce manual workload while increasing reliability and participant clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-xl font-bold mb-6 text-slate-950">The Challenge</h2>
              <ul className="space-y-4 text-slate-600">
                <li>• Coordinate tournament lifecycle: entry → brackets → results</li>
                <li>• Monetise through entry fees and plans</li>
                <li>• Build admin tooling to reduce operational overhead</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-6 text-slate-950">What We Built</h2>
              <ul className="space-y-4 text-slate-600">
                <li>• Tournament setup and participant management workflows</li>
                <li>• Payment and pricing structure with scalable admin controls</li>
                <li>• Admin dashboards for moderation, operations, and reporting</li>
                <li>• Foundational patterns for expansion to live formats</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-xl font-bold mb-6 text-slate-950">Architecture & Security</h2>
              <ul className="space-y-4 text-slate-600">
                <li>• Strong access control across player/admin roles</li>
                <li>• Reliability patterns for payments and event updates</li>
                <li>• Logging and auditability for disputes and changes</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-6 text-slate-950">Delivery Approach</h2>
              <ul className="space-y-4 text-slate-600">
                <li>• Clear tournament lifecycle modeling</li>
                <li>• Operational workflows built alongside user journeys</li>
                <li>• Release readiness checks for payments and admin</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-12 rounded-3xl mb-20">
            <h2 className="text-2xl font-bold mb-8 text-slate-950">Outcomes</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <span className="text-indigo-600 font-bold block mb-1">Outcome:</span>
                <p className="text-slate-700">Reduced manual admin time through automation</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <span className="text-indigo-600 font-bold block mb-1">Outcome:</span>
                <p className="text-slate-700">Increased operational visibility via dashboards</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <span className="text-indigo-600 font-bold block mb-1">Outcome:</span>
                <p className="text-slate-700">Cleaner user journey leading to higher completion rates</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center py-12 border-t border-slate-200">
            <h3 className="text-2xl font-bold mb-8">Ready to build your gaming platform?</h3>
            <Button href="/contact/start" size="lg">Start a Project</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
