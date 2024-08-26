import React from "react";
import Navbar from "./component/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./component/Home"; 
import About from "./component/About"; 
import Skills from "./component/Skills"; 
import Services from "./component/Services"; 
import Contact from "./component/Contact"; 
import Footer from "./component/Footer"; 

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* Rota para o componente Home */}
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/skills' exact component={Skills} />
          <Route path='/services' exact component={Services} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/footer' exact component={Footer} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
