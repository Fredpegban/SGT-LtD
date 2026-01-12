
import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './app/(marketing)/page.tsx';
import MarketingLayout from './app/(marketing)/layout.tsx';

// Mock Next.js navigation and links for the browser preview environment
// This allows the App Router components to function in a static context
const mockLink = ({ href, children, className, onClick }: any) => {
  return (
    <a 
      href={href} 
      className={className} 
      onClick={(e) => {
        if (onClick) onClick(e);
        console.log(`Navigating to: ${href}`);
      }}
    >
      {children}
    </a>
  );
};

// Override imports for the preview
(window as any).nextNavigation = {
  usePathname: () => window.location.pathname || '/',
  useRouter: () => ({
    push: (url: string) => {
      console.log(`Router.push: ${url}`);
      window.location.href = url;
    },
    replace: (url: string) => {
      console.log(`Router.replace: ${url}`);
      window.location.replace(url);
    }
  }),
};

(window as any).nextLink = mockLink;

// Render the application
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      {/* Fix: Explicitly passing children to MarketingLayout to resolve the missing children property error in the render call */}
      <MarketingLayout children={<HomePage />} />
    </React.StrictMode>
  );
}
