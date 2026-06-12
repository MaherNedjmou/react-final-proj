import { useState, useEffect } from "react"
import "./Navbar.css"
import logo from "../../assets/soanime_logo.png"
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
        <IoMenu onClick={() => setMenuOpen(!menuOpen)} className="navbar-menu" />

        {menuOpen && 
          <ul className="navbar-links-mobile">
            <li>Home</li>
            <li>Anime List</li>
            <li>SIGN IN</li>
          </ul>
        }
        
        <ul className="navbar-links">
            <li>Home</li>
            <li>Anime List</li>
            <li className="navbar-signin">SIGN IN</li>
        </ul>
    </nav>
  )
}

export default Navbar