import React from "react";
import styled from "styled-components";

//style
const WrapperDiv = styled.div`
width:400px;
margin-bottom: 50px;
border: 1px solid black;
border-radius: 10px;
background-color: gray;
text-align: center;
`;

export default function CharacterCard(props) {
  const characterData = props.characterData;
  return (
    <>
      {characterData.map((character, i) => {
        return (
          <WrapperDiv className="characterWrapper"
            key = {i}
          >
            <img alt = {character.name} src={character.image} />
            <h1>{character.name}</h1>
            <h2>{character.status}</h2>
            <h3>{character.species}</h3>
          </WrapperDiv>
        );
      })}
    </>
  ); 
}
