import React, { Component } from "react";
import { GrSearch } from "react-icons/gr";
import { RiSettings3Fill } from "react-icons/ri";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav className="nav-wrapper">
          <ul className="nav-list nav-list-left">
            <div className="menu">
              <li className="nav-list-item">Coins</li>
              <li className="nav-list-item">Exchanges</li>
              <li className="nav-list-item">Charts</li>
              <li className="nav-list-item">Swap</li>
            </div>
          </ul>

          <div className="nav-logo">
            <img
              src="https://coincap.io/static/logos/black.svg"
              alt="coincap-logo"
            />
          </div>

          <input type="checkbox" id="checkbox-toggle" />
          <label htmlFor="checkbox-toggle" className="hamburger">
            &#9776;
          </label>

          <ul className="nav-list nav-list-right">
            <div className="menu">
              <li className="nav-list-item">
                <GrSearch />
              </li>
              <li className="nav-list-item">
                <RiSettings3Fill />
              </li>
              <li className="nav-list-item">
                <button className="connect-wallet-btn">Connect Wallet</button>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}
