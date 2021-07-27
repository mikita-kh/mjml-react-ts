import { createElement, ReactElement, ReactNode } from 'react';

export interface MjPreviewProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
}

const MjPreview = ({ children, dangerouslySetInnerHTML }: MjPreviewProps): ReactElement =>
    createElement(
        'mj-preview',
        {
            dangerouslySetInnerHTML,
        },
        children,
    );

export default MjPreview;
