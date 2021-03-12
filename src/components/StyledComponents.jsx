import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: 2px solid blue;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;
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
