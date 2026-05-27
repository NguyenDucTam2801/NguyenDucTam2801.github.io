import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: 'h1' | 'h2' | 'h3' | 'p';
    children: React.ReactNode
}

export const Typography = ({ variant = 'p', children, className = '', ...props }: TypographyProps) => {
    const variantClasses = {
        // h1: Mobile (5xl) ➜ iPad (7xl) ➜ Desktop (8xl)
        h1: 'text-5xl md:text-7xl lg:text-8xl font-bebas tracking-tighter text-white leading-none uppercase',

        // h2: Mobile (4xl) ➜ iPad (5xl) ➜ Desktop (6xl)
        h2: 'text-4xl md:text-5xl lg:text-6xl font-bebas tracking-wide text-white leading-tight',

        // h3: Mobile (2xl) ➜ iPad (3xl) ➜ Desktop (4xl)
        h3: 'text-2xl md:text-3xl lg:text-4xl font-manrope tracking-tight text-white leading-snug',

        // p: Mobile (base/16px) ➜ iPad & Desktop (lg/18px)
        p: 'text-base md:text-lg font-manrope text-gray-300 leading-relaxed'
    };

    const Component = variant;
    return (
        <Component className={`${variantClasses[variant]} ${className}`} {...props}>
            {children}
        </Component>
    );
};