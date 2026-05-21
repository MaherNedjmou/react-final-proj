import { useState, useEffect } from "react"
import "./Navbar.css"
import logo from "../../assets/soanime_logo.png"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={scrolled ? "scrolled" : ""}>
        <img className="navbar-logo" src={logo} alt="Logo" />
        <ul className="navbar-links">
            <li>Home</li>
            <li>Anime List</li>
            <li className="navbar-signin">SIGN IN</li>
        </ul>
    </nav>
  )
}

export default Navbar