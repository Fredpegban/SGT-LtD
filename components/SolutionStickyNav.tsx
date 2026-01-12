
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';

const solutions = [
  { id: 'ecomtech', title: 'eComTech', href: '/solutions/ecomtech' },
  { id: 'sectech', title: 'SecTech', href: '/solutions/sectech' },
  { id: 'agrictech', title: 'AgricTech', href: '/solutions/agrictech' },
  { id: 'fintech', title: 'FinTech', href: '/solutions/fintech' },
  { id: 'nichtech', title: 'NichTech', href: '/solutions/nichtech' },
  { id: 'edutech', title: 'EduTech', href: '/solutions/edutech' }
];

export const SolutionStickyNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-[72px] z-30 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md shadow-sm">
      <Container>
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-3">
          <div className="flex items-center gap-2 pr-4 border-r border-slate-200 mr-2 shrink-0">
             <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">Jump To</span>
          </div>
          <div className="flex items-center gap-1.5">
            {solutions.map((s) => {
              const isActive = pathname === s.href;
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                      : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 active:scale-95'
                  }`}
                >
                  {s.title}
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </nav>
  );
};
