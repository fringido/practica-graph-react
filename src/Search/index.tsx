import React from 'react'
import "./styles.scss";
import BuscarSVG from "../assets/svg/buscar";

function Search() {
	return (
		<div className="group">
			<BuscarSVG className='icon' />
			<input placeholder="Search" type="search" className="input" />
		</div>
	);
}

export {Search}