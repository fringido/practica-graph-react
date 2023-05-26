import React from 'react'
import {  Pokemon } from '../../gql/graphql'

const CardPokemon = (props: {
  pokemon: Pokemon
}) => {
  const {pokemon} = props
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={String(pokemon.image)} alt={String(pokemon.name)} />
      <p>{pokemon.maxCP}</p>
    </div>
  )
}

export  {CardPokemon}
