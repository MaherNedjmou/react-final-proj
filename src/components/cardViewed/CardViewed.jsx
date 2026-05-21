import "./CardViewed.css"

const CardViewed = ({ image, genre, name }) => {
  return (
    <div className="card-most-played">
      <div className="card-most-played-cover-wrap">
        <img
          className="card-most-played-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="card-most-played-info">
        <p className="card-most-played-genre">{genre}</p>
        <p className="card-most-played-name">{name}</p>
        <button className="card-most-played-explore">Explore</button>
      </div>
    </div>
  )
}

export default CardViewed