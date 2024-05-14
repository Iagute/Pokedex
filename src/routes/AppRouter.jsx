import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../app/components/Navbar"
import { PokemonPage } from "../app/pages/PokemonPage"
import { HomePage } from "../app/pages/HomePage"
import { SearchPage } from "../app/pages/SearchPage"

export const AppRouter = () => {
  return (
    <Routes>
      
      <Route path="/" element={ <Navbar /> }>
        <Route index element={ <HomePage /> } />
        <Route path="pokemon/:id" element={ <PokemonPage /> } />
        <Route path="search" element={ <SearchPage /> } />
      </Route>

      <Route path="*" element={ <Navigate to={"/"} />} />
    </Routes>
  )
}
