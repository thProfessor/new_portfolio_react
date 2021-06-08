import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/HomePage/Home";
import About from "./Components/AboutPage/About";
import Projects from "./Components/ProjectsPage/Projects";
import Contact from "./Components/ContactPage/Contact";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
