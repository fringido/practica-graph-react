import React from "react";
import { Pokemon } from "../../generated/graphql-request";
import { getColorByType } from "../../Enums/PokemonType";
import "./CardPokemon.scss";
import { getEmojiByType } from "../../Enums/EmojisTypePokemnon";

interface CardPokemonProps {
	pokemon: Pokemon;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
	const color =
		(pokemon && pokemon.types && getColorByType(pokemon?.types[0])) || "";

	return (
		<div className="card">
			<img
				className="img"
				src={String(pokemon.image)}
				alt={String(pokemon.name)}
			/>
			<div className="info">
				<span>{pokemon.name}</span>
				<div className="number">#{pokemon.number}</div>
			</div>
			<div className="container-tipo">
				Tipo:
				{pokemon?.types?.map((typo, i) => (
					<div key={i}> {getEmojiByType(typo)} </div>
				))}
			</div>
			<a href={`/#/pokemon/${pokemon.name}`} style={{ background: color }}>
				Info
			</a>
		</div>
	);
};

export { CardPokemon };
