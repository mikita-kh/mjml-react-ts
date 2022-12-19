import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjCarouselImageProps {
  children?: ReactNode;
  className?: string;
  alt?: string;
  href?: string;
  rel?: string;
  target?: string;
  title?: string;
  src?: string;
  thumbnailsSrc?: string;
  borderRadius?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
  tbBorder?: string;
  tbBorderRadius?:
    | string
    | number
    | [string | number]
    | [string | number, string | number]
    | [string | number, string | number, string | number]
    | [string | number, string | number, string | number, string | number];
}

const MjCarouselImage = ({
  children,
  className,
  alt,
  href,
  rel,
  target,
  title,
  src,
  thumbnailsSrc,
  borderRadius,
  tbBorder,
  tbBorderRadius,
}: MjCarouselImageProps): ReactElement =>
  createElement(
    'mj-carousel-image',
    {
      'css-class': className,

      alt,
      href,
      rel,
      target,
      title,
      src,
      'thumbnails-src': thumbnailsSrc,
      'border-radius': typeof borderRadius !== 'undefined' ? mjmlAttributesProcessors.unit(borderRadius) : undefined,
      'tb-border': tbBorder,
      'tb-border-radius': typeof tbBorderRadius !== 'undefined' ? mjmlAttributesProcessors.unit(tbBorderRadius) : undefined,
    },
    children,
  );

export default MjCarouselImage;
