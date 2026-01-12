
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Sellapy Global Technology (SGT) Limited | AI-Native Product Engineering',
    template: '%s | SGT'
  },
  description: 'Sellapy Global Technology (SGT) is a Birmingham-based product and AI engineering company. We help niche businesses design, build, and operate cutting-edge platforms.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://sellapy.global',
    siteName: 'SGT Limited',
    title: 'Sellapy Global Technology (SGT) Limited',
    description: 'Niche-first. AI-native. Built to scale. Birmingham-based product and AI engineering company.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sellapy Global Technology (SGT) Limited',
    description: 'Build secure, AI-native products that scale.'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-50 text-slate-950 antialiased selection:bg-indigo-100 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
