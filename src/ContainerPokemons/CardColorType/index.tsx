import React from 'react'
import { getColorByType } from '../../Enums/PokemonType';
import { Pokemon } from '../../generated/graphql';

interface CardColor{
  children: any;
  types: Pokemon['types'];
  nameClass: string;
}
const CardColor: React.FC<CardColor> = ({children, types, nameClass}) =>{

  const getColorStyle = (): React.CSSProperties => {
    if (types?.length === 1) {
      const color = getColorByType(types[0]);
      return { backgroundColor: color };
    } else if (types?.length === 2) {
      const color1 = getColorByType(types[0]);
      const color2 = getColorByType(types[1]);
      return {
        background: `linear-gradient(to right, ${color1}, ${color2})`,
      };
    }

    // Si no hay tipos o hay más de 2 tipos, se utiliza un color predeterminado
    return { backgroundColor: '#fff' };
  };

  const colorStyle = getColorStyle();

  return (
    <div className={nameClass} style={colorStyle}>
      {children}
    </div>
  )
}

export default CardColor

