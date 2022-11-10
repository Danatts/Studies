import { getPokemon } from '../../shared/data'
import { useParams } from 'react-router-dom'

function CardInfo(){

  const { name } = useParams()
  const pokemon = getPokemon(name)

  return(
    <pre>
      {JSON.stringify(pokemon, null, 2) }  
    </pre>
  )
}

export default CardInfo
