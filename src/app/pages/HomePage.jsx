import { PokemonContext } from "../../context/PokemonContext";
import { FloatBtn } from "../components/FloatBtn";
import { Loading } from "../components/Loading";
import { PokemonList } from "../components/PokemonList"
import { useContext } from 'react';

export const HomePage = () => {

  const { loading, onLoadMore } = useContext(PokemonContext)

  return (
    <>
      {
        loading ? 
          <Loading />
        :
        <div className="container mt-3">

          <PokemonList />

          <div className="container-btn-load-more container">
            <button className="btn-load-more" onClick={ onLoadMore } >
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            </button>
          </div>

          <FloatBtn />

        </div>
      }
      
    </>
  )
}
