import { createElement, ReactElement, ReactNode } from 'react';

export interface MjmlProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    owa?: 'desktop' | 'mobile';
    lang?: string;
}

const Mjml = ({ children, dangerouslySetInnerHTML, owa, lang }: MjmlProps): ReactElement =>
    createElement(
        'mjml',
        {
            dangerouslySetInnerHTML,
            owa,
            lang,
        },
        children,
    );

export default Mjml;
