import React from "react";
import Burger from "../../../assets/img/menu.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <nav className="nav">
      <div className="nav__menu">
        <div className="nav__menu__logo">
          <a href="/">
            <img src={Burger} alt="logo" />
          </a>
        </div>
        <label htmlFor="menu" className="nav__menu__label">
          <img src={Burger} alt="menu" />
        </label>
        <input type="checkbox" id="menu" className="nav__menu__input" />
        <div className="nav__menu__links">
          <ul className="nav__menu__links__items">
            <li className="nav__menu__links__items__item">
              <a href="/">Home</a>
            </li>
            <li
              className={`nav__menu__links__items__item ${
                tasks.length > 0 && "beat"
              }`}
            >
              <a href="/todo">Todo</a>
            </li>
            <li className="nav__menu__links__items__item">
              <a href="/poke">Poke</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
