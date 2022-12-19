import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjWrapperProps {
  children?: ReactNode;
  className?: string;
  backgroundColor?: string;
  backgroundUrl?: string;
  backgroundRepeat?: 'repeat' | 'no-repeat';
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundPositionX?: string;
  backgroundPositionY?: string;
  border?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: string;
  borderRight?: string;
  borderTop?: string;
  direction?: 'ltr' | 'rtl';
  fullWidth?: boolean;
  padding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  textAlign?: 'left' | 'center' | 'right';
  textPadding?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
}

const MjWrapper = ({
  children,
  className,
  backgroundColor,
  backgroundUrl,
  backgroundRepeat,
  backgroundSize,
  backgroundPosition,
  backgroundPositionX,
  backgroundPositionY,
  border,
  borderBottom,
  borderLeft,
  borderRadius,
  borderRight,
  borderTop,
  direction,
  fullWidth,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  textAlign,
  textPadding,
}: MjWrapperProps): ReactElement =>
  createElement(
    'mj-wrapper',
    {
      'css-class': className,

      'background-color': backgroundColor,
      'background-url': backgroundUrl,
      'background-repeat': backgroundRepeat,
      'background-size': backgroundSize,
      'background-position': backgroundPosition,
      'background-position-x': backgroundPositionX,
      'background-position-y': backgroundPositionY,
      border,
      'border-bottom': borderBottom,
      'border-left': borderLeft,
      'border-radius': borderRadius,
      'border-right': borderRight,
      'border-top': borderTop,
      direction,
      'full-width': fullWidth ? 'full-width' : undefined,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'text-align': textAlign,
      'text-padding': typeof textPadding !== 'undefined' ? mjmlAttributesProcessors.unit(textPadding) : undefined,
    },
    children,
  );

export default MjWrapper;
