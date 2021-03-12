/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: 2px solid blue;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  // inlineStyleの書き方の場合
  const title = css({
    margin: 0,
    color: "#3d84a8"
  });

  return (
    <div css={containerStyle}>
      <p css={title}>- Emotion -</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};

const SButton = styled.button`
  background-color: #abedd8;
  padding: 8px;
  border: none;
  border-radius: 8px;
  &:hover {
    background-color: #3d84a8;
    color: #fff;
    cursor: pointer;
  }
`;
