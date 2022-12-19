import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjNavbarProps {
  children?: ReactNode;
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
  icoPadding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  icoPaddingLeft?: string | number;
  icoPaddingTop?: string | number;
  icoPaddingRight?: string | number;
  icoPaddingBottom?: string | number;
  padding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  paddingLeft?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  icoTextDecoration?: string;
  icoLineHeight?: string | number;
}

const MjNavbar = ({
  children,
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
      'ico-padding-left': typeof icoPaddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(icoPaddingLeft) : undefined,
      'ico-padding-top': typeof icoPaddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(icoPaddingTop) : undefined,
      'ico-padding-right': typeof icoPaddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(icoPaddingRight) : undefined,
      'ico-padding-bottom': typeof icoPaddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(icoPaddingBottom) : undefined,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'ico-text-decoration': icoTextDecoration,
      'ico-line-height': typeof icoLineHeight !== 'undefined' ? mjmlAttributesProcessors.unit(icoLineHeight) : undefined,
    },
    children,
  );

export default MjNavbar;
