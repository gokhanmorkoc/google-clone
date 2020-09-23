import React, { useState } from "react";
import Compose from "./Compose";
import "../components/Nav.css";
import { useStateValue } from "../DataContext/DataContext";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const [{ nav }, dispatch] = useStateValue();
  const [active, setActive] = useState("/");

  const history = useHistory(null);

  const NavItems = () => {
    return (
      <div className="nav__items">
        {nav.map((item) => (
          <div
            id={item.url}
            className={`nav__item ${active === item.url ? "active" : ""}`}
            onClick={(e) => {
              setActive(e.target.id);
              history.push(`${item.url}`);
            }}
          >
            <img src={item.icon} />
            {item.title}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="side__nav">
      <Compose />
      <NavItems />
    </div>
  );
};

export default Nav;
