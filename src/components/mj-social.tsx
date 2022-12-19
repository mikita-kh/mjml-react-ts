import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjSocialProps {
  children?: ReactNode;
  align?: 'left' | 'right' | 'center';
  borderRadius?: string | number;
  containerBackgroundColor?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  iconSize?: string | number;
  iconHeight?: string | number;
  iconPadding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  innerPadding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  lineHeight?: string | number;
  mode?: 'horizontal' | 'vertical';
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
  tableLayout?: 'auto' | 'fixed';
  textPadding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  textDecoration?: string;
  verticalAlign?: 'top' | 'bottom' | 'middle';
}

const MjSocial = ({
  children,
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
      align,
      'border-radius': typeof borderRadius !== 'undefined' ? mjmlAttributesProcessors.unit(borderRadius) : undefined,
      'container-background-color': containerBackgroundColor,
      color,
      'font-family': fontFamily,
      'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
      'font-style': fontStyle,
      'font-weight': fontWeight,
      'icon-size': typeof iconSize !== 'undefined' ? mjmlAttributesProcessors.unit(iconSize) : undefined,
      'icon-height': typeof iconHeight !== 'undefined' ? mjmlAttributesProcessors.unit(iconHeight) : undefined,
      'icon-padding': typeof iconPadding !== 'undefined' ? mjmlAttributesProcessors.unit(iconPadding) : undefined,
      'inner-padding': typeof innerPadding !== 'undefined' ? mjmlAttributesProcessors.unit(innerPadding) : undefined,
      'line-height': typeof lineHeight !== 'undefined' ? mjmlAttributesProcessors.unit(lineHeight) : undefined,
      mode,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
      'table-layout': tableLayout,
      'text-padding': typeof textPadding !== 'undefined' ? mjmlAttributesProcessors.unit(textPadding) : undefined,
      'text-decoration': textDecoration,
      'vertical-align': verticalAlign,
    },
    children,
  );

export default MjSocial;
