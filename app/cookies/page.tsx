
import React from 'react';
import { Container } from '@/components/Container';

export const metadata = { title: 'Cookie Policy | SGT' };

export default function CookiePage() {
  return (
    <div className="py-24 prose prose-slate max-w-none">
      <Container size="md">
        <h1 className="text-4xl font-bold mb-8 text-slate-950">Cookie Policy</h1>
        <p className="text-slate-600 mb-12">Last updated: May 20, 2024</p>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-950">1. What are cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website function correctly and provide us with information about how you interact with our content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-950">2. How we use cookies</h2>
            <p>We use essential cookies to ensure our website works properly (e.g., for security and navigation). We also use analytical cookies to help us understand site performance and improve user experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-950">3. Your choices</h2>
            <p>You can manage cookie preferences through your browser settings. Note that disabling essential cookies may affect the functionality of our website.</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
