import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjNavbarLinkProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    className?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: string;
    fontWeight?: string;
    href?: string;
    name?: string;
    target?: string;
    rel?: string;
    letterSpacing?: string | number;
    lineHeight?: string;
    paddingBottom?: string | number;
    paddingLeft?: string;
    paddingRight?: string | number;
    paddingTop?: string;
    padding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    textDecoration?: string;
    textTransform?: string;
}

const MjNavbarLink = ({
    children,
    dangerouslySetInnerHTML,
    className,
    color,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    href,
    name,
    target,
    rel,
    letterSpacing,
    lineHeight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    padding,
    textDecoration,
    textTransform,
}: MjNavbarLinkProps): ReactElement =>
    createElement(
        'mj-navbar-link',
        {
            'css-class': className,
            dangerouslySetInnerHTML,
            color,
            'font-family': fontFamily,
            'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
            'font-style': fontStyle,
            'font-weight': fontWeight,
            href,
            name,
            target,
            rel,
            'letter-spacing': typeof letterSpacing !== 'undefined' ? mjmlAttributesProcessors.unit(letterSpacing) : undefined,
            'line-height': lineHeight,
            'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
            'padding-left': paddingLeft,
            'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
            'padding-top': paddingTop,
            padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
            'text-decoration': textDecoration,
            'text-transform': textTransform,
        },
        children,
    );

export default MjNavbarLink;
