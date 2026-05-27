import React from 'react';
import { type SharedFlexProps, getFlexClasses } from './layoutProperties';

// Extend the shared properties alongside native Section attributes
export interface FlexSectionProps extends SharedFlexProps, React.HTMLAttributes<HTMLElement> { }

export const FlexSection = ({
    direction = 'responsive',
    align = 'stretch',
    justify = 'start',
    gap = 'md',
    margin = 'my-10',
    children,
    className = '',
    ...props
}: FlexSectionProps) => {

    const flexClasses = getFlexClasses({ direction, align, justify, gap, margin });
    const sectionClasses = `w-[80%] mx-auto ${flexClasses} ${className}`;

    return (
        <section className={sectionClasses} {...props}>
            {children}
        </section>
    );
};