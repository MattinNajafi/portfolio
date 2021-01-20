import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./menu.css";
import Food from "../../img/food.jpg";
import Sport from "../../img/sport.jpg";
import Chess from "../../img/chess.jpg";
import Music from "../../img/music.jpg";
import Travel from "../../img/travel.jpg";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.menu = React.createRef(null);
    this.revealMenu = React.createRef(null);
    this.revealBackground = React.createRef(null);
    this.interestBackground = React.createRef(null);
    this.l1 = React.createRef(null);
    this.l2 = React.createRef(null);
    this.l3 = React.createRef(null);
    this.l4 = React.createRef(null);
    this.info = React.createRef(null);
    this.cities = [
      { name: "Food", image: Food },
      { name: "Sports", image: Sport },
      { name: "Chess", image: Chess },
      { name: "Music", image: Music },
      { name: "Travel", image: Travel },
    ];
  }

  componentDidUpdate() {
    if (this.props.clicked === true) {
      //open
      gsap.to(".text-img-div", 0, {
        css: {
          zIndex: "-1",
        },
      });
      gsap.to(this.menu, {
        duration: 0,
        css: { display: "block" },
      });

      gsap.to([this.revealMenu, this.revealBackground], 0, {
        height: "100%",
        opacity: 1,
      });

      gsap.from([this.revealMenu, this.revealBackground], 1, {
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: "power3.inOut",
        stagger: {
          amount: 0.1,
        },
      });

      gsap.from(this.info, 1.5, {
        opacity: 0,
        y: 50,
        delay: 1,
        ease: "power3.out",
      });

      gsap.from([this.l1, this.l2, this.l3, this.l4], 1, {
        y: 100,
        delay: 0.2,
        ease: "power3.inOut",
        stagger: {
          amount: 0.3,
        },
      });
    } else if (this.props.clicked === false) {
      // close

      gsap.to([this.revealBackground, this.revealMenu], 1.3, {
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.1,
        },
      });

      gsap.to(this.menu, {
        duration: 1.3,
        css: { display: "none" },
      });

      gsap.to(".text-img-div", 0, {
        css: {
          zIndex: "inital",
        },
      });
    }
  }
  handleInterest = (e) => {
    gsap.to(this.interestBackground, {
      duration: 0,
      background: `url(${e}) center bottom`,
      opacity: 1,
      ease: "power3.inOut",
    });

    gsap.from(this.interestBackground, {
      duration: 0.4,
    });
  };

  interestExit = (e) => {
    gsap.to(this.interestBackground, 0, {
      background: "initial",
      opacity: 0,
    });
  };

  contactMe = () => {
    gsap.to(".copied", 0, {
      css: {
        display: "block",
      },
    });
    gsap.to(".copied", 2.5, {
      top: "70%",
      opacity: 0,
    });

    let myMail = "mattin-najafi@hotmail.com";
    let textare = document.createElement("textarea");
    document.body.appendChild(textare);
    textare.value = myMail;
    textare.select();
    document.execCommand("copy");
    document.body.removeChild(textare);

    setTimeout(() => {
      document.querySelector(".copied").style.top = "60%";
      document.querySelector(".copied").style.opacity = "1";
      document.querySelector(".copied").style.display = "none";
    }, 2700);
  };
  render() {
    return (
      <div ref={(element) => (this.menu = element)} className="entire-menu">
        <div className="copied">mail copied to clipboard</div>
        <div
          ref={(element) => (this.revealMenu = element)}
          className="menu-background-color"
        >
          {" "}
        </div>
        <div
          ref={(element) => (this.revealBackground = element)}
          className="menu-layer"
        >
          <div
            ref={(element) => (this.interestBackground = element)}
            className="interests-background"
          ></div>
          <div className="menu-container">
            <div className="menu-wrapper">
              <div className="links">
                <nav>
                  <ul>
                    <li>
                      <Link ref={(element) => (this.l1 = element)} to="/work">
                        Work
                      </Link>
                    </li>
                    <li>
                      <Link
                        ref={(element) => (this.l2 = element)}
                        to="/aboutme"
                      >
                        About&nbsp;me
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" ref={(element) => (this.l3 = element)}>
                        Shop
                      </Link>
                    </li>
                    <li>
                      <button
                        href=""
                        className="contact-me"
                        onClick={this.contactMe}
                        ref={(element) => (this.l4 = element)}
                      >
                        Contact&nbsp;me
                      </button>
                    </li>
                  </ul>
                </nav>
                <div ref={(element) => (this.info = element)} className="info">
                  <h3>Hey friend! </h3>
                  <p>
                    Our webshop is going to launch soon, thank you for your
                    patience.
                  </p>
                </div>
              </div>
              <div className="interest-bar">
                Interests:
                {this.cities.map((el) => {
                  return (
                    <span
                      key={el.name}
                      onMouseEnter={() => this.handleInterest(el.image)}
                      onMouseOut={() => this.interestExit(el.image)}
                    >
                      {el.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
