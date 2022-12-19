import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjTextProps {
  children?: ReactNode;
  align?: 'left' | 'right' | 'center' | 'justify';
  backgroundColor?: string;
  color?: string;
  containerBackgroundColor?: string;
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  height?: string | number;
  letterSpacing?: string | number;
  lineHeight?: string | number;
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
  textDecoration?: string;
  textTransform?: string;
  verticalAlign?: 'top' | 'bottom' | 'middle';
}

const MjText = ({
  children,
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
      align,
      'background-color': backgroundColor,
      color,
      'container-background-color': containerBackgroundColor,
      'font-family': fontFamily,
      'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
      'font-style': fontStyle,
      'font-weight': fontWeight,
      height: typeof height !== 'undefined' ? mjmlAttributesProcessors.unit(height) : undefined,
      'letter-spacing': typeof letterSpacing !== 'undefined' ? mjmlAttributesProcessors.unit(letterSpacing) : undefined,
      'line-height': typeof lineHeight !== 'undefined' ? mjmlAttributesProcessors.unit(lineHeight) : undefined,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
      'text-decoration': textDecoration,
      'text-transform': textTransform,
      'vertical-align': verticalAlign,
    },
    children,
  );

export default MjText;
