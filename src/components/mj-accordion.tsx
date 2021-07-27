import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjAccordionProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    containerBackgroundColor?: string;
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
    paddingBottom?: string | number;
    paddingLeft?: string;
    paddingRight?: string | number;
    paddingTop?: string;
    padding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
}

const MjAccordion = ({
    children,
    dangerouslySetInnerHTML,
    containerBackgroundColor,
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
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    padding,
}: MjAccordionProps): ReactElement =>
    createElement(
        'mj-accordion',
        {
            dangerouslySetInnerHTML,
            'container-background-color': containerBackgroundColor,
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
            'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
            'padding-left': paddingLeft,
            'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
            'padding-top': paddingTop,
            padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
        },
        children,
    );

export default MjAccordion;
