import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../layout/MacroElements/Form";
import greenIcon from "../../../assets/images/Green_Steam_Logo.png";
import yellowIcon from "../../../assets/images/Yellow_Steam_Logo.png";
import Input from "../../layout/MicroElements/Input";
import InfoLabel from "../../layout/MicroElements/InfoLabel";
import Button from "../../layout/MicroElements/Button";
import { getContext } from "../../../hooks/UserContext";
import SteamLogo from "../../layout/MicroElements/Logo";
import BackgroundContainer from "../../layout/MacroElements/BackgroundContainer";

export default function SignIn() {
  const [iconSelected, setIconSelected] = useState("green");
  const [userData, setUserData] = useState({ imageURL: "", name: "" });
  const { contextData, setContext } = getContext();
  const navigate = useNavigate();

  function submitData(e) {
    e.preventDefault();
    if (iconSelected === "yellow") {
      window.alert("Yellow_Stem estará disponível em breve");
      return;
    }
    window.alert(
      "ATENÇÂO: Esse site possui um fim acadêmico. As marcas citadas não tem nenhuma relação com ele. Todas as informações presentes foram extraídas do aplicativo da steam e da web."
    );
    const imageUrl = userData.imageURL;
    const name = userData.name;
    if (imageUrl) {
      setContext({ ...contextData, imageURL: imageUrl, name: name });
    } else {
      setContext({ ...contextData, name: name });
    }
    navigate(`/${iconSelected}`);
  }

  return (
    <BackgroundContainer bgImage="url('https://images5.alphacoders.com/981/thumb-1920-981420.png')">
      <AuthContainer>
        <SteamLogo></SteamLogo>
        <h1>Selecione a ampanha:</h1>
        <IconsContainer>
          <IconContainer
            onClick={() => setIconSelected("green")}
            iconSelected={iconSelected === "green" ? true : false}
          >
            <img src={greenIcon} alt="Green_Steam" />
          </IconContainer>
          <IconContainer
            onClick={() => setIconSelected("yellow")}
            iconSelected={iconSelected === "yellow" ? true : false}
          >
            <img src={yellowIcon} alt="Yellow_Steam" />
          </IconContainer>
        </IconsContainer>
        <Form onSubmit={submitData}>
          <InfoLabel message={"Nome"} />
          <Input
            required
            type="text"
            maxLength={20}
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          />
          <InfoLabel message={"URL da imagem de perfil"} />
          <Input
            type="url"
            placeholder="Campo opcional "
            onChange={(e) => {
              setUserData({ ...userData, imageURL: e.target.value });
            }}
          />
          <AuthButton type="submit">Entrar</AuthButton>
        </Form>
      </AuthContainer>
    </BackgroundContainer>
  );
}

const AuthContainer = styled.section`
  padding: var(--auth-container-padding);
  width: 100%;
  height: 100%;
  max-width: var(--auth-container-max-width);
  max-height: var(--auth-container-max-heigth);
  background-color: var(--color-main);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--border-radious-2);
  box-shadow: var(--inset-border);
  h1 {
    font-size: var(--font-size-4);
    color: var(--color-white);
    margin-top: 10%;
  }
`;

const IconsContainer = styled.div`
  margin: 3% 0 4% 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  img {
    width: var(--steam-icons-size);
    height: var(--steam-icons-size);
  }
`;
const IconContainer = styled.div`
  padding: 10px;
  box-shadow: ${(props) => {
    return props.iconSelected ? "var(--inset-border)" : "none";
  }};
  border-radius: var(--border-radious-1);
  :hover {
    cursor: pointer;
  }
`;

const AuthButton = styled(Button)`
  margin-top: 30px;
`;
