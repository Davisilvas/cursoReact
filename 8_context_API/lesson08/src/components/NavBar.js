import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
    </nav>
  )
}

export default NavBar