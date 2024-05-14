import { useContext, useEffect } from "react"
import { PokemonContext } from "../../context/PokemonContext"
import { useLocation, useNavigate } from "react-router-dom";
import { PokemonCard } from "../components/PokemonCard";
import { Loading } from "../components/Loading";
import { FloatBtn } from "../components/FloatBtn";


export const SearchPage = () => {

  const { allPokemons, loading } = useContext(PokemonContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  console.log(location)

  const filteredPokemons = allPokemons.filter( (pokemon ) => pokemon.name.includes(location.state.toLowerCase() ))

  useEffect(() => {
    if ( location.state == null ) {
      navigate('/')
    } 
  }, [])
  

  return (
    <>
      {
        loading ? 
          <Loading />
        :
        <div className="container mt-2">
          <p className="p-search ms-5">
            <span> { filteredPokemons?.length } </span> results:
          </p>
          <div className="card-list-pokemon">
            { filteredPokemons?.map( (pokemon) =>  (
              <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
            ))}
          </div>

          <FloatBtn />
        </div>
      }
    </>
  )
}
