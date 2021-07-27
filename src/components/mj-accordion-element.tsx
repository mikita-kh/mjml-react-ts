import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjAccordionElementProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    className?: string;
    backgroundColor?: string;
    border?: string;
    fontFamily?: string;
    iconAlign?: 'top' | 'middle' | 'bottom';
    iconWidth?: string | number;
    iconHeight?: string;
    iconWrappedUrl?: string;
    iconWrappedAlt?: string;
    iconUnwrappedUrl?: string;
    iconUnwrappedAlt?: string;
    iconPosition?: 'left' | 'right';
}

const MjAccordionElement = ({
    children,
    dangerouslySetInnerHTML,
    className,
    backgroundColor,
    border,
    fontFamily,
    iconAlign,
    iconWidth,
    iconHeight,
    iconWrappedUrl,
    iconWrappedAlt,
    iconUnwrappedUrl,
    iconUnwrappedAlt,
    iconPosition,
}: MjAccordionElementProps): ReactElement =>
    createElement(
        'mj-accordion-element',
        {
            'css-class': className,
            dangerouslySetInnerHTML,
            'background-color': backgroundColor,
            border,
            'font-family': fontFamily,
            'icon-align': iconAlign,
            'icon-width': typeof iconWidth !== 'undefined' ? mjmlAttributesProcessors.unit(iconWidth) : undefined,
            'icon-height': iconHeight,
            'icon-wrapped-url': iconWrappedUrl,
            'icon-wrapped-alt': iconWrappedAlt,
            'icon-unwrapped-url': iconUnwrappedUrl,
            'icon-unwrapped-alt': iconUnwrappedAlt,
            'icon-position': iconPosition,
        },
        children,
    );

export default MjAccordionElement;
