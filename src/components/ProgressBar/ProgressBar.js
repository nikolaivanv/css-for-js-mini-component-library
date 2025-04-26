/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const SIZES = {
    small: {
      "--height": 8 + "px",
      "--border-radius": 4 + "px",
      "--padding": 0 + "px",
    },
    medium: {
      "--height": 12 + "px",
      "--border-radius": 4 + "px",
      "--padding": 0 + "px",
    },
    large: {
      "--height": 24 + "px",
      "--border-radius": 8 + "px",
      "--padding": 4 + "px",
    },
  };

  if (!SIZES.hasOwnProperty(size)) {
    throw new Error(`Unknown size ${size}`);
  }
  if (value < 0 || value > 100) {
    throw new Error(
      `Value must be in the 0-100 range. Provided value: ${value}`
    );
  }

  return (
    <Wrapper style={SIZES[size]} role="progressbar" aria-valuenow={value}>
      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

// TODO
// - paddings
// - accessibility: role, valuenow

const Wrapper = styled.div`
  /* width: 100%; */
  color: ${COLORS.transparentGray15};
  height: var(--height);
  padding: var(--padding);
  /* border: solid black 2px; */
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  width: ${(p) => p.value + "%"};
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: ${(p) => (p.value === 100 ? "4px" : "4px 0px 0px 4px")};
`;

const BarWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
`;

export default ProgressBar;
