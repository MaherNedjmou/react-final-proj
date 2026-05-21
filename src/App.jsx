import './App.css'
import Hero from './sections/hero/Hero'
import Trending from './sections/trending/Trending'
import Viewed from './sections/viewed/Viewed'
import Categories from './sections/categories/Categories'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Hero />
      <Trending />
      <Viewed />
      <Categories />
      <Footer />
    </>
  )
}

export default App
