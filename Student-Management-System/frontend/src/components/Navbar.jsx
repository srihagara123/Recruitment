import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🎓 Student Management System
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/">
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/students">
            Students
          </NavLink>
        </li>

        <li>
          <NavLink to="/add-student">
            Add Student
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;