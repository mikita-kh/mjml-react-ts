import { createElement, ReactElement, ReactNode } from 'react';

export interface MjHtmlAttributesProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
}

const MjHtmlAttributes = ({ children, dangerouslySetInnerHTML }: MjHtmlAttributesProps): ReactElement =>
    createElement(
        'mj-html-attributes',
        {
            dangerouslySetInnerHTML,
        },
        children,
    );

export default MjHtmlAttributes;
