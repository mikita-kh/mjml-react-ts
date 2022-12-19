import { createElement, ReactElement, ReactNode } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjBodyProps {
  children?: ReactNode;
  className?: string;
  width?: string | number;
  backgroundColor?: string;
}

const MjBody = ({ children, className, width, backgroundColor }: MjBodyProps): ReactElement =>
  createElement(
    'mj-body',
    {
      'css-class': className,

      width: typeof width !== 'undefined' ? mjmlAttributesProcessors.unit(width) : undefined,
      'background-color': backgroundColor,
    },
    children,
  );

export default MjBody;
