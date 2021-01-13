import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";
import AboutMe from "./components/aboutme/aboutme";
import ContactMe from "./components/contactme/contact";

function App() {
  return (
    <Router>
      <div className="container">
        <Home />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/contact" component={ContactMe} />
      </Switch>
    </Router>
  );
}

export default App;
