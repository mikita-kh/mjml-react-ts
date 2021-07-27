import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjCarouselImageProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    className?: string;
    alt?: string;
    href?: string;
    rel?: string;
    title?: string;
    src?: string;
    thumbnailsSrc?: string;
    borderRadius?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    tbBorder?: string;
    tbBorderRadius?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
}

const MjCarouselImage = ({
    children,
    dangerouslySetInnerHTML,
    className,
    alt,
    href,
    rel,
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
            dangerouslySetInnerHTML,
            alt,
            href,
            rel,
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
