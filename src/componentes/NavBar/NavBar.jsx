import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <link to="/">
            <h1>GameSTORagE</h1>
        </link>    
        

        <nav>
            <ul>
                <li>
                    <NavLink to="/categoria/1">Deportes</NavLink> 
                    </li>
                <li>
                    <NavLink to="/categoria/2">Carreras</NavLink>
                    </li>
                <li>
                    <NavLink to="/categoria/3">Accion</NavLink>
                    </li>
                <li>
                    <NavLink to="/categoria/4">Terror</NavLink>
                    </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar