import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjAccordionTitleProps {
  children?: ReactNode;
  className?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string | number;
  fontFamily?: string;
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

const MjAccordionTitle = ({
  children,
  className,
  backgroundColor,
  color,
  fontSize,
  fontFamily,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  padding,
}: MjAccordionTitleProps): ReactElement =>
  createElement(
    'mj-accordion-title',
    {
      'css-class': className,

      'background-color': backgroundColor,
      color,
      'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
      'font-family': fontFamily,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
    },
    children,
  );

export default MjAccordionTitle;
