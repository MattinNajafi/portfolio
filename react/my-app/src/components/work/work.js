import React from "react";
import gsap from "gsap";
import "./work.css";
import workData from "./workdata";

class Work extends React.Component {
  state = {
    projects: workData,
  };

  componentDidMount() {
    document.querySelector(".work-wrapper").style.display = "none";
    document.querySelector(
      ".work-introabout1"
    ).style.right = `-${window.innerWidth}px`;

    document.querySelector(
      ".work-introabout2"
    ).style.right = `-${window.innerWidth}px`;
    gsap.to([".work-introabout1", ".work-introabout2"], 2, {
      delay: 0.5,
      right: `${window.innerWidth}px`,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });
    gsap.to([".work-introabout1", ".work-introabout2"], 0, {
      delay: 2.5,
      css: {
        display: "none",
      },
    });

    setTimeout(() => {
      document.querySelector(".work-wrapper").style.display = "flex";
    }, 2000);
  }

  mouseOverWork = (x) => {
    let button = document.createElement("button");
    button.innerText = "View Repo";
    button.className = "work-button";
    document.querySelector(`.project${x}`).appendChild(button);
    document.querySelector(`#project-header${x}`).style.display = "block";
    document.querySelector(`#project-description${x}`).style.display = "block";

    document
      .querySelector(`.work-button`)
      .addEventListener("click", function (e) {
        if (e.target.parentNode.className === "project1") {
          window.location.href =
            "https://github.com/Ellinor-Carlberg/jannes-tapeter";
        } else if (e.target.parentNode.className === "project2") {
          window.location.href = "https://github.com/elinalm/ColorSplat";
        } else if (e.target.parentNode.className === "project3") {
          window.location.href = "https://github.com/MattinNajafi/weather";
        } else if (e.target.parentNode.className === "project4") {
          window.location.href = "https://github.com/MattinNajafi/bowlNburrito";
        } else if (e.target.parentNode.className === "project5") {
          window.location.href = "https://github.com/MattinNajafi/sneakers";
        } else if (e.target.parentNode.className === "project6") {
          window.location.href = "https://github.com/MattinNajafi/CV";
        }
      });
  };

  mouseLeaveWork = (x) => {
    document.querySelector(`#project-header${x}`).style.display = "none";
    document.querySelector(`#project-description${x}`).style.display = "none";
    let _button = document.querySelector(".work-button");
    _button.parentNode.removeChild(_button);
  };

  setBackground = (background, id) => {
    let imgBox = document.querySelector(`.project${id}`);
    imgBox.style.backgroundImage = background;
  };
  render() {
    return (
      <div className="work-container">
        <div className="work-introabout1"></div>
        <div className="work-introabout2"></div>
        <div className="work-wrapper">
          <div className="work-div-for-fixed">
            <div className="work-header">
              <h3>
                <span id="greenspan">Projects</span> I have been involved in
              </h3>
            </div>
          </div>
          <div className="projects-div">
            <p className="scroll">SCROLL HERE</p>
            <div>
              {this.state.projects.map((el) => {
                return (
                  <div
                    onMouseLeave={() => this.mouseLeaveWork(el.id)}
                    onMouseEnter={() => this.mouseOverWork(el.id)}
                    key={el.id}
                    className={`project${el.id}`}
                  >
                    <h3 id={`project-header${el.id}`}>{el.header}</h3>
                    <p id={`project-description${el.id}`}>{el.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
