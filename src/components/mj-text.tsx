import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjTextProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    align?: 'left' | 'right' | 'center' | 'justify';
    backgroundColor?: string;
    color?: string;
    containerBackgroundColor?: string;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: string;
    fontWeight?: string;
    height?: string | number;
    letterSpacing?: string;
    lineHeight?: string | number;
    paddingBottom?: string;
    paddingLeft?: string | number;
    paddingRight?: string;
    paddingTop?: string | number;
    padding?: string;
    textDecoration?: string;
    textTransform?: string;
    verticalAlign?: 'top' | 'bottom' | 'middle';
}

const MjText = ({
    children,
    dangerouslySetInnerHTML,
    align,
    backgroundColor,
    color,
    containerBackgroundColor,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    height,
    letterSpacing,
    lineHeight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    padding,
    textDecoration,
    textTransform,
    verticalAlign,
}: MjTextProps): ReactElement =>
    createElement(
        'mj-text',
        {
            dangerouslySetInnerHTML,
            align,
            'background-color': backgroundColor,
            color,
            'container-background-color': containerBackgroundColor,
            'font-family': fontFamily,
            'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
            'font-style': fontStyle,
            'font-weight': fontWeight,
            height: typeof height !== 'undefined' ? mjmlAttributesProcessors.unit(height) : undefined,
            'letter-spacing': letterSpacing,
            'line-height': typeof lineHeight !== 'undefined' ? mjmlAttributesProcessors.unit(lineHeight) : undefined,
            'padding-bottom': paddingBottom,
            'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
            'padding-right': paddingRight,
            'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
            padding,
            'text-decoration': textDecoration,
            'text-transform': textTransform,
            'vertical-align': verticalAlign,
        },
        children,
    );

export default MjText;
