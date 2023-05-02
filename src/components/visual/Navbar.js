import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  function navLinkStyles({ isActive }) {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textdecoration: isActive ? "none" : "underline",
      color: isActive ? "blue" : "black",
    };
  }
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/view-users">
        View Users
      </NavLink>
      <NavLink style={navLinkStyles} to="/add-user">
        Add Users
      </NavLink>
    </nav>
  );
};
export default Navbar;
