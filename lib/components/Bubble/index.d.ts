import React from 'react';
export interface BubbleProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: string;
    this_content?: React.ReactNode;
}
export declare const Bubble: React.ForwardRefExoticComponent<BubbleProps & React.RefAttributes<HTMLDivElement>>;
