
import React from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { SolutionNav } from '@/components/SolutionNav';

export const metadata = { title: 'EduTech | SGT' };

export default function EduTechPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl font-bold mb-8 text-slate-950">EduTech designed for outcomes—learning that sticks.</h1>
          <p className="text-2xl text-slate-600 mb-10 leading-relaxed">
            SGT builds learning platforms that combine excellent UX, analytics, and automation—course delivery, assessments, cohorts, certifications, and AI-enhanced support.
          </p>
          <Button href="/contact/start" size="lg">Start a Project</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-slate-950">What We Build</h2>
            <ul className="space-y-4">
              {[
                "Course creation and content management",
                "Cohorts, scheduling, and learner journeys",
                "Assessments, assignments, feedback workflows",
                "Certification and credentialing",
                "Learning analytics dashboards",
                "Integrations: payments, email, community, CRM"
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
                "Personalised practice and feedback",
                "Learner support triage",
                "Content structuring and summarisation (with oversight)"
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
      
      <SolutionNav currentId="edutech" />

      <Container className="mt-16">
        <div className="text-center p-16 bg-slate-950 rounded-3xl text-white">
          <h2 className="text-3xl font-bold mb-6">Launch your EduTech platform with confidence.</h2>
          <Button href="/contact/start" variant="secondary" size="lg">Get Started</Button>
        </div>
      </Container>
    </div>
  );
}
