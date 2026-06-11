import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🚀 Space Explorer</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/planets">Planets</NavLink>
        <NavLink to="/stars">Stars</NavLink>
        <NavLink to="/galaxies">Galaxies</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <NavLink to="/astronauts">Astronauts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;