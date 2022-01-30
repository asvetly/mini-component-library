import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';


const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  appearance: none;
`;

const FakeSelectPresentation = styled.div`
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <NativeSelect value={value} onChange={onChange} aria-label={ label }>
                {children}
            </NativeSelect>
            <FakeSelectPresentation>
                {displayedValue}
                <IconWrapper style={{ '--size': 24 + 'px' }}>
                    <Icon id="chevron-down" strokeWidth={1} size={24} />
                </IconWrapper>
            </FakeSelectPresentation>
        </Wrapper>
    );
};

export default Select;
