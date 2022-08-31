import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: var(--objeects-height);
  font-size: var(--font-size-4);
  border: none;
  color: white;
  background-color: var(--color-button);
  border-radius: var(--border-radious-1);
  :hover {
    cursor: pointer;
    background-color: var(--color-button-hover);
  }
`;

export default Button;
