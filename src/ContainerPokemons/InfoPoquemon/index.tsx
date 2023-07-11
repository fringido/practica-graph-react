import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPokemonQuery } from "../../generated/graphql";
import "./styles.scss";
import CardColor from "../CardColorType";
import { Loading } from "../../Loading";

function InfoPokemon():JSX.Element {
	const { id } = useParams();
	const navigate = useNavigate();
	const returnBlock = () => {
		navigate(-1);
	};
	const { data, loading, error } = useGetPokemonQuery({
		variables: { name: id },
	});

	{
		!!loading && <div>Loading ...</div>;
	}

	{
		error && <div>Error</div>;
	}

	if (data) {
		return (
			<div className="container-info_pokemon">
				<button className="button" onClick={returnBlock}>⬅️ Back</button>

				<CardColor types={data?.pokemon?.types} nameClass={"info-container"}>
					<img
						className="info-image"
						src={String(data?.pokemon?.image)}
						alt={String(data?.pokemon?.name)}
					/>
					<div className="container-left_pokemon_info">
						<h1>{data?.pokemon?.name}</h1>
						<h2># {data?.pokemon?.number}</h2>
						<h3>Clasificacion: {data?.pokemon?.classification}</h3>
						<h3>Max CP:{data.pokemon?.maxCP}</h3>
						<h3>Max HP:{data.pokemon?.maxHP}</h3>
					</div>
				</CardColor>
				<div className="container-right-info"></div>
			</div>
		);
	}
	
		return <Loading/>

}

export { InfoPokemon };
