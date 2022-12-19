import { createElement, ReactElement, ReactNode } from 'react';

export interface MjPreviewProps {
  children?: ReactNode;
}

const MjPreview = ({ children }: MjPreviewProps): ReactElement => createElement('mj-preview', {}, children);

export default MjPreview;
