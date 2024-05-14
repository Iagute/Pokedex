import { useContext } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { PokemonContext } from "../../context/PokemonContext"


export const Navbar = () => {

  const {valueSearch, onInputChange, onResetForm} = useContext(PokemonContext)

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if ( valueSearch <= 0 ) return; 

    navigate('/search', {
      state: valueSearch
    })

    onResetForm();
  }

  return (
    <>
      <header>
        <Link className="link logo" to={'/'}>
          <img 
            src="./src/Assets/Pokedex.png"
            alt="Pokedex.logo" 
          />
        </Link>
        
        <form onSubmit={ onSearchSubmit }>
					<div className='form-group'>
						<input
							type='search'
							name='valueSearch'
							id=''
							placeholder='Search a Pokemon'
              autoComplete="null"
              value={ valueSearch }
              onChange={ onInputChange }
						/>
            
            <button type='submit' className='icon-button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='icon-search'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </button>
					</div>
				</form>
      </header>

      <Outlet />
    </>
  )
}
