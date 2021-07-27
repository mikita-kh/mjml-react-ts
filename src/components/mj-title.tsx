import { createElement, ReactElement, ReactNode } from 'react';

export interface MjTitleProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
}

const MjTitle = ({ children, dangerouslySetInnerHTML }: MjTitleProps): ReactElement =>
    createElement(
        'mj-title',
        {
            dangerouslySetInnerHTML,
        },
        children,
    );

export default MjTitle;
