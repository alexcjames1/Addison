import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About, Pipe, Products, Tubing, Home } from './routes';



import './css/style.scss';
//import materialDesign from 'https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css';


function App() {
  return (
   <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/piping" component={Pipe} />
        <Route path="/products" component={Products} />
        <Route path="/tubing" component={Tubing} />
    </Router>
  );
}

export default App;
