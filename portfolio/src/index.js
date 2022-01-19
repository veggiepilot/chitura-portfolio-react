import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  Navigation,
  Footer,
  About,
  Contact
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation/>
    <Footer />
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
