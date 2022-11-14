/* import libraries */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

/* import the components */
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";

/* import my page web*/
import Home from "./pages/Home/Home";
import Document from "./pages/Document/Document";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import QandA from "./pages/QandA/QandA";
import Service from "./pages/myServices/service";

/*import css*/
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/document" element={<Document />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/qanda" element={<QandA />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
