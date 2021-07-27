import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjSocialElementProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    className?: string;
    align?: string;
    backgroundColor?: string;
    color?: string;
    borderRadius?: string | number;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: string;
    fontWeight?: string;
    href?: string;
    iconSize?: string | number;
    iconHeight?: string;
    iconPadding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    lineHeight?: string;
    name?: string;
    paddingBottom?: string | number;
    paddingLeft?: string;
    paddingRight?: string | number;
    paddingTop?: string;
    padding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    textPadding?: string;
    src?: string;
    srcset?: string;
    sizes?: string;
    alt?: string;
    title?: string;
    target?: string;
    textDecoration?: string;
    verticalAlign?: 'top' | 'middle' | 'bottom';
}

const MjSocialElement = ({
    children,
    dangerouslySetInnerHTML,
    className,
    align,
    backgroundColor,
    color,
    borderRadius,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    href,
    iconSize,
    iconHeight,
    iconPadding,
    lineHeight,
    name,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    padding,
    textPadding,
    src,
    srcset,
    sizes,
    alt,
    title,
    target,
    textDecoration,
    verticalAlign,
}: MjSocialElementProps): ReactElement =>
    createElement(
        'mj-social-element',
        {
            'css-class': className,
            dangerouslySetInnerHTML,
            align,
            'background-color': backgroundColor,
            color,
            'border-radius': typeof borderRadius !== 'undefined' ? mjmlAttributesProcessors.unit(borderRadius) : undefined,
            'font-family': fontFamily,
            'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
            'font-style': fontStyle,
            'font-weight': fontWeight,
            href,
            'icon-size': typeof iconSize !== 'undefined' ? mjmlAttributesProcessors.unit(iconSize) : undefined,
            'icon-height': iconHeight,
            'icon-padding': typeof iconPadding !== 'undefined' ? mjmlAttributesProcessors.unit(iconPadding) : undefined,
            'line-height': lineHeight,
            name,
            'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
            'padding-left': paddingLeft,
            'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
            'padding-top': paddingTop,
            padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
            'text-padding': textPadding,
            src,
            srcset,
            sizes,
            alt,
            title,
            target,
            'text-decoration': textDecoration,
            'vertical-align': verticalAlign,
        },
        children,
    );

export default MjSocialElement;
