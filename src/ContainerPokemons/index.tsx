import React from 'react'
import {  useGetPokemonsQuery } from '../gql/graphql';
import { Loading } from '../Loading';
import { CardPokemon } from './CardPokemon/CardPokemon';

function ContainerPokemons() {
   const { data, loading, error } = useGetPokemonsQuery({
     variables: {
        first: 10
     },
   });

  return(
    <section className="container-pokemon">
    {!!loading && <Loading />}
    {!!error && <div>{error.message}</div>}
    {!!data && data.pokemons?.map(pokemon => <CardPokemon key={pokemon?.id || ''} pokemon={pokemon } />)}
  </section>
  )
  
}

export {ContainerPokemons}