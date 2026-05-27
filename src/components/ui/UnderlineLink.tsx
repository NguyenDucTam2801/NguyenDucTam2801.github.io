import React from 'react';

// Extend the native HTML <a> attributes so it acts like a normal anchor link
export interface UnderlineLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
}

export const UnderlineLink = ({
    href,
    target,
    children,
    className = '',
    ...props
}: UnderlineLinkProps) => {

    // Automatically add secure rel attributes if opening in a new tab
    const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

    return (
        <a
            href={href}
            target={target}
            rel={rel}
            className={`underline decoration-[#d2e85d] decoration-2 underline-offset-8 hover:text-[#d2e85d] transition-all duration-300 ${className}`}
            {...props}
        >
            {children}
        </a>
    );
};