// Trending.jsx
import "./Trending.css"
import { FaStar } from "react-icons/fa"

const games = [
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    title: "Hunter X Hunter",
    rate: "9.5",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    title: "Hunter X Hunter",
    rate: "9.5",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    title: "Hunter X Hunter",
    rate: "9.5",
  },
  {
    image: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    genre: "Action",
    title: "Hunter X Hunter",
    rate: "9.5",
  },
]

const Trending = () => {
  return (
    <section className="trending">

      {/* Header */}
      <div className="trending-header">
        <div>
          <p className="trending-tag">TRENDING</p>
          <h2 className="trending-title">Trending Animes</h2>
        </div>
        <button className="trending-view-all">VIEW ALL</button>
      </div>

      {/* Cards */}
      <div className="trending-grid">
        {games.map((game, index) => (
          <div className="trending-card" key={index}>

            {/* Image */}
            <div className="trending-card-image">
              <img src={game.image} alt={game.title} />

              {/* Rate badge */}
              <div className="trending-rate-badge">
                <span className="trending-rate">{game.rate}
                    <FaStar className="star-icon" />
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="trending-card-info">
              <div>
                <p className="trending-card-genre">{game.genre}</p>
                <h3 className="trending-card-title">{game.title}</h3>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Trending