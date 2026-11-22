import { NavLink } from "react-router";

function Header() {
  return (
    <header>
      <h2>JobHub</h2>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
