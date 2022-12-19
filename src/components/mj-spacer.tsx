import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjSpacerProps {
  children?: ReactNode;
  border?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  containerBackgroundColor?: string;
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
  height?: string | number;
}

const MjSpacer = ({
  children,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  containerBackgroundColor,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  padding,
  height,
}: MjSpacerProps): ReactElement =>
  createElement(
    'mj-spacer',
    {
      border,
      'border-bottom': borderBottom,
      'border-left': borderLeft,
      'border-right': borderRight,
      'border-top': borderTop,
      'container-background-color': containerBackgroundColor,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
      height: typeof height !== 'undefined' ? mjmlAttributesProcessors.unit(height) : undefined,
    },
    children,
  );

export default MjSpacer;
