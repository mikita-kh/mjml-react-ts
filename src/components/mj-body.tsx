import { createElement, ReactElement, ReactNode } from 'react';

export interface MjBodyProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    className?: string;
    width?: string;
    backgroundColor?: string;
}

const MjBody = ({ children, dangerouslySetInnerHTML, className, width, backgroundColor }: MjBodyProps): ReactElement =>
    createElement(
        'mj-body',
        {
            'css-class': className,
            dangerouslySetInnerHTML,
            width,
            'background-color': backgroundColor,
        },
        children,
    );

export default MjBody;
