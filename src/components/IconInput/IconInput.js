import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';

const IconInputWrapper = styled.div`
  position: relative;
  width: max-content;
  display: block;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const TextInput = styled.input`
  width: var(--width);
  border: none;
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;
const SmallInput = styled(TextInput)`
  height: 24px;
  font-size: ${14 / 16}rem;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 24px;
`;
const LargeInput = styled(TextInput)`
  height: 36px;
  font-size: ${18 / 16}rem;
  border-bottom: 2px solid ${COLORS.black};
  padding-left: 36px;
`;

const INPUTS = {
  small: SmallInput,
  medium: TextInput,
  large: LargeInput,
}

const ICON_SIZES = {
  small: 16,
  medium: 24,
  large: 24,
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const iconSize = ICON_SIZES[size] ?? 24;
  const Input = INPUTS[size] ?? TextInput;

  return (
    <IconInputWrapper>
      <Input placeholder={ placeholder }  style={{ '--width': width + 'px' }} aria-label={ label } />
        <IconWrapper style={{ '--size': iconSize + 'px' }}>
          <Icon id={icon} size={iconSize} />
      </IconWrapper>
    </IconInputWrapper>
  );
};

export default IconInput;
