import { createElement, ReactElement, ReactNode } from 'react';

export interface MjTitleProps {
  children?: ReactNode;
}

const MjTitle = ({ children }: MjTitleProps): ReactElement => createElement('mj-title', {}, children);

export default MjTitle;
