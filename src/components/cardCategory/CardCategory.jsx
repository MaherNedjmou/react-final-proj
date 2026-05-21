import "./CardCategory.css"

const CardCategory = ({ image, genre, name }) => {
  return (
    <div className="card-category">
      <div className="card-category-genre-badge">{genre}</div>
      <img
        className="card-category-cover"
        src={image}
        alt={`${name} cover`}
      />
    </div>
  )
}

export default CardCategory