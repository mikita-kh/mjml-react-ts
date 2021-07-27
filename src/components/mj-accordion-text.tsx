import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjAccordionTextProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    className?: string;
    backgroundColor?: string;
    fontSize?: string | number;
    fontFamily?: string;
    fontWeight?: string;
    letterSpacing?: string | number;
    lineHeight?: string;
    color?: string;
    paddingBottom?: string | number;
    paddingLeft?: string;
    paddingRight?: string | number;
    paddingTop?: string;
    padding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
}

const MjAccordionText = ({
    children,
    dangerouslySetInnerHTML,
    className,
    backgroundColor,
    fontSize,
    fontFamily,
    fontWeight,
    letterSpacing,
    lineHeight,
    color,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    padding,
}: MjAccordionTextProps): ReactElement =>
    createElement(
        'mj-accordion-text',
        {
            'css-class': className,
            dangerouslySetInnerHTML,
            'background-color': backgroundColor,
            'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
            'font-family': fontFamily,
            'font-weight': fontWeight,
            'letter-spacing': typeof letterSpacing !== 'undefined' ? mjmlAttributesProcessors.unit(letterSpacing) : undefined,
            'line-height': lineHeight,
            color,
            'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
            'padding-left': paddingLeft,
            'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
            'padding-top': paddingTop,
            padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
        },
        children,
    );

export default MjAccordionText;
