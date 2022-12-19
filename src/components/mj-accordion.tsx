import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjAccordionProps {
  children?: ReactNode;
  containerBackgroundColor?: string;
  border?: string;
  fontFamily?: string;
  iconAlign?: 'top' | 'middle' | 'bottom';
  iconWidth?: string | number;
  iconHeight?: string | number;
  iconWrappedUrl?: string;
  iconWrappedAlt?: string;
  iconUnwrappedUrl?: string;
  iconUnwrappedAlt?: string;
  iconPosition?: 'left' | 'right';
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

const MjAccordion = ({
  children,
  containerBackgroundColor,
  border,
  fontFamily,
  iconAlign,
  iconWidth,
  iconHeight,
  iconWrappedUrl,
  iconWrappedAlt,
  iconUnwrappedUrl,
  iconUnwrappedAlt,
  iconPosition,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  padding,
}: MjAccordionProps): ReactElement =>
  createElement(
    'mj-accordion',
    {
      'container-background-color': containerBackgroundColor,
      border,
      'font-family': fontFamily,
      'icon-align': iconAlign,
      'icon-width': typeof iconWidth !== 'undefined' ? mjmlAttributesProcessors.unit(iconWidth) : undefined,
      'icon-height': typeof iconHeight !== 'undefined' ? mjmlAttributesProcessors.unit(iconHeight) : undefined,
      'icon-wrapped-url': iconWrappedUrl,
      'icon-wrapped-alt': iconWrappedAlt,
      'icon-unwrapped-url': iconUnwrappedUrl,
      'icon-unwrapped-alt': iconUnwrappedAlt,
      'icon-position': iconPosition,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
    },
    children,
  );

export default MjAccordion;
