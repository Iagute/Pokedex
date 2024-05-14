import { useContext, useEffect, useState } from "react"
import { PokemonContext } from "../../context/PokemonContext"
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { useCapital } from "../../hooks/useCapital";

export const PokemonPage = () => {

  const { getPokemonById } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({})
  const navigate = useNavigate();

  const {id} = useParams();

  console.log( pokemon )

  const fetchPokemon = async(id) => {
    try {
      const data = await getPokemonById(id);

      setPokemon(data);
      setLoading(false);
    } catch (error) {
      if ( error ) {
        navigate('/');
      }
    }

  }

  useEffect(() => {
    fetchPokemon( id );
  }, [])

  useEffect(() => {
    const pokemonStats = pokemon?.stats;

    document.querySelectorAll('.stat-group').forEach((statGroup, index) => {
        const baseStat = pokemonStats[index]?.base_stat || 0; 
        const progressBar = statGroup.querySelector('.progress-bar');
        const maxWidth = 100; 

        const width = (baseStat / 255) * maxWidth; 

        progressBar.style.width = `${width}%`;
    });
  }, [pokemon])
  


  

  return (
    <main className="container main-pokemon">
      {
        loading ? 
          <Loading />
        : (
          <>
            <div className='header-main-pokemon'>
              <span className='number-pokemon'>#{pokemon?.id}</span>
              <div className='container-img-pokemon text-center'>
                <img
                  src={pokemon?.sprites.other['official-artwork'].front_default}
                  alt={`Pokemon ${pokemon?.name}`}
                />
              </div>

              <div className='container-info-pokemon'>
                <h1 className="mt-5">{useCapital(pokemon?.name)}</h1>
                
                <div className='card-types info-pokemon-type'>
                  {pokemon?.types.map(type => (
                    <span key={type.type.name} className={`${type.type.name}`}>
                      {type.type.name}
                    </span>
                  ))}
                </div>

                <div className='info-pokemon text-center'>
                  <div className='group-info'>
                    <p>Height</p>
                    <span>{pokemon?.height}CM</span>
                  </div>
                  <div className='group-info ms-2'>
                    <p>Weight</p>
                    <span>{pokemon?.weight}KG</span>
                  </div>
                </div>
              </div>
              
            </div>

            <div className='container-stats'>
              <h2 className="text-center mb-3">Stats</h2>

              <div className='stats'>
                <div className='stat-group'>
                  <span>Hp</span>
                  
                  <div className='progress-bar'></div>
                  <span className='counter-stat'>
                    {pokemon?.stats[0].base_stat}
                  </span>
                </div>
                <div className='stat-group'>
                  <span>Attack</span>
                  <div className='progress-bar'></div>
                  <span className='counter-stat'>
                    {pokemon?.stats[1].base_stat}
                  </span>
                </div>
                <div className='stat-group'>
                  <span>Defense</span>
                  <div className='progress-bar'></div>
                  <span className='counter-stat'>
                    {pokemon?.stats[2].base_stat}
                  </span>
                </div>
                <div className='stat-group'>
                  <span>Special Attack</span>
                  <div className='progress-bar'></div>
                  <span className='counter-stat'>
                    {pokemon?.stats[3].base_stat}
                  </span>
                </div>
                <div className='stat-group'>
                  <span>Special Defense</span>
                  <div className='progress-bar'></div>
                  <span className='counter-stat'>
                    {pokemon?.stats[4].base_stat}
                  </span>
                </div>
                <div className='stat-group'>
                  <span>Speed</span>
                  <div className='progress-bar'></div>
                  <span className='counter-stat'>
                    {pokemon?.stats[5].base_stat}
                  </span>
                </div>
              </div>

            </div>
          </>
        )
      }
    </main>
  )
}
