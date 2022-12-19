import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjColumnProps {
  children?: ReactNode;
  className?: string;
  backgroundColor?: string;
  border?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  borderRight?: string;
  borderTop?: string;
  direction?: 'ltr' | 'rtl';
  innerBackgroundColor?: string;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  innerBorder?: string;
  innerBorderBottom?: string;
  innerBorderLeft?: string;
  innerBorderRadius?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  innerBorderRight?: string;
  innerBorderTop?: string;
  padding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  verticalAlign?: 'top' | 'bottom' | 'middle';
  width?: string | number;
}

const MjColumn = ({
  children,
  className,
  backgroundColor,
  border,
  borderBottom,
  borderLeft,
  borderRadius,
  borderRight,
  borderTop,
  direction,
  innerBackgroundColor,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  innerBorder,
  innerBorderBottom,
  innerBorderLeft,
  innerBorderRadius,
  innerBorderRight,
  innerBorderTop,
  padding,
  verticalAlign,
  width,
}: MjColumnProps): ReactElement =>
  createElement(
    'mj-column',
    {
      'css-class': className,

      'background-color': backgroundColor,
      border,
      'border-bottom': borderBottom,
      'border-left': borderLeft,
      'border-radius': typeof borderRadius !== 'undefined' ? mjmlAttributesProcessors.unit(borderRadius) : undefined,
      'border-right': borderRight,
      'border-top': borderTop,
      direction,
      'inner-background-color': innerBackgroundColor,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      'inner-border': innerBorder,
      'inner-border-bottom': innerBorderBottom,
      'inner-border-left': innerBorderLeft,
      'inner-border-radius': typeof innerBorderRadius !== 'undefined' ? mjmlAttributesProcessors.unit(innerBorderRadius) : undefined,
      'inner-border-right': innerBorderRight,
      'inner-border-top': innerBorderTop,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
      'vertical-align': verticalAlign,
      width: typeof width !== 'undefined' ? mjmlAttributesProcessors.unit(width) : undefined,
    },
    children,
  );

export default MjColumn;
