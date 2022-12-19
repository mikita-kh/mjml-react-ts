import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjGroupProps {
  children?: ReactNode;
  className?: string;
  backgroundColor?: string;
  direction?: 'ltr' | 'rtl';
  verticalAlign?: 'top' | 'bottom' | 'middle';
  width?: string | number;
}

const MjGroup = ({ children, className, backgroundColor, direction, verticalAlign, width }: MjGroupProps): ReactElement =>
  createElement(
    'mj-group',
    {
      'css-class': className,

      'background-color': backgroundColor,
      direction,
      'vertical-align': verticalAlign,
      width: typeof width !== 'undefined' ? mjmlAttributesProcessors.unit(width) : undefined,
    },
    children,
  );

export default MjGroup;
