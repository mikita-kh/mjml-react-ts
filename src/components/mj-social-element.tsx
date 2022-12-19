import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjSocialElementProps {
  children?: ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  backgroundColor?: string;
  color?: string;
  borderRadius?: string | number;
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  href?: string;
  iconSize?: string | number;
  iconHeight?: string | number;
  iconPadding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  lineHeight?: string | number;
  name?: string;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  padding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  textPadding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  rel?: string;
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
  rel,
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
      'icon-height': typeof iconHeight !== 'undefined' ? mjmlAttributesProcessors.unit(iconHeight) : undefined,
      'icon-padding': typeof iconPadding !== 'undefined' ? mjmlAttributesProcessors.unit(iconPadding) : undefined,
      'line-height': typeof lineHeight !== 'undefined' ? mjmlAttributesProcessors.unit(lineHeight) : undefined,
      name,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
      'text-padding': typeof textPadding !== 'undefined' ? mjmlAttributesProcessors.unit(textPadding) : undefined,
      rel,
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
