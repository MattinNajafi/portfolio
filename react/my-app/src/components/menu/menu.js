import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import "./menu.css";

class Menu extends React.Component {
  componentDidUpdate() {
    if (this.props.clicked === true) {
      console.log("true");
      document.querySelector(".entire-menu").style.display = "block";
    }
    if (this.props.clicked === false) {
      console.log("false");
      document.querySelector(".entire-menu").style.display = "none";
    }
  }
  render() {
    return (
      <div className="entire-menu">
        <div className="menu-background-color"> </div>
        <div className="menu-layer">
          <div className="interests-background"></div>
          <div className="menu-container">
            <div className="menu-wrapper">
              <div className="links">
                <nav>
                  <ul>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/aboutme">About me</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact me</Link>
                    </li>
                  </ul>
                </nav>
                <div className="info">
                  <h3>Mina mål</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt voluptates, nesciunt ratione deleniti non suscipit
                    aliquam esse expedita id eveniet sapiente cupiditate quos
                    eligendi deserunt consectetur? Est hic explicabo repellat?
                  </p>
                </div>
              </div>
              <div className="interest-bar">
                Interests:
                <span>Food</span>
                <span>Sports</span>
                <span>Travel</span>
                <span>Chess</span>
                <span>Music</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
