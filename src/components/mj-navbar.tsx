import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjNavbarProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    align?: 'left' | 'center' | 'right';
    baseUrl?: string;
    hamburger?: string;
    icoAlign?: 'left' | 'center' | 'right';
    icoOpen?: string;
    icoClose?: string;
    icoColor?: string;
    icoFontSize?: string | number;
    icoFontFamily?: string;
    icoTextTransform?: string;
    icoPadding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    icoPaddingLeft?: string;
    icoPaddingTop?: string | number;
    icoPaddingRight?: string;
    icoPaddingBottom?: string | number;
    padding?: string;
    paddingLeft?: string | number;
    paddingTop?: string;
    paddingRight?: string | number;
    paddingBottom?: string;
    icoTextDecoration?: string;
    icoLineHeight?: string | number;
}

const MjNavbar = ({
    children,
    dangerouslySetInnerHTML,
    align,
    baseUrl,
    hamburger,
    icoAlign,
    icoOpen,
    icoClose,
    icoColor,
    icoFontSize,
    icoFontFamily,
    icoTextTransform,
    icoPadding,
    icoPaddingLeft,
    icoPaddingTop,
    icoPaddingRight,
    icoPaddingBottom,
    padding,
    paddingLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    icoTextDecoration,
    icoLineHeight,
}: MjNavbarProps): ReactElement =>
    createElement(
        'mj-navbar',
        {
            dangerouslySetInnerHTML,
            align,
            'base-url': baseUrl,
            hamburger,
            'ico-align': icoAlign,
            'ico-open': icoOpen,
            'ico-close': icoClose,
            'ico-color': icoColor,
            'ico-font-size': typeof icoFontSize !== 'undefined' ? mjmlAttributesProcessors.unit(icoFontSize) : undefined,
            'ico-font-family': icoFontFamily,
            'ico-text-transform': icoTextTransform,
            'ico-padding': typeof icoPadding !== 'undefined' ? mjmlAttributesProcessors.unit(icoPadding) : undefined,
            'ico-padding-left': icoPaddingLeft,
            'ico-padding-top': typeof icoPaddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(icoPaddingTop) : undefined,
            'ico-padding-right': icoPaddingRight,
            'ico-padding-bottom': typeof icoPaddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(icoPaddingBottom) : undefined,
            padding,
            'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
            'padding-top': paddingTop,
            'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
            'padding-bottom': paddingBottom,
            'ico-text-decoration': icoTextDecoration,
            'ico-line-height': typeof icoLineHeight !== 'undefined' ? mjmlAttributesProcessors.unit(icoLineHeight) : undefined,
        },
        children,
    );

export default MjNavbar;
