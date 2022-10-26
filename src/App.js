/* import libraries */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

/* import my page web*/
import Home from "./pages/Home/Home";
import DocumentList from "./pages/DocumentList/DocumentList";
import DocumentDetail from "./pages/DocumentDetail/DocumentDetail";
import QandA from "./pages/QandA/QandA";
import Upload from "./pages/Upload/Upload";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={Home} />
        <Route exact path="/document" element={DocumentList} />
        <Route exact path="/document/:id" element={DocumentDetail} />
        <Route exact path="/qanda" element={QandA} />
        <Route exact path="/upload" element={Upload} />
        <Route exact path="/login" element={Login} />
        <Route exact path="/register" element={Register} />
        <Route path="/search" exact element={Search} />
      </Routes>
      <div className="App"></div>
    </Router>
  );
}

export default App;
