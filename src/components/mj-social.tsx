import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjSocialProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    align?: 'left' | 'right' | 'center';
    borderRadius?: string;
    containerBackgroundColor?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: string;
    fontWeight?: string;
    iconSize?: string | number;
    iconHeight?: string;
    iconPadding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    innerPadding?: string;
    lineHeight?: string | number;
    mode?: 'horizontal' | 'vertical';
    paddingBottom?: string;
    paddingLeft?: string | number;
    paddingRight?: string;
    paddingTop?: string | number;
    padding?: string;
    tableLayout?: 'auto' | 'fixed';
    textPadding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    textDecoration?: string;
    verticalAlign?: 'top' | 'bottom' | 'middle';
}

const MjSocial = ({
    children,
    dangerouslySetInnerHTML,
    align,
    borderRadius,
    containerBackgroundColor,
    color,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    iconSize,
    iconHeight,
    iconPadding,
    innerPadding,
    lineHeight,
    mode,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    padding,
    tableLayout,
    textPadding,
    textDecoration,
    verticalAlign,
}: MjSocialProps): ReactElement =>
    createElement(
        'mj-social',
        {
            dangerouslySetInnerHTML,
            align,
            'border-radius': borderRadius,
            'container-background-color': containerBackgroundColor,
            color,
            'font-family': fontFamily,
            'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
            'font-style': fontStyle,
            'font-weight': fontWeight,
            'icon-size': typeof iconSize !== 'undefined' ? mjmlAttributesProcessors.unit(iconSize) : undefined,
            'icon-height': iconHeight,
            'icon-padding': typeof iconPadding !== 'undefined' ? mjmlAttributesProcessors.unit(iconPadding) : undefined,
            'inner-padding': innerPadding,
            'line-height': typeof lineHeight !== 'undefined' ? mjmlAttributesProcessors.unit(lineHeight) : undefined,
            mode,
            'padding-bottom': paddingBottom,
            'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
            'padding-right': paddingRight,
            'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
            padding,
            'table-layout': tableLayout,
            'text-padding': typeof textPadding !== 'undefined' ? mjmlAttributesProcessors.unit(textPadding) : undefined,
            'text-decoration': textDecoration,
            'vertical-align': verticalAlign,
        },
        children,
    );

export default MjSocial;
