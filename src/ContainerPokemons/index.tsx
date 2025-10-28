import { useState } from "react";
import { Loading } from "../Loading";
import { CardPokemon } from "./CardPokemon/CardPokemon";
import { useGetPokemonsQuery } from "../generated/graphql";
import "./styles.scss";
import { Search } from "../Search";
import Pagination from "./Pagination";
import GenerationFilter from "../GenerationFilter";
import { generationRanges } from "../Enums/PokemonGeneration";

const ContainerPokemons = () : JSX.Element => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [generation, setGeneration] = useState(1);
  const pageSize = 12;

  const handleGenerationChange = (gen: number) => {
    setGeneration(gen);
    setCurrentPage(1);
  };

  const { data, loading, error } = useGetPokemonsQuery({
    variables: { 
      limit: generationRanges[generation].first,
      offset: generationRanges[generation].skip,
    },
  });

  if (loading) {
    return <Loading />;
  }

  

  if (data) {
    const filteredPokemon =
      data.pokemons?.results?.filter((pokemon) =>
        pokemon?.name?.toLowerCase().includes(searchTerm.toLowerCase())
      ) || null;

    const totalPages = filteredPokemon ? Math.ceil(filteredPokemon.length / pageSize) : 0;

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

    const paginatedPokemon = filteredPokemon?.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
console.log("data", data);
    return (
      <section className="pokemon-container-lista">
        <Search setSearchTerm={setSearchTerm} />
        <GenerationFilter onGenerationChange={handleGenerationChange} />
        <div className="pokemon-list">
          {!!paginatedPokemon &&
            paginatedPokemon?.map((pokemon, i) => (
              <CardPokemon
                className="card-pokemon"
                pokemon={pokemon}
                key={`key-${i}`}
              />
            ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    );
  } else {
    return <div>Error: {error?.message  }</div>;
  }
};

export { ContainerPokemons };

