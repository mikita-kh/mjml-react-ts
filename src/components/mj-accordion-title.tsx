import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjAccordionTitleProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    className?: string;
    backgroundColor?: string;
    color?: string;
    fontSize?: string | number;
    fontFamily?: string;
    paddingBottom?: string | number;
    paddingLeft?: string;
    paddingRight?: string | number;
    paddingTop?: string;
    padding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
}

const MjAccordionTitle = ({
    children,
    dangerouslySetInnerHTML,
    className,
    backgroundColor,
    color,
    fontSize,
    fontFamily,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    padding,
}: MjAccordionTitleProps): ReactElement =>
    createElement(
        'mj-accordion-title',
        {
            'css-class': className,
            dangerouslySetInnerHTML,
            'background-color': backgroundColor,
            color,
            'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
            'font-family': fontFamily,
            'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
            'padding-left': paddingLeft,
            'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
            'padding-top': paddingTop,
            padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
        },
        children,
    );

export default MjAccordionTitle;
