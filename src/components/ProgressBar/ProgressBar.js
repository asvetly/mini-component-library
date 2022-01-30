/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
    small: {
        height: 8,
        padding: 0,
        radius: 4,
    },
    medium: {
        height: 12,
        padding: 0,
        radius: 4,
    },
    large: {
        height: 16,
        padding: 4,
        radius: 8,
    },
};

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  will-change: width;
  transition: width 100ms ease-out;
`;

const ProgressBar = ({ value = 0, minValue = 0, maxValue = 100, size }) => {
    const styles = STYLES[size];

    return (
        <ProgressBarWrapper
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={ minValue }
            aria-valuemax={ maxValue }
            style={{
                '--padding': styles?.padding + 'px',
                '--radius': styles?.radius + 'px',
            }}
        >
            <VisuallyHidden>{ (value / maxValue) * 100 }%</VisuallyHidden>
            <BarWrapper>
                <Bar
                    style={{
                        '--width': `${(value / maxValue) * 100}%`,
                        '--height': styles?.height + 'px',
                    }}
                />
            </BarWrapper>
        </ProgressBarWrapper>
    );
};

export default ProgressBar;
