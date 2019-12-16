import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [originalApiKey] = useState("https://rickandmortyapi.com/api/character/")
  const [apiKey, setApiKey] = useState(originalApiKey)
  const [characters, setCharacters] = useState([])
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get(apiKey)
      .then(response => {
       // console.log(response.data.results)
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("ERROR", error);
      });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [apiKey]);

  return (
    <section className="character-list">
      <SearchForm 
        anything = {query} 
        setAnything = {setQuery} 
        rodneyRace = "Rodney Race"
        apiKey = {originalApiKey} 
        setApiKey = {setApiKey}
      />
      <CharacterCard characterData = {characters} />
    </section>
  );
}
