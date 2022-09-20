import styled from "styled-components";

const BackgroundContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  min-height: 100vh;
  min-width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  overflow-y: auto;
  top: 0;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "none")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "none"};
  background-image: ${(props) => (props.bgImage ? props.bgImage : "none")};
  background-size: 100% 100%;
`;

export default BackgroundContainer;
