import React from "react";
import "./home.css";
import gsap from "gsap";

class Home extends React.Component {
  state = {};
  componentDidMount() {
    gsap.from(".mainpage-me", 1, {
      opacity: 0,
      y: 100,
      stagger: 0.3,
      ease: "power3.out",
    });

    gsap.from(".img-mainpage", 1, {
      delay: 1,
      x: 300,
      opacity: 0,
    });
  }
  handleContent(event) {
    let positionX = event.clientX / window.innerWidth - 0.55;
    let positionY = event.clientY / window.innerHeight - 0.55;
    const maintl = gsap.timeline();

    maintl.to(".text-img-div", 1, {
      rotationY: positionX * 100,
      rotationX: positionY * 100,
      ease: "none",
    });
  }

  reverseContent() {
    const maintl = gsap.timeline();
    maintl.to(".text-img-div", 1, {
      rotationY: 0,
      rotationX: 0,
      ease: "power1.out",
    });
  }

  render() {
    return (
      <div className="main">
        <div
          className="text-img-div"
          onMouseMove={this.handleContent}
          onMouseLeave={this.reverseContent}
        >
          <div className="text-content-mainpage">
            <p className="mainpage-me">
              Hey, I'm <span id="greenspan">Mattin Atai Najafi,</span> 25 years
              old.
            </p>
            <p className="mainpage-me">
              I'm a junior front end developer, with a
            </p>
            <p className="mainpage-me">focus on user experiences. </p>
          </div>
          <div className="img-mainpage"></div>
        </div>
        <p className="mainpage-me">mattin-najafi@hotmail.com</p>
      </div>
    );
  }
}

export default Home;
