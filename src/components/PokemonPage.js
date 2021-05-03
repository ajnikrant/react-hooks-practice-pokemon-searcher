import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([])
  const [search, setSearch] = useState("")


  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then((res) => res.json())
    .then(setPokemonArray)
  }, [])

  const pokemonToDisplay = pokemonArray.filter(
    (onePokemon) => onePokemon.name.toLowerCase().includes(search.toLowerCase())
    );


    function onAddedPokemon(newPokemonObj){
      setPokemonArray([...pokemonArray, newPokemonObj])
    } 

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemonPls={onAddedPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={pokemonToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
