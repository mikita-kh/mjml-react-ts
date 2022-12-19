import { createElement, ReactElement, ReactNode } from 'react';

export interface MjRawProps {
  children?: ReactNode;
  position?: 'file-start';
}

const MjRaw = ({ children, position }: MjRawProps): ReactElement =>
  createElement(
    'mj-raw',
    {
      position,
    },
    children,
  );

export default MjRaw;
