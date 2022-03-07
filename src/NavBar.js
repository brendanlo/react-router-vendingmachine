import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/cookie">
        cookie
      </NavLink>
      <NavLink exact to="/banana">
        banana
      </NavLink>
      <NavLink exact to="/chip">
        chip
      </NavLink>
    </nav>
  );
}

export default NavBar;