import React from 'react';
import { type SharedFlexProps, getFlexClasses } from '../layout/layoutProperties';

// Extend the shared properties alongside native Div attributes
export interface FlexDivProps extends SharedFlexProps, React.HTMLAttributes<HTMLDivElement> { }

export const FlexDiv = ({
    direction = 'row',
    align = 'stretch',
    justify = 'start',
    gap = 'md',
    margin = '',
    children,
    className = '',
    wrap = false,
    ...props
}: FlexDivProps) => {

    const flexClasses = getFlexClasses({ direction, align, justify, gap, margin, wrap });
    const divClasses = `${flexClasses} ${className}`;

    return (
        <div className={divClasses} {...props}>
            {children}
        </div>
    );
};