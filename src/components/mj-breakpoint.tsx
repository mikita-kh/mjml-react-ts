import { createElement, ReactElement } from 'react';

export interface MjBreakpointProps {
    width?: string;
}

const MjBreakpoint = ({ width }: MjBreakpointProps): ReactElement =>
    createElement('mj-breakpoint', {
        width,
    });

export default MjBreakpoint;
