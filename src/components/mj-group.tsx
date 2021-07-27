import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjGroupProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    className?: string;
    backgroundColor?: string;
    direction?: 'ltr' | 'rtl';
    verticalAlign?: string;
    width?: string | number;
}

const MjGroup = ({
    children,
    dangerouslySetInnerHTML,
    className,
    backgroundColor,
    direction,
    verticalAlign,
    width,
}: MjGroupProps): ReactElement =>
    createElement(
        'mj-group',
        {
            'css-class': className,
            dangerouslySetInnerHTML,
            'background-color': backgroundColor,
            direction,
            'vertical-align': verticalAlign,
            width: typeof width !== 'undefined' ? mjmlAttributesProcessors.unit(width) : undefined,
        },
        children,
    );

export default MjGroup;
