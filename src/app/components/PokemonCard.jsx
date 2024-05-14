import { Link } from "react-router-dom"
import { useCapital } from "../../hooks/useCapital"

export const PokemonCard = ({ pokemon }) => {

  return (
    <Link to={`/pokemon/${pokemon.id}`} className='card card-pokemon mb-5'>
      	<div className='card-img'>
			<img
				src={pokemon.sprites.other['official-artwork'].front_default}
				alt={`Pokemon ${pokemon.name}`}
			/>
		</div>
			
      	<div className='card-info'>
			<span className='pokemon-id'>N° {pokemon.id}</span>
			<h3>{useCapital(pokemon.name)}</h3>
				
			<div className='card-types'>
				{pokemon.types.map( (type) => (
					<span key={type.type.name} className={type.type.name}>
						{type.type.name}
					</span>
				))}
			</div>
		</div>
	</Link>

  )
}
