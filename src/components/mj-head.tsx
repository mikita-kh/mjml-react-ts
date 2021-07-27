import { createElement, ReactElement, ReactNode } from 'react';

export interface MjHeadProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
}

const MjHead = ({ children, dangerouslySetInnerHTML }: MjHeadProps): ReactElement =>
    createElement(
        'mj-head',
        {
            dangerouslySetInnerHTML,
        },
        children,
    );

export default MjHead;
