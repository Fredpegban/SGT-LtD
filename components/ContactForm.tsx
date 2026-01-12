
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedSolution, setSelectedSolution] = useState('');

  useEffect(() => {
    // Extract solution from URL query parameters if present
    // Using window.location for robustness in the current preview environment
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const solutionParam = params.get('solution');
      if (solutionParam) {
        setSelectedSolution(solutionParam);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Mock success for preview environment
    setTimeout(() => {
      // In a real Next.js app we'd use router.push
      // In this environment, index.tsx mocks router.push to window.location.href
      router.push('/contact/thanks');
    }, 1000);
  };

  const inputClasses = "w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:outline-none transition-all placeholder:text-slate-400 text-slate-900";
  const labelClasses = "block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest";

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClasses}>Full Name *</label>
          <input type="text" id="name" name="name" required className={inputClasses} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>Email Address *</label>
          <input type="email" id="email" name="email" required className={inputClasses} placeholder="you@company.com" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="company" className={labelClasses}>Company / Project *</label>
          <input type="text" id="company" name="company" required className={inputClasses} placeholder="Name of your project" />
        </div>
        <div>
          <label htmlFor="role" className={labelClasses}>Your Role *</label>
          <input type="text" id="role" name="role" required className={inputClasses} placeholder="e.g. Founder, CTO" />
        </div>
      </div>

      <div>
        <label htmlFor="solution" className={labelClasses}>Solution Area *</label>
        <select 
          id="solution" 
          name="solution" 
          required 
          className={inputClasses}
          value={selectedSolution}
          onChange={(e) => setSelectedSolution(e.target.value)}
        >
          <option value="">Select an area</option>
          <option value="ecomtech">eComTech</option>
          <option value="sectech">SecTech</option>
          <option value="agrictech">AgricTech</option>
          <option value="fintech">FinTech</option>
          <option value="nichtech">NichTech</option>
          <option value="edutech">EduTech</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className={labelClasses}>What are you building? *</label>
        <textarea id="description" name="description" required rows={4} className={inputClasses} placeholder="Describe the problem you're solving..."></textarea>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="timeline" className={labelClasses}>Timeline *</label>
          <select id="timeline" name="timeline" required className={inputClasses}>
            <option value="">Select timing</option>
            <option value="asap">ASAP</option>
            <option value="4-6-weeks">4–6 weeks</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClasses}>Budget Range *</label>
          <select id="budget" name="budget" required className={inputClasses}>
            <option value="">Select range</option>
            <option value="5-15k">£5,000 – £15,000</option>
            <option value="15-50k">£15,000 – £50,000</option>
            <option value="50-100k">£50,000 – £100,000</option>
            <option value="100k+">£100,000+</option>
          </select>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
        <input type="checkbox" id="consent" name="consent" required className="mt-1 w-5 h-5 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500" />
        <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
          I consent to SGT storing my information for project inquiry purposes. We respect your privacy and handle all data with enterprise-grade confidentiality.
        </label>
      </div>

      {error && <p className="text-red-500 font-bold p-4 bg-red-50 rounded-lg">{error}</p>}

      <Button type="submit" size="lg" className="w-full h-16 text-lg" disabled={loading}>
        {loading ? 'Sending...' : 'Send Project Brief'}
      </Button>
    </form>
  );
};
