import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjCarouselProps {
  children?: ReactNode;
  align?: 'left' | 'center' | 'right';
  borderRadius?: string | number;
  containerBackgroundColor?: string;
  iconWidth?: string | number;
  leftIcon?: string;
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
  rightIcon?: string;
  thumbnails?: 'visible' | 'hidden';
  tbBorder?: string;
  tbBorderRadius?: string | number;
  tbHoverBorderColor?: string;
  tbSelectedBorderColor?: string;
  tbWidth?: string | number;
}

const MjCarousel = ({
  children,
  align,
  borderRadius,
  containerBackgroundColor,
  iconWidth,
  leftIcon,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  rightIcon,
  thumbnails,
  tbBorder,
  tbBorderRadius,
  tbHoverBorderColor,
  tbSelectedBorderColor,
  tbWidth,
}: MjCarouselProps): ReactElement =>
  createElement(
    'mj-carousel',
    {
      align,
      'border-radius': typeof borderRadius !== 'undefined' ? mjmlAttributesProcessors.unit(borderRadius) : undefined,
      'container-background-color': containerBackgroundColor,
      'icon-width': typeof iconWidth !== 'undefined' ? mjmlAttributesProcessors.unit(iconWidth) : undefined,
      'left-icon': leftIcon,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'right-icon': rightIcon,
      thumbnails,
      'tb-border': tbBorder,
      'tb-border-radius': typeof tbBorderRadius !== 'undefined' ? mjmlAttributesProcessors.unit(tbBorderRadius) : undefined,
      'tb-hover-border-color': tbHoverBorderColor,
      'tb-selected-border-color': tbSelectedBorderColor,
      'tb-width': typeof tbWidth !== 'undefined' ? mjmlAttributesProcessors.unit(tbWidth) : undefined,
    },
    children,
  );

export default MjCarousel;
