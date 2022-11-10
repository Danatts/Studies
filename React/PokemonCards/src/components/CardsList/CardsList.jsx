import PokemonCard from "../PokemonCard/PokemonCard"
import { Link } from "react-router-dom"
import { getPokemons } from '../../shared/data'
import './CardsList.styles.css'

function CardsList(){

  const pokemons = getPokemons()

  return(
    <div className="list">
      {
        pokemons.map((item, id) => {
          return(
            <Link to={`/${item.name}`} key={id}><PokemonCard pokemon={item} /></Link>
          )
        })
      }
    </div>
  )
}

export default CardsList
