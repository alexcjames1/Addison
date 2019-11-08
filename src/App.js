import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Landing, Driver } from './routes';



import './css/style.scss';
//import materialDesign from 'https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css';


function App() {
  return (
   <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/driver" component={Driver} />
    </Router>
  );
}

export default App;
