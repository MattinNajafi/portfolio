import React from "react";
import "./aboutme.css";
import gsap from "gsap";

class AboutMe extends React.Component {
  state = {};

  componentDidMount() {
    document.querySelector(
      ".aboutme-introabout1"
    ).style.left = `-${window.innerWidth}px`;
    document.querySelector(
      ".aboutme-introabout2"
    ).style.left = `-${window.innerWidth}px`;
    gsap.to([".aboutme-introabout1", ".aboutme-introabout2"], 2, {
      delay: 0.5,
      left: `${window.innerWidth}px`,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });
    gsap.to([".aboutme-introabout1", ".aboutme-introabout2"], 2, {
      delay: 3,
      css: {
        display: "none",
      },
    });

    gsap.from([".wrapper-aboutme", ".icon-div"], 2, {
      delay: 0.75,
      x: "-2000px",
      ease: "power3.inOut",
    });
    gsap.to(".wrapper-aboutme", 0, {
      zIndex: -1,
    });

    gsap.from(
      [
        ".html",
        ".css",
        ".javascript",
        ".react",
        ".bootstrap",
        ".angular",
        ".typescript",
      ],
      1,
      {
        delay: 2.5,
        css: {
          width: "0%",
        },
        ease: "power3.inOut",
        stagger: {
          amount: 0.6,
        },
      }
    );
  }

  render() {
    return (
      <>
        <div className="about-me-container">
          <div className="aboutme-introabout1"></div>
          <div className="aboutme-introabout2"></div>
          <div className="wrapper-aboutme">
            <div className="textbox">
              <h4>Mattin Atai Najafi</h4>
              <p>
                I'm a web-developer. I specialize in{" "}
                <span id="greenspan">front-end development</span>
                which is building out the visual components of a website. I
                build interactive, responsive and beautiful websites through
                carefully crafted code and user-centric design. I work with
                technologies like HTML5, CSS3 and Javascript. I'm currently a
                freelancer and available to work.
              </p>
            </div>
            <div className="skills">
              <li>
                <h3>HTML</h3>
                <span className="bar">
                  <span className="html"></span>
                </span>
              </li>

              <li>
                <h3>CSS</h3>
                <span className="bar">
                  <span className="css"></span>
                </span>
              </li>

              <li>
                <h3>JAVASCRIPT</h3>
                <span className="bar">
                  <span className="javascript"></span>
                </span>
              </li>

              <li>
                <h3>REACT</h3>
                <span className="bar">
                  <span className="react"></span>
                </span>
              </li>
              <li>
                <h3>BOOTSTRAP</h3>
                <span className="bar">
                  <span className="bootstrap"></span>
                </span>
              </li>

              <li>
                <h3>ANGULAR</h3>
                <span className="bar">
                  <span className="angular"></span>
                </span>
              </li>
              <li>
                <h3>TYPESCRIPT</h3>
                <span className="bar">
                  <span className="typescript"></span>
                </span>
              </li>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutMe;
