
import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  containerSize = 'lg',
  eyebrow,
  title,
  subtitle,
  centered = false
}) => {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <Container size={containerSize}>
        {(eyebrow || title || subtitle) && (
          <div className={`mb-16 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
            {eyebrow && (
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-950 mb-6 text-balance">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-slate-600 leading-relaxed text-balance">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};
