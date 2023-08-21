import React from 'react';
type Props = {
    lines?: 2 | 3 | undefined;
    open?: boolean | undefined;
    options?: {
        strokeWidth?: number | undefined;
        transitionDuration?: string | number | undefined;
        transitionDelay?: string | number | undefined;
        horizontalLengthRatio?: number | undefined;
        crossLengthRatio?: number | undefined;
    };
    className?: string | undefined;
};
export declare const StretchShrinkHamburgerIcon: ({ lines, open, options, className, }: Props) => React.JSX.Element;
export {};
