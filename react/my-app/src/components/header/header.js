import React, { useRef } from "react";
import gsap from "gsap";
import "./header.css";
import { withRouter, Link } from "react-router-dom";
import Menu from "../menu/menu";

class Header extends React.Component {
  state = {
    menuName: "Menu",
    isMenuClicked: false,
    disable: false,
  };

  componentDidMount() {
    const maintl = gsap.timeline();

    maintl.from("header", 1, {
      y: -50,
      opacity: 0,
      ease: "power3.out",
    });

    maintl.from(".mainpage-me", 1, {
      opacity: 0,
      y: 100,
      stagger: 0.3,
      ease: "power3.out",
    });

    maintl.from(".img-mainpage", 1, {
      x: 300,
      opacity: 0,
    });
  }

  componentDidUpdate() {
    this.props.history.listen((e) => {
      this.setState({ isMenuClicked: false, menuName: "Menu" });
    });
    if (this.state.isMenuClicked) {
      document.querySelector("#textlogo a").style.color = "white";
      document.querySelector(".menu-button").style.color = "white";
    } else {
      document.querySelector("#textlogo a").style.color = "black";
      document.querySelector(".menu-button").style.color = "black";
    }
  }

  handleMenu = (event) => {
    if (this.state.menuName === "Menu") {
      this.setState({ menuName: "Close", isMenuClicked: true });
    }
    if (this.state.menuName === "Close") {
      this.setState({ menuName: "Menu", isMenuClicked: false });
    }
  };

  setColor = () => {
    document.querySelector("#textlogo a").style.color = "black";
    document.querySelector(".menu-button").style.color = "black";
  };

  render() {
    return (
      <header className="header">
        <div className="inner-header">
          <h3 id="textlogo">
            <Link onClick={this.setColor} to="/">
              man.
            </Link>
          </h3>
          <nav className="menu">
            <button className="menu-button" onClick={this.handleMenu}>
              {this.state.menuName}
            </button>
          </nav>
        </div>
        <Menu clicked={this.state.isMenuClicked} />
      </header>
    );
  }
}

export default withRouter(Header);
