import React from 'react';
import { type SharedFlexProps, getFlexClasses } from '../layout/layoutProperties';

// Extend the shared properties alongside native Span attributes
export interface FlexSpanProps extends SharedFlexProps, React.HTMLAttributes<HTMLSpanElement> { }

export const FlexSpan = ({
    direction = 'row',
    align = 'stretch',
    justify = 'start',
    gap = 'md',
    margin = '',
    children,
    className = '',
    ...props
}: FlexSpanProps) => {

    const flexClasses = getFlexClasses({ direction, align, justify, gap, margin });
    const spanClasses = `${flexClasses} ${className}`;

    return (
        <span className={spanClasses} {...props}>
            {children}
        </span>
    );
};