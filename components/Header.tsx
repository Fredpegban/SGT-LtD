
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Products', href: '/products' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Security', href: '/security' },
    { name: 'Company', href: '/company' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-slate-200/60 shadow-sm' : 'py-6 bg-transparent'}`}>
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center text-white font-bold group-hover:scale-105 transition-all shadow-lg shadow-indigo-500/10">
                S
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-950">SGT</span>
            </Link>
            
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                // Defensive check: pathname might be null if called outside of a Next.js Router context
                const isActive = pathname ? pathname.startsWith(link.href) : false;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className={`text-sm font-semibold transition-all ${isActive ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-950'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="text-sm font-bold text-slate-600 hover:text-slate-950 px-4">Contact</Link>
            <Button href="/contact/start" size="sm" className="h-10 px-6 font-bold">
              Start a Project
            </Button>
          </div>

          <button 
            className="lg:hidden p-2 text-slate-600 bg-white/50 backdrop-blur rounded-lg border border-slate-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto">
          <Container className="py-12">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-bold text-slate-950 flex justify-between items-center group"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <svg className="w-6 h-6 text-slate-300 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              ))}
              <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col gap-4">
                <Button href="/contact/start" size="lg" className="w-full">
                  Start a Project
                </Button>
                <Link href="/contact" className="text-center font-bold text-slate-600 py-4">Contact Support</Link>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};
