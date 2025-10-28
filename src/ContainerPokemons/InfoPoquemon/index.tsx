import { useNavigate, useParams } from "react-router-dom";
import { useGetPokemonQuery } from "../../generated/graphql";
import "./styles.scss";
import { Loading } from "../../Loading";
import CardColor from "../CardColorType";
import { getEmojiByType } from "../../Enums/EmojisTypePokemnon";

function InfoPokemon(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const returnBlock = () => {
    navigate(-1);
  };

  const { data, loading, error } = useGetPokemonQuery({
    variables: { name: String(id).toLowerCase() },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data && data.pokemon) {
    const pokemon = data.pokemon;
    const imageUrl = (pokemon as any)?.sprites?.front_default;

    return (
      <div className="container-info_pokemon">
        <button className="button" onClick={returnBlock}>
          ⬅️ Back
        </button>

        <CardColor types={pokemon?.types} nameClass={"info-container"}>
          <img
            className="info-image"
            src={String(imageUrl)}
            alt={String(pokemon?.name)}
          />
          <div className="container-left_pokemon_info">
            <h1>{pokemon?.name}</h1>
            <h2># {String((pokemon as any)?.id).padStart(3, '0')}</h2>
            <h3>Height: {(pokemon as any)?.height}</h3>
            <h3>Weight: {(pokemon as any)?.weight}</h3>
            <h3>Abilities: {(pokemon as any)?.abilities?.map((ability: any) => ability?.ability?.name).join(', ')}</h3>
              <div>

              <h4>Types</h4>
              <div className="types-container">
                {(pokemon as any)?.types?.map((type: any, i: number) => (
                  <span key={i} className="type-item">
                    {getEmojiByType(type?.type?.name || '')} {type?.type?.name}
                  </span>
                ))}
              </div>
              </div>
             
          </div>
        </CardColor>
        
      </div>
    );
  } else {
    return <Loading />;
  }
}

export { InfoPokemon };
