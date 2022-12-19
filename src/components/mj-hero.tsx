import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjHeroProps {
  children?: ReactNode;
  className?: string;
  mode?: string;
  height?: string | number;
  backgroundUrl?: string;
  backgroundWidth?: string | number;
  backgroundHeight?: string | number;
  backgroundPosition?: string;
  borderRadius?: string;
  containerBackgroundColor?: string;
  innerBackgroundColor?: string;
  innerPadding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  innerPaddingTop?: string | number;
  innerPaddingLeft?: string | number;
  innerPaddingRight?: string | number;
  innerPaddingBottom?: string | number;
  padding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  backgroundColor?: string;
  verticalAlign?: 'top' | 'bottom' | 'middle';
}

const MjHero = ({
  children,
  className,
  mode,
  height,
  backgroundUrl,
  backgroundWidth,
  backgroundHeight,
  backgroundPosition,
  borderRadius,
  containerBackgroundColor,
  innerBackgroundColor,
  innerPadding,
  innerPaddingTop,
  innerPaddingLeft,
  innerPaddingRight,
  innerPaddingBottom,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  backgroundColor,
  verticalAlign,
}: MjHeroProps): ReactElement =>
  createElement(
    'mj-hero',
    {
      'css-class': className,

      mode,
      height: typeof height !== 'undefined' ? mjmlAttributesProcessors.unit(height) : undefined,
      'background-url': backgroundUrl,
      'background-width': typeof backgroundWidth !== 'undefined' ? mjmlAttributesProcessors.unit(backgroundWidth) : undefined,
      'background-height': typeof backgroundHeight !== 'undefined' ? mjmlAttributesProcessors.unit(backgroundHeight) : undefined,
      'background-position': backgroundPosition,
      'border-radius': borderRadius,
      'container-background-color': containerBackgroundColor,
      'inner-background-color': innerBackgroundColor,
      'inner-padding': typeof innerPadding !== 'undefined' ? mjmlAttributesProcessors.unit(innerPadding) : undefined,
      'inner-padding-top': typeof innerPaddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(innerPaddingTop) : undefined,
      'inner-padding-left': typeof innerPaddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(innerPaddingLeft) : undefined,
      'inner-padding-right': typeof innerPaddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(innerPaddingRight) : undefined,
      'inner-padding-bottom': typeof innerPaddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(innerPaddingBottom) : undefined,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      'background-color': backgroundColor,
      'vertical-align': verticalAlign,
    },
    children,
  );

export default MjHero;
