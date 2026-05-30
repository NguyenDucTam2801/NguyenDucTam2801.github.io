import React from 'react';

// 1. Types
export type Direction = 'row' | 'col' | 'responsive' | 'rowReverse' | 'colReverse' | 'responsiveReverse';
export type Align = 'start' | 'center' | 'end' | 'stretch';
export type Justify = 'start' | 'center' | 'end' | 'between' | 'around';
export type Gap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// 2. Base props that both components will share
export interface SharedFlexProps {
    direction?: Direction;
    align?: Align;
    justify?: Justify;
    gap?: Gap;
    margin?: string;
    wrap?: boolean; // Defined as boolean
    children?: React.ReactNode;
}

// 3. Constant style mappings
export const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
    responsive: 'flex-col md:flex-row',
    rowReverse: 'flex-row-reverse',
    colReverse: 'flex-col-reverse',
    responsiveReverse: 'flex-col-reverse md:flex-row',
};

export const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
};

export const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around'
};

export const gapClasses = {
    none: 'gap-0',
    xs: 'gap-2',   // 8px
    sm: 'gap-4',   // 16px
    md: 'gap-6',   // 24px
    lg: 'gap-10',  // 40px
    xl: 'gap-16',  // 64px
    '2xl': 'gap-20' // 80px
};

// 4. Utility function to generate Tailwind classes (updated to process 'wrap')
export const getFlexClasses = ({
    direction = 'responsive',
    align = 'stretch',
    justify = 'start',
    gap = 'md',
    margin = '',
    wrap = false // Default to false (no wrap)
}: Omit<SharedFlexProps, 'children'>): string => {
    return [
        'flex',
        directionClasses[direction],
        alignClasses[align],
        justifyClasses[justify],
        gapClasses[gap],
        wrap ? 'flex-wrap' : '', // Appends 'flex-wrap' if wrap is set to true
        margin
    ].filter(Boolean).join(' ');
};