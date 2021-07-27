import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjButtonProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    align?: 'left' | 'center' | 'right';
    backgroundColor?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRadius?: string;
    borderRight?: string;
    borderTop?: string;
    border?: string;
    color?: string;
    containerBackgroundColor?: string;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: string;
    fontWeight?: string;
    height?: string | number;
    href?: string;
    name?: string;
    title?: string;
    innerPadding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    letterSpacing?: string;
    lineHeight?: string | number;
    paddingBottom?: string;
    paddingLeft?: string | number;
    paddingRight?: string;
    paddingTop?: string | number;
    padding?: string;
    rel?: string;
    target?: string;
    textDecoration?: string;
    textTransform?: string;
    verticalAlign?: 'top' | 'bottom' | 'middle';
    textAlign?: string;
    width?: string | number;
}

const MjButton = ({
    children,
    dangerouslySetInnerHTML,
    align,
    backgroundColor,
    borderBottom,
    borderLeft,
    borderRadius,
    borderRight,
    borderTop,
    border,
    color,
    containerBackgroundColor,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    height,
    href,
    name,
    title,
    innerPadding,
    letterSpacing,
    lineHeight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    padding,
    rel,
    target,
    textDecoration,
    textTransform,
    verticalAlign,
    textAlign,
    width,
}: MjButtonProps): ReactElement =>
    createElement(
        'mj-button',
        {
            dangerouslySetInnerHTML,
            align,
            'background-color': backgroundColor,
            'border-bottom': borderBottom,
            'border-left': borderLeft,
            'border-radius': borderRadius,
            'border-right': borderRight,
            'border-top': borderTop,
            border,
            color,
            'container-background-color': containerBackgroundColor,
            'font-family': fontFamily,
            'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
            'font-style': fontStyle,
            'font-weight': fontWeight,
            height: typeof height !== 'undefined' ? mjmlAttributesProcessors.unit(height) : undefined,
            href,
            name,
            title,
            'inner-padding': typeof innerPadding !== 'undefined' ? mjmlAttributesProcessors.unit(innerPadding) : undefined,
            'letter-spacing': letterSpacing,
            'line-height': typeof lineHeight !== 'undefined' ? mjmlAttributesProcessors.unit(lineHeight) : undefined,
            'padding-bottom': paddingBottom,
            'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
            'padding-right': paddingRight,
            'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
            padding,
            rel,
            target,
            'text-decoration': textDecoration,
            'text-transform': textTransform,
            'vertical-align': verticalAlign,
            'text-align': textAlign,
            width: typeof width !== 'undefined' ? mjmlAttributesProcessors.unit(width) : undefined,
        },
        children,
    );

export default MjButton;
