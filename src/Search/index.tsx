import React from 'react'
import "./styles.scss";
import BuscarSVG from "../assets/svg/buscar";

interface SearchProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ setSearchTerm }) => {

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
	return (
		<div className="group">
			<BuscarSVG className='icon' />
			<input placeholder="Search" type="search" className="input" onChange={handleSearch}
/>
		</div>
	);
}

export {Search}