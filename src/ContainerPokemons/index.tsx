import React, { useState } from "react";
import { Loading } from "../Loading";
import { CardPokemon } from "./CardPokemon/CardPokemon";
import { useGetPokemonsQuery } from "../generated/graphql";
import "./styles.scss";
import { Search } from "../Search";

const ContainerPokemons: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const { data, loading, error } = useGetPokemonsQuery({
		variables: { first: 100 },
	});
	
	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}
	if(data){
		const filteredPokemon = data?.pokemons?.filter((pokemon) => pokemon?.name?.toLowerCase().includes(searchTerm.toLowerCase())) || null
		return (
	

		<section className="pokemon-container-lista">
			<Search setSearchTerm={setSearchTerm} />
			<div className="pokemon-list">
				{!!filteredPokemon &&
					filteredPokemon?.map((pokemon, i) => (
						<CardPokemon
							className="card-pokemon"
							pokemon={pokemon}
							key={`key-${i}`}
						/>
					))}
			</div>
		</section>
	);
}
}

export { ContainerPokemons };
