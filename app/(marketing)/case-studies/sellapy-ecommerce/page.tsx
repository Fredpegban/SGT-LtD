
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export const metadata = { title: 'Case Study: Sellapy eCommerce' };

export default function SellapyCaseStudy() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-10">Sellapy eCommerce — niche marketplace infrastructure built to scale.</h1>
          
          <div className="mb-20">
            <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-4">Overview</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Sellapy eCommerce is a niche-first commerce platform designed to support multi-vendor workflows, payments, and high-conversion buyer journeys—built for operational control and future expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-xl font-bold mb-6">The Challenge</h2>
              <ul className="space-y-4 text-slate-600">
                <li>• Build a marketplace-ready foundation with vendor onboarding and governance</li>
                <li>• Enable clean purchase flows and monetisation</li>
                <li>• Ensure security, auditability, and maintainability from day one</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-6">What We Built</h2>
              <ul className="space-y-4 text-slate-600">
                <li>• Marketplace-ready onboarding and role-based access</li>
                <li>• Payments foundation and monetisation flows</li>
                <li>• Admin dashboards for operational control</li>
                <li>• Analytics-ready event structure for growth decisions</li>
                <li>• Production-grade API patterns</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-xl font-bold mb-6">Architecture & Security</h2>
              <ul className="space-y-4 text-slate-600">
                <li>• Secure-by-default authentication and permissions</li>
                <li>• Robust logging/audit patterns for critical actions</li>
                <li>• Production-grade API patterns (validation, monitoring)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-6">Delivery Approach</h2>
              <ul className="space-y-4 text-slate-600">
                <li>• Discovery sprint → MVP sprints → stabilization</li>
                <li>• Automated testing for critical purchase flows</li>
                <li>• Release discipline for predictable iteration</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-12 rounded-3xl mb-20">
            <h2 className="text-2xl font-bold mb-8">Outcomes</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <span className="text-indigo-600 font-bold block mb-1">Outcome:</span>
                <p className="text-slate-700">Reduced time-to-launch through reusable modules</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <span className="text-indigo-600 font-bold block mb-1">Outcome:</span>
                <p className="text-slate-700">Improved operational visibility with admin controls</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <span className="text-indigo-600 font-bold block mb-1">Outcome:</span>
                <p className="text-slate-700">Conversion improvements through UX iteration cycles</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center py-12 border-t border-slate-200">
            <h3 className="text-2xl font-bold mb-8">Ready to build your marketplace?</h3>
            <Button href="/contact/start" size="lg">Start a Project</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
