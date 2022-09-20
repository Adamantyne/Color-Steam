import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

import BackgroundContainer from "../../layout/MacroElements/BackgroundContainer";
import Header from "../../layout/MacroElements/Header";
import { getRequisition, postRequisition } from "../../../utils/api";
import { getContext } from "../../../hooks/UserContext";
import Button from "../../layout/MicroElements/Button";

export default function Game() {
  const gameId = useParams().id;
  const [commentText, setCommentText] = useState();
  const [comments, setComments] = useState([]);
  const [gameData, setGameData] = useState({
    imageUrl: "",
    title: "",
    description: "",
  });
  const { contextData } = getContext();
  const { imageUrl, title, description } = gameData;

  useEffect(() => {
    getGameData(gameId);
    getComents();
  }, []);

  async function getGameData(gameId) {
    const data = await getRequisition(`games/${gameId}`, contextData);
    setGameData(data);
  }
  async function postComent() {
    await postRequisition(`comments/${gameId}`, contextData, {
      userName: contextData.name,
      imageUrl: contextData.imageURL,
      comment: commentText,
    });
    setCommentText("");
    getComents();
  }

  async function getComents() {
    const data = await getRequisition(`comments/${gameId}`, contextData);
    setComments(data);
  }
  console.log(comments);

  return (
    <BackgroundContainer
      justify={"flex-start"}
      paddingTop="calc(var(--header-hight) + 20px)"
      paddingBottom="20px"
    >
      <Header backRoute="/yellow"></Header>
      <GamaeContainer>
        <ImageContainer bgImage={`url(${imageUrl})`}></ImageContainer>
        <InfosContainer>
          <p>
            <strong>Título: </strong> {title}
          </p>
          <p>
            <strong>Descrição: </strong> {description}
          </p>
        </InfosContainer>
      </GamaeContainer>
      <CommentsContainer>
        <Comments>
          {comments.map((currentComment) => {
            const { id, imageUrl, comment, userName } = currentComment;
            return (
              <CommentContainer key={id}>
                <img src={imageUrl} alt="user img" />
                <div>
                  <h1>{userName}</h1>
                  <article>{comment}</article>
                </div>
              </CommentContainer>
            );
          })}
        </Comments>
        <TextArea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Comente sua experiência com o jogo aqui"
        />
        <CommentButton onClick={() => postComent()}>Postar</CommentButton>
      </CommentsContainer>
    </BackgroundContainer>
  );
}

const GamaeContainer = styled.section`
  width: 80%;
  height: 100%;
  background-color: var(--color-main);
  border: var(--blue-border);
  border-radius: var(--border-radious-2);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const InfosContainer = styled.div`
  padding: 15px;
  p {
    color: var(--color-white);
    font-size: var(--font-size-3);
    margin: 10px 0 10px 0;
  }
  strong {
    font-weight: var(--font-bold);
    color: var(--color-yellow);
  }
`;

const ImageContainer = styled.article`
  width: 100%;
  min-height: 400px;
  height: 50%;
  background-image: ${(props) => props.bgImage};
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radious-2);
`;

const CommentsContainer = styled.section`
  min-height: 400px;
  width: 80%;
  height: 400px;
  border-radius: var(--border-radious-2);
  border: var(--blue-border);
  padding: 10px;
`;

const Comments = styled.div`
  width: 100%;
  min-height: 240px;
  height: 240px;
  background-color: var(--color-main);
  padding: 15px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 10px 10px 0 0;
`;

const TextArea = styled.textarea`
  font-size: var(--font-size-3);
  width: 100%;
  height: 90px;
  background-color: var(--color-white);
  padding: 15px;
  border-radius: 0 0 10px 10px;
`;

const CommentButton = styled(Button)`
  width: 100%;
  margin-top: 6px;
`;

const CommentContainer = styled.article`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  p {
    font-size: var(--font-size-3);
    color: var(--color-black);
  }
  h1 {
    font-size: var(--font-size-4);
    margin-bottom: 5px;
    color: var(--color-white);
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  article {
    background-color: var(--color-white);
    border-radius: var(--border-radious-1);
    padding: 10px;
  }
`;
