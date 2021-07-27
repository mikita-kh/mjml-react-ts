import { createElement, ReactElement } from 'react';

export interface MjStyleProps {
    children: string;
    inline?: boolean;
}

const MjStyle = ({ children, inline }: MjStyleProps): ReactElement =>
    createElement('mj-style', {
        dangerouslySetInnerHTML: { __html: children },
        inline: inline ? 'inline' : undefined,
    });

export default MjStyle;
