/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/common/Home/Home";
import Post from "./pages/common/Post/Post";
import Document from "./pages/common/Document/Document";
import QandA from "./pages/common/QandA/QandA";
import Upload from "./pages/common/Upload/Upload";
import Search from "./pages/common/Search/Search";
import Login from "./pages/common/Login/Login";
import Register from "./pages/common/Register/Register";

function App() {
  return (
    <div style={{ minWidth: "320px", width: "100%", background: "white" }}>
      <Router>
        <Header />
        <div id="header" style={{ height: "65px" }}>
          this is the header
        </div>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route exact path="/post" element={Post} />
          <Route exact path="/document" element={Document} />
          <Route exact path="/qanda" element={QandA} />
          <Route exact path="/upload" element={Upload} />
          <Route exact path="/login" element={Login} />
          <Route exact path="/register" element={Register} />
          <Route path="/search" exact element={Search} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
