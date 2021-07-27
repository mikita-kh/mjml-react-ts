import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjSpacerProps {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    border?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRight?: string;
    borderTop?: string;
    containerBackgroundColor?: string;
    paddingBottom?: string | number;
    paddingLeft?: string;
    paddingRight?: string | number;
    paddingTop?: string;
    padding?: string | number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
    height?: string;
}

const MjSpacer = ({
    children,
    dangerouslySetInnerHTML,
    border,
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,
    containerBackgroundColor,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    padding,
    height,
}: MjSpacerProps): ReactElement =>
    createElement(
        'mj-spacer',
        {
            dangerouslySetInnerHTML,
            border,
            'border-bottom': borderBottom,
            'border-left': borderLeft,
            'border-right': borderRight,
            'border-top': borderTop,
            'container-background-color': containerBackgroundColor,
            'padding-bottom': typeof paddingBottom !== 'undefined' ? mjmlAttributesProcessors.unit(paddingBottom) : undefined,
            'padding-left': paddingLeft,
            'padding-right': typeof paddingRight !== 'undefined' ? mjmlAttributesProcessors.unit(paddingRight) : undefined,
            'padding-top': paddingTop,
            padding: typeof padding !== 'undefined' ? mjmlAttributesProcessors.unit(padding) : undefined,
            height,
        },
        children,
    );

export default MjSpacer;
