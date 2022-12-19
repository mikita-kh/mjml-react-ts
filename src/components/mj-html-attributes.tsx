import { createElement, ReactElement, ReactNode } from 'react';

export interface MjHtmlAttributesProps {
  children?: ReactNode;
}

const MjHtmlAttributes = ({ children }: MjHtmlAttributesProps): ReactElement => createElement('mj-html-attributes', {}, children);

export default MjHtmlAttributes;
