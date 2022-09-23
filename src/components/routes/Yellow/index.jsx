import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getContext } from "../../../hooks/UserContext";
import { getRequisition } from "../../../utils/api";
import { postRequisition } from "../../../utils/api";
import BackgroundContainer from "../../layout/MacroElements/BackgroundContainer";
import Header from "../../layout/MacroElements/Header";
import Button from "../../layout/MicroElements/Button";
import {
  PageContainer,
  OptionsContainer,
  OptionButton,
  Page,
  GameContainer,
  IndicationInput,
  IndicationContainer,
} from "./style";
import Infos from "./Infos";

export default function Yellow(props) {
  const [games, setGames] = useState([{ iconUrl: "", title: "", id: "" }]);
  const { contextData } = getContext();
  const [selectedOption, setSelectedOption] = useState("infos");
  const [indication, setIndication] = useState({ indication: "" });
  const navigate = useNavigate();
  
  useEffect(() => {
    getGames();
  }, []);

  async function getGames() {
    const gamesData = await getRequisition("games", contextData);
    setGames(gamesData);
  }

  async function submitIndication(indication) {
    await postRequisition("indication", contextData, indication);
    setIndication({ indication: "" });
  }

  function openGame(gameId) {
    navigate(`/game/${gameId}`);
  }

  return (
    <BackgroundContainer
      bgImage="url('https://images5.alphacoders.com/981/thumb-1920-981420.png')"
      justify={"flex-start"}
      paddingTop="calc(var(--header-hight) + 20px)"
    >
      <Header backRoute="/" border="var(--yellow-border)"></Header>
      <PageContainer>
        <IndicationContainer>
          <IndicationInput
            value={indication.indication}
            onChange={(e) => setIndication({ indication: e.target.value })}
            placeholder="Indiqe um jogo! "
          />
          <Button onClick={() => submitIndication(indication)}>Indicar</Button>
        </IndicationContainer>
        <OptionsContainer selected={selectedOption}>
          <section>
            <OptionButton onClick={() => setSelectedOption("infos")}>
              Campanha
            </OptionButton>
            <OptionButton onClick={() => setSelectedOption("games")}>
              Jogos
            </OptionButton>
          </section>
          <div></div>
        </OptionsContainer>
        <Page>
          {selectedOption === "games" ? (
            <Games games={games} openGame={openGame} />
          ) : (
            <Infos games={games} />
          )}
        </Page>
      </PageContainer>
    </BackgroundContainer>
  );
}

function Games(props) {
  const { games, openGame } = props;
  return (
    <>
      {games.map((game) => {
        const { iconUrl, title, id } = game;
        return (
          <GameContainer onClick={() => openGame(id)} key={id}>
            <img src={iconUrl} alt={`${id} icon`} />
            <h1>{title}</h1>
          </GameContainer>
        );
      })}
    </>
  );
}
