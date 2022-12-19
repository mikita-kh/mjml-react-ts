import { createElement, ReactElement, ReactNode } from 'react';

export interface MjAttributesProps {
  children?: ReactNode;
}

const MjAttributes = ({ children }: MjAttributesProps): ReactElement => createElement('mj-attributes', {}, children);

export default MjAttributes;
