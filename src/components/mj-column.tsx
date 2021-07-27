import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjColumnProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    className?: string;
    backgroundColor?: string;
    border?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRadius?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    borderRight?: string;
    borderTop?: string;
    direction?: 'ltr' | 'rtl';
    innerBackgroundColor?: string;
    paddingBottom?: string | number;
    paddingLeft?: string;
    paddingRight?: string | number;
    paddingTop?: string;
    innerBorder?: string;
    innerBorderBottom?: string;
    innerBorderLeft?: string;
    innerBorderRadius?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    innerBorderRight?: string;
    innerBorderTop?: string;
    padding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    verticalAlign?: 'top' | 'bottom' | 'middle';
    width?: string;
}

const MjColumn = ({
    children,
    dangerouslySetInnerHTML,
    className,
    backgroundColor,
    border,
    borderBottom,
    borderLeft,
    borderRadius,
    borderRight,
    borderTop,
    direction,
    innerBackgroundColor,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    innerBorder,
    innerBorderBottom,
    innerBorderLeft,
    innerBorderRadius,
    innerBorderRight,
    innerBorderTop,
    padding,
    verticalAlign,
    width,
}: MjColumnProps): ReactElement =>
    createElement(
        'mj-column',
        {
            'css-class': className,
            dangerouslySetInnerHTML,
            'background-color': backgroundColor,
            border,
            'border-bottom': borderBottom,
            'border-left': borderLeft,
            'border-radius': typeof borderRadius !== 'undefined' ? mjmlAttributesProcessors.unit(borderRadius) : undefined,
            'border-right': borderRight,
            'border-top': borderTop,
            direction,
            'inner-background-color': innerBackgroundColor,
            'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
            'padding-left': paddingLeft,
            'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
            'padding-top': paddingTop,
            'inner-border': innerBorder,
            'inner-border-bottom': innerBorderBottom,
            'inner-border-left': innerBorderLeft,
            'inner-border-radius': typeof innerBorderRadius !== 'undefined' ? mjmlAttributesProcessors.unit(innerBorderRadius) : undefined,
            'inner-border-right': innerBorderRight,
            'inner-border-top': innerBorderTop,
            padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
            'vertical-align': verticalAlign,
            width,
        },
        children,
    );

export default MjColumn;
