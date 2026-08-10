import { Link } from "react-router";

function Nav() {
    return (
        <nav className="navBar">
            <Link to={'/servicios'} className="navLink">Servicios</Link>
            <Link to={'/ubicacion'} className="navLink">Ubicación</Link>
        </nav>
    )
}

export default Nav;