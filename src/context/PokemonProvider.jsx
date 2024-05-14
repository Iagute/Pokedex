import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext"
import { useForm } from "../hooks/useForm";


export const PokemonProvider = ({ children }) => {
  const baseUrl = 'https://pokeapi.co/api/v2/';

  // Variables de pokemones 
  const [pokemons, setPokemons] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [offset, setOffset] = useState(0);


  // Custom Hooks
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: ''
  }); 

  // Variables globales
  const [loading, setLoading] = useState(true);



  const getPokemons = async(limit = 50) => {
    const res = await fetch(`${baseUrl}pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();

    const pokemon = data.results.map( async(pokemon) => {
     const res = await fetch(pokemon.url) 
     const data = await res.json();
     return data
    })  
    const results = await Promise.all( pokemon )

    setPokemons([ ...pokemons, ...results ])
    setLoading( false );
  }

  const getAllPokemons = async () => {
    const res = await fetch(`${baseUrl}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const pokemon = data.results.map( async(pokemon) => {
     const res = await fetch(pokemon.url) 
     const data = await res.json();
     return data
    })
    const results = await Promise.all( pokemon );
    
    setAllPokemons(results);
    setLoading( false );
  }

  const getPokemonById = async ( id = 1 ) => {
    const res = await fetch(`${baseUrl}pokemon/${id}`);
    const data = res.json();

    return data;
  }

  const onLoadMore = () => {
    setOffset(offset + 50)
  }

  useEffect(() => {
    getPokemons()

  }, [offset])

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <PokemonContext.Provider value={{   
      // Estados
      pokemons,
      loading,
      allPokemons,
      valueSearch,
      
      // Funciones
      getPokemons,
      getAllPokemons,
      getPokemonById,
      onLoadMore,
      onInputChange,
      onResetForm,
    }}>
      {children}
    </PokemonContext.Provider>
  )
}
