import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjTableProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    align?: 'left' | 'right' | 'center';
    border?: string;
    cellpadding?: number;
    cellspacing?: string;
    containerBackgroundColor?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: string | number;
    fontWeight?: string;
    lineHeight?: string | number;
    paddingBottom?: string;
    paddingLeft?: string | number;
    paddingRight?: string;
    paddingTop?: string | number;
    padding?: string;
    role?: 'none' | 'presentation';
    tableLayout?: string;
    verticalAlign?: 'top' | 'bottom' | 'middle';
    width?: string | number;
}

const MjTable = ({
    children,
    dangerouslySetInnerHTML,
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
            dangerouslySetInnerHTML,
            align,
            border,
            cellpadding: typeof cellpadding !== 'undefined' ? mjmlAttributesProcessors.integer(cellpadding) : undefined,
            cellspacing,
            'container-background-color': containerBackgroundColor,
            color,
            'font-family': fontFamily,
            'font-size': typeof fontSize !== 'undefined' ? mjmlAttributesProcessors.unit(fontSize) : undefined,
            'font-weight': fontWeight,
            'line-height': typeof lineHeight !== 'undefined' ? mjmlAttributesProcessors.unit(lineHeight) : undefined,
            'padding-bottom': paddingBottom,
            'padding-left': typeof paddingLeft !== 'undefined' ? mjmlAttributesProcessors.unit(paddingLeft) : undefined,
            'padding-right': paddingRight,
            'padding-top': typeof paddingTop !== 'undefined' ? mjmlAttributesProcessors.unit(paddingTop) : undefined,
            padding,
            role,
            'table-layout': tableLayout,
            'vertical-align': verticalAlign,
            width: typeof width !== 'undefined' ? mjmlAttributesProcessors.unit(width) : undefined,
        },
        children,
    );

export default MjTable;
