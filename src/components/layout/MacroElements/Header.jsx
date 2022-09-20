import styled from "styled-components";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { getContext } from "../../../hooks/UserContext";
import Logo from "../MicroElements/Logo";

export default function Header(props) {
  const { backRoute, border } = props;
  const { name, imageURL } = getContext().contextData;
  const navigate = useNavigate();
  const borderColor = border ? border : "var(--blue-border)";

  return (
    <HeaderContainer border={borderColor}>
      <InfosContainer>
        <IoArrowUndoSharp onClick={() => navigate(backRoute)} />
        <img src={imageURL} alt="imagem de perfil" />
        <h1>{name}</h1>
      </InfosContainer>
      <LogoContainer>
        <Logo border={border}/>
      </LogoContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  border-bottom: ${(props) => {
    return props.border;
  }};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  right: 0;
  width: 100%;
  height: var(--header-hight);
  box-shadow: var(--shadow);
  background-color: var(--color-main);
  padding: 0 20px 0 20px;
  z-index: 1;
`;

const LogoContainer = styled.div`
  width: 200px;
  @media (max-width: 400px) {
    display: none;
  }
`;
const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  overflow: hidden;
  text-align: center;
  img {
    height: var(--perfil-image-heigth);
    width: var(--perfil-image-heigth);
    border-radius: var(--border-radious-full);
    margin-right: 5px;
  }
  h1 {
    color: var(--color-white);
    font-size: var(--font-size-3);
  }
  svg {
    font-size: var(--font-size-7);
    color: var(--color-white);
    margin-right: 20px;
    :hover {
      cursor: pointer;
      color: var(--color-hover);
    }
  }
`;
