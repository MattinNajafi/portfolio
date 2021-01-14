import React from "react";
import gsap from "gsap";
import "./header.css";
import { withRouter, BrowserRouter } from "react-router-dom";
import Menu from "../menu/menu";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    menuName: "Menu",
    isMenuClicked: false,
    disable: false,
  };

  componentDidMount() {
    const maintl = gsap.timeline();

    maintl.from("header", 1.5, {
      y: -50,
      opacity: 0,
      ease: "power3.out",
    });

    maintl.from(".mainpage-me", 1.4, {
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

  handleMenu = (event) => {
    this.disabled();
    if (this.state.menuName === "Menu") {
      this.setState({ menuName: "Close", isMenuClicked: true });
    }
    if (this.state.menuName === "Close") {
      this.setState({ menuName: "Menu", isMenuClicked: false });
    }
  };

  disabled = () => {
    this.setState({ disable: true });
    setTimeout(() => {
      this.setState({ disable: false });
    }, 2000);
  };

  render() {
    return (
      <header className="header">
        <div className="inner-header">
          <h3 id="textlogo">
            <Link to="/">man.</Link>
          </h3>
          <nav className="menu">
            <button
              disabled={this.state.disable}
              className="menu"
              onClick={this.handleMenu}
            >
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
