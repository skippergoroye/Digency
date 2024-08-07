import React from "react";
import "./header.css";
import { nav_links } from "../../constants";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Digency</h2>
          </div>

          {/* ======== Navigation ========= */}
          <nav className="navigation">
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a href={item.path} className="menu__link">{item.display}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ========= Light Mode ========= */}
          <div className="light__mode">
            <span><i class="bx bx-sun"></i> Light Mode</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

