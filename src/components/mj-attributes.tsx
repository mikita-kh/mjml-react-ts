import { createElement, ReactElement, ReactNode } from 'react';

export interface MjAttributesProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
}

const MjAttributes = ({ children, dangerouslySetInnerHTML }: MjAttributesProps): ReactElement =>
    createElement(
        'mj-attributes',
        {
            dangerouslySetInnerHTML,
        },
        children,
    );

export default MjAttributes;
