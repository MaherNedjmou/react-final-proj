import "./CardTrending.css"
import { FaStar } from "react-icons/fa"

const CardTrending = ({index, image, genre, title, rate }) => {
  return (
  <div className="trending-card">

    {/* Image */}
    <div className="trending-card-image">
      <img src={image} alt={title} />
      {/* Rate badge */}
      <div className="trending-rate-badge">
        <span className="trending-rate">{rate}
            <FaStar className="star-icon" />
        </span>
      </div>
    </div>

    {/* Info */}
    <div className="trending-card-info">
      <div>
        <p className="trending-card-genre">{genre}</p>
        <h3 className="trending-card-title">{title}</h3>
      </div>
    </div>

  </div>
  )
}

export default CardTrending