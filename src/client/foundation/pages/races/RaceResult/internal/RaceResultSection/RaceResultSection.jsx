import React from "react";
import styled from "styled-components";

import { PeaceIcon } from "../../../../../components/icons/PeaceIcon";
import { Color, FontSize, Space } from "../../../../../styles/variables";

const Wrapper = styled.div`
  align-items: center;
  color: ${Color.mono[400]};
  display: flex;
  font-size: ${FontSize.LARGE};
  font-weight: bold;
  gap: ${Space * 2}px;
  justify-content: center;
  padding: ${Space * 2}px;
`;

/**
 * @typedef Props
 */

/** @type {React.VFC<Props>} */
export const RaceResultSection = () => {
  return (
    <Wrapper>
      <PeaceIcon />
      <div>結果はまだありません</div>
    </Wrapper>
  );
};
