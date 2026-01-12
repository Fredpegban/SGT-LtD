
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { SolutionNav } from '@/components/SolutionNav';

export const metadata = { title: 'NichTech | SGT' };

export default function NichTechPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl font-bold mb-8 text-slate-950">NichTech that turns communities into revenue.</h1>
          <p className="text-2xl text-slate-600 mb-10 leading-relaxed">
            We build creator and founder platforms that monetise attention ethically—supporter tiers, fundraising, validation flows, community engagement, and product-led growth loops.
          </p>
          <Button href="/contact/start" size="lg">Start a Project</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-slate-950">What We Build</h2>
            <ul className="space-y-4">
              {[
                "Creator/founder profiles and storytelling feeds",
                "Supporter tiers, memberships, and rewards",
                "Fundraising and validation workflows",
                "Referral and ambassador programs",
                "Moderation, trust and safety controls",
                "Analytics: activation, retention, conversion"
              ].map(item => (
                <li key={item} className="flex gap-4 text-slate-700">
                  <span className="text-indigo-600 font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-8 text-slate-950">AI Use Cases</h2>
            <ul className="space-y-4">
              {[
                "Content assistance with brand-safe guardrails",
                "Smart routing for community moderation queues",
                "Personalised onboarding and guidance"
              ].map(item => (
                <li key={item} className="flex gap-4 text-slate-700">
                  <span className="text-indigo-600 font-bold">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      
      <SolutionNav currentId="nichtech" />

      <Container className="mt-16">
        <div className="text-center p-16 bg-slate-950 rounded-3xl text-white">
          <h2 className="text-3xl font-bold mb-6">Build a NichTech platform your community loves.</h2>
          <Button href="/contact/start" variant="secondary" size="lg">Get Started</Button>
        </div>
      </Container>
    </div>
  );
}
