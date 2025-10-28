import React from "react";
import { getColorByType } from "../../Enums/PokemonType";
import "./CardPokemon.scss";


interface CardPokemonProps {
  pokemon: any;
  className: string;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  const color =
    (pokemon &&
      pokemon.types &&
      pokemon.types.length > 0 &&
      getColorByType(`${pokemon?.types?.[0]?.type?.name || ''}`)) ||
    "";

  return (
    <div className="card">
      <img
        className="img"
        src={String(pokemon?.image)}
        alt={String(pokemon?.name)}
      />
      <div className="info">
        <span>{pokemon?.name}</span>
        <div className="number">#{pokemon?.id}</div>
      </div>
     
      <a
        style={{ color: color }}
        className="cta"
        href={`/#/pokemon/${pokemon?.name}`}
      >
        <span>Info</span>
        <svg
          style={{ color: color }}
          width="15px"
          height="10px"
          viewBox="0 0 13 10"
        >
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
    </div>
  );
};

export { CardPokemon };
