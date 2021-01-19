import React from "react";
import gsap from "gsap";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";
import AboutMe from "./components/aboutme/aboutme";
import Work from "./components/work/work";
import Intro from "./components/intro/intro";
import Header from "./components/header/header";

class App extends React.Component {
  state = {
    isLoaded: false,
  };

  componentDidMount() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const tl = gsap.timeline();

    tl.from(".loading-container h4", 1.5, {
      opacity: 0,
      y: 60,
      ease: "power4.out",
      delay: 0.6,
      skewY: 7,
    }).to(".loading-container h4", 1.3, {
      rotate: "-4deg",
      ease: "elastic",
      delay: 0.3,
    });

    tl.to(".introbox", 2, {
      delay: 0.3,
      height: 0,
      stagger: {
        amount: 0.7,
      },
    });

    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 6700);
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className="loading-container">
          <h4>Mattin Najafi, Front End Developer</h4>
          <Intro />
        </div>
      );
    } else {
      return (
        <Router>
          <div className="page-container">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/aboutme" component={AboutMe} />
              <Route exact path="/work" component={Work} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
