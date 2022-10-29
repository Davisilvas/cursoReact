import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
        <Link to= '/' >Home</Link>
        <Link to= '/about' >About</Link>
        <Link to= '/products/:id' >Produto</Link>
    </nav>
  )
}

export default NavBar