import styled from "styled-components";

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  overflow-y: auto;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "none")};
  background-image: ${(props) => (props.bgImage ? props.bgImage : "none")};
  background-size: 100% 100%;
`;

export default BackgroundContainer;
