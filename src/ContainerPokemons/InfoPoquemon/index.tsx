import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPokemonQuery } from "../../generated/graphql";
import './styles.scss'
import CardColor from "../CardColorType";

function InfoPokemon() {
	const { id } = useParams();

	const { data, loading, error } = useGetPokemonQuery({
		variables: { name: id },
	});

	{
		!!loading && <div>Loading ...</div>;
	}

  {
    error && <div>Error</div>
  }

	if (data) {
		return (
			<div className="container-info_pokemon">
				<CardColor types={data?.pokemon?.types}
        nameClass={'info-container'}>
					<img
          className="info-image"
						src={String(data?.pokemon?.image)}
						alt={String(data?.pokemon?.name)}
					/>
				</CardColor>
				<div className="container-right-info"></div>
			</div>
		);
	}
}

export { InfoPokemon };
