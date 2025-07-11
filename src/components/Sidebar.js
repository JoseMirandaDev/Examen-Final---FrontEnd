import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Principal
          </Link>
        </li>
        <li>
          <Link
            to="/matriculas"
            className={location.pathname === "/matriculas" ? "active" : ""}
          >
            Matrículas
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
