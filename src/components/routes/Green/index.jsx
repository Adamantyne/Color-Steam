import styled from "styled-components";
import { GiThreeLeaves } from "react-icons/gi";

import Header from "../../layout/MacroElements/Header";
import BackgroundContainer from "../../layout/MacroElements/BackgroundContainer";
import greenSteam from "../../../assets/images/Green_Steam_Logo.png";

export default function Green() {
  return (
    <>
      <Header backRoute="/"></Header>

      <BackgroundContainer
        paddingTop="var(--header-hight)"
        bgImage="url('https://interfaceingame.com/wp-content/uploads/gris/gris-forest-1920x1080.jpg')"
        justify="flex-start"
      >
        <Page>
          <div className="tittle">
            <img src={greenSteam} alt="icone Gren_Steam" />
            <h1>Green_Steam</h1>
          </div>
          <div className="infos">
            <h2>
              Se divirta com seus amigos tornando o mundo mais divertido !
            </h2>
          </div>
          <div className="infos">
            <TextImages>
              <TextImage>
                <img
                  src="https://i.pinimg.com/originals/f0/cb/3b/f0cb3b96627f32bea039b4fb0904e4b8.png"
                  alt=""
                />
                <p>
                  Todos os usuários da plataforma que baixarem o jogo podem
                  escolher uma área de reorestamento presente em seu país.
                </p>
                <small>
                  Essas áreas estarão presentes no jogo como um mapa renderizado
                  em escala real que simula o espaço escolhido.
                </small>
              </TextImage>
              <TextImage>
                <img
                  src="https://stardewcommunitywiki.com/mediawiki/images/thumb/2/29/Character_creation_menu.png/300px-Character_creation_menu.png"
                  alt=""
                />
                <p>
                  O jogador poderá criar um avatar personalizado e atribuir um
                  nome a ele.
                </p>
              </TextImage>
              <TextImage>
                <img
                  src="https://es.theepochtimes.com/assets/uploads/2020/07/trees-4732109_1280-1200x798.jpg"
                  alt=""
                />
                <p>
                  Ao entrar no jogo, o usuário pode interagir com os demais
                  jogadores.
                </p>
                <small>
                  Além disso, eles poderão plantar arvores em lugares especícos
                  do jogo e, onde ela for colocada, também será plantada uma
                  arvore na vida real com uma plaquinha ao lado, contendo o nome
                  do avatar da pessoa que a colocou.
                </small>
              </TextImage>
            </TextImages>

            <h2>Regras:</h2>
            <ol>
              <li>
                <GiThreeLeaves />
                Cada usuário terá direito a plantar 1 arvore gratuitante.
              </li>
              <li>
                <GiThreeLeaves />A cada amigo que o usuário convidar para dentro
                do jogo, ela ganhará 1 arvore adicional.
              </li>
              <li>
                <GiThreeLeaves />O usuário também poderá comprar arvores
                adicionais através da loja da Steam, sendo todo o lucro
                destinado ao reorestamento.
              </li>
            </ol>
          </div>
        </Page>
      </BackgroundContainer>
    </>
  );
}

const Page = styled.section`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  box-shadow: var(--shadow-big);
  width: 70%;
  min-height: 400px;
  padding: 30px;
  div {
    margin-bottom: 20px;
  }
  .tittle {
    display: flex;
    align-items: center;
    h1 {
      font-size: var(--font-size-7);
      color: var(--color-button);
    }
    img {
      width: 50px;
    }
    @media (max-width: 400px) {
      h1 {
        font-size: var(--font-size-6);
        color: var(--color-button);
      }
      img {
        width: 30px;
      }
    }
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
  .infos {
    h2 {
      color: var(--color-dark-green);
      font-size: var(--font-size-5);
    }
    li {
      margin: 20px 0 0 30px;
    }
  }
  svg {
    color: var(--color-button);
    margin-right: 5px;
  }
`;

const TextImage = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
  max-width: 450px;
  height: 100%;
  width: 100%;
  margin: 20px 20px 20px 20px;
  border-radius: var(--border-radious-1);
  border: var(--border-green);
  img {
    border-radius: var(--border-radious-1);
    width: 100%;
    max-height: 350px;
  }
  p {
    margin: 10px;
    font-size: var(--font-size-4);
  }
  small {
    color: var(--color-dark-grey);
    margin: 0 10px 10px 10px;
  }
`;
const TextImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
