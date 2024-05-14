import { useContext } from "react"
import { PokemonContext } from "../../context/PokemonContext"
import { PokemonCard } from "./PokemonCard"

export const PokemonList = () => {

  const { pokemons } = useContext( PokemonContext )  
  
  return (
    <>
      <div className="card-list-pokemon container">
        { pokemons.map( (pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
