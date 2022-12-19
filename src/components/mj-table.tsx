import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjTableProps {
  children?: ReactNode;
  align?: 'left' | 'right' | 'center';
  border?: string;
  cellpadding?: number;
  cellspacing?: number;
  containerBackgroundColor?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string | number;
  fontWeight?: string;
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
  role?: 'none' | 'presentation';
  tableLayout?: 'auto' | 'fixed' | 'initial' | 'inherit';
  verticalAlign?: 'top' | 'bottom' | 'middle';
  width?: string | number;
}

const MjTable = ({
  children,
  align,
  border,
  cellpadding,
  cellspacing,
  containerBackgroundColor,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  padding,
  role,
  tableLayout,
  verticalAlign,
  width,
}: MjTableProps): ReactElement =>
  createElement(
    'mj-table',
    {
      align,
      border,
      cellpadding: typeof cellpadding !== 'undefined' ? mjmlAttributesProcessors.integer(cellpadding) : undefined,
      cellspacing: typeof cellspacing !== 'undefined' ? mjmlAttributesProcessors.integer(cellspacing) : undefined,
      'container-background-color': containerBackgroundColor,
      color,
      'font-family': fontFamily,
      'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
      'font-weight': fontWeight,
      'line-height': typeof lineHeight !== 'undefined' ? mjmlAttributesProcessors.unit(lineHeight) : undefined,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
      role,
      'table-layout': tableLayout,
      'vertical-align': verticalAlign,
      width: typeof width !== 'undefined' ? mjmlAttributesProcessors.unit(width) : undefined,
    },
    children,
  );

export default MjTable;
