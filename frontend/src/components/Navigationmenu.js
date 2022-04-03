import React from "react";
import { NavLink } from "react-router-dom";
const Navigationmenu = () => {
  return (
    <>
      <ul className="menuBar MenuBarHide">
        <li className="menuItem">
          <NavLink activeClassName="active" to="/" className="textMenu">
            Home
          </NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/bollywood" className="textMenu">
            Bollywood
          </NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/technology" className="textMenu">
            Technology
          </NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/hollywood" className="textMenu">
            Hollywood
          </NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/fitness" className="textMenu">
            Fitness
          </NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/food" className="textMenu">
            Food
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigationmenu;
