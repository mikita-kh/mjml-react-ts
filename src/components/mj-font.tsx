import { createElement, ReactElement } from 'react';

export interface MjFontProps {
  name?: string;
  href?: string;
}

const MjFont = ({ name, href }: MjFontProps): ReactElement =>
  createElement('mj-font', {
    name,
    href,
  });

export default MjFont;
