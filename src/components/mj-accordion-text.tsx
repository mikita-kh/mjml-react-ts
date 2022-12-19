import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjAccordionTextProps {
  children?: ReactNode;
  className?: string;
  backgroundColor?: string;
  fontSize?: string | number;
  fontFamily?: string;
  fontWeight?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  color?: string;
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
}

const MjAccordionText = ({
  children,
  className,
  backgroundColor,
  fontSize,
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  color,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  padding,
}: MjAccordionTextProps): ReactElement =>
  createElement(
    'mj-accordion-text',
    {
      'css-class': className,

      'background-color': backgroundColor,
      'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
      'font-family': fontFamily,
      'font-weight': fontWeight,
      'letter-spacing': typeof letterSpacing !== 'undefined' ? mjmlAttributesProcessors.unit(letterSpacing) : undefined,
      'line-height': typeof lineHeight !== 'undefined' ? mjmlAttributesProcessors.unit(lineHeight) : undefined,
      color,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
    },
    children,
  );

export default MjAccordionText;
