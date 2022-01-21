import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  Navigation,
  Footer,
  About,
  Contact,
  Project,
  Sidebar,
  Resume
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Sidebar />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
