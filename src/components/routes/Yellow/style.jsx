import styled from "styled-components";

import Button from "../../layout/MicroElements/Button";
import Input from "../../layout/MicroElements/Input";

export const IndicationInput = styled(Input)`
  width: 75%;
  background-color: var(--color-white);
  border: var(--yellow-border);
  color: var(--color-black)
`;

export const IndicationContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  padding: 0 0 20px 0;
`;

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: 100%;
  padding-bottom: 20px;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
  div {
    background-color: var(--color-hover-2);
    width: 50%;
    min-height: 4px;
    border-radius: 5px;
    margin-left: none;
    transition: all 0.2s ease-out 0s;
    transform: ${(props) =>
      props.selected === "games" ? "translateX(100%)" : "translateX(0%)"};
  }
  section {
    display: flex;
    width: 100%;
  }
`;

export const OptionButton = styled(Button)`
  border-radius: 0;
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
  background-color: var(--color-main);
  box-shadow: var(--yellow-shadow);
  :hover {
    background-color: var(--color-main-2);
    background-image: linear-gradient(
      180deg,
      var(--color-main),
      var(--color-white) 400%
    );
  }
`;

export const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;
  height: 100%;
  box-shadow: var(--yellow-shadow-big);
  border-radius: var(--border-radious-1);
  padding: 10px;
  background-image: linear-gradient(
    0deg,
    var(--color-transparent),
    var(--color-blue) 500%
  );
`;

export const GameContainer = styled.article`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--color-main-3);
  height: 100%;
  min-width: 70px;
  padding: 15px;
  box-shadow: var(--black-shadow);
  border-radius: var(--border-radious-1);
  h1 {
    font-size: var(--font-size-4);
    color: var(--color-white);
  }
  img {
    width: 150px;
    height: 200px;
    margin-bottom: 15px;
  }
  :hover {
    cursor: pointer;
    background-image: linear-gradient(
      0,
      var(--color-main-3),
      var(--color-hover-2) 100%
    );
  }
`;

export const InfosContainer = styled.div`
  font-size: var(--font-size-4);
  p {
    margin: 20px 0 20px 0;
  }
  strong {
    font-size: var(--font-size-5);
    font-weight: var(--font-bold);
    text-align: center;
  }
  article {
    color: var(--color-white);
    border-radius: var(--border-radious-2);
    background-color: var(--color-black);
    border: var(--white-border);
    padding: 10px;
  }
  div {
    color: var(--color-black);
    background-color: var(--color-low-yellow);
    padding: 10px;
    border: var(--blue-border);
  }
`;
