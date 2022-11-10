import './PokemonCard.styles.css'

function PokemonCard(props){

  const { name, weight, image, stats } = props.pokemon

  const statsList = stats.slice(1).map((elem, id) => {
    return (
      <div className="card__value" key={id}>
        <p><strong>{elem.name.toUpperCase()}</strong></p>
        <p>{elem.base_stat}</p>
      </div>
    )
  })

  return(
    <div className="card">
      <div className="card__content">
        <div className="card__header">
          <h2 className="card__title">{name.toUpperCase()}</h2>
          <p className="card__subtitle">Weight: {weight}</p>
        </div>
        <div className="card__figure">
          <img className="card__image" src={image} />
        </div>
        <div className="card__body">
          <div className="card__stats">
            { statsList } 
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard;
