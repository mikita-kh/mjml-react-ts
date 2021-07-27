import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjDividerProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    borderColor?: string;
    borderStyle?: string;
    borderWidth?: string | number;
    containerBackgroundColor?: string;
    padding?: string;
    paddingBottom?: string | number;
    paddingLeft?: string;
    paddingRight?: string | number;
    paddingTop?: string;
    width?: string | number;
    align?: 'left' | 'center' | 'right';
}

const MjDivider = ({
    children,
    dangerouslySetInnerHTML,
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
            dangerouslySetInnerHTML,
            'border-color': borderColor,
            'border-style': borderStyle,
            'border-width': typeof borderWidth !== 'undefined' ? mjmlAttributesProcessors.unit(borderWidth) : undefined,
            'container-background-color': containerBackgroundColor,
            padding,
            'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
            'padding-left': paddingLeft,
            'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
            'padding-top': paddingTop,
            width: typeof width !== 'undefined' ? mjmlAttributesProcessors.unit(width) : undefined,
            align,
        },
        children,
    );

export default MjDivider;
