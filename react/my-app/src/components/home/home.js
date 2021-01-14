import React from "react";
import "./home.css";
import gsap from "gsap";

class Home extends React.Component {
  state = {};

  handleContent(event) {
    if (event.target.className === "img-mainpage") {
      let positionX = event.clientX / window.innerWidth - 0.55;
      let positionY = event.clientY / window.innerHeight - 0.55;
      const maintl = gsap.timeline();

      maintl.to(".img-mainpage", 1, {
        rotationY: positionX * 100,
        rotationX: positionY * 100,
        ease: "none",
      });
    }
    if (event.target.className === "mainpage-me") {
      const maintl = gsap.timeline();

      maintl.to(".text-content-mainpage", 1, {
        x: (Math.random() - 0.5) * 45,
        y: (Math.random() - 0.5) * 45,
        ease: "none",
      });
    }
  }

  reverseContent() {
    const maintl = gsap.timeline();
    maintl.to(".img-mainpage", 1, {
      rotationY: 0,
      rotationX: 0,
      ease: "power1.out",
    });
  }

  reverseTextContent() {
    const maintl = gsap.timeline();
    maintl.to(".text-content-mainpage", 1, {
      rotationY: 0,
      rotationX: 0,
      ease: "power1.out",
    });
  }

  render() {
    return (
      <div className="main">
        <div>
          <div
            onMouseMove={this.handleContent}
            onMouseLeave={this.reverseTextContent}
            className="text-content-mainpage"
          >
            <p className="mainpage-me">
              Hey, I'm <span>Mattin Atai Najafi,</span> 25 years old.
            </p>
            <p className="mainpage-me">
              I'm a junior front end developer, with a
            </p>
            <p className="mainpage-me">focus on user experiences. </p>
          </div>
          <div
            onMouseMove={this.handleContent}
            onMouseLeave={this.reverseContent}
            className="img-mainpage"
          ></div>
        </div>
        <p className="mainpage-me">mattin-najafi@hotmail.com</p>
      </div>
    );
  }
}

export default Home;
