import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const renderPokemon = pokemon.map((onePokemon) => <PokemonCard key={onePokemon.id} pokemon={onePokemon} />)

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {renderPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
