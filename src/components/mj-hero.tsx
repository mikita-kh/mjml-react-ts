import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjHeroProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    className?: string;
    mode?: string;
    height?: string | number;
    backgroundUrl?: string;
    backgroundWidth?: string | number;
    backgroundHeight?: string;
    backgroundPosition?: string;
    borderRadius?: string;
    containerBackgroundColor?: string;
    innerBackgroundColor?: string;
    innerPadding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    innerPaddingTop?: string;
    innerPaddingLeft?: string | number;
    innerPaddingRight?: string;
    innerPaddingBottom?: string | number;
    padding?: string;
    paddingBottom?: string | number;
    paddingLeft?: string;
    paddingRight?: string | number;
    paddingTop?: string;
    backgroundColor?: string;
    verticalAlign?: 'top' | 'bottom' | 'middle';
}

const MjHero = ({
    children,
    dangerouslySetInnerHTML,
    className,
    mode,
    height,
    backgroundUrl,
    backgroundWidth,
    backgroundHeight,
    backgroundPosition,
    borderRadius,
    containerBackgroundColor,
    innerBackgroundColor,
    innerPadding,
    innerPaddingTop,
    innerPaddingLeft,
    innerPaddingRight,
    innerPaddingBottom,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    backgroundColor,
    verticalAlign,
}: MjHeroProps): ReactElement =>
    createElement(
        'mj-hero',
        {
            'css-class': className,
            dangerouslySetInnerHTML,
            mode,
            height: typeof height !== 'undefined' ? mjmlAttributesProcessors.unit(height) : undefined,
            'background-url': backgroundUrl,
            'background-width': typeof backgroundWidth !== 'undefined' ? mjmlAttributesProcessors.unit(backgroundWidth) : undefined,
            'background-height': backgroundHeight,
            'background-position': backgroundPosition,
            'border-radius': borderRadius,
            'container-background-color': containerBackgroundColor,
            'inner-background-color': innerBackgroundColor,
            'inner-padding': typeof innerPadding !== 'undefined' ? mjmlAttributesProcessors.unit(innerPadding) : undefined,
            'inner-padding-top': innerPaddingTop,
            'inner-padding-left': typeof innerPaddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(innerPaddingLeft) : undefined,
            'inner-padding-right': innerPaddingRight,
            'inner-padding-bottom':
                typeof innerPaddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(innerPaddingBottom) : undefined,
            padding,
            'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
            'padding-left': paddingLeft,
            'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
            'padding-top': paddingTop,
            'background-color': backgroundColor,
            'vertical-align': verticalAlign,
        },
        children,
    );

export default MjHero;
