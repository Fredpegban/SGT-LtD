
import React from 'react';
import Link from 'next/link';
import { Container } from './Container';

const solutions = [
  { id: 'ecomtech', title: 'eComTech', href: '/solutions/ecomtech' },
  { id: 'sectech', title: 'SecTech', href: '/solutions/sectech' },
  { id: 'agrictech', title: 'AgricTech', href: '/solutions/agrictech' },
  { id: 'fintech', title: 'FinTech', href: '/solutions/fintech' },
  { id: 'nichtech', title: 'NichTech', href: '/solutions/nichtech' },
  { id: 'edutech', title: 'EduTech', href: '/solutions/edutech' }
];

interface SolutionNavProps {
  currentId: string;
}

export const SolutionNav: React.FC<SolutionNavProps> = ({ currentId }) => {
  const otherSolutions = solutions.filter(s => s.id !== currentId);

  return (
    <section className="py-16 border-t border-slate-100 bg-white">
      <Container>
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Other Solutions</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {otherSolutions.map((s) => (
            <Link 
              key={s.id} 
              href={s.href}
              className="px-6 py-4 rounded-xl border border-slate-100 bg-slate-50 text-slate-600 font-medium hover:border-indigo-500 hover:text-indigo-600 hover:bg-white transition-all text-center text-sm"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
