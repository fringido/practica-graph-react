import React from 'react';
import { GetPokemonsLazyQueryHookResult, Pokemon } from '../../gql/graphql';



const CardPokemon: React.FC<GetPokemonsLazyQueryHookResult> = ({ pokemon }) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image || ''} alt={pokemon.name || ''} />
      <p>{pokemon.types}</p>
    </div>
  );
};

export  {CardPokemon};
