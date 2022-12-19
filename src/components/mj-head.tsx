import { createElement, ReactElement, ReactNode } from 'react';

export interface MjHeadProps {
  children?: ReactNode;
}

const MjHead = ({ children }: MjHeadProps): ReactElement => createElement('mj-head', {}, children);

export default MjHead;
