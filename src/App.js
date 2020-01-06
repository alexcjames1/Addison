import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About, Projects, Products, Services, Home, Piping, Tubing, Aluminum, Structural, Fabrication, Stainless } from './routes';



import './css/style.scss';
//import materialDesign from 'https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css';


function App() {
  return (
   <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />

        <Route path="/piping" component={Piping} />
        <Route path="/tubing" component={Tubing} />
        <Route path="/structural" component={Structural} />
        <Route path="/aluminum" component={Aluminum} />
        <Route path="/fabrication" component={Fabrication} />
        <Route path="/stainless" component={Stainless} />
    </Router>
  );
}

export default App;
