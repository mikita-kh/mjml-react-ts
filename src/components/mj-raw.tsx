import { createElement, ReactElement, ReactNode } from 'react';

export interface MjRawProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
}

const MjRaw = ({ children, dangerouslySetInnerHTML }: MjRawProps): ReactElement =>
    createElement(
        'mj-raw',
        {
            dangerouslySetInnerHTML,
        },
        children,
    );

export default MjRaw;
