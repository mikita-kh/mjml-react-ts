import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjDividerProps {
  children?: ReactNode;
  borderColor?: string;
  borderStyle?: string;
  borderWidth?: string | number;
  containerBackgroundColor?: string;
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
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

const MjDivider = ({
  children,
  borderColor,
  borderStyle,
  borderWidth,
  containerBackgroundColor,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  width,
  align,
}: MjDividerProps): ReactElement =>
  createElement(
    'mj-divider',
    {
      'border-color': borderColor,
      'border-style': borderStyle,
      'border-width': typeof borderWidth !== 'undefined' ? mjmlAttributesProcessors.unit(borderWidth) : undefined,
      'container-background-color': containerBackgroundColor,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      width: typeof width !== 'undefined' ? mjmlAttributesProcessors.unit(width) : undefined,
      align,
    },
    children,
  );

export default MjDivider;
