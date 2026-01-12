
import React from 'react';
import { Container } from '@/components/Container';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <div className="py-24 prose prose-slate max-w-none">
      <Container size="md">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-slate-600 mb-6">Last updated: May 20, 2024</p>
        
        <h2 className="text-2xl font-bold mt-12 mb-4">1. Information We Collect</h2>
        <p>We collect information you provide directly to us via our contact forms, including name, email address, company details, and project specifics.</p>
        
        <h2 className="text-2xl font-bold mt-12 mb-4">2. How We Use Information</h2>
        <p>We use the information to understand your project needs, respond to inquiries, and improve our services. We do not sell or share your data with third parties for marketing purposes.</p>
        
        <h2 className="text-2xl font-bold mt-12 mb-4">3. Data Retention</h2>
        <p>We retain your information only as long as necessary to fulfill the purposes for which it was collected, or as required by law.</p>
        
        <h2 className="text-2xl font-bold mt-12 mb-4">4. Your Rights</h2>
        <p>Under GDPR, you have the right to access, rectify, or erase your personal data. Contact us at privacy@sellapy.global to exercise these rights.</p>
      </Container>
    </div>
  );
}
