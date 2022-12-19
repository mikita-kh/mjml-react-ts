import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjImageProps {
  children?: ReactNode;
  alt?: string;
  href?: string;
  name?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  title?: string;
  rel?: string;
  align?: 'left' | 'center' | 'right';
  border?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderRadius?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  containerBackgroundColor?: string;
  fluidOnMobile?: boolean;
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
  target?: string;
  width?: string | number;
  height?: string | 'auto' | number;
  maxHeight?: string | number;
  fontSize?: string | number;
  usemap?: string;
}

const MjImage = ({
  children,
  alt,
  href,
  name,
  src,
  srcset,
  sizes,
  title,
  rel,
  align,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  borderRadius,
  containerBackgroundColor,
  fluidOnMobile,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  target,
  width,
  height,
  maxHeight,
  fontSize,
  usemap,
}: MjImageProps): ReactElement =>
  createElement(
    'mj-image',
    {
      alt,
      href,
      name,
      src,
      srcset,
      sizes,
      title,
      rel,
      align,
      border,
      'border-bottom': borderBottom,
      'border-left': borderLeft,
      'border-right': borderRight,
      'border-top': borderTop,
      'border-radius': typeof borderRadius !== 'undefined' ? mjmlAttributesProcessors.unit(borderRadius) : undefined,
      'container-background-color': containerBackgroundColor,
      'fluid-on-mobile': typeof fluidOnMobile !== 'undefined' ? mjmlAttributesProcessors.boolean(fluidOnMobile) : undefined,
      padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
      'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
      'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
      'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
      'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
      target,
      width: typeof width !== 'undefined' ? mjmlAttributesProcessors.unit(width) : undefined,
      height: typeof height !== 'undefined' ? mjmlAttributesProcessors.unit(height) : undefined,
      'max-height': typeof maxHeight !== 'undefined' ? mjmlAttributesProcessors.unit(maxHeight) : undefined,
      'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
      usemap,
    },
    children,
  );

export default MjImage;
