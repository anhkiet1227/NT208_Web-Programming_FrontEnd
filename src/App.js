/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
import Home from "./pages/common/Home/Home";


function App() {
  return (
    <div style={{ minWidth: "320px", width: "100%", background: "white" }}>
      <Router>
        <Header />
          <div id="header" style={{ height: "65px" }}>this is the header</div>
        <Routes>
          <Route path="/" element={Home} />          
        </Routes>
      </Router>
    </div>
  );

}

export default App;
