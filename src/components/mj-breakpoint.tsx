import { createElement, ReactElement } from 'react';

import mjmlAttributesProcessors from '../utils/mjml-attributes-processors';

export interface MjBreakpointProps {
  width?: string | number;
}

const MjBreakpoint = ({ width }: MjBreakpointProps): ReactElement =>
  createElement('mj-breakpoint', {
    width: typeof width !== 'undefined' ? mjmlAttributesProcessors.unit(width) : undefined,
  });

export default MjBreakpoint;
