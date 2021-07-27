import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjCarouselProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    align?: 'left' | 'center' | 'right';
    borderRadius?: string;
    iconWidth?: string | number;
    leftIcon?: string;
    padding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    paddingTop?: string;
    paddingBottom?: string | number;
    paddingLeft?: string;
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
    dangerouslySetInnerHTML,
    align,
    borderRadius,
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
            dangerouslySetInnerHTML,
            align,
            'border-radius': borderRadius,
            'icon-width': typeof iconWidth !== 'undefined' ? mjmlAttributesProcessors.unit(iconWidth) : undefined,
            'left-icon': leftIcon,
            padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
            'padding-top': paddingTop,
            'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
            'padding-left': paddingLeft,
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
