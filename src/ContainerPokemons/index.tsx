import React from "react";
import { Loading } from "../Loading";
import { CardPokemon } from "./CardPokemon/CardPokemon";
import { useGetPokemonsQuery } from "../generated/graphql";
import "./styles.scss";
import { Search } from "../Search";

const ContainerPokemons: React.FC = () => {
	const { data, loading, error } = useGetPokemonsQuery({
		variables: { first: 25 },
	});

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<section className="pokemon-container-lista">
<Search/>
			<div className="pokemon-list">
				{!!data &&
					data?.pokemons?.map((pokemon, i) => (
						<CardPokemon className='card-pokemon' pokemon={pokemon} key={`key-${i}`} />
					))}
			</div>
		</section>
	);
};

export { ContainerPokemons };
