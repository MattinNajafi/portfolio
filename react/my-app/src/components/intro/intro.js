import React from "react";
import "./intro.scss";

class Intro extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="introbars">
          <div className="introbox"></div>
          <div className="introbox"></div>
          <div className="introbox"></div>
        </div>
      </>
    );
  }
}

export default Intro;
