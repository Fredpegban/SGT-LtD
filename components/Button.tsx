
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-slate-950 text-white hover:bg-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] border border-white/10",
    secondary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-[0_4px_12px_rgba(79,70,229,0.2)] hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] border border-indigo-400/20",
    outline: "border-2 border-slate-200 bg-white text-slate-700 hover:border-slate-950 hover:bg-slate-50 hover:text-slate-950 shadow-sm",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100"
  };

  const sizes = {
    sm: "px-5 py-2 text-xs uppercase tracking-widest",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles} disabled={disabled}>
      {children}
    </button>
  );
};
