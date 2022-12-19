import { createElement, ReactElement, ReactNode } from 'react';

export interface MjmlProps {
  children?: ReactNode;
  owa?: 'desktop' | 'mobile';
  lang?: string;
}

const Mjml = ({ children, owa, lang }: MjmlProps): ReactElement =>
  createElement(
    'mjml',
    {
      owa,
      lang,
    },
    children,
  );

export default Mjml;
