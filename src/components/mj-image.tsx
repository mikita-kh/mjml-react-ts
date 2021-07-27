import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjImageProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
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
    borderRadius?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    containerBackgroundColor?: string;
    fluidOnMobile?: boolean;
    padding?: string;
    paddingBottom?: string | number;
    paddingLeft?: string;
    paddingRight?: string | number;
    paddingTop?: string;
    target?: string;
    width?: string | number;
    height?: string;
    maxHeight?: string | number;
    fontSize?: string;
    usemap?: string;
}

const MjImage = ({
    children,
    dangerouslySetInnerHTML,
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
            dangerouslySetInnerHTML,
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
            padding,
            'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
            'padding-left': paddingLeft,
            'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
            'padding-top': paddingTop,
            target,
            width: typeof width !== 'undefined' ? mjmlAttributesProcessors.unit(width) : undefined,
            height,
            'max-height': typeof maxHeight !== 'undefined' ? mjmlAttributesProcessors.unit(maxHeight) : undefined,
            'font-size': fontSize,
            usemap,
        },
        children,
    );

export default MjImage;
