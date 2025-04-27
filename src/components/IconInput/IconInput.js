import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const INPUT_SIZES = {
    small: {
      "--padding": "4px 0px 3px 24px",
      "--border-bottom": "1px solid black",
      "--font-size": 14 / 16 + "rem",
    },
    large: {
      "--padding": "8px 0px 6px 36px",
      "--border-bottom": "2px solid black",
      "--font-size": 18 / 16 + "rem",
    },
  };
  const ICON_SIZES = {
    small: {
      iconSize: 16,
      strokeWidth: 1,
    },
    large: {
      iconSize: 24,
      strokeWidth: 2,
    },
  };

  const inputStyle = INPUT_SIZES[size];
  if (!inputStyle) {
    throw new Error(`Unknown size: ${size}`);
  }
  const iconSize = ICON_SIZES[size]["iconSize"];
  const strokeWidth = ICON_SIZES[size]["strokeWidth"];
  if (!iconSize || !strokeWidth) {
    throw new Error(`Unknown size: ${size}`);
  }

  return (
    <Wrapper>
      <IconWrapper
        style={{
          "--size": iconSize + "px",
        }}
      >
        <Icon id={icon} size={iconSize} strokeWidth={strokeWidth} />
      </IconWrapper>
      <StyledInput
        type="text"
        placeholder={placeholder}
        style={{
          ...inputStyle,
          "--width": width + "px",
        }}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: var(--width);
  padding: var(--padding);
  border: none;
  border-bottom: var(--border-bottom);
  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};

  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: var(--size);
  width: var(--size);
  margin: auto;
  pointer-events: none;
`;

export default IconInput;
