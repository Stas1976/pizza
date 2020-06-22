import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ children, link, exact }) => {
  return (
    <li className="navbar__item">
      <NavLink to={link} exact={exact} activeClassName="navbar__item--active">
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
