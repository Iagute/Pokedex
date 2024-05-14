import { PokemonProvider } from "./context/PokemonProvider"
import { AppRouter } from "./routes/AppRouter"

export const PokeApp = () => {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
}
